import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import mensCollection from "@/assets/mens-collection.jpg";
import womensCollection from "@/assets/womens-collection.jpg";
import kidsCollection from "@/assets/kids-collection.jpg";

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Men's Collection",
      description: "Timeless pieces for the modern gentleman",
      image: mensCollection,
      gradient: "collection-gradient-men",
      href: "/men"
    },
    {
      id: 2,
      title: "Women's Collection",
      description: "Elegant styles for every occasion",
      image: womensCollection,
      gradient: "collection-gradient-women",
      href: "/women"
    },
    {
      id: 3,
      title: "Kids Collection",
      description: "Playful and comfortable for little ones",
      image: kidsCollection,
      gradient: "collection-gradient-kids",
      href: "/kids"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Shop by Collection
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our carefully curated collections designed for every style and season
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Card 
            key={collection.id} 
            className="group overflow-hidden border-0 shadow-soft hover:shadow-large transition-all duration-500 product-card"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 ${collection.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                <Button 
                  variant="outline" 
                  className="bg-white/20 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm btn-hover"
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {collection.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {collection.description}
              </p>
              <Button 
                variant="ghost" 
                className="text-primary hover:text-primary/80 hover:bg-primary-soft p-0 h-auto font-semibold"
              >
                Explore Collection →
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;