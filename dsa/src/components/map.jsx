import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './map.css';
import './home_button.css';
export default function App() {
    return <MapVisualizer />;
}

const MapVisualizer = () => {
    const navigate = useNavigate();
    // State for input fields
    const [keyInput, setKeyInput] = useState("");
    const [valueInput, setValueInput] = useState("");

    const [mapData, setMapData] = useState(new Map());

    const [searchKey, setSearchKey] = useState("");
    const [removeKey, setRemoveKey] = useState("");

    const [result, setResult] = useState("Add items to the map to get started.");

    const [foundKey, setFoundKey] = useState(null);


    const resetHighlight = () => {
        setTimeout(() => setFoundKey(null), 2000);
    };

    const handleInsert = () => {
        if (keyInput.trim() === "" || valueInput.trim() === "") {
            setResult("Key and Value cannot be empty.");
            return;
        }
        const newMap = new Map(mapData);
        newMap.set(keyInput.trim(), valueInput.trim());
        setMapData(newMap);
        setResult(`Inserted: ["${keyInput.trim()}", "${valueInput.trim()}"]`);
        setKeyInput("");
        setValueInput("");
        setFoundKey(null);
    };


    const handleSearch = () => {
        if (searchKey.trim() === "") return;
        if (mapData.has(searchKey.trim())) {
            setResult(`Found key "${searchKey.trim()}" with value "${mapData.get(searchKey.trim())}"`);
            setFoundKey(searchKey.trim());
            resetHighlight();
        } else {
            setResult(`Key "${searchKey.trim()}" not found.`);
            setFoundKey(null);
        }
        setSearchKey("");
    };


    const handleRemove = () => {
        if (removeKey.trim() === "") return;
        const newMap = new Map(mapData);
        if (newMap.has(removeKey.trim())) {
            newMap.delete(removeKey.trim());
            setMapData(newMap);
            setResult(`Removed key "${removeKey.trim()}"`);
        } else {
            setResult(`Key "${removeKey.trim()}" not found.`);
        }
        setRemoveKey("");
        setFoundKey(null);
    };

    /**
     * Clears all entries from the map.
     */
    const handleClear = () => {
        setMapData(new Map());
        setResult("Map cleared.");
        setFoundKey(null);
    };

    return (
        <>


            <div className="map-visualizer">
                <h1>Map</h1>
                <button id="home_button" onClick={() => navigate('/')}>Home</button>
                <div className="map-theory">
                    <h2>What is a Map?</h2>
                    <p>
                        A <strong>Map</strong> is a data structure that holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. They are optimized for frequent additions and removals of elements.
                    </p>
                    <p><strong>Time Complexity of Common Operations:</strong></p>
                    <ul>
                        <li><b>Insert:</b> <code>map.set(key, value)</code> → Average: O(1)</li>
                        <li><b>Search:</b> <code>map.get(key)</code> → Average: O(1)</li>
                        <li><b>Delete:</b> <code>map.delete(key)</code> → Average: O(1)</li>
                    </ul>
                </div>

                <div className="visualizer-container">
                    {/* Left: Map display */}
                    <div className="map-display" aria-label="Map contents display">
                        <h2>Map Contents</h2>
                        <div className="map-header">
                            <span>Key</span>
                            <span>Value</span>
                        </div>
                        <div className="map-items" role="list">
                            {[...mapData.entries()].map(([key, value], index) => (
                                <div
                                    key={index}
                                    className={`map-item ${foundKey === key ? 'highlight' : ''}`}
                                    role="listitem"
                                    title={`Key: ${key}, Value: ${value}`}
                                >
                                    <span className="map-key">{key}</span>
                                    <span className="map-value">{value}</span>
                                </div>
                            ))}
                            {mapData.size === 0 && <p className="empty-map-message">Map is empty</p>}
                        </div>
                        {result && <p className="result" aria-live="polite">{result}</p>}
                    </div>

                    {/* Right: Controls */}
                    <div className="controls" aria-label="Map controls">
                        <h2>Controls</h2>
                        <div className="control-group">
                            <input
                                type="text"
                                placeholder="Key"
                                value={keyInput}
                                onChange={(e) => setKeyInput(e.target.value)}
                                aria-label="Enter key for insertion"
                            />
                            <input
                                type="text"
                                placeholder="Value"
                                value={valueInput}
                                onChange={(e) => setValueInput(e.target.value)}
                                aria-label="Enter value for insertion"
                            />
                            <button onClick={handleInsert} aria-label="Insert key-value pair">Insert</button>
                        </div>

                        <div className="control-group">
                            <input
                                type="text"
                                placeholder="Search by Key"
                                value={searchKey}
                                onChange={(e) => setSearchKey(e.target.value)}
                                aria-label="Search by key"
                            />
                            <button onClick={handleSearch} aria-label="Search key">Search</button>
                        </div>

                        <div className="control-group">
                            <input
                                type="text"
                                placeholder="Remove by Key"
                                value={removeKey}
                                onChange={(e) => setRemoveKey(e.target.value)}
                                aria-label="Remove by key"
                            />
                            <button onClick={handleRemove} aria-label="Remove key">Remove</button>
                        </div>

                        <div className="control-group">
                            <button onClick={handleClear} className="clear-btn" aria-label="Clear map">Clear Entire Map</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
