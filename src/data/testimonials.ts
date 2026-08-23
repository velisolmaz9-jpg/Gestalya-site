export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  rating?: number;
}

/**
 * Aucun avis n'est encore disponible : ne jamais insérer de faux témoignage ici.
 * Ajoutez de vrais avis clients au format ci-dessus dès qu'ils seront disponibles,
 * la section "Avis clients" les affichera automatiquement.
 */
export const testimonials: Testimonial[] = [];
