"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { lofts } from "@/constants/lofts";
import { Users } from "lucide-react";

// Defina uma interface para o objeto loft
interface Loft {
  id: number;
  nome: string;
  slug: string;
  descricao: string;
  capacidade: number;
  thumb: string;
  // Adicione outras propriedades que seus lofts possuem
}

interface RelatedLoftsProps {
  currentLoftId: number;
}

const RelatedLofts = ({ currentLoftId }: RelatedLoftsProps) => {
  // Especifique o tipo do estado como array de Loft
  const [relatedLofts, setRelatedLofts] = useState<Loft[]>([]);

  useEffect(() => {
    // Get 3 random lofts excluding the current one
    const filtered = lofts.filter((loft) => loft.id !== currentLoftId);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setRelatedLofts(shuffled.slice(0, 3));
  }, [currentLoftId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      {relatedLofts.map((loft) => (
        <Link
          key={loft.id}
          href={`/lofts/${loft.slug}`}
          className="block group"
        >
          <div className="card overflow-hidden h-full">
            <div className="relative h-40 overflow-hidden">
              <Image
                src={loft.thumb}
                alt={loft.nome}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                <Users className="h-3 w-3 mr-1" /> {loft.capacidade}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold group-hover:text-ocean-blue-600 transition-colors">
                {loft.nome}
              </h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {loft.descricao}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedLofts;
