import type { LucideIcon } from "lucide-react";
import { Mail, FileText, Globe, ClipboardCheck, FolderKanban, LifeBuoy } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Mail,
    title: "Courriers administratifs",
    description:
      "Rédaction et mise en forme de vos courriers pour vos échanges avec les administrations et organismes.",
  },
  {
    icon: FileText,
    title: "Formulaires et dossiers",
    description:
      "Aide au remplissage et à la constitution de vos dossiers, pour éviter les erreurs et les oublis.",
  },
  {
    icon: Globe,
    title: "Démarches en ligne",
    description:
      "Accompagnement dans la réalisation de vos démarches sur les plateformes administratives en ligne.",
  },
  {
    icon: ClipboardCheck,
    title: "Suivi des demandes",
    description:
      "Suivi de l'avancement de vos dossiers et relances si nécessaire, pour que rien ne soit oublié.",
  },
  {
    icon: FolderKanban,
    title: "Organisation des documents",
    description: "Classement et organisation de vos documents pour y voir plus clair au quotidien.",
  },
  {
    icon: LifeBuoy,
    title: "Aide aux démarches du quotidien",
    description:
      "Un accompagnement humain et disponible pour toutes les démarches qui vous prennent du temps.",
  },
];
