import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import College from "./pages/College";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="college">College</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/college" element={<College />} />
      </Routes>
    </>
  );
}

export default App;