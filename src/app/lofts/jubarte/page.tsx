import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getLoftBySlug } from "@/constants/lofts";
import LoftCarousel from "@/components/LoftCarousel";
import ReservationButton from "@/components/ReservationButton";
import LoftAmenities from "@/components/LoftAmenities";
import LoftHeader from "@/components/LoftHeader";
import RelatedLofts from "@/components/RelatedLofts";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const loft = getLoftBySlug(params.slug);

  if (!loft) {
    return {
      title: "Loft não encontrado | GercyMar Lofts",
    };
  }

  return {
    title: `${loft.nome} | GercyMar Lofts Arraial do Cabo`,
    description: loft.descricao.substring(0, 160),
  };
}

export default function LoftPage({ params }: { params: { slug: string } }) {
  const loft = getLoftBySlug(params.slug);

  if (!loft) {
    notFound();
  }

  return (
    <>
      <LoftHeader loft={loft} />

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <LoftCarousel images={loft.fotos} title={loft.nome} />

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Sobre o {loft.nome}</h2>
              <p className="text-gray-700">{loft.descricao}</p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  O que este espaço oferece
                </h3>
                <LoftAmenities amenities={loft.comodidades} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">
                  {loft.preco}{" "}
                  <span className="text-sm font-normal text-gray-600">
                    / diária
                  </span>
                </h3>
                <span className="bg-ocean-blue-100 text-ocean-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                  {loft.capacidade} hóspedes
                </span>
              </div>

              <div className="border-t border-gray-200 my-4 pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Metragem:</span>
                  <span className="font-medium">{loft.metragem}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Capacidade:</span>
                  <span className="font-medium">
                    Até {loft.capacidade} pessoas
                  </span>
                </div>
              </div>

              <ReservationButton loftName={loft.nome} />

              <div className="mt-6 bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                <p className="mb-2 font-medium">Observações:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Check-in a partir das 14h</li>
                  <li>Check-out até às 11h</li>
                  <li>Não é permitido fumar</li>
                  <li>Não aceitamos animais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="section-subtitle">Conheça outros lofts</h2>
          <RelatedLofts currentLoftId={loft.id} />
        </div>
      </div>
    </>
  );
}
