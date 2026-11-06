
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
import SubmitRequestPage from './Pages/SubmitRequestPage.js';
import OrderSuccessPage from './Pages/OrderSuccessPage.js';
import { Provider } from 'react-redux';
import { store } from "./redux/store.js"

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <ViewMoreProvider>
        <Provider store={store}>
        <CatalogDataProvider>
          
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about-ship" element={<ItemPage />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/ordering" element={<SubmitRequestPage />} />
            <Route path="/submit-request" element={<SubmitRequestPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
          </Routes>

          
        </CatalogDataProvider>
        </Provider>
        </ViewMoreProvider>

        <Footer />
      </Router>
    </div>
  );
}

export default App;