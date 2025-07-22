import React, { useState, useEffect } from "react";
import './sort.css'
import './home_button.css'
import { useNavigate } from "react-router-dom";
const MergeSortVisualizer = () => {
    const [input, setInput] = useState("");
    const [array, setArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [activeIndices, setActiveIndices] = useState([]);
    const navigate = useNavigate();

    // Generate snapshots for merge sort with active highlights
    const generateMergeSortSteps = (arr) => {
        const snapshots = [];
        const copyArr = [...arr];

        function mergeSort(subArr, leftIndex) {
            if (subArr.length <= 1) {
                snapshots.push({
                    arr: [...copyArr],
                    desc: `Base case for subarray starting at index ${leftIndex}`,
                    active: [],
                });
                return subArr;
            }
            const mid = Math.floor(subArr.length / 2);
            snapshots.push({
                arr: [...copyArr],
                desc: `Divide subarray from index ${leftIndex} into left and right`,
                active: [],
            });

            const left = mergeSort(subArr.slice(0, mid), leftIndex);
            const right = mergeSort(subArr.slice(mid), leftIndex + mid);

            return merge(left, right, leftIndex);
        }

        function merge(left, right, leftIndex) {
            let i = 0,
                j = 0;
            const merged = [];
            while (i < left.length && j < right.length) {
                snapshots.push({
                    arr: [...copyArr],
                    desc: `Compare elements ${left[i]} and ${right[j]}`,
                    active: [leftIndex + i, leftIndex + left.length + j],
                });
                if (left[i] <= right[j]) {
                    merged.push(left[i++]);
                } else {
                    merged.push(right[j++]);
                }
            }
            while (i < left.length) merged.push(left[i++]);
            while (j < right.length) merged.push(right[j++]);

            // Update copyArr with merged subarray
            for (let k = 0; k < merged.length; k++) {
                copyArr[leftIndex + k] = merged[k];
            }

            snapshots.push({
                arr: [...copyArr],
                desc: `Merged subarray from index ${leftIndex} to ${leftIndex + merged.length - 1}`,
                active: Array.from(
                    { length: merged.length },
                    (_, idx) => leftIndex + idx
                ),
            });
            return merged;
        }

        mergeSort(arr, 0);
        return snapshots;
    };

    const handleStart = () => {
        let arr = input
            .split(",")
            .map((x) => parseInt(x.trim()))
            .filter((x) => !isNaN(x));
        setArray(arr);
        const generatedSteps = generateMergeSortSteps(arr);
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
            <h2>Merge Sort Visualizer</h2>

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
                <h3>Merge Sort - Theory</h3>
                <p>
                    Merge Sort is a classic <b>divide and conquer</b> sorting algorithm.
                </p>
                <p>
                    It divides the array into two halves, recursively sorts each half, and then merges the two sorted halves.
                </p>
                <p>
                    The merge operation combines two sorted arrays into one sorted array efficiently.
                </p>
                <p>
                    Merge Sort has a consistent time complexity of <b>O(n log n)</b>, making it very efficient for large datasets.
                </p>
                <p>
                    Steps involved:
                    <ul>
                        <li>Divide the array into two halves recursively until subarrays contain a single element.</li>
                        <li>Merge adjacent subarrays by comparing elements and sorting them during the merge.</li>
                        <li>Repeat the merging process until the whole array is sorted.</li>
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
            <button onClick={handleStart}>Start Merge Sort</button>

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

export default MergeSortVisualizer;
