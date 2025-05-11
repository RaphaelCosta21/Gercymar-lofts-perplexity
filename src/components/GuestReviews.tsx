// src/components/GuestReviews.tsx
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

// Avaliações de hóspedes reais do Booking.com e Airbnb
const reviews = [
  {
    id: 1,
    name: "Maria",
    avatar: "/testimonials/avatar2.jpg",
    date: "Abril 2025",
    text: "Maravilhoso! Com toda certeza eu voltarei sem dúvidas alguma, e vou levar minha família toda. Lugar aconchegante e muito familiar, eu amei!",
    rating: 5,
    loft: "Golfinho",
  },
  {
    id: 2,
    name: "Carlos",
    avatar: "/testimonials/avatar3.jpg",
    date: "Março 2025",
    text: "Excelente localização, ótimo atendimento e a limpeza impecável do quarto, além do ar condicionado ser muito bom, tudo perfeito.",
    rating: 5,
    loft: "Estrela do Mar",
  },
  {
    id: 3,
    name: "Ana Paula",
    avatar: "/testimonials/avatar4.jpg",
    date: "Fevereiro 2025",
    text: "Apartamento super limpo, organizado, com tudo que eu precisava, tudo estava impecável. Tem geladeira, ar condicionado, TV boa com muitos canais e netflix.",
    rating: 5,
    loft: "Conchas",
  },
  {
    id: 4,
    name: "Roberto",
    avatar: "/testimonials/avatar5.jpg",
    date: "Janeiro 2025",
    text: "O local é tranquilo e excelente, muito próximo da linda Praia dos Anjos. Os proprietários são muito atenciosos e prestativos. Recomendo!",
    rating: 5,
    loft: "Corais",
  },
];

const GuestReviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            O que dizem nossos hóspedes
          </h2>
          <div className="flex items-center justify-center mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-6 w-6 text-yellow-400"
                fill="currentColor"
              />
            ))}
          </div>
          <p className="text-xl font-semibold">4.9 de 5 estrelas</p>
          <p className="text-gray-600">Baseado em mais de 87 avaliações</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                    <h4 className="font-bold">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-200"
                            }`}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm text-ocean-blue-600 font-medium">
                      Loft {review.loft}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.booking.com/hotel/br/residencial-gercymar.pt-br.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-ocean-blue-600 hover:text-ocean-blue-800 font-medium"
          >
            Ver todas as avaliações no Booking.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;
