import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
}

export const ProductCard = ({ name, description, image, category, features }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 bg-gradient-to-b from-card to-muted/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-0">
        <div className="relative overflow-hidden bg-muted/30 aspect-square">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur">
            {category}
          </Badge>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>

          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button className="w-full gap-2 shadow-md hover:shadow-lg transition-shadow">
          <ShoppingCart className="h-4 w-4" />
          Commander
        </Button>
      </CardFooter>
    </Card>
  );
};
