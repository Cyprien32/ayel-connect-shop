import { Facebook, Phone, MapPin, MessageCircle, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import ayelLogo from "@/assets/ayel-logo-new.png";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/237699000000", "_blank");
  };

  return (
    <footer className="border-t border-border/40 bg-primary/5 relative overflow-hidden">
      {/* Decorative plant elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Leaf className="absolute top-10 right-10 w-24 h-24 text-accent/5 rotate-45" />
        <Leaf className="absolute bottom-10 left-10 w-16 h-16 text-accent/5 -rotate-12" />
      </div>
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
              {t.footer.description}
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
            <h3 className="text-sm font-semibold text-primary">{t.nav.products}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/produits" className="hover:text-primary transition-colors">Baume Kiné +</Link></li>
              <li><Link to="/produits" className="hover:text-primary transition-colors">Gel Kiné +</Link></li>
              <li><Link to="/produits" className="hover:text-primary transition-colors">Huile Kiné +</Link></li>
              <li><Link to="/produits" className="hover:text-primary transition-colors">Menth +</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/produits" className="hover:text-primary transition-colors">{t.nav.products}</Link></li>
              <li><Link to="/temoignages" className="hover:text-primary transition-colors">{t.nav.testimonials}</Link></li>
              <li><Link to="/points-de-vente" className="hover:text-primary transition-colors">{t.nav.salesPoints}</Link></li>
              <li><Link to="/evenements" className="hover:text-primary transition-colors">{t.nav.events}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary">{t.footer.contact}</h3>
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
                  {language === 'fr' ? 'Écrire sur WhatsApp' : 'Write on WhatsApp'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AYEL Group. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
