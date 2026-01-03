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
    name: "Baume KINÉ+",
    description: "Soulagement des douleurs chroniques : arthroses, lombalgies, cervicalgies",
    longDescription: "Le Baume KINÉ+ est un produit thérapeutique puissant à base d'extraits de plantes pour soulager les douleurs chroniques.",
    image: baumeKineTube,
    category: "Douleurs chroniques",
    features: [
      "Principes actifs : Menthe, camphre, eucalyptus",
      "Propriétés : Anti-inflammatoire, analgésique",
      "Indications : Arthroses, lombalgies, cervicalgies"
    ],
    composition: [
      "Menthol",
      "Essence de Camphre",
      "Eucalyptus"
    ],
    modeEmploi: "Appliquer une petite quantité sur la zone douloureuse et masser délicatement jusqu'à absorption complète. Utiliser 2 à 3 fois par jour.",
    contenance: "100g"
  },
  {
    id: "gel-kine",
    name: "Gel KINÉ+",
    description: "Traitement des douleurs aiguës : entorses, contusions, foulures",
    longDescription: "Le Gel KINÉ+ est spécialement formulé pour traiter les douleurs aiguës et les traumatismes sportifs.",
    image: gelKineNew,
    category: "Traumatologie",
    features: [
      "Principes actifs : Menthe, menthe poivrée, eucalyptus",
      "Propriétés : Anti-inflammatoire, analgésique",
      "Indications : Entorses, contusions, foulures"
    ],
    composition: [
      "Menthe",
      "Menthe poivrée",
      "Eucalyptus"
    ],
    modeEmploi: "Appliquer généreusement sur la zone affectée avec un massage doux. Peut être utilisé plusieurs fois par jour selon les besoins.",
    contenance: "100g"
  },
  {
    id: "baume-kine-kids",
    name: "Baume KINÉ+ Kids",
    description: "Formule douce pour les inconforts articulaires et musculaires des enfants",
    longDescription: "Le Baume KINÉ+ Kids est une formule adaptée aux peaux sensibles des enfants avec des principes actifs doux et apaisants.",
    image: baumeKineKidsNew,
    category: "Pédiatrie",
    features: [
      "Principes actifs : Camomille matricaire, ylang ylang, ravinstara",
      "Propriétés : Antispasmodique, calmante, apaisante, hydratante",
      "Indications : Inconforts articulaires, musculaires et cutanés"
    ],
    composition: [
      "Camomille matricaire",
      "Ylang ylang",
      "Ravinstara"
    ],
    modeEmploi: "Appliquer une petite quantité et masser doucement la zone concernée. Convient aux enfants à partir de 3 ans.",
    contenance: "100g"
  },
  {
    id: "huile-kine",
    name: "Huile KINÉ+",
    description: "Huile de massage pour crampes et contractures musculaires",
    longDescription: "L'Huile KINÉ+ est une huile de massage thérapeutique idéale pour les crampes, contractures et massages décontractants.",
    image: huileKineNew,
    category: "Massage",
    features: [
      "Principes actifs : Camphre, eucalyptus",
      "Propriétés : Anti-inflammatoire, myorelaxant",
      "Indications : Crampes, contractures musculaires, massages thérapeutiques"
    ],
    composition: [
      "Camphre",
      "Eucalyptus"
    ],
    modeEmploi: "Appliquer une petite quantité sur la zone à traiter, masser jusqu'à pénétration complète de l'huile.",
    contenance: "125ml"
  },
  {
    id: "menth-plus",
    name: "Menth+",
    description: "Solution naturelle pour les troubles respiratoires",
    longDescription: "Menth+ est votre allié contre les troubles respiratoires. Sa formule concentrée en essences de menthe et d'eucalyptus dégage les voies respiratoires.",
    image: menthPlusNew,
    category: "Respiratoire",
    features: [
      "Principes actifs : Menthe, eucalyptus",
      "Propriétés : Antitussif, décongestionnant nasal, mucolytique",
      "Indications : Toux, rhume, congestion nasale"
    ],
    composition: [
      "Menthe",
      "Eucalyptus"
    ],
    modeEmploi: "Appliquer sur la poitrine et le dos en massant légèrement. Pour inhalation, ajouter une noix de produit dans de l'eau chaude.",
    contenance: "40g"
  },
  {
    id: "menth-kids",
    name: "Menth+ Kids",
    description: "Formule respiratoire adaptée aux enfants",
    longDescription: "Menth+ Kids est spécialement formulé pour les enfants souffrant de troubles respiratoires avec une concentration adaptée.",
    image: menthKidsJar,
    category: "Pédiatrie",
    features: [
      "Principes actifs : Menthe, eucalyptus",
      "Propriétés : Antitussif, décongestionnant nasal, mucolytique",
      "Indications : Toux, rhume, congestion nasale"
    ],
    composition: [
      "Menthe",
      "Eucalyptus"
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