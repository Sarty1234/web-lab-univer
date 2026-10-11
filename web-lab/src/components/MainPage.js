
import HeroSection from './MainPage/HeroSection.js'
import CatalogSection from './MainPage/CatalogSection.js'
import Catalog from './Catalog.js'
import SafetyGalery from './ViewMore/SafetyGalery.js'
import TeamGalery from './ViewMore/TeamGalery.js'

import { Link, Routes, Route } from "react-router-dom";

export default function MainPage() {
  let viewMore = true;

  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <CatalogSection />
              { viewMore ? <SafetyGalery /> : <></> }
              { viewMore ? <TeamGalery /> : <></> }
            </>
          } 
        />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}