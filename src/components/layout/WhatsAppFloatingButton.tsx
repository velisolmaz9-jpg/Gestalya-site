import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, whatsappMessages } from "../../lib/whatsapp";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppLink(whatsappMessages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Gestalya sur WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform duration-300 hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} aria-hidden="true" />
    </a>
  );
}
