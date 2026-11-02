/**
 * Single source of truth for every string and price on the pricing page.
 * Components read from here; nothing is hard-coded in JSX.
 */

export type CategoryId = "vitrine" | "ecommerce" | "saas" | "ia";

export type Plan = {
  id: string;
  name: string;
  pitch: string;
  price: number;
  cta: string;
  featured?: boolean;
  /** Short line shown before the feature list, e.g. "Tout le pack Starter, plus :" */
  inherits?: string;
  features: string[];
  delay?: string;
  examples?: string[];
};

export type Option = {
  name: string;
  line: string;
  price: number;
};

/** true = included, false = not included, string = literal value */
export type CompareCell = boolean | string;

export type CompareRow = {
  label: string;
  values: CompareCell[];
};

export type LedgerRow = {
  label: string;
  detail: string;
  result: string;
};

export type Explainer = {
  title: string;
  /** The single word to set in italic serif */
  italic: string;
  text: string;
  ledgerTitle: string;
  ledger: LedgerRow[];
  disclaimer: string;
};

export type Category = {
  id: CategoryId;
  label: string;
  /** Short tab label for narrow screens */
  short: string;
  /** Section heading: roman part, then the one italic word */
  heading: [string, string];
  plans: Plan[];
  options: Option[];
  compare: {
    columns: string[];
    rows: CompareRow[];
  };
  explainer?: Explainer;
};

export const site = {
  brand: "Mindak",
  brandFull: "Mindak Creative Agency",
  studio: "Mindak Studio",
  year: "2026",
  phonePrefix: "+213",
  rights: "All rights reserved",
  address: "El Achour, Alger",
  instagramAgency: { handle: "@mindak.agency", url: "https://www.instagram.com/mindak.agency" },
  instagramStudio: { label: "Mindak Studio", url: "https://www.instagram.com/mindak.studio" },
  meta: {
    title: "Tarifs — Mindak Creative Agency",
    description:
      "Sites vitrine, e-commerce, logiciels SaaS et assistants IA conçus à Alger par Mindak Creative Agency. Des offres claires, des prix affichés, un contact direct sur WhatsApp.",
  },
} as const;

export const header = {
  label: "Tarifs 2026",
  contact: "Nous écrire",
} as const;

export const hero = {
  index: "(00)",
  section: "Tarifs",
  titleLines: ["Des offres claires", "pour des projets", "qui"],
  titleItalic: "durent.",
  byline: "Par",
  sub: "Sites, boutiques, logiciels et assistants IA, conçus à Alger avec le même soin que nos tournages. Choisissez une catégorie, voyez ce qui est inclus, écrivez-nous.",
  darja: "واش تحتاج، نديروهولك بالمعقول",
} as const;

export const labels = {
  tablist: "Catégories de tarifs",
  from: "À partir de",
  currency: "DA",
  featured: "Le plus choisi",
  delay: "Délai",
  examples: "Exemples réels",
  optionsIndex: "(02)",
  optionsKicker: "Complétez votre pack quand vous voulez.",
  optionsTitle: "Options à la carte.",
  optionsRoman: "Options",
  optionsItalic: "à la carte.",
  optionFrom: "Dès",
  optionAdd: "+ Ajouter",
  compareIndex: "(03)",
  compareTitle: "Comparatif détaillé.",
  compareRoman: "Comparatif",
  compareItalic: "détaillé.",
  included: "Inclus",
  notIncluded: "Non inclus",
  plansIndex: "(01)",
  plansNote: "Prix de départ, tout est détaillé. Écrivez-nous sur WhatsApp pour lancer votre pack.",
  compareNote: "Ce qui change d'un pack à l'autre, ligne par ligne.",
  optionsCustomTitle: "Autre chose en tête ?",
  optionsCustomText: "Une option qui n'est pas listée se chiffre sur demande, dans le même esprit.",
  optionsCustomCta: "Demander un chiffrage",
  compareCaption: (category: string) => `Comparatif détaillé des offres ${category}`,
  compareFeatureCol: "Fonctionnalité",
  compareScrollHint: "Faites glisser le tableau",
  ledgerResult: "Résultat",
  ctaOnWhatsapp: "sur WhatsApp",
} as const;

export const closing = {
  titleLines: ["Un projet en tête ?", "On en"],
  highlight: "parle.",
  whatsapp: "Écrire sur WhatsApp",
  whatsappMessage: "Bonjour Mindak, j'ai un projet en tête et j'aimerais en parler.",
} as const;

export const footer = {
  left: `© ${site.year} ${site.brandFull} — ${site.rights}`,
  right: "Mindak Studio",
} as const;

export const whatsappMessages = {
  plan: (name: string, price: string) =>
    `Bonjour Mindak, je suis intéressé(e) par le pack « ${name} » (${price} DA).`,
  option: (name: string, category: string) =>
    `Bonjour Mindak, j'aimerais ajouter l'option « ${name} » à un projet ${category}.`,
  general: "Bonjour Mindak, j'aimerais en savoir plus sur vos offres.",
  custom: (category: string) =>
    `Bonjour Mindak, j'aimerais un chiffrage pour une option sur mesure (${category}).`,
} as const;

const PWA: Option = {
  name: "Web app installable (PWA)",
  line: "Votre site s'installe sur l'écran d'accueil, comme une application.",
  price: 25000,
};
const LANG: Option = {
  name: "Langue supplémentaire",
  line: "Arabe, anglais ou français, traduit et intégré.",
  price: 5000,
};

export const categories: Category[] = [
  {
    id: "vitrine",
    label: "Sites vitrine",
    short: "Vitrine",
    heading: ["Sites", "vitrine."],
    plans: [
      {
        id: "starter",
        name: "Starter — 3 pages",
        pitch: "L'essentiel pour être visible et bien référencé localement.",
        price: 45000,
        cta: "Lancer mon site",
        features: [
          "Design adaptatif mobile & desktop",
          "Jusqu'à 3 pages sur mesure",
          "3 sessions de révisions",
          "Contact WhatsApp direct",
          "3 mois de support technique",
        ],
      },
      {
        id: "premium",
        name: "Premium — 8 pages",
        pitch: "Un site sur mesure, animé, pensé pour marquer.",
        price: 89000,
        cta: "Passer au Premium",
        featured: true,
        inherits: "Tout le pack Starter, plus :",
        features: [
          "Domaine .com offert (1 an)",
          "Jusqu'à 8 pages sur mesure",
          "Animations et design avancés",
          "Structure SEO avancée",
          "Google Maps & statistiques",
          "6 mois de support technique",
        ],
      },
    ],
    options: [
      PWA,
      {
        name: "Système de réservation",
        line: "Vos clients réservent un créneau directement sur le site.",
        price: 20000,
      },
      {
        name: "Page supplémentaire",
        line: "Une page de plus, dessinée dans le même système.",
        price: 9500,
      },
      LANG,
    ],
    compare: {
      columns: ["Starter", "Premium"],
      rows: [
        { label: "Nombre de pages", values: ["3", "8"] },
        { label: "Domaine .com offert", values: [false, true] },
        { label: "Animations avancées", values: [false, true] },
        { label: "SEO avancé", values: [false, true] },
        { label: "Google Maps & stats", values: [false, true] },
        { label: "Support", values: ["3 mois", "6 mois"] },
      ],
    },
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    short: "E-commerce",
    heading: ["Boutiques", "en ligne."],
    plans: [
      {
        id: "landing",
        name: "Landing page — 1 produit",
        pitch: "Une seule page, construite pour vendre un produit.",
        price: 17000,
        cta: "Lancer ma landing",
        features: [
          "Page unique mono-produit",
          "Structure de vente optimisée",
          "Sans tableau de bord",
          "Commandes via WhatsApp",
          "Mobile d'abord",
          "Pixel Facebook / TikTok installé",
        ],
      },
      {
        id: "essentielle",
        name: "Boutique Essentielle",
        pitch: "Une boutique complète que vous gérez seul.",
        price: 75000,
        cta: "Commencer à vendre",
        features: [
          "Tableau de bord admin",
          "Ajouter, modifier, supprimer vos produits",
          "Gestion des commandes",
          "Pages produits",
          "Panier et paiement à la livraison",
          "Formation incluse",
          "Jusqu'à 15 produits",
        ],
      },
      {
        id: "boutique-premium",
        name: "Boutique Premium",
        pitch: "Pour les boutiques sérieuses qui veulent automatiser.",
        price: 150000,
        cta: "Automatiser ma boutique",
        featured: true,
        inherits: "Toute la Boutique Essentielle, plus :",
        features: [
          "Synchronisation API livraison",
          "Gestion avancée des stocks",
          "Variantes (tailles, couleurs)",
          "Alertes de rupture",
          "Masquage auto des produits indisponibles",
          "Confirmation auto des commandes",
          "Codes promo",
          "Notifications automatiques",
          "Jusqu'à 100 produits",
          "Serveur dédié",
          "Maintenance continue",
          "Support prioritaire 7j/7",
        ],
      },
    ],
    options: [
      PWA,
      {
        name: "Ajout de vos produits (jusqu'à 50)",
        line: "On saisit photos, prix et descriptions à votre place.",
        price: 5000,
      },
      LANG,
    ],
    compare: {
      columns: ["Landing", "Essentielle", "Premium"],
      rows: [
        { label: "Gestion des produits", values: [false, true, true] },
        { label: "Tableau de bord", values: [false, true, true] },
        { label: "API livraison", values: [false, false, true] },
        { label: "Stock avancé", values: [false, false, true] },
        { label: "Codes promo", values: [false, false, true] },
        { label: "Automatisation complète", values: [false, false, true] },
        { label: "Support prioritaire 7j/7", values: [false, false, true] },
      ],
    },
  },
  {
    id: "saas",
    label: "Logiciels SaaS",
    short: "SaaS",
    heading: ["Logiciels", "SaaS."],
    explainer: {
      title: "Un logiciel qui vous paie chaque",
      italic: "mois.",
      text: "Vos clients paient un abonnement mensuel ou annuel pour utiliser votre outil. Vous le faites construire une fois, il rapporte tant qu'il sert. Le revenu suit le nombre d'abonnés, pas le nombre d'heures.",
      ledgerTitle: "Exemple concret",
      ledger: [
        {
          label: "Gestion de cliniques",
          detail: "300 000 DA une fois · 100 abonnés × 20 000 DA",
          result: "2 000 000 DA / mois",
        },
        { label: "Écoles privées", detail: "50 × 15 000 DA", result: "750 000 DA / mois" },
        { label: "Salles de sport", detail: "30 × 5 000 DA", result: "150 000 DA / mois" },
        { label: "Grossistes", detail: "40 × 12 000 DA", result: "480 000 DA / mois" },
      ],
      disclaimer: "Exemples indicatifs, non garantis.",
    },
    plans: [
      {
        id: "mvp",
        name: "Lancement (MVP)",
        pitch: "Tester votre idée avec un premier produit qui fonctionne.",
        price: 170000,
        cta: "Lancer mon projet",
        delay: "2 à 3 semaines",
        features: [
          "Application simple",
          "Comptes utilisateurs",
          "Tableau de bord",
          "1 à 2 fonctionnalités clés",
          "Mobile et ordinateur",
          "2 mois de support",
        ],
        examples: ["Gestion de stock pour grossiste", "Livraison locale"],
      },
      {
        id: "croissance",
        name: "Croissance",
        pitch: "Un vrai produit, prêt pour vos clients.",
        price: 250000,
        cta: "Développer mon application",
        featured: true,
        delay: "3 à 5 semaines",
        inherits: "Tout le Lancement, plus :",
        features: [
          "Fonctionnalités avancées",
          "Rôles admin / équipe",
          "Connexion à vos outils externes",
          "UX soignée",
          "Performance optimisée",
          "3 mois de support",
        ],
        examples: ["Cabinet médical", "Gestion de flotte"],
      },
      {
        id: "sur-mesure",
        name: "Sur mesure",
        pitch: "Pour les projets ambitieux, pensés sur le long terme.",
        price: 450000,
        cta: "Demander une étude",
        delay: "Selon le projet",
        inherits: "Tout Croissance, plus :",
        features: [
          "Solution entièrement adaptée",
          "Automatisation des tâches",
          "Multi-utilisateurs avancé",
          "Sécurité renforcée",
          "Support prioritaire",
        ],
        examples: ["Gestion BTP / chantier", "Écoles privées"],
      },
    ],
    options: [
      PWA,
      {
        name: "Réservation avancée",
        line: "Créneaux, ressources et rappels gérés dans l'application.",
        price: 35000,
      },
      {
        name: "Paiement à la réservation",
        line: "Le client règle au moment où il réserve.",
        price: 20000,
      },
      LANG,
    ],
    compare: {
      columns: ["Lancement", "Croissance", "Sur mesure"],
      rows: [
        { label: "Tester une idée", values: [true, true, true] },
        { label: "Produit prêt à l'emploi", values: [false, true, true] },
        { label: "Solution complète et évolutive", values: [false, false, true] },
        { label: "Comptes utilisateurs", values: [true, true, true] },
        { label: "Gestion des accès", values: [false, true, true] },
        { label: "Outils externes", values: [false, true, true] },
        { label: "Automatisation", values: [false, false, true] },
        { label: "Support", values: ["2 mois", "3 mois", "5 mois"] },
      ],
    },
  },
  {
    id: "ia",
    label: "Intelligence artificielle",
    short: "IA",
    heading: ["Intelligence", "artificielle."],
    explainer: {
      title: "Un assistant qui répond",
      italic: "24h/24.",
      text: "Il répond aux questions et qualifie les demandes pendant que vous dormez. Vos clients ont une réponse tout de suite, votre équipe reprend la main quand un humain est utile.",
      ledgerTitle: "Exemple concret",
      ledger: [
        {
          label: "Laboratoire d'analyses",
          detail: "Assistant 80 000 DA · 1 patient de plus par jour × 5 000 DA",
          result: "+150 000 DA de CA / mois",
        },
        {
          label: "Agences immobilières",
          detail: "Qualification des leads",
          result: "24h/24",
        },
        {
          label: "Service client",
          detail: "Temps de réponse manuel",
          result: "jusqu'à −80 %",
        },
        {
          label: "E-commerce",
          detail: "Recommandations produits",
          result: "Panier moyen plus élevé",
        },
      ],
      disclaimer: "Exemples indicatifs, non garantis.",
    },
    plans: [
      {
        id: "assistant-client",
        name: "Assistant client",
        pitch: "Répondez à chaque client, même la nuit.",
        price: 80000,
        cta: "Activer mon assistant",
        features: [
          "Réponses automatiques aux questions fréquentes",
          "Infos pratiques (prix, horaires, services)",
          "Réponse immédiate",
          "Disponible 24h/24 sur site et WhatsApp",
          "Relais vers un humain si besoin",
          "Installation et configuration incluses",
        ],
        examples: ["Laboratoire d'analyses", "Immobilier"],
      },
      {
        id: "assistant-metier",
        name: "Assistant métier",
        pitch: "Une IA entraînée sur vos documents, pour votre équipe.",
        price: 150000,
        cta: "Déployer mon IA métier",
        featured: true,
        inherits: "Tout l'Assistant client, plus :",
        features: [
          "Entraînement sur vos PDF et documents",
          "Réponses basées uniquement sur vos données",
          "Demandes complexes",
          "Aide à la décision",
          "Organisation des flux d'information",
          "Support prioritaire 7j/7",
        ],
        examples: ["Assistant juridique / comptable", "SAV 24/7"],
      },
    ],
    options: [LANG],
    compare: {
      columns: ["Client", "Métier"],
      rows: [
        { label: "FAQ automatique", values: [true, true] },
        { label: "Disponible 24h/24", values: [true, true] },
        { label: "Multi-canal (web, WhatsApp)", values: [true, true] },
        { label: "Entraînement sur documents", values: [false, true] },
        { label: "Demandes complexes", values: [false, true] },
        { label: "Aide à la décision", values: [false, true] },
        { label: "Réponses basées sur vos données", values: [false, true] },
      ],
    },
  },
];

/** "89000" -> "89 000" with a narrow no-break space (U+202F). */
export function formatPrice(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function whatsappUrl(message: string): string {
  const number = (process.env.NEXT_PUBLIC_WHATSAPP ?? "").replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}
