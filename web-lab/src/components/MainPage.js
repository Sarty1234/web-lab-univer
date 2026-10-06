
import HeroSection from './MainPage/HeroSection.js'
import CatalogSection from './MainPage/CatalogSection.js'
import Catalog from './Catalog.js'
import { Link, Routes, Route } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <CatalogSection />
            </>
          } 
        />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}