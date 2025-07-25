// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Array from "./components/array.jsx";
import Queue from "./components/queue.jsx";
import Stack from "./components/stack.jsx";
import LinkedList from "./components/linkedlist.jsx";
import PriorityQueue from "./components/priority_queue.jsx";
import Set from "./components/set.jsx";
import MapVisualizer from "./components/map.jsx";
import TreeVisualizer from "./components/tree.jsx";
import MergeSortVisualizer from "./components/mergesort.jsx";
import QuickSortVisualizer from "./components/quick_sort.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<Array />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/linked-list" element={<LinkedList />} />
        <Route path="/priority-queue" element={<PriorityQueue />} />
        <Route path="/set" element={<Set />} />
        <Route path="/map" element={<MapVisualizer />} />
        <Route path="/tree" element={<TreeVisualizer />} />
        <Route path="/merge-sort" element={<MergeSortVisualizer />} />
        <Route path="/quick-sort" element={<QuickSortVisualizer />} />
      </Routes>
    </>
  );
}

export default App;
