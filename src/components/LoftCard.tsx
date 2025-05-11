// src/components/LoftCard.tsx - Versão melhorada
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Star, Heart, Coffee, Wifi, Snowflake } from "lucide-react";

interface LoftCardProps {
  loft: {
    id: number;
    nome: string;
    slug: string;
    codigo: string;
    descricao: string;
    capacidade: number;
    preco: string;
    thumb: string;
    comodidades: string[];
  };
}

const LoftCard = ({ loft }: LoftCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Extract key amenities for badges
  const hasWifi = loft.comodidades.some((item) =>
    item.toLowerCase().includes("wi-fi")
  );
  const hasCoffee = loft.comodidades.some((item) =>
    item.toLowerCase().includes("café")
  );
  const hasAC = loft.comodidades.some((item) =>
    item.toLowerCase().includes("ar-condicionado")
  );

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden h-full"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={`/lofts/${loft.slug}`} className="block h-full">
        <div className="relative">
          <div className="relative h-52 overflow-hidden">
            <Image
              src={loft.thumb}
              alt={loft.nome}
              fill
              className={`object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-1 rounded-lg">
              #{loft.codigo}
            </div>
            <button
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              onClick={(e) => {
                e.preventDefault(); /* Favorite logic */
              }}
              aria-label="Favoritar"
            >
              <Heart className="h-4 w-4 text-gray-500" />
            </button>
          </div>

          {/* Amenity badges */}
          <div className="absolute -bottom-4 left-3 right-3 flex gap-2">
            {hasWifi && (
              <div
                className="bg-white shadow-md p-2 rounded-full"
                title="Wi-Fi"
              >
                <Wifi className="h-4 w-4 text-ocean-blue-500" />
              </div>
            )}
            {hasCoffee && (
              <div
                className="bg-white shadow-md p-2 rounded-full"
                title="Cafeteira"
              >
                <Coffee className="h-4 w-4 text-ocean-blue-500" />
              </div>
            )}
            {hasAC && (
              <div
                className="bg-white shadow-md p-2 rounded-full"
                title="Ar-condicionado"
              >
                <Snowflake className="h-4 w-4 text-ocean-blue-500" />
              </div>
            )}
          </div>
        </div>

        <div className="p-5 pt-7">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">
              Loft {loft.nome}
            </h3>
            <div className="flex items-center gap-1 bg-ocean-blue-50 px-2 py-0.5 rounded-lg">
              <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
              <span className="text-sm font-medium">4.9</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {loft.descricao}
          </p>

          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <div>
              <span className="text-ocean-blue-600 font-bold">
                {loft.preco}
              </span>
              <span className="text-gray-500 text-sm"> / diária</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <Users className="h-4 w-4" />
              <span>até {loft.capacidade}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LoftCard;
