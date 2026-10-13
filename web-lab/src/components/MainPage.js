
import HeroSection from './MainPage/HeroSection.js'
import CatalogSection from './MainPage/CatalogSection.js'
import Catalog from './Catalog.js'
import SafetyGalery from './ViewMore/SafetyGalery.js'
import TeamGalery from './ViewMore/TeamGalery.js'
import ItemPage from './ItemPage.js'
import { useViewingMore } from './ViewMore/ViewMoreContext.js'

import { Routes, Route } from "react-router-dom";

export default function MainPage() {
  const { viewingMore } = useViewingMore();


  return (
    <div>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <CatalogSection />
              { viewingMore ? <SafetyGalery /> : <></> }
              { viewingMore ? <TeamGalery /> : <></> }
            </>
          } 
        />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about-ship" element={<ItemPage />} />
      </Routes>
    </div>
  );
}