import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, ChevronDown } from "lucide-react";
import { salesPoints } from "@/data/salesPoints";
import { useState } from "react";

const SalesPointsPage = () => {
  const [expandedCity, setExpandedCity] = useState<string | null>("Douala");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Où Trouver{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Nos Produits
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Retrouvez les produits AYEL dans les pharmacies partenaires près de chez vous
          </p>
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
                            <Phone className="h-3 w-3" /> {pharmacy.phone}
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