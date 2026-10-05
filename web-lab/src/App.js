import logo from './logo.svg';
import './App.css';
import './css/Navbar-Centered-Links-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar.js'
import MainPage from './components/MainPage.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;