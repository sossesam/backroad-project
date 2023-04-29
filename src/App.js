import './App.css';
import HomePage from './components/HomePage';
import About from './components/About';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />}  />
    <Route path="/about" element={<About />}   />
  </Routes>
  </BrowserRouter>
    <script src="./js/app.js"></script></>

  );
}

export default App;
