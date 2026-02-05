import { MessageCircle } from 'lucide-react';
import { generateGeneralWhatsAppLink } from '@/data/products';

const WhatsAppButton = () => {
  return (
    <a
      href={generateGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Order on WhatsApp"
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#1A1A1A] text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap">
          Order on WhatsApp
        </div>
        <div className="absolute top-full right-5 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1A1A1A]"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
