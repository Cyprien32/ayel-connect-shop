import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import productsGroup from "@/assets/products-group.png";

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/237699000000?text=Bonjour! Je souhaite en savoir plus sur vos produits.", "_blank");
  };

  return (
    <section id="accueil" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Heart className="h-4 w-4" />
              Votre santé, notre priorité
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Solutions Naturelles
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pour Votre Bien-Être
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Découvrez notre gamme complète de produits thérapeutiques à base d'ingrédients naturels.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/produits">
                  Voir nos produits
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                Nous contacter
              </Button>
            </div>
          </div>

          <div className="relative">
            <img src={productsGroup} alt="Produits AYEL" className="relative rounded-3xl w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};