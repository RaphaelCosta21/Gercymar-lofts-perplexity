// src/app/lofts/[slug]/page.tsx
import { getLoftBySlug } from "@/constants/lofts";
import Link from "next/link";

export default function LoftPage({ params }: { params: { slug: string } }) {
  const loft = getLoftBySlug(params.slug);

  // Versão simplificada sem imagens
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">
        Loft {loft?.nome || "não encontrado"}
      </h1>

      {loft ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <p className="text-gray-700">{loft.descricao}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Detalhes</h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Código:</span> {loft.codigo}
                </li>
                <li>
                  <span className="font-medium">Capacidade:</span>{" "}
                  {loft.capacidade} pessoas
                </li>
                <li>
                  <span className="font-medium">Metragem:</span> {loft.metragem}
                </li>
                <li>
                  <span className="font-medium">Preço:</span> {loft.preco} /
                  diária
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Comodidades</h2>
              <ul className="grid grid-cols-1 gap-1">
                {loft.comodidades.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-ocean-blue-600 mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <a
              href={`https://wa.me/5522996051002?text=Olá! Tenho interesse no loft ${loft.nome}. Está disponível?`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg inline-flex items-center"
            >
              Reservar pelo WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          Loft não encontrado.{" "}
          <Link href="/lofts" className="underline">
            Voltar para lista
          </Link>
        </div>
      )}

      <div className="mt-8">
        <Link href="/lofts" className="text-ocean-blue-600 hover:underline">
          &larr; Voltar para todos os lofts
        </Link>
      </div>
    </div>
  );
}
