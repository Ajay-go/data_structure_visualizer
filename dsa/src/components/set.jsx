import React, { useState } from "react";
import "./set.css";
import { useNavigate } from "react-router-dom";

const SetVisualizer = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState("");
    const [setData, setSetData] = useState(new Set());
    const [result, setResult] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [removeValue, setRemoveValue] = useState("");

    const handleInsert = () => {
        if (input.trim() === "") return;
        const newSet = new Set(setData);
        newSet.add(input.trim());
        setSetData(newSet);
        setResult(`Inserted "${input.trim()}"`);
        setInput("");
    };

    const handleSearch = () => {
        if (searchValue.trim() === "") return;
        if (setData.has(searchValue.trim())) {
            setResult(`Found "${searchValue.trim()}" in set.`);
        } else {
            setResult(`"${searchValue.trim()}" not found in set.`);
        }
        setSearchValue("");
    };

    const handleRemove = () => {
        if (removeValue.trim() === "") return;
        const newSet = new Set(setData);
        if (newSet.has(removeValue.trim())) {
            newSet.delete(removeValue.trim());
            setSetData(newSet);
            setResult(`Removed "${removeValue.trim()}" from set.`);
        } else {
            setResult(`"${removeValue.trim()}" not found in set.`);
        }
        setRemoveValue("");
    };

    const handleClear = () => {
        setSetData(new Set());
        setResult("Set cleared.");
    };

    return (
        <div id="set-visualizer">
            <button id="home_button" onClick={() => navigate('/')}>Home</button>
            <h1>Set</h1>

            <div id="theory">
                <p>
                    A <strong>Set</strong> is a built-in data structure in JavaScript that stores unique values of any type.
                    Sets automatically remove duplicates and do not maintain any specific order.
                </p>
                <p>Key properties:</p>
                <ul>
                    <li>No duplicate elements allowed</li>
                    <li>Efficient insert, search, delete operations (average O(1))</li>
                    <li>Maintains insertion order during iteration</li>
                </ul>
                <p><strong>Common operations:</strong></p>
                <ul>
                    <li><b>Insert:</b> <code>set.add(value)</code> → O(1)</li>
                    <li><b>Search:</b> <code>set.has(value)</code> → O(1)</li>
                    <li><b>Delete:</b> <code>set.delete(value)</code> → O(1)</li>
                    <li><b>Clear:</b> <code>set.clear()</code> → O(1)</li>
                </ul>
                <p><strong>Use Cases:</strong> Removing duplicates, membership checks, tagging systems, fast lookups, etc.</p>
            </div>

            <div className="visualizer-container">
                {/* Left: Set display */}
                <div className="set-display">
                    <h2>Set Contents</h2>
                    <div className="set-items">
                        {[...setData].map((item, index) => (
                            <div key={index} className="set-item">{item}</div>
                        ))}
                    </div>
                    {result && <p className="result">{result}</p>}
                </div>

                {/* Right: Controls */}
                <div className="controls">
                    <input
                        type="text"
                        placeholder="Enter value"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleInsert}>Insert</button>

                    <input
                        type="text"
                        placeholder="Search value"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>

                    <input
                        type="text"
                        placeholder="Remove value"
                        value={removeValue}
                        onChange={(e) => setRemoveValue(e.target.value)}
                    />
                    <button onClick={handleRemove}>Remove</button>

                    <button onClick={handleClear}>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default SetVisualizer;
