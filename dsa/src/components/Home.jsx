import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom"; // ✅ correct hook

function Home() {
    const navigate = useNavigate(); // ✅ initialize

    return (
        <>
            <div id="home">
                <div id="head">
                    <h1>Welcome to Data Structure Visualizer</h1>
                </div>
                <div id="buttons">
                    <button id="button" onClick={() => navigate('/array')}>Array</button>
                    <button id="button">Singly Linked List</button>
                    <button id="button">Doubly Linked List</button>
                    <button id="button">Stack</button>
                    <button id="button" onClick={() => navigate('/queue')}>Queue</button>
                    <button id="button">Priority Queue</button>
                </div>
            </div>
        </>
    );
}

export default Home;
