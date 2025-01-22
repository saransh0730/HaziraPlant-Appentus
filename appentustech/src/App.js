import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ManagerSection from './components/ManagerSection';
import SpotlightSection from './components/SpotlightSection';
import HodSection from './components/HodSection';
import MultipleSections from './components/MultipleSections';
import Orders from './components/Orders';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <HeroSection />
    <ManagerSection />
    <SpotlightSection />
    <HodSection />
    <MultipleSections />
    <Orders />
    <Footer />
    </div>
  );
}

export default App;
