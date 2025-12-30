import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { useLanguage } from "@/i18n/LanguageContext";

export const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="produits" className="py-20 md:py-32 bg-muted/30">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.products.title}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.products.titleHighlight}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.products.subtitle}
          </p>
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
