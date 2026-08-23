import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import { siteConfig } from "../config/site.config";
import { useDocumentHead } from "../hooks/useDocumentHead";

export default function PrivacyPolicy() {
  useDocumentHead({
    title: "Politique de confidentialité | Gestalya",
    description: "Politique de confidentialité et de protection des données personnelles de Gestalya.",
  });

  return (
    <div className="py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Vos données" title="Politique de confidentialité" align="left" />

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-navy-600">
          <p className="rounded-xl bg-champagne-50 px-5 py-4 text-navy-700">
            Gestalya est actuellement un projet en phase de lancement et de prospection, non encore
            immatriculé. Cette page décrit la manière dont vos données sont traitées dès à présent, dans le
            cadre de nos échanges. Elle sera complétée et, le cas échéant, relue par un professionnel du
            droit dès l'immatriculation de l'entreprise.
          </p>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">1. Qui traite vos données</h2>
            <p>
              Les données recueillies via ce site sont traitées dans le cadre du projet Gestalya, porté par
              [À COMPLÉTER — nom du porteur de projet, à préciser dès l'immatriculation]. Pour toute question,
              vous pouvez nous contacter à{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">2. Données collectées</h2>
            <p>
              Dans le cadre de nos échanges (WhatsApp, e-mail) et, le cas échéant, de l'accompagnement
              administratif, nous pouvons être amenés à collecter des informations telles que votre identité,
              vos coordonnées et, si nécessaire à la réalisation de vos démarches, certains documents
              administratifs que vous nous transmettez volontairement.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">3. Finalité du traitement</h2>
            <p>
              Ces données sont utilisées exclusivement pour répondre à vos demandes, échanger avec vous dans
              le cadre du lancement du projet et, le cas échéant, réaliser l'accompagnement administratif que
              vous nous confiez.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">4. Confidentialité</h2>
            <p>
              Les documents et informations que vous nous transmettez sont traités avec confidentialité et ne
              sont utilisés que dans le cadre strict de nos échanges ou de l'accompagnement demandé.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">5. Conservation des données</h2>
            <p>
              Vos données sont conservées uniquement pour la durée nécessaire à nos échanges ou à la
              réalisation de l'accompagnement. [Durée précise à compléter dès la structuration juridique du
              projet].
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">6. Vos droits</h2>
            <p>
              Conformément à la réglementation en vigueur (RGPD), vous disposez d'un droit d'accès, de
              rectification, d'effacement et d'opposition concernant vos données personnelles. Pour exercer
              ces droits, contactez-nous à{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-navy-900">7. Partage des données</h2>
            <p>
              Vos données ne sont ni vendues, ni cédées à des tiers en dehors de ce qui est strictement
              nécessaire pour répondre à votre demande.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
