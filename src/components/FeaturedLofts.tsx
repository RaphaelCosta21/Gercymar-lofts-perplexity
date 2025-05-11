"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { lofts } from "@/constants/lofts";
import { motion } from "framer-motion";
import { Users, Maximize2 } from "lucide-react";

const FeaturedLofts = () => {
  // Display only 3 lofts for featured section
  const featuredLofts = lofts.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredLofts.map((loft) => (
        <motion.div
          key={loft.id}
          className="card group"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative h-48 overflow-hidden">
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
            <h3 className="text-xl font-bold mb-2">{loft.nome}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {loft.descricao}
            </p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-ocean-blue-600">
                {loft.preco}
              </span>
              <Link
                href={`/lofts/${loft.slug}`}
                className="text-sm text-ocean-blue-600 hover:text-ocean-blue-800 flex items-center"
              >
                Ver detalhes <Maximize2 className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedLofts;
