import logo from "./logo.svg";
import "./tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Transporter from "./pages/Transporter";
import Distributor from "./pages/Distributor";
import Order from "./pages/Order";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome />}></Route>
        <Route exact path="/transporter" element={<Transporter />}></Route>
        <Route exact path="/distributor" element={<Distributor />}></Route>
        <Route exact path="/order" element={<Order />}></Route>
      </Routes>
    </div>
  );
}

export default App;
