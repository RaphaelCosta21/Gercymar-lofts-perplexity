// src/components/LoftAmenities.tsx - Versão melhorada
import {
  Wifi,
  Coffee,
  Snowflake,
  Tv,
  Utensils,
  Wind,
  Waves,
  Bath,
  Droplets,
  Briefcase,
} from "lucide-react";

interface LoftAmenitiesProps {
  amenities: string[];
}

const LoftAmenities = ({ amenities }: LoftAmenitiesProps) => {
  // Função para determinar qual ícone usar baseado no texto da comodidade
  const getAmenityIcon = (amenity: string) => {
    const text = amenity.toLowerCase();

    if (text.includes("wi-fi")) return <Wifi className="text-ocean-blue-600" />;
    if (text.includes("café"))
      return <Coffee className="text-ocean-blue-600" />;
    if (text.includes("ar-condicionado"))
      return <Snowflake className="text-ocean-blue-600" />;
    if (text.includes("tv")) return <Tv className="text-ocean-blue-600" />;
    if (text.includes("cozinha"))
      return <Utensils className="text-ocean-blue-600" />;
    if (text.includes("ventilador"))
      return <Wind className="text-ocean-blue-600" />;
    if (text.includes("varanda"))
      return <Waves className="text-ocean-blue-600" />;
    if (text.includes("banho")) return <Bath className="text-ocean-blue-600" />;
    if (text.includes("roupa"))
      return <Droplets className="text-ocean-blue-600" />;
    if (text.includes("trabalho"))
      return <Briefcase className="text-ocean-blue-600" />;

    // Ícone padrão para outras comodidades
    return (
      <div className="w-5 h-5 bg-ocean-blue-100 rounded-full flex items-center justify-center">
        <div className="w-2 h-2 bg-ocean-blue-600 rounded-full"></div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {amenities.map((amenity, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 hover:border-ocean-blue-200 transition-colors"
        >
          {getAmenityIcon(amenity)}
          <span className="text-gray-700">{amenity}</span>
        </div>
      ))}
    </div>
  );
};

export default LoftAmenities;
