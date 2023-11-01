import logo from './logo.svg';
import './tailwind.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
