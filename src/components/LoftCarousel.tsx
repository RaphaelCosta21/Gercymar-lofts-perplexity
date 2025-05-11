"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface LoftCarouselProps {
  images: string[];
  title: string;
}

const LoftCarousel = ({ images, title }: LoftCarouselProps) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setShowLightbox(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    document.body.style.overflow = "auto";
  };

  if (!mounted) return null;

  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-xl overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src={image}
                  alt={`${title} - Imagem ${index + 1}`}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => openLightbox(index)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <button
                  className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full"
                  onClick={() => openLightbox(index)}
                >
                  <ZoomIn size={20} />
                </button>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev !text-white !w-10 !h-10 !bg-black/30 !rounded-full flex items-center justify-center">
            <ChevronLeft size={20} />
          </div>
          <div className="swiper-button-next !text-white !w-10 !h-10 !bg-black/30 !rounded-full flex items-center justify-center">
            <ChevronRight size={20} />
          </div>
        </Swiper>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white p-2 z-10"
            onClick={closeLightbox}
          >
            <X size={30} />
          </button>

          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 z-10"
            onClick={() =>
              setActiveIndex((activeIndex - 1 + images.length) % images.length)
            }
          >
            <ChevronLeft size={30} />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={images[activeIndex]}
              alt={`${title} - Imagem em tamanho grande`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 z-10"
            onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default LoftCarousel;
