import { Facebook, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ayelLogo from "@/assets/ayel-logo-new.png";

export const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/237699000000", "_blank");
  };

  return (
    <footer className="border-t border-border/40 bg-primary/5">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src={ayelLogo} 
                alt="AYEL Logo" 
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Votre partenaire santé pour des solutions naturelles et efficaces à base de plantes.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/ayelgroup" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <a 
                href="tel:+237699000000"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary">Nos Produits</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/produits/baume-kine" className="hover:text-primary transition-colors">Baume Kiné +</Link></li>
              <li><Link to="/produits/gel-kine" className="hover:text-primary transition-colors">Gel Kiné +</Link></li>
              <li><Link to="/produits/huile-kine" className="hover:text-primary transition-colors">Huile Kiné +</Link></li>
              <li><Link to="/produits/menth-plus" className="hover:text-primary transition-colors">Menth +</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/produits" className="hover:text-primary transition-colors">Tous les produits</Link></li>
              <li><Link to="/temoignages" className="hover:text-primary transition-colors">Témoignages clients</Link></li>
              <li><Link to="/points-de-vente" className="hover:text-primary transition-colors">Où nous trouver</Link></li>
              <li><Link to="/evenements" className="hover:text-primary transition-colors">Événements</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary">Nous Contacter</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+237699000000" className="hover:text-primary transition-colors">+237 699 000 000</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Douala, Cameroun</span>
              </li>
              <li>
                <button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  <MessageCircle className="h-4 w-4" />
                  Écrire sur WhatsApp
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AYEL Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};