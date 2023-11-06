
import './App.css';
import Navbar from "./components/Navbar.js"
import LoginData from './components/LoginData.js';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Welcome from './components/Welcome.js';

function App() {
  return (
    <>
   <Navbar/>
   <Router>
   <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/LoginData" element={<LoginData />} />
        </Routes>
      </Router>
      </Router>
   </>
  );
}

export default App;
