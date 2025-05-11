"use client";

import { CalendarCheck } from "lucide-react";

interface ReservationButtonProps {
  loftName: string;
}

const ReservationButton = ({ loftName }: ReservationButtonProps) => {
  const handleReservation = () => {
    const message = `Olá! Gostaria de reservar o loft ${loftName}. Poderia me informar a disponibilidade e valores?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5522996051002?text=${encodedMessage}`, "_blank");
  };

  return (
    <button
      onClick={handleReservation}
      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
    >
      <CalendarCheck className="h-5 w-5 mr-2" />
      Reservar via WhatsApp
    </button>
  );
};

export default ReservationButton;
