import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Homepage from "./components/Homepage";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Welcome />} /> */}
          {/* <Route path="/homepage" element={<Homepage/>} />  */}
          <Route path ="" element={<Booking/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
