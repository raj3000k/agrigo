import logo from './logo.svg';
import './tailwind.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Transporter from './pages/Transporter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome/>}></Route>
        <Route exact path="/transporter" element={<Transporter/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
