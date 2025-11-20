import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ayelLogo from "@/assets/ayel-logo.jpg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={ayelLogo} 
            alt="AYEL Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#accueil" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Accueil
          </a>
          <a href="#produits" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Produits
          </a>
          <a href="#apropos" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            À Propos
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button size="sm" className="gap-2">
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Commander</span>
        </Button>
      </div>
    </header>
  );
};
