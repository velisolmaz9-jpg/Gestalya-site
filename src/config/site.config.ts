/**
 * Configuration centrale du site Gestalya.
 * Modifiez les valeurs ci-dessous pour mettre à jour le site partout à la fois.
 */
export const siteConfig = {
  name: "Gestalya",
  tagline: "Votre bras droit administratif.",

  // Numéro WhatsApp professionnel (utilisé par lib/whatsapp.ts).
  // Modifiez uniquement cette valeur pour changer le numéro sur tout le site.
  whatsappNumber: "+33 6 59 83 36 85",

  // Adresse e-mail professionnelle liée au nom de domaine OVH.
  email: "contact@gestalya.fr",

  // Liens réseaux sociaux officiels de Gestalya.
  social: {
    instagram: "https://www.instagram.com/gestalya/",
    facebook: "https://www.facebook.com/profile.php?id=61593830663043",
  },

  price: {
    amount: 49,
    currency: "€",
    period: "mois",
  },
};
