export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    // Header
    nav: {
      home: "Accueil",
      products: "Nos Produits",
      testimonials: "Témoignages",
      salesPoints: "Où nous trouver",
      events: "Événements",
      contact: "Contact",
    },
    // Hero
    hero: {
      badge: "KINÉ+, et la douleur disparaît",
      title1: "Solutions Naturelles",
      title2: "Pour Votre Bien-Être",
      description: "Découvrez notre gamme complète de produits thérapeutiques à base d'ingrédients naturels.",
      viewProducts: "Voir nos produits",
      contactUs: "Nous contacter",
    },
    // Products
    products: {
      title: "Notre Gamme de",
      titleHighlight: "Produits",
      subtitle: "Des solutions naturelles et efficaces pour votre santé et votre bien-être",
      pageTitle: "Notre",
      pageTitleHighlight: "Gamme Complète",
      pageSubtitle: "Découvrez tous nos produits naturels pour votre santé et votre bien-être",
    },
    // Product details
    productDetails: {
      composition: "Composition",
      usage: "Mode d'emploi",
      content: "Contenance",
    },
    // Testimonials
    testimonials: {
      title: "Nos Clients",
      titleHighlight: "Témoignent",
      subtitle: "Découvrez les retours de nos clients satisfaits",
      product: "Produit utilisé",
    },
    // Sales Points
    salesPoints: {
      title: "Où Trouver",
      titleHighlight: "Nos Produits",
      subtitle: "Retrouvez nos produits dans les pharmacies partenaires",
      phone: "Tél",
    },
    // Events
    events: {
      title: "Nos",
      titleHighlight: "Événements",
      subtitle: "Découvrez les activités phares du laboratoire AYEL",
    },
    // Contact
    contact: {
      title: "Contactez",
      titleHighlight: "Nous",
      subtitle: "Nous sommes à votre écoute pour répondre à toutes vos questions",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      message: "Votre message",
      send: "Envoyer le message",
      whatsapp: "Contacter sur WhatsApp",
      call: "Appeler directement",
      facebook: "Suivez-nous sur Facebook",
    },
    // About
    about: {
      title: "À Propos",
      titleHighlight: "d'AYEL",
      description: "AYEL est un laboratoire pharmaceutique camerounais spécialisé dans la production de produits thérapeutiques naturels de haute qualité.",
      mission: "Notre Mission",
      missionText: "Offrir des solutions de santé naturelles, accessibles et efficaces pour améliorer le bien-être de tous.",
      values: "Nos Valeurs",
      valuesText: "Qualité, innovation, accessibilité et respect de la nature sont au cœur de notre engagement.",
    },
    // Footer
    footer: {
      description: "Laboratoire pharmaceutique camerounais spécialisé dans les produits thérapeutiques naturels.",
      quickLinks: "Liens Rapides",
      contact: "Contact",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés.",
    },
    // Categories
    categories: {
      therapeutic: "Douleurs chroniques",
      traumatology: "Traumatologie",
      children: "Pédiatrie",
      massage: "Massage",
      respiratory: "Respiratoire",
    },
  },
  en: {
    // Header
    nav: {
      home: "Home",
      products: "Our Products",
      testimonials: "Testimonials",
      salesPoints: "Where to Find Us",
      events: "Events",
      contact: "Contact",
    },
    // Hero
    hero: {
      badge: "KINÉ+, and the pain disappears",
      title1: "Natural Solutions",
      title2: "For Your Well-Being",
      description: "Discover our complete range of therapeutic products made from natural ingredients.",
      viewProducts: "View our products",
      contactUs: "Contact us",
    },
    // Products
    products: {
      title: "Our Range of",
      titleHighlight: "Products",
      subtitle: "Natural and effective solutions for your health and well-being",
      pageTitle: "Our",
      pageTitleHighlight: "Complete Range",
      pageSubtitle: "Discover all our natural products for your health and well-being",
    },
    // Product details
    productDetails: {
      composition: "Composition",
      usage: "How to use",
      content: "Content",
    },
    // Testimonials
    testimonials: {
      title: "Our Customers",
      titleHighlight: "Testimonials",
      subtitle: "Discover feedback from our satisfied customers",
      product: "Product used",
    },
    // Sales Points
    salesPoints: {
      title: "Where to Find",
      titleHighlight: "Our Products",
      subtitle: "Find our products in partner pharmacies",
      phone: "Phone",
    },
    // Events
    events: {
      title: "Our",
      titleHighlight: "Events",
      subtitle: "Discover the flagship activities of AYEL laboratory",
    },
    // Contact
    contact: {
      title: "Contact",
      titleHighlight: "Us",
      subtitle: "We are here to answer all your questions",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      message: "Your message",
      send: "Send message",
      whatsapp: "Contact on WhatsApp",
      call: "Call directly",
      facebook: "Follow us on Facebook",
    },
    // About
    about: {
      title: "About",
      titleHighlight: "AYEL",
      description: "AYEL is a Cameroonian pharmaceutical laboratory specializing in the production of high-quality natural therapeutic products.",
      mission: "Our Mission",
      missionText: "To offer natural, accessible and effective health solutions to improve everyone's well-being.",
      values: "Our Values",
      valuesText: "Quality, innovation, accessibility and respect for nature are at the heart of our commitment.",
    },
    // Footer
    footer: {
      description: "Cameroonian pharmaceutical laboratory specializing in natural therapeutic products.",
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved.",
    },
    // Categories
    categories: {
      therapeutic: "Chronic Pain",
      traumatology: "Traumatology",
      children: "Pediatrics",
      massage: "Massage",
      respiratory: "Respiratory",
    },
  },
};

export const productTranslations = {
  fr: {
    "baume-kine": {
      name: "Baume Kiné +",
      description: "Soulagement efficace des douleurs musculaires et articulaires",
      longDescription: "Le Baume Kiné + est un produit thérapeutique puissant formulé pour soulager rapidement les douleurs musculaires et articulaires. Sa formule à base d'ingrédients naturels pénètre en profondeur pour offrir un soulagement durable.",
      features: [
        "Anti-inflammatoire et analgésique",
        "Menthe, camphre et eucalyptus",
        "Pour douleurs musculaires et articulaires"
      ],
      modeEmploi: "Appliquer une petite quantité sur la zone douloureuse et masser délicatement jusqu'à absorption complète. Utiliser 2 à 3 fois par jour.",
    },
    "gel-kine": {
      name: "Gel Kiné +",
      description: "Traitement des entorses, foulures et traumatismes aigus",
      longDescription: "Le Gel Kiné + est spécialement formulé pour traiter les traumatismes sportifs et les blessures aiguës. Sa texture gel permet une application précise et une absorption rapide pour un soulagement immédiat.",
      features: [
        "Analgésique et anti-inflammatoire",
        "Menthe 2% et Eucalyptus 1,1%",
        "Pour entorse, foulure et tendinite"
      ],
      modeEmploi: "Appliquer généreusement sur la zone affectée avec un massage doux. Peut être utilisé plusieurs fois par jour selon les besoins.",
    },
    "baume-kine-kids": {
      name: "Baume Kiné + Kids",
      description: "Formule douce spécialement conçue pour les enfants",
      longDescription: "Le Baume Kiné + Kids est une formule adaptée aux peaux sensibles des enfants. Efficace mais doux, il soulage les douleurs musculaires tout en respectant la délicatesse de leur peau.",
      features: [
        "Anti-inflammatoire et analgésique",
        "Formule calmante et apaisante",
        "Massage thérapeutique pour enfants"
      ],
      modeEmploi: "Appliquer une petite quantité et masser doucement la zone concernée. Convient aux enfants à partir de 3 ans.",
    },
    "huile-kine": {
      name: "Huile Kiné +",
      description: "Huile de massage thérapeutique et décontractante",
      longDescription: "L'Huile Kiné + est une huile de massage premium enrichie en essences naturelles. Idéale pour les massages thérapeutiques, elle détend les muscles et favorise la récupération.",
      features: [
        "Analgésique myorelaxant",
        "Essences de camphre et eucalyptus",
        "Massage thérapeutique et décontractant"
      ],
      modeEmploi: "Appliquer une petite quantité sur la zone à traiter, masser jusqu'à pénétration complète de l'huile.",
    },
    "menth-plus": {
      name: "Menth +",
      description: "Solution naturelle pour les troubles respiratoires",
      longDescription: "Menth + est votre allié contre les troubles respiratoires. Sa formule concentrée en essences de menthe et d'eucalyptus dégage les voies respiratoires et apaise la toux.",
      features: [
        "Mucolytique et antitussif",
        "Essences de menthe 13,8% et eucalyptus 3%",
        "Pour toux, rhume et grippe"
      ],
      modeEmploi: "Appliquer sur la poitrine et le dos en massant légèrement. Pour inhalation, ajouter une noix de produit dans de l'eau chaude.",
    },
    "menth-kids": {
      name: "Menth + Kids",
      description: "Formule respiratoire adaptée aux enfants",
      longDescription: "Menth + Kids est spécialement formulé pour les enfants souffrant de troubles respiratoires. Sa concentration adaptée offre un soulagement efficace tout en étant doux pour les jeunes.",
      features: [
        "Mucolytique et anti-inflammatoire",
        "Essence de menthe 4% et eucalyptus 1,1%",
        "Pour encombrement bronchique et toux"
      ],
      modeEmploi: "Appliquer sur la poitrine de l'enfant en massant doucement. Convient aux enfants à partir de 2 ans.",
    },
  },
  en: {
    "baume-kine": {
      name: "Baume Kiné +",
      description: "Effective relief for muscle and joint pain",
      longDescription: "Baume Kiné + is a powerful therapeutic product formulated to quickly relieve muscle and joint pain. Its natural ingredient formula penetrates deeply to provide lasting relief.",
      features: [
        "Anti-inflammatory and analgesic",
        "Menthol, camphor and eucalyptus",
        "For muscle and joint pain"
      ],
      modeEmploi: "Apply a small amount to the painful area and massage gently until completely absorbed. Use 2 to 3 times a day.",
    },
    "gel-kine": {
      name: "Gel Kiné +",
      description: "Treatment for sprains, strains and acute trauma",
      longDescription: "Gel Kiné + is specially formulated to treat sports injuries and acute injuries. Its gel texture allows precise application and rapid absorption for immediate relief.",
      features: [
        "Analgesic and anti-inflammatory",
        "Menthol 2% and Eucalyptus 1.1%",
        "For sprains, strains and tendinitis"
      ],
      modeEmploi: "Apply generously to the affected area with a gentle massage. Can be used several times a day as needed.",
    },
    "baume-kine-kids": {
      name: "Baume Kiné + Kids",
      description: "Gentle formula specially designed for children",
      longDescription: "Baume Kiné + Kids is a formula adapted to children's sensitive skin. Effective yet gentle, it relieves muscle pain while respecting the delicacy of their skin.",
      features: [
        "Anti-inflammatory and analgesic",
        "Calming and soothing formula",
        "Therapeutic massage for children"
      ],
      modeEmploi: "Apply a small amount and gently massage the affected area. Suitable for children from 3 years old.",
    },
    "huile-kine": {
      name: "Huile Kiné +",
      description: "Therapeutic and relaxing massage oil",
      longDescription: "Huile Kiné + is a premium massage oil enriched with natural essences. Ideal for therapeutic massages, it relaxes muscles and promotes recovery.",
      features: [
        "Muscle relaxant analgesic",
        "Camphor and eucalyptus essences",
        "Therapeutic and relaxing massage"
      ],
      modeEmploi: "Apply a small amount to the area to be treated, massage until the oil is completely absorbed.",
    },
    "menth-plus": {
      name: "Menth +",
      description: "Natural solution for respiratory problems",
      longDescription: "Menth + is your ally against respiratory problems. Its formula concentrated in menthol and eucalyptus essences clears the airways and soothes coughs.",
      features: [
        "Mucolytic and antitussive",
        "Menthol 13.8% and eucalyptus 3% essences",
        "For cough, cold and flu"
      ],
      modeEmploi: "Apply to chest and back with a light massage. For inhalation, add a small amount to hot water.",
    },
    "menth-kids": {
      name: "Menth + Kids",
      description: "Respiratory formula adapted for children",
      longDescription: "Menth + Kids is specially formulated for children suffering from respiratory problems. Its adapted concentration offers effective relief while being gentle on young ones.",
      features: [
        "Mucolytic and anti-inflammatory",
        "Menthol 4% and eucalyptus 1.1% essence",
        "For bronchial congestion and cough"
      ],
      modeEmploi: "Apply to the child's chest with a gentle massage. Suitable for children from 2 years old.",
    },
  },
};
