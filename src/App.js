import "./App.css";
import LoginData from "./components/LoginData.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome.js";

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<LoginData />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
