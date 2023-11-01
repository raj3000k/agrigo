import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
