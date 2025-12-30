import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/i18n/LanguageContext";
import { productTranslations } from "@/i18n/translations";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
}

export const ProductCard = ({ id, name, description, image, category, features }: ProductCardProps) => {
  const { language, t } = useLanguage();
  
  const productT = productTranslations[language][id as keyof typeof productTranslations.fr];
  const displayName = productT?.name || name;
  const displayDescription = productT?.description || description;
  const displayFeatures = productT?.features || features;

  const categoryMap: Record<string, keyof typeof t.categories> = {
    "Thérapeutique": "therapeutic",
    "Traumatologie": "traumatology",
    "Enfants": "children",
    "Massage": "massage",
    "Respiratoire": "respiratory",
  };

  const translatedCategory = t.categories[categoryMap[category] || "therapeutic"];

  return (
    <Card className="group overflow-hidden border-border/50 bg-gradient-to-b from-card to-muted/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-0">
        <div className="relative overflow-hidden bg-muted/30 aspect-square">
          <img
            src={image}
            alt={displayName}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur">
            {translatedCategory}
          </Badge>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{displayName}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{displayDescription}</p>
          </div>

          <div className="space-y-2">
            {displayFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
