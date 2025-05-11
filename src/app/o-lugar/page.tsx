import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import GoogleMap from "@/components/GoogleMap";
import {
  ArrowRight,
  Clock,
  CalendarDays,
  Sailboat,
  Droplet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "O Lugar | GercyMar Lofts Arraial do Cabo",
  description:
    "Conheça Arraial do Cabo, o Caribe Brasileiro. Descubra as praias paradisíacas, passeios e a localização estratégica dos lofts GercyMar.",
};

export default function OLugarPage() {
  return (
    <>
      <PageHeader
        title="Arraial do Cabo"
        description="O Caribe Brasileiro"
        backgroundImage="/images/arraial-cabo-aerial.jpg"
      />

      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="section-subtitle">O destino</h2>
            <p className="text-gray-700 mb-4">
              Arraial do Cabo é uma cidade costeira no estado do Rio de Janeiro,
              conhecida por suas praias de águas cristalinas e areias brancas.
              Apelidada de "Caribe Brasileiro", a cidade oferece algumas das
              paisagens mais deslumbrantes do litoral brasileiro.
            </p>
            <p className="text-gray-700 mb-4">
              A região é cercada por falésias, dunas e pelo Parque Estadual da
              Costa do Sol, que preserva a rica biodiversidade local. Os
              visitantes podem desfrutar de praias paradisíacas, mergulho,
              passeios de barco e uma atmosfera tranquila de vila de pescadores.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Clock className="text-ocean-blue-500 h-5 w-5" />
                <span className="text-sm">2h30 do Rio de Janeiro</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="text-ocean-blue-500 h-5 w-5" />
                <span className="text-sm">Alta temporada: Dez a Mar</span>
              </div>
              <div className="flex items-center gap-2">
                <Sailboat className="text-ocean-blue-500 h-5 w-5" />
                <span className="text-sm">Passeios de barco populares</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplet className="text-ocean-blue-500 h-5 w-5" />
                <span className="text-sm">Águas entre 22°C e 26°C</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="/images/arraial-panorama.jpg"
              alt="Vista panorâmica de Arraial do Cabo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="section-title">Principais Praias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="card">
            <div className="relative h-60">
              <Image
                src="/images/praia-do-forno.jpg"
                alt="Praia do Forno"
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Praia do Forno</h3>
              <p className="text-gray-700 mb-3">
                Acessível por trilha ou barco, oferece águas calmas e
                transparentes, ideal para mergulho e natação. Cercada por
                falésias, proporciona vistas deslumbrantes.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Distância dos lofts:</strong> 2,5 km
              </p>
            </div>
          </div>

          <div className="card">
            <div className="relative h-60">
              <Image
                src="/images/praia-grande.jpg"
                alt="Praia Grande"
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Praia Grande</h3>
              <p className="text-gray-700 mb-3">
                Principal praia urbana de Arraial, com extensa faixa de areia
                branca e águas claras. Ótima infraestrutura com quiosques,
                restaurantes e serviços.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Distância dos lofts:</strong> 850 m
              </p>
            </div>
          </div>

          <div className="card">
            <div className="relative h-60">
              <Image
                src="/images/prainhas-pontal.jpg"
                alt="Prainhas do Pontal do Atalaia"
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Prainhas do Pontal</h3>
              <p className="text-gray-700 mb-3">
                Considerada uma das mais belas praias do Brasil, com águas
                cristalinas em tons de azul turquesa. Pequenas enseadas entre
                falésias formam piscinas naturais.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Distância dos lofts:</strong> 4 km
              </p>
            </div>
          </div>
        </div>

        <h2 className="section-title">Como Chegar</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <div className="bg-ocean-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Localização dos Lofts</h3>
              <p className="text-gray-700 mb-4">
                O Residencial GERCYMAR está estrategicamente localizado em
                Arraial do Cabo, a menos de 1 km da Praia dos Anjos e a 10
                minutos a pé da região central, proporcionando fácil acesso às
                principais atrações:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold">•</span>
                  <span>
                    Próximo ao Pórtico de saída para o Pontal do Atalaia
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold">•</span>
                  <span>Menos de 1 km da Praia dos Anjos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold">•</span>
                  <span>10 minutos a pé do centro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold">•</span>
                  <span>Perto de restaurantes e comércios locais</span>
                </li>
              </ul>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-medium text-gray-800">Endereço:</p>
                <p className="text-gray-700">
                  Rua das Conchas, 123
                  <br />
                  Praia dos Anjos
                  <br />
                  Arraial do Cabo, RJ
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <GoogleMap />
          </div>
        </div>

        <div className="bg-sand-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Pronto para conhecer este paraíso?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Reserve seu loft e prepare-se para dias inesquecíveis em um dos
            destinos mais deslumbrantes do litoral brasileiro.
          </p>
          <Link href="/lofts" className="btn-primary inline-flex items-center">
            Ver disponibilidade nos lofts{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
