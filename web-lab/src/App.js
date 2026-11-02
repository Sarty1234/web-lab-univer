
import './App.css';
import './css/Navbar-Centered-Links-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { ViewMoreProvider } from './components/ViewMore/ViewMoreContext.js'
import { CatalogDataProvider } from "./components/CatalogPage/CatalogDataContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.js'
import MainPage from './Pages/MainPage.js'
import CatalogPage from './Pages/CatalogPage.js'
import ItemPage from './Pages/ItemPage.js'
import Footer from './components/Footer.js'
import ShoppingCart from './Pages/ShoppingCart.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <ViewMoreProvider>
        <CatalogDataProvider>
          
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about-ship" element={<ItemPage />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>

          
        </CatalogDataProvider>
        </ViewMoreProvider>

        <Footer />
      </Router>
    </div>
  );
}

export default App;