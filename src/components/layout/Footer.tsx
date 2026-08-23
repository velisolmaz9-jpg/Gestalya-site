import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import Container from "../ui/Container";
import { siteConfig } from "../../config/site.config";
import { getWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";

const columns = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", to: "/" },
      { label: "Nos services", to: "/#services" },
      { label: "Tarifs", to: "/#tarifs" },
      { label: "FAQ", to: "/#faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Mentions légales", to: "/mentions-legales" },
      { label: "Politique de confidentialité", to: "/politique-de-confidentialite" },
    ],
  },
];

// Remplacez ces liens par vos véritables profils dans src/config/site.config.ts
const socials = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "Facebook", href: siteConfig.social.facebook, icon: Facebook },
  { label: "WhatsApp", href: getWhatsAppLink(whatsappMessages.default), icon: MessageCircle },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-champagne-100">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <img src="/logo-white.svg" alt="Gestalya" className="h-8 w-auto" />
          <p className="max-w-xs text-sm text-champagne-100/70">{siteConfig.tagline}</p>
          <div className="flex items-center gap-3 pt-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne-100/20 text-champagne-100 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">{column.title}</h3>
            {column.links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-champagne-100/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">Contact</h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-champagne-100/80 transition-colors hover:text-white"
          >
            {siteConfig.email}
          </a>
          <a
            href={getWhatsAppLink(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-champagne-100/80 transition-colors hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </Container>

      <div className="border-t border-champagne-100/10 py-6">
        <Container className="text-center text-xs text-champagne-100/50">
          © 2026 Gestalya — Tous droits réservés.
        </Container>
      </div>
    </footer>
  );
}
