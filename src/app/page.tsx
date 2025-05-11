import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Anchor, Waves, Sun } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturedLofts from "@/components/FeaturedLofts";
import TestimonialSection from "@/components/TestimonialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GercyMar Lofts | Hospedagem de Luxo em Arraial do Cabo",
  description:
    "Conheça os lofts GercyMar em Arraial do Cabo. Hospedagem exclusiva, moderna e a poucos passos das mais belas praias do Brasil.",
};

export default function Home() {
  return (
    <>
      <HeroSection
        title="Viva o melhor de Arraial do Cabo"
        subtitle="Lofts exclusivos para sua experiência perfeita no Caribe brasileiro"
        ctaText="Reserve seu loft"
        ctaLink="/lofts"
        backgroundImage="/images/hero-arraial.jpg"
      />

      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-subtitle">Arraial do Cabo</h2>
            <h3 className="text-3xl font-bold mb-4 text-ocean-blue-700">
              O Caribe Brasileiro
            </h3>
            <p className="text-gray-700 mb-6">
              Conhecido como o "Caribe Brasileiro", Arraial do Cabo encanta
              visitantes com suas águas cristalinas e areias brancas. Um paraíso
              preservado com praias deslumbrantes, natureza exuberante e
              diversidade marinha impressionante.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-ocean-blue-100 p-2 rounded-lg">
                  <Sun className="text-ocean-blue-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Clima ideal</h4>
                  <p className="text-sm text-gray-600">
                    Sol o ano todo com temperatura média de 26°C
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-ocean-blue-100 p-2 rounded-lg">
                  <Waves className="text-ocean-blue-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Águas claras</h4>
                  <p className="text-sm text-gray-600">
                    Visibilidade de até 15m para mergulho
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-ocean-blue-100 p-2 rounded-lg">
                  <Anchor className="text-ocean-blue-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Passeios de barco</h4>
                  <p className="text-sm text-gray-600">
                    Conheça praias acessíveis apenas por mar
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-ocean-blue-100 p-2 rounded-lg">
                  <MapPin className="text-ocean-blue-600 h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localização</h4>
                  <p className="text-sm text-gray-600">
                    A 160km do Rio de Janeiro
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/o-lugar"
              className="inline-flex items-center text-ocean-blue-600 font-semibold hover:text-ocean-blue-700"
            >
              Descubra mais sobre o destino{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/images/arraial-1.jpg"
                  alt="Praia paradisíaca em Arraial do Cabo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="/images/arraial-2.jpg"
                  alt="Falésias em Arraial do Cabo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <div className="relative h-60 rounded-lg overflow-hidden">
                <Image
                  src="/images/arraial-3.jpg"
                  alt="Vista aérea de Arraial do Cabo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/images/arraial-4.jpg"
                  alt="Pôr do sol em Arraial do Cabo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ocean-blue-50 py-16">
        <div className="container">
          <h2 className="section-title text-ocean-blue-800">Nossos Lofts</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-700 mb-10">
            Acomodações modernas, confortáveis e totalmente equipadas para
            proporcionar uma experiência única em Arraial do Cabo.
          </p>

          <FeaturedLofts />

          <div className="text-center mt-10">
            <Link
              href="/lofts"
              className="btn-primary inline-flex items-center"
            >
              Ver todos os lofts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <section className="container py-16">
        <div className="bg-ocean-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para viver dias incríveis em Arraial do Cabo?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Reserve agora seu loft e prepare-se para uma experiência
            inesquecível no paraíso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/lofts" className="btn-secondary">
              Conhecer os lofts
            </Link>
            <a
              href="https://wa.me/5521999999999?text=Olá! Gostaria de informações sobre os lofts GercyMar."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
