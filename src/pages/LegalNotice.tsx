import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { siteConfig } from "../config/site.config";
import { useDocumentHead } from "../hooks/useDocumentHead";

export default function LegalNotice() {
  useDocumentHead({
    title: "Mentions légales | Gestalya",
    description: "Mentions légales du site Gestalya.",
  });

  return (
    <div className="py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Informations légales" title="Mentions légales" align="left" />

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-navy-600">
          <p className="rounded-xl bg-champagne-50 px-5 py-4 text-navy-700">
            Cette page doit être complétée avec les informations légales exactes de votre entreprise avant la
            mise en ligne du site (forme juridique, numéro SIREN/SIRET, adresse du siège, hébergeur, etc.).
          </p>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">1. Éditeur du site</h2>
            <p>
              Nom de l'entreprise : Gestalya
              <br />
              Forme juridique : [À COMPLÉTER]
              <br />
              Adresse du siège social : [À COMPLÉTER]
              <br />
              Numéro SIREN / SIRET : [À COMPLÉTER]
              <br />
              Responsable de la publication : [À COMPLÉTER]
              <br />
              E-mail de contact :{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">2. Hébergement</h2>
            <p>Le site est hébergé par : [À COMPLÉTER — nom de l'hébergeur, adresse, contact].</p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, visuels, logo) sont la propriété de
              Gestalya, sauf mention contraire, et ne peuvent être reproduits sans autorisation préalable.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">4. Responsabilité</h2>
            <p>
              Gestalya s'efforce d'assurer l'exactitude des informations diffusées sur ce site, sans garantir
              qu'elles soient exemptes d'erreurs. L'utilisateur reste responsable de l'usage qu'il fait des
              informations disponibles sur le site.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">5. Contact</h2>
            <p>
              Pour toute question relative à ces mentions légales, vous pouvez nous contacter à l'adresse{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
