export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl?: string;
  type: "foire" | "formation" | "promotion" | "partenariat";
}

export const events: Event[] = [
  {
    id: "e1",
    title: "Foire Internationale de Douala 2024",
    description: "Retrouvez AYEL à la Foire Internationale de Douala. Découvrez notre gamme complète de produits et bénéficiez de conseils personnalisés de nos experts.",
    date: "2024-12-15",
    location: "Parc des Expositions, Douala",
    type: "foire"
  },
  {
    id: "e2",
    title: "Formation des Pharmaciens - Bafoussam",
    description: "Session de formation pour les pharmaciens sur les bienfaits et l'utilisation optimale des produits AYEL.",
    date: "2024-11-20",
    location: "Hôtel Le Président, Bafoussam",
    type: "formation"
  },
  {
    id: "e3",
    title: "Journée Portes Ouvertes - Usine AYEL",
    description: "Visitez notre laboratoire et découvrez comment sont fabriqués vos produits préférés. Une occasion unique de rencontrer notre équipe R&D.",
    date: "2024-10-05",
    location: "Laboratoire AYEL, Douala",
    type: "partenariat"
  },
  {
    id: "e4",
    title: "Promotion Rentrée Scolaire",
    description: "Profitez de nos offres spéciales sur la gamme Kids pendant toute la période de la rentrée. -20% sur Baume Kiné + Kids et Menth + Kids.",
    date: "2024-09-01",
    location: "Toutes les pharmacies partenaires",
    type: "promotion"
  },
  {
    id: "e5",
    title: "Salon de la Santé - Yaoundé",
    description: "AYEL participe au Salon National de la Santé. Venez découvrir nos innovations et rencontrer nos équipes.",
    date: "2024-08-10",
    location: "Palais des Congrès, Yaoundé",
    type: "foire"
  }
];