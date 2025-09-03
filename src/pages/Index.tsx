import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import SeasonalOffers from "@/components/SeasonalOffers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedCollections />
        <SeasonalOffers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
