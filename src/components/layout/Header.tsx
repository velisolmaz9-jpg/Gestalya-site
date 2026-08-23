import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { getWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos services", href: "/#services" },
  { label: "Comment ça marche", href: "/#comment-ca-marche" },
  { label: "Tarifs", href: "/#tarifs" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-offwhite/90 shadow-softer backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <img src="/logo.svg" alt="Gestalya" className="h-8 w-auto sm:h-9" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm font-medium text-navy-700 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={getWhatsAppLink(whatsappMessages.default)} variant="primary">
            Nous contacter
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-navy-900 lg:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        className={`fixed inset-x-0 top-20 z-40 origin-top bg-offwhite shadow-card transition-all duration-300 lg:hidden ${
          menuOpen ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-navy-50"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 px-4">
            <Button href={getWhatsAppLink(whatsappMessages.default)} variant="primary" className="w-full">
              Nous contacter
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
