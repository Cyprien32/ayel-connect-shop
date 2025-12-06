import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import productsHero from "@/assets/products-hero.jpg";

export const Hero = () => {
  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-medical-green-light via-background to-medical-blue/10 py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" />
              Votre santé, notre priorité
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Solutions Naturelles
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Pour Votre Bien-Être
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-xl">
                Découvrez notre gamme complète de produits thérapeutiques à base d'ingrédients naturels. 
                Soulagement efficace pour toute la famille.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow" asChild>
                <Link to="/produits">
                  Voir nos produits
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Naturel</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">7+</div>
                <div className="text-sm text-muted-foreground">Produits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img
              src={productsHero}
              alt="Produits AYEL"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
