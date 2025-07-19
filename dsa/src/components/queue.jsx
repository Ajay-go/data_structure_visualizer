import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './queue.css';
import './home_button.css'

function Queue() {
    const navigate = useNavigate();
    const [queue, setQueue] = useState([1, 2]);
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [message, setMessage] = useState("");

    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 3000);
    };

    const handleEnqueue = () => {
        if (inputValue === "") return;
        setQueue([...queue, parseInt(inputValue)]);
        setInputValue("");
        showMessage("Element enqueued.");
    };

    const handleDequeue = () => {
        if (queue.length === 0) {
            showMessage("Queue is empty!");
            return;
        }
        setQueue(queue.slice(1));
        showMessage("Element dequeued.");
    };

    const handleSize = () => {
        showMessage(`Queue Size: ${queue.length}`);
    };

    const handleSearch = () => {
        const val = parseInt(searchValue);
        const index = queue.indexOf(val);
        if (isNaN(val)) {
            showMessage("Please enter a valid number.");
        } else if (index === -1) {
            showMessage(`Value ${val} not found in queue.`);
        } else {
            showMessage(`Value ${val} found at position ${index + 1} in queue.`);
        }
        setSearchValue("");
    };

    const handlePeek = () => {
        if (queue.length === 0) {
            showMessage("Queue is empty!");
        } else {
            showMessage(`Front of Queue: ${queue[0]}`);
        }
    };

    return (
        <div id="queue_wrapper">
            <button id="home_button" onClick={() => navigate('/')}>Home</button>
            <div id="queue_theory">
                <h2 style={{ color: "white" }}>📘 Queue - Basic Theory</h2>
                <p style={{ color: "#dcdcdc", maxWidth: "700px", margin: "0 auto" }}>
                    A <strong>Queue</strong> is a linear data structure that follows the <strong>FIFO</strong> (First In First Out) principle.
                    Elements are added at the rear (enqueue) and removed from the front (dequeue).
                </p>

                <h3 style={{ color: "white", marginTop: "20px" }}>🛠️ Common Operations:</h3>
                <ul style={{ textAlign: "left", color: "#c0c0c0", maxWidth: "600px", margin: "0 auto" }}>
                    <li><strong>Enqueue</strong> – Add an element to the end of the queue.</li>
                    <li><strong>Dequeue</strong> – Remove the front element from the queue.</li>
                    <li><strong>Peek</strong> – View the front element without removing it.</li>
                    <li><strong>IsEmpty</strong> – Check if the queue is empty.</li>
                    <li><strong>Search</strong> – Find the position of an element.</li>
                </ul>
            </div>

            <div id="queue_controls">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter Number"
                />
                <button onClick={handleEnqueue}>Enqueue</button>

                <button onClick={handleDequeue}>Dequeue</button>
                <button onClick={handleSize}>Get Size</button>
                <button onClick={handlePeek}>Peek</button>

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

            <div id="queue_display">
                {queue.map((value, index) => (
                    <h1 key={index}>{value}</h1>
                ))}
            </div>
        </div>
    );
}

export default Queue;
