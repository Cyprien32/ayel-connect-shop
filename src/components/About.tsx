import { Leaf, Award, Heart, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

export const About = () => {
  const { language } = useLanguage();

  const values = language === 'fr' ? [
    {
      icon: Leaf,
      title: "100% Naturel",
      description: "Nos produits sont formulés à partir d'ingrédients naturels soigneusement sélectionnés"
    },
    {
      icon: Award,
      title: "Qualité Certifiée",
      description: "Tous nos produits respectent les normes pharmaceutiques les plus strictes"
    },
    {
      icon: Heart,
      title: "Pour Toute la Famille",
      description: "Des formules adaptées pour adultes et enfants, avec des solutions spécifiques"
    },
    {
      icon: ShieldCheck,
      title: "Efficacité Prouvée",
      description: "Des années d'expérience et de satisfaction client témoignent de notre qualité"
    }
  ] : [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Our products are formulated from carefully selected natural ingredients"
    },
    {
      icon: Award,
      title: "Certified Quality",
      description: "All our products meet the strictest pharmaceutical standards"
    },
    {
      icon: Heart,
      title: "For the Whole Family",
      description: "Formulas adapted for adults and children, with specific solutions"
    },
    {
      icon: ShieldCheck,
      title: "Proven Effectiveness",
      description: "Years of experience and customer satisfaction testify to our quality"
    }
  ];

  return (
    <section id="apropos" className="py-20 md:py-32">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {language === 'fr' ? 'Pourquoi Choisir' : 'Why Choose'}{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AYEL
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === 'fr' 
              ? 'Leader dans les solutions de santé naturelles depuis des années'
              : 'Leader in natural health solutions for years'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="border-border/50 bg-gradient-to-b from-card to-muted/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center mt-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold md:text-3xl">
              {language === 'fr' ? 'Notre Engagement Qualité' : 'Our Quality Commitment'}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {language === 'fr' 
                  ? 'Chez AYEL, nous nous engageons à fournir des produits thérapeutiques de la plus haute qualité. Chaque formule est développée avec soin en utilisant des ingrédients naturels reconnus pour leurs propriétés bénéfiques.'
                  : 'At AYEL, we are committed to providing the highest quality therapeutic products. Each formula is carefully developed using natural ingredients recognized for their beneficial properties.'}
              </p>
              <p>
                {language === 'fr'
                  ? 'Nos baumes, gels et huiles sont conçus pour soulager efficacement les douleurs musculaires, articulaires et respiratoires, tout en respectant votre santé et celle de votre famille.'
                  : 'Our balms, gels and oils are designed to effectively relieve muscle, joint and respiratory pain, while respecting your health and that of your family.'}
              </p>
              <p className="font-medium text-foreground">
                {language === 'fr'
                  ? 'La confiance de nos clients est notre plus grande récompense.'
                  : 'Our customers\' trust is our greatest reward.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? "Années d'Expérience" : "Years of Experience"}
                </div>
              </CardContent>
            </Card>
            <Card className="border-secondary/20 bg-secondary/5">
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-4xl font-bold text-secondary">7</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? "Produits Premium" : "Premium Products"}
                </div>
              </CardContent>
            </Card>
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-4xl font-bold text-accent">10k+</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? "Clients Satisfaits" : "Satisfied Customers"}
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center space-y-2">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? "Naturel" : "Natural"}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
