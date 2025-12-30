import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { testimonies } from "@/data/testimonies";
import { products } from "@/data/products";
import productsGroup from "@/assets/products-group.png";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { productTranslations } from "@/i18n/translations";

const TestimoniesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("all");
  const { t, language } = useLanguage();

  const filteredTestimonies = selectedProduct === "all" 
    ? testimonies 
    : testimonies.filter(t => t.productId === selectedProduct);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-12 md:py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, hsl(var(--primary) / 0.85), hsl(var(--primary) / 0.9)), url(${productsGroup})` }}>
        <div className="container text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            {t.testimonials.title}{" "}
            <span className="text-accent">{t.testimonials.titleHighlight}</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedProduct("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedProduct === "all" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
              }`}
            >
              {language === 'fr' ? 'Tous les produits' : 'All products'}
            </button>
            {products.map(product => {
              const productT = productTranslations[language][product.id as keyof typeof productTranslations.fr];
              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedProduct === product.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {productT?.name || product.name}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonies.map((testimony) => (
              <Card key={testimony.id} className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="text-muted-foreground">{testimony.comment}</p>
                <div className="flex gap-1">
                  {[...Array(testimony.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <p className="font-semibold">{testimony.name}</p>
                  <p className="text-sm text-muted-foreground">{testimony.location}</p>
                  <p className="text-xs text-primary mt-1">{t.testimonials.product}: {testimony.productName}</p>
                </div>
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

export default TestimoniesPage;
