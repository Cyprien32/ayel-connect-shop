import { ProductCard } from "./ProductCard";
import baumeKine from "@/assets/baume-kine.jpg";
import gelKine from "@/assets/gel-kine.jpg";
import baumeKineKids from "@/assets/baume-kine-kids.jpg";
import huileKine from "@/assets/huile-kine.jpg";
import menthPlus from "@/assets/menth-plus.jpg";
import menthKids from "@/assets/menth-kids.jpg";

const products = [
  {
    name: "Baume Kiné +",
    description: "Soulagement efficace des douleurs musculaires et articulaires",
    image: baumeKine,
    category: "Thérapeutique",
    features: [
      "Anti-inflammatoire et analgésique",
      "Menthe, camphre et eucalyptus",
      "Pour douleurs musculaires et articulaires"
    ]
  },
  {
    name: "Gel Kiné +",
    description: "Traitement des entorses, foulures et traumatismes aigus",
    image: gelKine,
    category: "Traumatologie",
    features: [
      "Analgésique et anti-inflammatoire",
      "Menthe 2% et Eucalyptus 1,1%",
      "Pour entorse, foulure et tendinite"
    ]
  },
  {
    name: "Baume Kiné + Kids",
    description: "Formule douce spécialement conçue pour les enfants",
    image: baumeKineKids,
    category: "Enfants",
    features: [
      "Anti-inflammatoire et analgésique",
      "Formule calmante et apaisante",
      "Massage thérapeutique pour enfants"
    ]
  },
  {
    name: "Huile Kiné +",
    description: "Huile de massage thérapeutique et décontractante",
    image: huileKine,
    category: "Massage",
    features: [
      "Analgésique myorelaxant",
      "Essences de camphre et eucalyptus",
      "Massage thérapeutique et décontractant"
    ]
  },
  {
    name: "Menth +",
    description: "Solution naturelle pour les troubles respiratoires",
    image: menthPlus,
    category: "Respiratoire",
    features: [
      "Mucolytique et antitussif",
      "Essences de menthe 13,8% et eucalyptus 3%",
      "Pour toux, rhume et grippe"
    ]
  },
  {
    name: "Menth + Kids",
    description: "Formule respiratoire adaptée aux enfants",
    image: menthKids,
    category: "Enfants",
    features: [
      "Mucolytique et anti-inflammatoire",
      "Essence de menthe 4% et eucalyptus 1,1%",
      "Pour encombrement bronchique et toux"
    ]
  }
];

export const Products = () => {
  return (
    <section id="produits" className="py-20 md:py-32 bg-muted/30">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Notre Gamme de{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Produits
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des solutions naturelles et efficaces pour votre santé et votre bien-être
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
