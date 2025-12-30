import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, ChevronDown } from "lucide-react";
import { salesPoints } from "@/data/salesPoints";
import { useState } from "react";
import productsGroup from "@/assets/products-group.png";
import { useLanguage } from "@/i18n/LanguageContext";

const SalesPointsPage = () => {
  const [expandedCity, setExpandedCity] = useState<string | null>("Douala");
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-12 md:py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, hsl(var(--primary) / 0.85), hsl(var(--primary) / 0.9)), url(${productsGroup})` }}>
        <div className="container text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            {t.salesPoints.title}{" "}
            <span className="text-accent">{t.salesPoints.titleHighlight}</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.salesPoints.subtitle}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {salesPoints.map((city) => (
              <Card key={city.name} className="overflow-hidden">
                <button
                  onClick={() => setExpandedCity(expandedCity === city.name ? null : city.name)}
                  className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{city.name}</span>
                    <span className="text-sm text-muted-foreground">({city.pharmacies.length} pharmacies)</span>
                  </div>
                  <ChevronDown className={`h-5 w-5 transition-transform ${expandedCity === city.name ? "rotate-180" : ""}`} />
                </button>
                
                {expandedCity === city.name && (
                  <div className="border-t px-4 py-2 space-y-3">
                    {city.pharmacies.map((pharmacy, idx) => (
                      <div key={idx} className="py-3 border-b last:border-0">
                        <p className="font-medium">{pharmacy.name}</p>
                        <p className="text-sm text-muted-foreground">{pharmacy.address}</p>
                        {pharmacy.phone && (
                          <a href={`tel:${pharmacy.phone}`} className="text-sm text-primary flex items-center gap-1 mt-1">
                            <Phone className="h-3 w-3" /> {t.salesPoints.phone}: {pharmacy.phone}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SalesPointsPage;
