import baumeKineKidsNew from "@/assets/baume-kine-kids-new.png";
import baumeKineTube from "@/assets/baume-kine-tube.jpg";
import gelKineNew from "@/assets/gel-kine-new.png";
import huileKineNew from "@/assets/huile-kine-new.png";
import menthPlusNew from "@/assets/menth-plus-new.png";
import menthKidsNew from "@/assets/menth-kids-new.png";
import menthKidsJar from "@/assets/menth-kids-jar.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  features: string[];
  composition: string[];
  modeEmploi: string;
  contenance: string;
}

export const products: Product[] = [
  {
    id: "baume-kine",
    name: "Baume Kiné +",
    description: "Soulagement efficace des douleurs musculaires et articulaires",
    longDescription: "Le Baume Kiné + est un produit thérapeutique puissant formulé pour soulager rapidement les douleurs musculaires et articulaires. Sa formule à base d'ingrédients naturels pénètre en profondeur pour offrir un soulagement durable.",
    image: baumeKineTube,
    category: "Thérapeutique",
    features: [
      "Anti-inflammatoire et analgésique",
      "Menthe, camphre et eucalyptus",
      "Pour douleurs musculaires et articulaires"
    ],
    composition: [
      "Menthol",
      "Essence de Camphre",
      "Eucalyptus",
      "Huiles essentielles"
    ],
    modeEmploi: "Appliquer une petite quantité sur la zone douloureuse et masser délicatement jusqu'à absorption complète. Utiliser 2 à 3 fois par jour.",
    contenance: "100g"
  },
  {
    id: "gel-kine",
    name: "Gel Kiné +",
    description: "Traitement des entorses, foulures et traumatismes aigus",
    longDescription: "Le Gel Kiné + est spécialement formulé pour traiter les traumatismes sportifs et les blessures aiguës. Sa texture gel permet une application précise et une absorption rapide pour un soulagement immédiat.",
    image: gelKineNew,
    category: "Traumatologie",
    features: [
      "Analgésique et anti-inflammatoire",
      "Menthe 2% et Eucalyptus 1,1%",
      "Pour entorse, foulure et tendinite"
    ],
    composition: [
      "Menthe 2%",
      "Eucalyptus 1,1%",
      "Agents refroidissants",
      "Gel base aqueuse"
    ],
    modeEmploi: "Appliquer généreusement sur la zone affectée avec un massage doux. Peut être utilisé plusieurs fois par jour selon les besoins.",
    contenance: "100g"
  },
  {
    id: "baume-kine-kids",
    name: "Baume Kiné + Kids",
    description: "Formule douce spécialement conçue pour les enfants",
    longDescription: "Le Baume Kiné + Kids est une formule adaptée aux peaux sensibles des enfants. Efficace mais doux, il soulage les douleurs musculaires tout en respectant la délicatesse de leur peau.",
    image: baumeKineKidsNew,
    category: "Enfants",
    features: [
      "Anti-inflammatoire et analgésique",
      "Formule calmante et apaisante",
      "Massage thérapeutique pour enfants"
    ],
    composition: [
      "Formule douce adaptée aux enfants",
      "Ingrédients naturels",
      "Sans alcool"
    ],
    modeEmploi: "Appliquer une petite quantité et masser doucement la zone concernée. Convient aux enfants à partir de 3 ans.",
    contenance: "100g"
  },
  {
    id: "huile-kine",
    name: "Huile Kiné +",
    description: "Huile de massage thérapeutique et décontractante",
    longDescription: "L'Huile Kiné + est une huile de massage premium enrichie en essences naturelles. Idéale pour les massages thérapeutiques, elle détend les muscles et favorise la récupération.",
    image: huileKineNew,
    category: "Massage",
    features: [
      "Analgésique myorelaxant",
      "Essences de camphre et eucalyptus",
      "Massage thérapeutique et décontractant"
    ],
    composition: [
      "Huile végétale",
      "Essences de Camphre (20%)",
      "Essences d'Eucalyptus (2%)"
    ],
    modeEmploi: "Appliquer une petite quantité sur la zone à traiter, masser jusqu'à pénétration complète de l'huile.",
    contenance: "125ml"
  },
  {
    id: "menth-plus",
    name: "Menth +",
    description: "Solution naturelle pour les troubles respiratoires",
    longDescription: "Menth + est votre allié contre les troubles respiratoires. Sa formule concentrée en essences de menthe et d'eucalyptus dégage les voies respiratoires et apaise la toux.",
    image: menthPlusNew,
    category: "Respiratoire",
    features: [
      "Mucolytique et antitussif",
      "Essences de menthe 13,8% et eucalyptus 3%",
      "Pour toux, rhume et grippe"
    ],
    composition: [
      "Essence de Menthe 13,8%",
      "Eucalyptus 3%",
      "Ingrédients naturels"
    ],
    modeEmploi: "Appliquer sur la poitrine et le dos en massant légèrement. Pour inhalation, ajouter une noix de produit dans de l'eau chaude.",
    contenance: "40g"
  },
  {
    id: "menth-kids",
    name: "Menth + Kids",
    description: "Formule respiratoire adaptée aux enfants",
    longDescription: "Menth + Kids est spécialement formulé pour les enfants souffrant de troubles respiratoires. Sa concentration adaptée offre un soulagement efficace tout en étant doux pour les jeunes.",
    image: menthKidsJar,
    category: "Enfants",
    features: [
      "Mucolytique et anti-inflammatoire",
      "Essence de menthe 4% et eucalyptus 1,1%",
      "Pour encombrement bronchique et toux"
    ],
    composition: [
      "Essence de Menthe 4%",
      "Eucalyptus 1,1%",
      "Formule adaptée aux enfants"
    ],
    modeEmploi: "Appliquer sur la poitrine de l'enfant en massant doucement. Convient aux enfants à partir de 2 ans.",
    contenance: "40g"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const categories = [...new Set(products.map(p => p.category))];