import { Facebook, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <span className="text-xl font-bold text-white">A+</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AYEL
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Votre partenaire santé pour des solutions naturelles et efficaces
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Produits</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Baume Kiné +</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gel Kiné +</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Huile Kiné +</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Menth +</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Entreprise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#apropos" className="hover:text-primary transition-colors">À Propos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Notre Histoire</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Qualité</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Livraison</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Retours</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AYEL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
