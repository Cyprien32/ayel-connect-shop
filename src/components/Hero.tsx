import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import productsGroup from "@/assets/products-group.png";
import { useLanguage } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open("https://wa.me/237699000000?text=Bonjour! Je souhaite en savoir plus sur vos produits.", "_blank");
  };

  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-20">
      {/* Decorative plant elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -top-20 -left-20 w-96 h-96 text-accent/10" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,10 Q120,50 100,90 Q80,130 100,170 Q110,130 130,100 Q150,70 130,40 Q110,10 100,10 Z" />
          <path d="M60,30 Q80,60 70,100 Q60,140 80,160 Q70,120 90,80 Q110,40 80,20 Q60,10 60,30 Z" />
        </svg>
        <svg className="absolute -bottom-20 -right-20 w-80 h-80 text-accent/10 rotate-180" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,10 Q120,50 100,90 Q80,130 100,170 Q110,130 130,100 Q150,70 130,40 Q110,10 100,10 Z" />
          <path d="M140,30 Q160,60 150,100 Q140,140 160,160 Q150,120 170,80 Q190,40 160,20 Q140,10 140,30 Z" />
        </svg>
        <Leaf className="absolute top-1/4 right-10 w-16 h-16 text-accent/15 rotate-45" />
        <Leaf className="absolute bottom-1/3 left-10 w-12 h-12 text-accent/15 -rotate-12" />
        <Leaf className="absolute top-1/2 right-1/4 w-8 h-8 text-accent/10 rotate-90" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2 text-sm font-medium text-accent">
              <Leaf className="h-4 w-4" />
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {t.hero.title1}
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/produits">
                  {t.hero.viewProducts}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                {t.hero.contactUs}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
            <img src={productsGroup} alt="Produits AYEL" className="relative rounded-3xl w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};