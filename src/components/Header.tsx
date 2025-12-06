import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ayelLogo from "@/assets/ayel-logo.jpg";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

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
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link to="/produits" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Produits
          </Link>
          <a href="/#apropos" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            À Propos
          </a>
          <button onClick={handleContactClick} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact
          </button>
        </nav>

        <Button size="sm" className="gap-2" onClick={handleContactClick}>
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Commander</span>
        </Button>
      </div>
    </header>
  );
};
