// src/components/StickyBookingBar.tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface StickyBookingBarProps {
  loftName?: string;
  price?: string;
}

const StickyBookingBar = ({ loftName, price }: StickyBookingBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra a barra após 300px de scroll
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    const message = loftName
      ? `Olá! Gostaria de reservar o loft ${loftName}. Poderia me informar a disponibilidade e valores?`
      : "Olá! Gostaria de informações sobre os lofts GercyMar. Quais estão disponíveis?";

    window.open(
      `https://wa.me/5522996051002?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-3 px-4 z-40 transform transition-transform duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          {loftName && <span className="font-medium">Loft {loftName}</span>}
          {price && (
            <div className="flex items-baseline">
              <span className="text-lg font-bold text-ocean-blue-600">
                {price}
              </span>
              <span className="text-sm text-gray-500 ml-1">/ diária</span>
            </div>
          )}
          {!loftName && !price && (
            <span className="font-medium">GercyMar Lofts</span>
          )}
        </div>

        <button
          onClick={openWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg flex items-center"
        >
          Reservar agora <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default StickyBookingBar;
