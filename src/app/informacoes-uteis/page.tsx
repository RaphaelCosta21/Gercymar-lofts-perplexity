import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import { faq } from "@/constants/faq";
import {
  Clock,
  CreditCard,
  ShieldCheck,
  Landmark,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Informações Úteis | GercyMar Lofts Arraial do Cabo",
  description:
    "Políticas de reserva, check-in e check-out, regras da casa e informações importantes para sua estadia nos lofts GercyMar em Arraial do Cabo.",
};

export default function InformacoesUteisPage() {
  return (
    <>
      <PageHeader
        title="Informações Úteis"
        description="Tudo que você precisa saber para sua estadia"
        backgroundImage="/images/info-header.jpg"
      />

      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold mb-6">
                Informações Essenciais
              </h2>

              <div className="space-y-6">
                <div className="bg-ocean-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full">
                    <Clock className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Horários</h3>
                    <p className="text-sm text-gray-700">
                      <strong>Check-in:</strong> 14:00 às 20:00
                      <br />
                      <strong>Check-out:</strong> até 11:00
                    </p>
                  </div>
                </div>

                <div className="bg-ocean-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full">
                    <CreditCard className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Pagamento</h3>
                    <p className="text-sm text-gray-700">
                      Aceitamos cartões de crédito e débito, PIX e dinheiro.
                      Para confirmar a reserva, é necessário um sinal de 30%.
                    </p>
                  </div>
                </div>

                <div className="bg-ocean-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full">
                    <ShieldCheck className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Segurança</h3>
                    <p className="text-sm text-gray-700">
                      Oferecemos estacionamento privativo, sistema de
                      monitoramento 24h e fechaduras eletrônicas.
                    </p>
                  </div>
                </div>

                <div className="bg-ocean-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full">
                    <Landmark className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Documentação</h3>
                    <p className="text-sm text-gray-700">
                      É necessário apresentar documento com foto de todos os
                      hóspedes adultos no check-in.
                    </p>
                  </div>
                </div>

                <div className="bg-ocean-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full">
                    <FileText className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Contrato</h3>
                    <p className="text-sm text-gray-700">
                      Enviamos o contrato de hospedagem após a confirmação da
                      reserva, para sua segurança e a nossa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Regras da Casa</h2>

            <div className="bg-white shadow-md rounded-xl p-6 mb-10">
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold text-lg">
                    •
                  </span>
                  <span>
                    Não é permitido fumar dentro dos lofts. Há áreas designadas
                    para fumantes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold text-lg">
                    •
                  </span>
                  <span>Não aceitamos animais de estimação.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold text-lg">
                    •
                  </span>
                  <span>
                    Silêncio deve ser mantido entre 22h e 8h, respeitando o
                    descanso dos demais hóspedes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold text-lg">
                    •
                  </span>
                  <span>
                    Não é permitido realizar festas ou eventos nos lofts.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold text-lg">
                    •
                  </span>
                  <span>
                    O número de hóspedes não pode exceder a capacidade máxima
                    especificada para cada loft.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold text-lg">
                    •
                  </span>
                  <span>
                    Ao sair, certifique-se de desligar as luzes, ar-condicionado
                    e fechar as janelas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold text-lg">
                    •
                  </span>
                  <span>
                    As chaves/cartões de acesso devem ser devolvidos no
                    check-out. Perda será cobrada taxa de R$ 50,00.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold text-lg">
                    •
                  </span>
                  <span>
                    Danos ao mobiliário ou estrutura serão cobrados conforme
                    avaliação.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
            <FaqAccordion faqs={faq} />

            <div className="mt-10 bg-sand-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">
                Política de Cancelamento
              </h3>
              <p className="text-gray-700 mb-3">
                Entendemos que imprevistos acontecem. Nossa política de
                cancelamento foi criada para ser justa e flexível:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold">•</span>
                  <span>
                    Até 30 dias antes do check-in: reembolso de 90% do valor
                    pago
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold">•</span>
                  <span>
                    Entre 29 e 15 dias: reembolso de 70% do valor pago
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold">•</span>
                  <span>Entre 14 e 7 dias: reembolso de 50% do valor pago</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean-blue-500 font-bold">•</span>
                  <span>Menos de 7 dias: não haverá reembolso</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">
                * Em casos especiais como doenças graves com comprovação médica,
                podemos avaliar condições diferenciadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
