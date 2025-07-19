import React, { useState } from "react";
import './stack.css';
import './home_button.css'
import { useNavigate } from "react-router-dom";
function Stack() {
    const navigate = useNavigate();
    const [stack, setStack] = useState([1, 2]);
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");

    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 3000);
    };

    const handlePush = () => {
        if (inputValue === "") return;
        setStack([...stack, parseInt(inputValue)]);
        setInputValue("");
    };

    const handlePop = () => {
        if (stack.length === 0) {
            showMessage("Stack is empty. No elements to pop.");
            return;
        }
        setStack(stack.slice(0, -1));
    };

    const handleSize = () => {
        showMessage(`Stack Size: ${stack.length}`);
    };

    const handlePeek = () => {
        if (stack.length === 0) {
            showMessage("Stack is empty. Nothing to peek.");
            return;
        }
        showMessage(`Top element (Peek): ${stack[stack.length - 1]}`);
    };

    return (

        <div id="stack_container">
            <button id="home_button" onClick={() => navigate('/')}>Home</button>

            <div id="theory">
                <h2>📘 Stack - Basic Theory</h2>
                <p>
                    A <strong>Stack</strong> is a linear data structure that follows the <strong>LIFO (Last-In, First-Out)</strong> principle.
                    It operates like a stack of plates; you can only add a new plate to the top or remove the top plate.
                </p>

                <h3 style={{ marginTop: "20px" }}>🛠️ Common Operations:</h3>
                <ul>
                    <li><strong>Push</strong> – Add an element to the top of the stack.</li>
                    <li><strong>Pop</strong> – Remove the element from the top of the stack.</li>
                    <li><strong>Size</strong> – Get the number of elements in the stack.</li>
                    <li><strong>Peek</strong> – View the top element without removing it.</li>
                </ul>
            </div>

            <div id="buttons">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handlePush()}
                    placeholder="Enter Number"
                />
                <button onClick={handlePush}>Push Element</button>
                <button onClick={handlePop}>Pop Element</button>
                <button onClick={handleSize}>Get Size</button>
                <button onClick={handlePeek}>Peek</button>
            </div>

            <div style={{ color: '#00bfff', height: '20px', margin: '1rem 0', fontWeight: 'bold' }}>
                {message}
            </div>

            <div id="stack_pipe">
                {stack.map((value, index) => (
                    <h1 key={index}>{value}</h1>
                ))}
            </div>
        </div>
    );
}

export default Stack;
