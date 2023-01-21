import './App.css';
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About  from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Services />
    <Tours />
    <Footer/>
    <script src="./js/app.js"></script></>

  );
}

export default App;
