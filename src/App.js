import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import About from '/Users/formazionequinck/Desktop/workspace/react-quick-start/src/pages/About/About.js';
import Docs from "./pages/Docs/Docs";
import SupportUs from '/Users/formazionequinck/Desktop/workspace/react-quick-start/src/pages/SupportUs/SupportUs.js';
import Homepage from "./pages/Homepage/Homepage";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>} />
          <Route path="Docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
          <Route path="/supportus" element={<SupportUs />} />
        </Routes>
      </BrowserRouter>
  );
}