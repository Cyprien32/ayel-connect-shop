import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/237699000000?text=Bonjour! Je suis intéressé par vos produits AYEL.", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg animate-pulse-whatsapp hover:scale-110 transition-transform"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
};