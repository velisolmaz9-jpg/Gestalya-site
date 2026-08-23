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
            Gestalya est actuellement un projet en phase de lancement et de prospection. La société n'est pas
            encore immatriculée à ce jour. Cette page sera mise à jour avec les informations légales complètes
            (numéro SIREN/SIRET, forme juridique, hébergeur, etc.) dès l'immatriculation effective de
            l'entreprise.
          </p>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">1. Présentation du site</h2>
            <p>
              Ce site présente le projet Gestalya et ses services envisagés, et permet aux personnes
              intéressées de nous contacter dans le cadre de cette phase de lancement. Il ne s'agit pas, à ce
              stade, du site d'une société commerciale immatriculée.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">2. Responsable du projet</h2>
            <p>
              Nom du projet : Gestalya
              <br />
              Porteur du projet : [À COMPLÉTER]
              <br />
              Statut juridique : projet en cours de structuration, non immatriculé à ce jour
              <br />
              Numéro SIREN / SIRET : non applicable pour le moment — sera ajouté dès l'immatriculation
              <br />
              Adresse : [À COMPLÉTER, le cas échéant]
              <br />
              E-mail de contact :{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">3. Hébergement</h2>
            <p>Le site est hébergé par : [À COMPLÉTER — nom de l'hébergeur, adresse, contact].</p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, visuels, logo) sont la propriété de
              Gestalya, sauf mention contraire, et ne peuvent être reproduits sans autorisation préalable.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">5. Indépendance du projet</h2>
            <p>
              Gestalya est un service indépendant. Gestalya n'est ni partenaire, ni mandataire, ni
              représentant d'une administration publique ou d'une entreprise tierce, sauf mention contraire
              explicite sur ce site.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">6. Responsabilité</h2>
            <p>
              Les informations et services présentés sur ce site correspondent au projet Gestalya en phase de
              lancement et sont susceptibles d'évoluer. Gestalya s'efforce d'assurer l'exactitude des
              informations diffusées, sans garantir qu'elles soient exemptes d'erreurs. L'utilisateur reste
              responsable de l'usage qu'il fait des informations disponibles sur le site.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">7. Contact</h2>
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
