import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato | GercyMar Lofts Arraial do Cabo",
  description:
    "Entre em contato com os lofts GercyMar em Arraial do Cabo. Formulário, WhatsApp, Instagram e informações para reservas e dúvidas.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        title="Contato"
        description="Estamos sempre disponíveis para ajudar"
        backgroundImage="/images/contato-header.jpg"
      />

      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="section-subtitle mb-6">Fale Conosco</h2>
            <p className="text-gray-700 mb-8">
              Estamos à disposição para esclarecer dúvidas, receber sugestões ou
              ajudar com sua reserva. Preencha o formulário ao lado ou utilize
              um de nossos canais de atendimento direto.
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full flex-shrink-0">
                    <Phone className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone / WhatsApp</p>
                    <a
                      href="https://wa.me/5521999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ocean-blue-600 hover:underline"
                    >
                      (21) 99999-9999
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full flex-shrink-0">
                    <Mail className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <a
                      href="mailto:contato@gercymarlofts.com.br"
                      className="text-ocean-blue-600 hover:underline"
                    >
                      contato@gercymarlofts.com.br
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full flex-shrink-0">
                    <Instagram className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a
                      href="https://instagram.com/gercymarlofts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ocean-blue-600 hover:underline"
                    >
                      @gercymarlofts
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full flex-shrink-0">
                    <Clock className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Horário de Atendimento</p>
                    <p className="text-gray-700">
                      Segunda a Domingo: 8h às 22h
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-ocean-blue-100 p-2 rounded-full flex-shrink-0">
                    <MapPin className="text-ocean-blue-600 h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-700">
                      Rua das Conchas, 123
                      <br />
                      Praia dos Anjos
                      <br />
                      Arraial do Cabo - RJ
                      <br />
                      CEP: 28930-000
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 flex flex-col items-center">
              <Image
                src="/whatsapp-qr.png"
                alt="QR Code WhatsApp"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-lg font-bold mb-2">
                Atendimento via WhatsApp
              </h3>
              <p className="text-center text-gray-700 text-sm mb-4">
                Escaneie o QR Code acima com seu celular
                <br />
                ou clique no botão abaixo
              </p>
              <a
                href="https://wa.me/5521999999999?text=Olá! Vim do site e gostaria de informações sobre os lofts."
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

          <div>
            <h2 className="section-subtitle mb-6">Envie uma Mensagem</h2>
            <ContactForm />

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Nossa Localização</h3>
              <div className="rounded-xl overflow-hidden">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="section-subtitle text-center mb-8">
            Avaliações dos Nossos Hóspedes
          </h2>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <p className="text-lg font-bold">4.9 / 5.0</p>
            <p className="text-gray-600 text-sm">
              Baseado em 87 avaliações reais de hóspedes
            </p>
          </div>

          <a
            href="https://g.page/r/gercymarlofts/review"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-ocean-blue-600 hover:text-ocean-blue-700 font-medium"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </section>
    </>
  );
}
