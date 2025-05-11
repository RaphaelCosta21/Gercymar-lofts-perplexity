// src/components/LoftGallery.tsx
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LoftGalleryProps {
  images: string[];
  loftName: string;
  tour360Url?: string;
}

const LoftGallery = ({ images, loftName, tour360Url }: LoftGalleryProps) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setShowLightbox(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Imagem principal */}
        <div className="lg:col-span-1 row-span-2">
          <div
            className="relative h-80 lg:h-[500px] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={images[0]}
              alt={`${loftName} - Imagem principal`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-lg flex items-center gap-2">
              <Maximize2 size={16} />
              <span className="text-sm">Ver todas as fotos</span>
            </div>

            {tour360Url && (
              <a
                href={tour360Url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-ocean-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-ocean-blue-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Tour Virtual 360°
              </a>
            )}
          </div>
        </div>

        {/* Grade de miniaturas */}
        <div className="lg:col-span-1 grid grid-cols-2 gap-2">
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index + 1}
              className="relative h-40 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            >
              <Image
                src={image}
                alt={`${loftName} - Imagem ${index + 2}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-medium">
                    +{images.length - 5} fotos
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={images[currentIndex]}
                alt={`${loftName} - Visualização em tamanho grande`}
                fill
                className="object-contain"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-10"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoftGallery;
