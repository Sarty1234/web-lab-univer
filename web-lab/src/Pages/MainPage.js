
import HeroSection from '../components/MainPage/HeroSection.js'
import CatalogSection from '../components/MainPage/CatalogSection.js'
import SafetyGalery from '../components/ViewMore/SafetyGalery.js'
import TeamGalery from '../components/ViewMore/TeamGalery.js'
import { useViewingMore } from '../components/ViewMore/ViewMoreContext.js'

export default function MainPage() {
  const { viewingMore } = useViewingMore();


  return (
    <div>
      <HeroSection />
      <CatalogSection />
      { viewingMore ? <SafetyGalery /> : <></> }
      { viewingMore ? <TeamGalery /> : <></> }
    </div>
  );
}