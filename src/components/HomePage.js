
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./About";

function HomePage() {
  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage />}  />
    <Route path="/About" element={<About/>}/>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
  </BrowserRouter>
    <script src="./js/app.js"></script></>

  );
}

export default HomePage;
