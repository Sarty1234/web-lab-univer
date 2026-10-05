import logo from './logo.svg';
import './App.css';
import './css/Navbar-Centered-Links-icons.css';
import './bootstrap/css/bootstrap.min.css';
import './bootstrap/js/bootstrap.min.js';

import Navbar from './components/Navbar.js'
import HeroSection from './components/HeroSection.js'
import CatalogSection from './components/CatalogSection.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div style={{ borderColor: 'rgb(33, 37, 41)' }}>
      <Navbar />
      <HeroSection />
      <CatalogSection />
      <Footer />
    </div>
  );
}

export default App;