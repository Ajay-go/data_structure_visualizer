import React, { useState } from "react";
import './linkedlist.css';
import './home_button.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function LinkedList() {
    const navigate = useNavigate();
    const [list, setList] = useState([1, 2, 3]);
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [message, setMessage] = useState("");

    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 4000);
    };

    const handleAdd = () => {
        if (inputValue === "") return;
        setList([...list, parseInt(inputValue)]);
        setInputValue("");
        showMessage("Node added to Linked List.");
    };

    const handleRemove = () => {
        if (list.length === 0) {
            showMessage("Linked List is empty!");
            return;
        }
        setList(list.slice(1));
        showMessage("Head node removed.");
    };

    const handleSize = () => {
        showMessage(`Linked List Size: ${list.length}`);
    };

    const handlePeek = () => {
        if (list.length === 0) {
            showMessage("Linked List is empty!");
        } else {
            showMessage(`Head Node: ${list[0]}`);
        }
    };

    const handleSearch = () => {
        const val = parseInt(searchValue);
        const index = list.indexOf(val);
        if (isNaN(val)) {
            showMessage("Please enter a valid number.");
        } else if (index === -1) {
            showMessage(`Value ${val} not found in Linked List.`);
        } else {
            showMessage(`Value ${val} found at position ${index}.`);
        }
        setSearchValue("");
    };

    return (
        <div id="linkedlist_wrapper">

            <button id="home_button" onClick={() => navigate('/')}>Home</button>
            <div id="linkedlist_theory">
                <h2>📘 Linked List - Basic Theory</h2>
                <p>
                    A <strong>Linked List</strong> is a linear data structure where each element (node) points to the next.
                    Unlike arrays, linked lists don’t store elements in contiguous memory. They allow efficient insertions and deletions.
                </p>

                <h3>🛠️ Common Operations:</h3>
                <ul>
                    <li><strong>Insert</strong> – Add a node to the end.</li>
                    <li><strong>Delete</strong> – Remove the head node.</li>
                    <li><strong>Peek</strong> – View the head node.</li>
                    <li><strong>Search</strong> – Find the position of a node by value.</li>
                    <li><strong>Size</strong> – Get total number of nodes.</li>
                </ul>
            </div>

            <div id="linkedlist_controls">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter Number"
                />
                <button onClick={handleAdd}>Insert Node</button>

                <button onClick={handleRemove}>Delete Head</button>
                <button onClick={handleSize}>Get Size</button>
                <button onClick={handlePeek}>Peek Head</button>

                <input
                    type="number"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search Value"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="message">
                {message && <h2>{message}</h2>}
            </div>
            <div id="linkedlist_display">
                {list.map((value, index) => (
                    <React.Fragment key={index}>
                        <div className="node">
                            <h1>{value}</h1>
                        </div>
                        {index < list.length - 1 && (
                            <div className="arrow">
                                <FaLongArrowAltRight />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

        </div>
    );
}

export default LinkedList;
