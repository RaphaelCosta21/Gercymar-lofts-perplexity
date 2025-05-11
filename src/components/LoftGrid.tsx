import Link from "next/link";
import Image from "next/image";
import { Users } from "lucide-react";

interface Loft {
  id: number;
  nome: string;
  slug: string;
  descricao: string;
  capacidade: number;
  thumb: string;
  preco: string;
}

interface LoftGridProps {
  lofts: Loft[];
}

const LoftGrid = ({ lofts }: LoftGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lofts.map((loft) => (
        <Link
          href={`/lofts/${loft.slug}`}
          key={loft.id}
          className="block group"
        >
          <div className="card h-full hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-52 overflow-hidden">
              <Image
                src={loft.thumb}
                alt={loft.nome}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-gray-800 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                <Users className="h-3 w-3 mr-1" /> Até {loft.capacidade} pessoas
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 group-hover:text-ocean-blue-600 transition-colors">
                {loft.nome}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {loft.descricao}
              </p>
              <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                <span className="font-semibold text-ocean-blue-600">
                  {loft.preco}
                </span>
                <span className="bg-ocean-blue-50 text-ocean-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Ver detalhes
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LoftGrid;
