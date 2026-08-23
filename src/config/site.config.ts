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
  // Remplacez "contact@MONDOMAINE.FR" par votre véritable adresse.
  email: "contact@MONDOMAINE.FR",

  // Liens réseaux sociaux. Remplacez par vos véritables liens.
  social: {
    instagram: "https://instagram.com/REMPLACER_PAR_VOTRE_COMPTE",
    facebook: "https://facebook.com/REMPLACER_PAR_VOTRE_PAGE",
  },

  price: {
    amount: 49,
    currency: "€",
    period: "mois",
  },
};
