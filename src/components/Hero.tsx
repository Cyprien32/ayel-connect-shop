import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import productsGroup from "@/assets/products-group.png";
import { useLanguage } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open("https://wa.me/237699000000?text=Bonjour! Je souhaite en savoir plus sur vos produits.", "_blank");
  };

  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center bg-background overflow-hidden">
      {/* Decorative shapes - Blue/Green theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blue leaf shape behind image */}
        <svg 
          className="absolute top-1/4 right-0 w-[600px] h-[600px] text-primary/10" 
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M100,20 Q150,50 160,100 Q170,150 130,180 Q90,200 60,160 Q30,120 50,70 Q70,20 100,20 Z" />
        </svg>
        
        {/* Bottom left green decorative leaf */}
        <svg 
          className="absolute -bottom-20 -left-20 w-80 h-80 text-accent/15 rotate-45" 
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M100,10 Q140,40 150,90 Q160,140 120,170 Q80,200 50,150 Q20,100 60,50 Q100,10 100,10 Z" />
        </svg>
        
        {/* Bottom right decorative shape */}
        <svg 
          className="absolute -bottom-10 right-1/4 w-64 h-64 text-accent/10" 
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M100,30 Q130,50 140,90 Q150,130 120,160 Q90,180 60,150 Q30,110 50,70 Q80,30 100,30 Z" />
        </svg>

        {/* Small floating accent */}
        <div className="absolute top-20 left-1/4 w-4 h-4 rounded-full bg-accent/30" />
        <div className="absolute bottom-1/3 left-16 w-3 h-3 rounded-full bg-primary/30" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8 max-w-xl">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              AYEL
            </span>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-tight">
              {t.hero.title1}
              <span className="block text-primary">
                {t.hero.title2}
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button 
                size="lg" 
                className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 uppercase tracking-wide font-semibold" 
                asChild
              >
                <Link to="/produits">
                  {t.hero.viewProducts}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 uppercase tracking-wide font-semibold" 
                onClick={handleWhatsApp}
              >
                {t.hero.contactUs}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right image with decorative frame */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Image container with rounded corners */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[2rem] blur-xl" />
              <img 
                src={productsGroup} 
                alt="Gamme KINÉ+" 
                className="relative rounded-[1.5rem] w-full max-w-lg object-contain shadow-2xl" 
              />
              
              {/* Slogan badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-background border-2 border-primary rounded-full px-6 py-3 shadow-lg">
                <p className="text-lg md:text-xl font-bold text-primary whitespace-nowrap">
                  {t.hero.slogan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
