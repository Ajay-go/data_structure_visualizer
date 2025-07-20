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
      </Routes>
    </>
  );
}

export default App;
