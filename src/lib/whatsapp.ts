import { siteConfig } from "../config/site.config";

function toWhatsAppDigits(phone: string): string {
  return phone.replace(/[^\d]/g, "");
}

/**
 * Construit un lien wa.me à partir du numéro centralisé dans site.config.ts,
 * avec un message pré-rempli optionnel.
 */
export function getWhatsAppLink(message?: string): string {
  const digits = toWhatsAppDigits(siteConfig.whatsappNumber);
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Messages pré-remplis utilisés selon le bouton/contexte d'appel.
 */
export const whatsappMessages = {
  default:
    "Bonjour Gestalya, je souhaiterais avoir des informations sur votre accompagnement administratif.",
  hero: "Bonjour Gestalya, je souhaiterais être accompagné(e) dans mes démarches administratives.",
  pricing: "Bonjour Gestalya, je souhaiterais commencer l'accompagnement à 49€/mois.",
  finalCta: "Bonjour Gestalya, j'aimerais en savoir plus sur votre accompagnement administratif.",
  floating: "Bonjour Gestalya, j'ai une question concernant votre accompagnement administratif.",
};
