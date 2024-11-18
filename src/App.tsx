import { Hero } from './components/Hero';
import { BrandShowcase } from './components/BrandShowcase';
import { MarketplaceFeatures } from './components/MarketplaceFeatures';
import { Categories } from './components/Categories';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ParallaxBackground } from './components/ParallaxBackground';

function App() {
  return (
    <div className="bg-black min-h-screen relative">
      <ParallaxBackground />
      <Navigation />
      <Hero />
      <BrandShowcase />
      <MarketplaceFeatures />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;