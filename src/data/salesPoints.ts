export interface City {
  name: string;
  pharmacies: Pharmacy[];
}

export interface Pharmacy {
  name: string;
  address: string;
  phone?: string;
}

export const salesPoints: City[] = [
  {
    name: "Douala",
    pharmacies: [
      { name: "Pharmacie du Centre", address: "Avenue de Gaulle, Akwa", phone: "+237 233 42 00 00" },
      { name: "Pharmacie Moderne", address: "Boulevard de la Liberté, Bonanjo", phone: "+237 233 43 00 00" },
      { name: "Pharmacie de Bonapriso", address: "Rue Joffre, Bonapriso", phone: "+237 233 42 50 00" },
      { name: "Pharmacie du Littoral", address: "Carrefour Ndokoti", phone: "+237 233 41 00 00" },
      { name: "Pharmacie Santé Plus", address: "Bépanda, Double Balle", phone: "+237 233 40 00 00" },
    ]
  },
  {
    name: "Yaoundé",
    pharmacies: [
      { name: "Pharmacie Kennedy", address: "Avenue Kennedy, Centre-ville", phone: "+237 222 23 00 00" },
      { name: "Pharmacie du Mfoundi", address: "Quartier Bastos", phone: "+237 222 21 00 00" },
      { name: "Pharmacie Elig-Essono", address: "Carrefour Elig-Essono", phone: "+237 222 22 00 00" },
      { name: "Pharmacie de Mvog-Mbi", address: "Mvog-Mbi", phone: "+237 222 20 00 00" },
    ]
  },
  {
    name: "Bafoussam",
    pharmacies: [
      { name: "Pharmacie Centrale", address: "Centre Commercial", phone: "+237 233 44 00 00" },
      { name: "Pharmacie de l'Ouest", address: "Quartier Djeleng", phone: "+237 233 44 10 00" },
      { name: "Pharmacie Bamiléké", address: "Marché A", phone: "+237 233 44 20 00" },
    ]
  },
  {
    name: "Garoua",
    pharmacies: [
      { name: "Pharmacie du Nord", address: "Centre-ville", phone: "+237 222 27 00 00" },
      { name: "Pharmacie Bénoué", address: "Quartier Administratif", phone: "+237 222 27 10 00" },
    ]
  },
  {
    name: "Kribi",
    pharmacies: [
      { name: "Pharmacie de la Plage", address: "Centre-ville", phone: "+237 222 46 00 00" },
      { name: "Pharmacie Océan", address: "Quartier Résidentiel", phone: "+237 222 46 10 00" },
    ]
  },
  {
    name: "Limbé",
    pharmacies: [
      { name: "Pharmacie du Mont Cameroun", address: "Down Beach", phone: "+237 233 33 00 00" },
      { name: "Pharmacie Fako", address: "Mile 4", phone: "+237 233 33 10 00" },
    ]
  },
  {
    name: "Bertoua",
    pharmacies: [
      { name: "Pharmacie de l'Est", address: "Centre-ville", phone: "+237 222 24 00 00" },
    ]
  },
  {
    name: "Maroua",
    pharmacies: [
      { name: "Pharmacie de l'Extrême-Nord", address: "Centre Commercial", phone: "+237 222 29 00 00" },
      { name: "Pharmacie Diamaré", address: "Quartier Administratif", phone: "+237 222 29 10 00" },
    ]
  }
];