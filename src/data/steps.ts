export interface Step {
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Vous nous contactez",
    description: "Expliquez-nous votre besoin.",
  },
  {
    number: "02",
    title: "Vous nous transmettez vos documents",
    description: "Nous vous indiquons exactement ce dont nous avons besoin.",
  },
  {
    number: "03",
    title: "Nous nous occupons des démarches",
    description: "Nous préparons, remplissons et suivons votre dossier.",
  },
  {
    number: "04",
    title: "Vous restez informé",
    description: "Nous vous tenons au courant de l'avancement.",
  },
];
