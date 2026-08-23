import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { useDocumentHead } from "../hooks/useDocumentHead";

export default function NotFound() {
  useDocumentHead({ title: "Page introuvable | Gestalya" });

  return (
    <div className="flex flex-col items-center gap-6 py-32 text-center">
      <Container className="flex flex-col items-center gap-6">
        <span className="font-heading text-6xl font-bold text-navy-900">404</span>
        <p className="max-w-md text-navy-500">Cette page n'existe pas ou plus.</p>
        <Button to="/">Retour à l'accueil</Button>
      </Container>
    </div>
  );
}
