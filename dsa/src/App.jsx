// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Array from "./components/array.jsx";
import Queue from "./components/queue.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/array" element={<Array />} />
        <Route path="/queue" element={<Queue />} />
      </Routes>
    </>
  );
}

export default App;
