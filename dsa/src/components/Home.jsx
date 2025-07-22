import React from "react";
import './Home.css';
import './home_button.css';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div id="home">
                <div id="head">
                    <h1>Welcome to Data Structure Visualizer</h1>
                </div>
                <div id="buttons">
                    <button id="button" onClick={() => navigate('/array')}>Array</button>
                    <button id="button" onClick={() => navigate('/linked-list')}>Singly Linked List</button>
                    <button id="button" onClick={() => navigate('/stack')}>Stack</button>
                    <button id="button" onClick={() => navigate('/queue')}>Queue</button>
                    <button id="button" onClick={() => navigate('/priority-queue')}>Priority Queue</button>
                    <button id="button" onClick={() => navigate('/set')}>Set</button>
                    <button id="button" onClick={() => navigate('/map')}>Map</button>
                    <button id="button" onClick={() => navigate('/tree')}>Binary Tree</button>
                </div>
                <h3>
                    <a
                        href="https://portfolio-ajay-f598b.firebaseapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Designed and Developed by Ajay Gour
                    </a>
                </h3>

            </div>
        </>
    );
}

export default Home;
