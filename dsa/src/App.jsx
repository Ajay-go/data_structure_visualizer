// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Array from "./components/array.jsx";
import Queue from "./components/queue.jsx";
import Stack from "./components/stack.jsx";
import LinkedList from "./components/linkedlist.jsx";
import PriorityQueue from "./components/priority_queue.jsx";
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
      </Routes>
    </>
  );
}

export default App;
