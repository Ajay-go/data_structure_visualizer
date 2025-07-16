import React, { useState } from "react";
import './queue.css';

function Queue() {
    const [queue, setQueue] = useState([1, 2]);
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const handleEnqueue = () => {
        if (inputValue === "") return;
        setQueue([...queue, parseInt(inputValue)]);
        setInputValue("");
    };

    const handleDequeue = () => {
        if (queue.length === 0) {
            alert("Queue is empty!");
            return;
        }
        setQueue(queue.slice(1));
    };

    const handleSize = () => {
        alert(`Queue Size: ${queue.length}`);
    };

    const handleSearch = () => {
        const index = queue.indexOf(parseInt(searchValue));
        if (index === -1) {
            alert(`Value ${searchValue} not found in queue.`);
        } else {
            alert(`Value ${searchValue} found at position ${index + 1} in queue.`);
        }
        setSearchValue("");
    };

    const handlePeek = () => {
        if (queue.length === 0) {
            alert("Queue is empty!");
        } else {
            alert(`Front of Queue: ${queue[0]}`);
        }
    };

    return (
        <div id="queue_wrapper">
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

            <div id="queue_display">
                {queue.map((value, index) => (
                    <h1 key={index}>{value}</h1>
                ))}
            </div>
        </div>
    );
}

export default Queue;
