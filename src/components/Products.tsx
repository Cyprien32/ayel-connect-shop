import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { useLanguage } from "@/i18n/LanguageContext";
import { Leaf } from "lucide-react";

export const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="produits" className="py-10 md:py-16 bg-muted/30 relative overflow-hidden">
      {/* Decorative plant elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Leaf className="absolute top-10 left-10 w-20 h-20 text-accent/10 rotate-12" />
        <Leaf className="absolute top-20 right-20 w-16 h-16 text-accent/10 -rotate-45" />
        <Leaf className="absolute bottom-20 left-1/4 w-12 h-12 text-accent/8 rotate-90" />
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-accent/5" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,10 Q120,50 100,90 Q80,130 100,170 Q110,130 130,100 Q150,70 130,40 Q110,10 100,10 Z" />
        </svg>
      </div>
      
      <div className="container space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent mb-2">
            <Leaf className="h-5 w-5" />
            <span className="text-sm font-medium">{t.products.subtitle}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.products.title}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.products.titleHighlight}
            </span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
