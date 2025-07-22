import React, { useState } from 'react';
import './tree.css';
import './home_button.css'
import { useNavigate } from 'react-router-dom';

const TreeVisualizer = () => {
    const tree = {
        value: 1,
        left: {
            value: 7,
            left: { value: 2 },
            right: {
                value: 6,
                left: { value: 5 },
                right: { value: 11 },

            },
        },
        right: {
            value: 9,
            right: {
                value: 9,
                left: { value: 10 },
            },
        },
    };
    const navigate = useNavigate();
    const inorder = (node) => {
        if (!node) return [];
        return [...inorder(node.left), node.value, ...inorder(node.right)];
    };

    const preorder = (node) => {
        if (!node) return [];
        return [node.value, ...preorder(node.left), ...preorder(node.right)];
    };

    const postorder = (node) => {
        if (!node) return [];
        return [...postorder(node.left), ...postorder(node.right), node.value];
    };

    const [traversal, setTraversal] = useState([]);

    return (
        <div className="tree-page">
            <button id="home_button" onClick={() => navigate('/')}>Home</button>
            <h1>Binary Tree</h1>

            <div className="theory-box">
                <p>
                    A <strong>binary tree</strong> is a hierarchical data structure in which each node has at most two children,
                    commonly referred to as the left and right child. It is used to represent structured data and forms the basis
                    of many important data structures like binary search trees, heaps, and syntax trees.
                </p>
                <p>
                    A key operation on trees is <strong>traversal</strong> — visiting each node in a specific order:
                </p>

                <ul>
                    <li><strong>Inorder:</strong> Left → Root → Right</li>
                    <li><strong>Preorder:</strong> Root → Left → Right</li>
                    <li><strong>Postorder:</strong> Left → Right → Root</li>
                </ul>
            </div>

            <div className="buttons">
                <button onClick={() => setTraversal(inorder(tree))}>Inorder</button>
                <button onClick={() => setTraversal(preorder(tree))}>Preorder</button>
                <button onClick={() => setTraversal(postorder(tree))}>Postorder</button>
            </div>

            <div className="result">
                <h3>Traversal Result:</h3>
                <p>{traversal.join(" → ")}</p>
            </div>

            <div className="image-container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Binary_tree_v2.svg"
                    alt="Tree Diagram"
                />
            </div>
        </div>
    );
};

export default TreeVisualizer;
