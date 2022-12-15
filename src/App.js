import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import Project from "./Routes/Projects/Project";
import Contact from "./Routes/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/projects" element={<Project></Project>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </>
  );
}

export default App;
