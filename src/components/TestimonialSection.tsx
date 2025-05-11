"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Simulated testimonials data
// Avaliações reais extraídas do Booking.com
const testimonials = [
  {
    id: 1,
    name: "Hóspede verificado",
    avatar: "/testimonials/avatar1.jpg",
    location: "Brasil",
    text: "A localização é perfeita, pertinho de tudo! A casa atende bem nossas necessidades, a geladeira é grande, dá para fazer comprinhas para economizar um cash!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria",
    avatar: "/testimonials/avatar2.jpg",
    location: "Brasil",
    text: "Maravilhoso! Com toda certeza eu voltarei sem dúvidas alguma, e vou levar minha família toda. Lugar aconchegante e muito familiar, eu amei!",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos",
    avatar: "/testimonials/avatar3.jpg",
    location: "Brasil",
    text: "Excelente localização, ótimo atendimento e a limpeza impecável do quarto, além do ar condicionado ser muito bom, tudo perfeito.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ana Paula",
    avatar: "/testimonials/avatar4.jpg",
    location: "Brasil",
    text: "Apartamento super limpo, organizado, com tudo que eu precisava, tudo estava impecável. Tem geladeira, ar condicionado, TV boa com muitos canais e netflix.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="section-title">O que nossos hóspedes dizem</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.location}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
