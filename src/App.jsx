import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full min-h-screen  bg-slate-200 ">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
