
import "./App.css";
import Chatbot from "./components/Chatbot";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Whyus from './components/Whyus';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Whyus/>
      <Contact/>
      <Chatbot/>
      <Footer/>
     
    </div>
  );
}

export default App;
