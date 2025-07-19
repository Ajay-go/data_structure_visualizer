import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './priority_queue.css';
import './home_button.css'

function PriorityQueue() {
    const navigate = useNavigate();
    const [priorityQueue, setPriorityQueue] = useState([1, 2]);
    const [inputValue, setInputValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [heapType, setHeapType] = useState("min");
    const [message, setMessage] = useState("");

    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 3000);
    };

    const handlePush = () => {
        if (inputValue === "") return;
        const newQueue = [...priorityQueue, parseInt(inputValue)];
        const sortedQueue = [...newQueue].sort((a, b) =>
            heapType === "min" ? a - b : b - a
        );
        setPriorityQueue(sortedQueue);
        setInputValue("");
        showMessage("Element pushed to priority queue.");
    };

    const handlePop = () => {
        if (priorityQueue.length === 0) {
            showMessage("Priority Queue is empty!");
            return;
        }
        setPriorityQueue(priorityQueue.slice(1));
        showMessage("Top element popped from priority queue.");
    };

    const handleSize = () => {
        showMessage(`Priority Queue Size: ${priorityQueue.length}`);
    };


    const handleTop = () => {
        if (priorityQueue.length === 0) {
            showMessage("Priority Queue is empty!");
        } else {
            showMessage(`Top Element: ${priorityQueue[0]}`);
        }
    };

    return (
        <div id="priorityqueue_wrapper">
            <button id="home_button" onClick={() => navigate('/')}>Home</button>

            <div id="priorityqueue_theory">
                <h2 style={{ color: "white" }}>📘 Priority Queue - Basic Theory</h2>
                <p style={{ color: "#dcdcdc", maxWidth: "700px", margin: "0 auto" }}>
                    A <strong>Priority Queue</strong> is a data structure where each element has a priority.
                    In a <strong>Min Heap</strong>, the smallest value is served first.
                    In a <strong>Max Heap</strong>, the largest value is served first.
                    It's commonly implemented using a heap.
                </p>

                <h3 style={{ color: "white", marginTop: "20px" }}>🛠️ Priority Queue Operations:</h3>
                <ul style={{ textAlign: "left", color: "#c0c0c0", maxWidth: "600px", margin: "0 auto" }}>
                    <li><strong>Push</strong> – Insert element by priority → O(log n)</li>
                    <li><strong>Pop</strong> – Remove top-priority element → O(log n)</li>
                    <li><strong>Top</strong> – View top-priority element → O(1)</li>
                    <li><strong>Size</strong> – Number of elements → O(1)</li>
                </ul>
            </div>

            <div id="priorityqueue_controls">
                <div style={{ color: "white", marginBottom: "10px" }}>
                    <label>
                        <input
                            type="radio"
                            name="heapType"
                            value="min"
                            checked={heapType === "min"}
                            onChange={(e) => setHeapType(e.target.value)}
                        />
                        Min Heap
                    </label>
                    &nbsp;&nbsp;
                    <label>
                        <input
                            type="radio"
                            name="heapType"
                            value="max"
                            checked={heapType === "max"}
                            onChange={(e) => setHeapType(e.target.value)}
                        />
                        Max Heap
                    </label>
                </div>

                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter Number"
                />
                <button onClick={handlePush}>Push</button>

                <button onClick={handlePop}>Pop</button>
                <button onClick={handleSize}>Size</button>
                <button onClick={handleTop}>Top</button>


            </div>

            <div className="priorityqueue_message">
                {message && <h2>{message}</h2>}
            </div>

            <div id="priorityqueue_display">
                {priorityQueue.map((value, index) => (
                    <h1 key={index}>{value}</h1>
                ))}
            </div>
        </div>
    );
}

export default PriorityQueue;
