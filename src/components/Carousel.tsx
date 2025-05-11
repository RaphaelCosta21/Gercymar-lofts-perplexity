// src/components/Carousel.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full h-64 md:h-96 mb-4">
      <Image
        src={images[current]}
        alt={`Foto ${current + 1}`}
        fill
        className="object-cover rounded-lg"
      />
      <button
        aria-label="Anterior"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
      >
        <ChevronLeft />
      </button>
      <button
        aria-label="Próximo"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
