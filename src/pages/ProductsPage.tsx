import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import baumeKine from "@/assets/baume-kine.jpg";
import gelKine from "@/assets/gel-kine.jpg";
import baumeKineKids from "@/assets/baume-kine-kids.jpg";
import huileKine from "@/assets/huile-kine.jpg";
import menthPlus from "@/assets/menth-plus.jpg";
import menthKids from "@/assets/menth-kids.jpg";
import productsHero from "@/assets/products-hero.jpg";

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

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={productsHero} 
            alt="Produits AYEL" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="container relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Notre{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gamme Complète
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez tous nos produits naturels pour votre santé et votre bien-être
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
