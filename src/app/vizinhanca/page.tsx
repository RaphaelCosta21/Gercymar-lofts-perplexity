import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { MapPin, Utensils, Waves, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Vizinhança | GercyMar Lofts Arraial do Cabo",
  description:
    "Conheça o que há ao redor dos GercyMar Lofts. Restaurantes, praias, comércio e atrações locais de Arraial do Cabo próximos à nossa hospedagem.",
};

export default function VizinhancaPage() {
  return (
    <>
      <PageHeader
        title="Vizinhança"
        description="Descubra o que existe ao redor dos lofts"
        backgroundImage="/images/vizinhanca-header.jpg"
      />

      <section className="container py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gray-700">
            Os GercyMar Lofts estão estrategicamente localizados em uma das
            melhores áreas de Arraial do Cabo, próximos a belas praias,
            excelentes restaurantes e diversas opções de comércio e serviços.
            Descubra o que você encontrará a poucos passos da sua hospedagem.
          </p>
        </div>

        {/* Restaurantes */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Utensils className="text-ocean-blue-500 h-6 w-6" />
            <h2 className="section-subtitle">Restaurantes e Gastronomia</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card flex">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src="/images/restaurante-1.jpg"
                  alt="Restaurante Peixe Vivo"
                  fill
                  className="object-cover rounded-l-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">
                  Restaurante Peixe Vivo
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  Frutos do mar • 400m dos lofts
                </p>
                <p className="text-gray-700 text-sm">
                  Especializado em frutos do mar frescos, com vista para o mar e
                  ambiente aconchegante.
                </p>
              </div>
            </div>

            <div className="card flex">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src="/images/restaurante-2.jpg"
                  alt="Sabor do Mar"
                  fill
                  className="object-cover rounded-l-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Sabor do Mar</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Restaurante • 650m dos lofts
                </p>
                <p className="text-gray-700 text-sm">
                  Cozinha contemporânea com ingredientes locais e vista
                  panorâmica para a baía.
                </p>
              </div>
            </div>

            <div className="card flex">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src="/images/restaurante-3.jpg"
                  alt="Pizzaria Bella Cabo"
                  fill
                  className="object-cover rounded-l-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Pizzaria Bella Cabo</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Pizzaria • 300m dos lofts
                </p>
                <p className="text-gray-700 text-sm">
                  Deliciosas pizzas artesanais em forno a lenha, em ambiente
                  familiar.
                </p>
              </div>
            </div>

            <div className="card flex">
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image
                  src="/images/restaurante-4.jpg"
                  alt="Café do Porto"
                  fill
                  className="object-cover rounded-l-xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Café do Porto</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Café • 200m dos lofts
                </p>
                <p className="text-gray-700 text-sm">
                  Cafeteria aconchegante com opções de café da manhã, lanches e
                  bolos caseiros.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Praias */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Waves className="text-ocean-blue-500 h-6 w-6" />
            <h2 className="section-subtitle">Praias Próximas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/praia-anjos.jpg"
                  alt="Praia dos Anjos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Praia dos Anjos</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>5 minutos a pé</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Baía tranquila com águas calmas, ideal para famílias. Ponto de
                  partida para passeios de barco.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/praia-grande.jpg"
                  alt="Praia Grande"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Praia Grande</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>15 minutos a pé</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Extensa faixa de areia com águas cristalinas. Infraestrutura
                  completa com quiosques e restaurantes.
                </p>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/praia-forno.jpg"
                  alt="Praia do Forno"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">Praia do Forno</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>30 minutos de caminhada</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Acessível por trilha ou barco, possui águas transparentes e
                  calmas, excelente para mergulho.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comércio e Serviços */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ShoppingBag className="text-ocean-blue-500 h-6 w-6" />
            <h2 className="section-subtitle">Comércio e Serviços</h2>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3">
                  Supermercados e Farmácias
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-ocean-blue-500 mt-1" />
                    <div>
                      <p className="font-medium">Supermercado Cabo Frio</p>
                      <p className="text-sm text-gray-600">
                        350m dos lofts • Aberto das 8h às 22h
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-ocean-blue-500 mt-1" />
                    <div>
                      <p className="font-medium">Farmácia Saúde</p>
                      <p className="text-sm text-gray-600">
                        200m dos lofts • Aberto 24h
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-ocean-blue-500 mt-1" />
                    <div>
                      <p className="font-medium">Minimercado da Praia</p>
                      <p className="text-sm text-gray-600">
                        100m dos lofts • Aberto das 7h às 20h
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3">Outros Serviços</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-ocean-blue-500 mt-1" />
                    <div>
                      <p className="font-medium">Caixa Eletrônico 24h</p>
                      <p className="text-sm text-gray-600">400m dos lofts</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-ocean-blue-500 mt-1" />
                    <div>
                      <p className="font-medium">
                        Agência de Passeios Mar Azul
                      </p>
                      <p className="text-sm text-gray-600">
                        300m dos lofts • Passeios de barco e mergulho
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-ocean-blue-500 mt-1" />
                    <div>
                      <p className="font-medium">Ponto de Táxi / Transfer</p>
                      <p className="text-sm text-gray-600">
                        250m dos lofts • Serviço 24h
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
