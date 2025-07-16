import React, { useState } from "react";
import './array.css';

function Array() {
    const [array, setArray] = useState([1, 2]);
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [accessIndex, setAccessIndex] = useState("");
    const [updateIndex, setUpdateIndex] = useState("");
    const [updateValue, setUpdateValue] = useState("");

    const handleAdd = () => {
        if (inputValue === "") return;
        setArray([...array, parseInt(inputValue)]);
        setInputValue("");
    };

    const handlePop = () => {
        if (array.length === 0) {
            alert("No elements to pop");
            return;
        }
        setArray(array.slice(0, -1));
    };

    const handleSize = () => {
        alert(`Array Size: ${array.length}`);
    };

    const handleSearch = () => {
        const index = array.indexOf(parseInt(searchValue));
        if (index === -1) {
            alert(`Value ${searchValue} not found.`);
        } else {
            alert(`Value ${searchValue} found at index ${index}`);
        }
        setSearchValue("");
    };

    const handleAccess = () => {
        const index = parseInt(accessIndex);
        if (index < 0 || index >= array.length || isNaN(index)) {
            alert("Invalid index");
        } else {
            alert(`Element at index ${index}: ${array[index]}`);
        }
        setAccessIndex("");
    };

    const handleUpdate = () => {
        const idx = parseInt(updateIndex);
        const val = parseInt(updateValue);
        if (idx < 0 || idx >= array.length || isNaN(idx) || isNaN(val)) {
            alert("Invalid index or value");
            return;
        }
        const newArray = [...array];
        newArray[idx] = val;
        setArray(newArray);
        setUpdateIndex("");
        setUpdateValue("");
    };

    return (
        <>
            <div id="array_container">
                <div id="theory">
                    <h2 style={{ color: "white" }}>📘 Array - Basic Theory</h2>
                    <p style={{ color: "#dcdcdc", maxWidth: "700px", margin: "0 auto" }}>
                        An <strong>array</strong> is a linear data structure that stores elements at contiguous memory locations.
                        It allows random access of elements using indices. Arrays can be static or dynamic based on the language used.
                    </p>

                    <h3 style={{ color: "white", marginTop: "20px" }}>🛠️ Common Operations:</h3>
                    <ul style={{ textAlign: "left", color: "#c0c0c0", maxWidth: "600px", margin: "0 auto" }}>
                        <li><strong>Insertion</strong> – Add an element at a specific position.</li>
                        <li><strong>Deletion</strong> – Remove an element from a specific index.</li>
                        <li><strong>Searching</strong> – Find the location of a given element.</li>
                        <li><strong>Updating</strong> – Change the value of an existing element.</li>
                        <li><strong>Access</strong> – Retrieve element using an index (O(1) time).</li>
                    </ul>
                </div>

                <div id="buttons">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter Number"
                    />
                    <button onClick={handleAdd}>Add Element</button>

                    <button onClick={handlePop}>Pop Element</button>
                    <button onClick={handleSize}>Get Size</button>

                    <input
                        type="number"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search Value"
                    />
                    <button onClick={handleSearch}>Search</button>

                    <input
                        type="number"
                        value={updateIndex}
                        onChange={(e) => setUpdateIndex(e.target.value)}
                        placeholder="Update Index"
                    />
                    <input
                        type="number"
                        value={updateValue}
                        onChange={(e) => setUpdateValue(e.target.value)}
                        placeholder="New Value"
                    />
                    <button onClick={handleUpdate}>Update</button>

                    <input
                        type="number"
                        value={accessIndex}
                        onChange={(e) => setAccessIndex(e.target.value)}
                        placeholder="Access Index"
                    />
                    <button onClick={handleAccess}>Access</button>
                </div>

                <div id="array_pipe">
                    {array.map((value, index) => (
                        <h1 key={index}>{value}</h1>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Array;
