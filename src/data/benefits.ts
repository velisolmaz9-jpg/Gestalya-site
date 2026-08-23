import type { LucideIcon } from "lucide-react";
import { Clock, HeartHandshake, Sparkles, ListChecks, Lock, Smile } from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
}

export const benefits: Benefit[] = [
  { icon: Clock, title: "Gain de temps" },
  { icon: HeartHandshake, title: "Accompagnement humain" },
  { icon: Sparkles, title: "Simplicité" },
  { icon: ListChecks, title: "Suivi personnalisé" },
  { icon: Lock, title: "Confidentialité" },
  { icon: Smile, title: "Moins de stress administratif" },
];
