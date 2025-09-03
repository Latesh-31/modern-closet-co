import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SeasonalOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Spring Collection",
      subtitle: "Fresh Styles for New Beginnings",
      discount: "30% OFF",
      description: "Light fabrics and vibrant colors perfect for the season",
      bgColor: "bg-gradient-to-br from-secondary-soft to-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      id: 2,
      title: "Weekend Essentials",
      subtitle: "Comfort Meets Style",
      discount: "Buy 2 Get 1",
      description: "Casual wear that doesn't compromise on elegance",
      bgColor: "bg-gradient-to-br from-accent-soft to-accent",
      textColor: "text-accent-foreground"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Seasonal Offers
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't miss out on our limited-time offers and seasonal collections
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <Card 
            key={offer.id}
            className={`${offer.bgColor} border-0 overflow-hidden product-card`}
          >
            <div className="p-8 md:p-12 text-center relative">
              <Badge 
                variant="secondary" 
                className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm font-bold text-sm px-4 py-2"
              >
                {offer.discount}
              </Badge>
              <h3 className={`text-2xl md:text-3xl font-bold ${offer.textColor} mb-2`}>
                {offer.title}
              </h3>
              <p className={`text-lg ${offer.textColor}/80 mb-4`}>
                {offer.subtitle}
              </p>
              <p className={`${offer.textColor}/70 mb-8 max-w-md mx-auto`}>
                {offer.description}
              </p>
              <Button 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 btn-hover"
                size="lg"
              >
                Shop Now
              </Button>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 animate-pulse" />
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/10 animate-pulse delay-300" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SeasonalOffers;