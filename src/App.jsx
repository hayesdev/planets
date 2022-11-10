import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
} from "./components";

const App = () => (
  <div className="flex flex-col justify-center items-center w-full h-screen bg-[#070724]">
    <Navbar />
    <Routes>
      <Route path="/mercury" element={<Mercury />} />
      <Route path="/venus" element={<Venus />} />
      <Route path="/earth" element={<Earth />} />
      <Route path="/mars" element={<Mars />} />
      <Route path="/jupiter" element={<Jupiter />} />
      <Route path="/saturn" element={<Saturn />} />
      <Route path="/uranus" element={<Uranus />} />
      <Route path="/neptune" element={<Neptune />} />
    </Routes>
  </div>
);

export default App;
