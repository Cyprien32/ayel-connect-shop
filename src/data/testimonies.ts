export interface Testimony {
  id: string;
  name: string;
  location: string;
  productId: string;
  productName: string;
  rating: number;
  comment: string;
  date: string;
}

export const testimonies: Testimony[] = [
  {
    id: "t1",
    name: "Marie Ngo",
    location: "Douala",
    productId: "baume-kine",
    productName: "Baume Kiné +",
    rating: 5,
    comment: "Après des années de douleurs au dos, j'ai enfin trouvé le produit miracle ! Le Baume Kiné + me soulage en quelques minutes. Je le recommande vivement.",
    date: "2024-01-15"
  },
  {
    id: "t2",
    name: "Paul Kamga",
    location: "Yaoundé",
    productId: "gel-kine",
    productName: "Gel Kiné +",
    rating: 5,
    comment: "En tant que footballeur amateur, les entorses sont fréquentes. Le Gel Kiné + est devenu indispensable dans mon sac de sport. Efficacité garantie !",
    date: "2024-02-20"
  },
  {
    id: "t3",
    name: "Sandrine Bella",
    location: "Bafoussam",
    productId: "menth-plus",
    productName: "Menth +",
    rating: 5,
    comment: "Ma famille utilise Menth + depuis 2 ans maintenant. C'est notre premier réflexe en cas de rhume ou de toux. Naturel et très efficace.",
    date: "2024-01-28"
  },
  {
    id: "t4",
    name: "Dr. Emmanuel Tchoupo",
    location: "Douala",
    productId: "huile-kine",
    productName: "Huile Kiné +",
    rating: 5,
    comment: "Je recommande l'Huile Kiné + à mes patients pour les massages thérapeutiques. La qualité des ingrédients naturels fait vraiment la différence.",
    date: "2024-03-05"
  },
  {
    id: "t5",
    name: "Françoise Mbarga",
    location: "Kribi",
    productId: "baume-kine-kids",
    productName: "Baume Kiné + Kids",
    rating: 5,
    comment: "Enfin un produit adapté pour mes enfants ! Le Baume Kiné + Kids les soulage après leurs activités sportives sans irriter leur peau sensible.",
    date: "2024-02-10"
  },
  {
    id: "t6",
    name: "Joseph Eyango",
    location: "Limbé",
    productId: "menth-kids",
    productName: "Menth + Kids",
    rating: 5,
    comment: "Mon fils de 5 ans avait souvent des problèmes respiratoires. Depuis qu'on utilise Menth + Kids, les nuits sont beaucoup plus calmes. Merci AYEL !",
    date: "2024-03-12"
  },
  {
    id: "t7",
    name: "Christine Atangana",
    location: "Garoua",
    productId: "baume-kine",
    productName: "Baume Kiné +",
    rating: 4,
    comment: "Très bon produit pour les douleurs articulaires. L'odeur est agréable et le soulagement est rapide. Je l'utilise quotidiennement.",
    date: "2024-01-05"
  },
  {
    id: "t8",
    name: "Alain Fouda",
    location: "Bertoua",
    productId: "gel-kine",
    productName: "Gel Kiné +",
    rating: 5,
    comment: "Suite à une tendinite, le Gel Kiné + m'a permis de reprendre le travail rapidement. Produit camerounais de qualité !",
    date: "2024-02-28"
  }
];

export const getTestimoniesByProduct = (productId: string): Testimony[] => {
  return testimonies.filter(t => t.productId === productId);
};