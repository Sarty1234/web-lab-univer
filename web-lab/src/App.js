import logo from './logo.svg';
import './App.css';
import './css/Navbar-Centered-Links-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/Navbar.js'
import MainPage from './components/MainPage.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <MainPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;