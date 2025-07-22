import React, { useState, useEffect } from "react";
import './sort.css';
import { useNavigate } from "react-router-dom";
import './home_button.css'

const QuickSortVisualizer = () => {
    const [input, setInput] = useState("");
    const [array, setArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [activeIndices, setActiveIndices] = useState([]);
    const navigate = useNavigate();

    const generateQuickSortSteps = (arr) => {
        const snapshots = [];
        const copyArr = [...arr];

        function quickSort(start, end) {
            if (start >= end) {
                snapshots.push({
                    arr: [...copyArr],
                    desc: `Base case for subarray from ${start} to ${end}`,
                    active: [],
                });
                return;
            }
            const pivotIndex = partition(start, end);
            snapshots.push({
                arr: [...copyArr],
                desc: `Pivot ${copyArr[pivotIndex]} placed at position ${pivotIndex}`,
                active: [pivotIndex],
            });
            quickSort(start, pivotIndex - 1);
            quickSort(pivotIndex + 1, end);
        }

        function partition(start, end) {
            let pivot = copyArr[end];
            let i = start;
            for (let j = start; j < end; j++) {
                snapshots.push({
                    arr: [...copyArr],
                    desc: `Compare element ${copyArr[j]} with pivot ${pivot}`,
                    active: [j, end],
                });
                if (copyArr[j] <= pivot) {
                    [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
                    snapshots.push({
                        arr: [...copyArr],
                        desc: `Swapped ${copyArr[i]} and ${copyArr[j]}`,
                        active: [i, j],
                    });
                    i++;
                }
            }
            [copyArr[i], copyArr[end]] = [copyArr[end], copyArr[i]];
            snapshots.push({
                arr: [...copyArr],
                desc: `Swapped pivot ${copyArr[i]} with element at index ${i}`,
                active: [i, end],
            });
            return i;
        }

        quickSort(0, copyArr.length - 1);
        return snapshots;
    };

    const handleStart = () => {
        let arr = input
            .split(",")
            .map((x) => parseInt(x.trim()))
            .filter((x) => !isNaN(x));
        setArray(arr);
        const generatedSteps = generateQuickSortSteps(arr);
        setSteps(generatedSteps);
        setCurrentStep(0);
        setPlaying(false);
    };

    useEffect(() => {
        if (playing && currentStep < steps.length - 1) {
            const timer = setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [playing, currentStep, steps]);

    useEffect(() => {
        if (steps.length > 0) {
            setActiveIndices(steps[currentStep].active);
            setArray(steps[currentStep].arr);
        }
    }, [currentStep, steps]);

    return (
        <div className="container">
            <button id="home_button" onClick={() => navigate('/')}>Home</button>
            <h2>Quick Sort Visualizer</h2>

            {/* Theory Section */}
            <div style={{
                backgroundColor: "#1e1e1e",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "20px",
                color: "#eee",
                fontSize: "14px",
                lineHeight: "1.5"
            }}>
                <h3>Quick Sort - Theory</h3>
                <p>
                    Quick Sort is a highly efficient sorting algorithm using the <b>divide and conquer</b> approach.
                </p>
                <p>
                    It works by selecting a <i>pivot</i> element from the array and partitioning the other elements into two subarrays,
                    according to whether they are less than or greater than the pivot.
                </p>
                <p>
                    The subarrays are then sorted recursively. This leads to an average time complexity of <b>O(n log n)</b>.
                </p>
                <p>
                    Steps involved:
                    <ul>
                        <li>Select a pivot element (commonly the last element).</li>
                        <li>Partition the array so that elements less than pivot come before it, and those greater come after.</li>
                        <li>Recursively apply the above steps to the subarrays left and right of the pivot.</li>
                    </ul>
                </p>
            </div>

            <p>Enter array elements separated by commas (e.g. 5,3,8,6)</p>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers"
            />
            <button onClick={handleStart}>Start Quick Sort</button>

            <div className="array-container">
                {array.map((val, idx) => (
                    <div
                        key={idx}
                        className={`array-box ${activeIndices.includes(idx) ? "active" : ""}`}
                    >
                        {val}
                    </div>
                ))}
            </div>

            <div className="step-description">
                {steps.length > 0 ? steps[currentStep].desc : ""}
            </div>
            <div className="controls">
                <button
                    onClick={() => setPlaying(!playing)}
                    disabled={steps.length === 0}
                >
                    {playing ? "Pause" : "Play"}
                </button>
                <button
                    onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                    disabled={currentStep === 0}
                >
                    Previous
                </button>
                <button
                    onClick={() =>
                        setCurrentStep((s) => Math.min(steps.length - 1, s + 1))
                    }
                    disabled={currentStep === steps.length - 1}
                >
                    Next
                </button>
            </div>
            <p>
                Step {currentStep + 1} of {steps.length}
            </p>
        </div>
    );
};

export default QuickSortVisualizer;
