import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Image
              src="/logo-gercymar-white.svg"
              alt="GercyMar Lofts"
              width={180}
              height={50}
              className="mb-4"
            />
            <p className="text-sm mb-4">
              Hospedagem exclusiva em Arraial do Cabo, com conforto, modernidade
              e a melhor localização.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/gercymarlofts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga-nos no Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/gercymarlofts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Curta nossa página no Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/o-lugar"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  O Lugar
                </Link>
              </li>
              <li>
                <Link
                  href="/lofts"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Lofts
                </Link>
              </li>
              <li>
                <Link
                  href="/vizinhanca"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Vizinhança
                </Link>
              </li>
              <li>
                <Link
                  href="/informacoes-uteis"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Informações Úteis
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Lofts</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/lofts/golfinho"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Golfinho
                </Link>
              </li>
              <li>
                <Link
                  href="/lofts/conchas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Conchas
                </Link>
              </li>
              <li>
                <Link
                  href="/lofts/corais"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Corais
                </Link>
              </li>
              <li>
                <Link
                  href="/lofts/dunas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dunas
                </Link>
              </li>
              <li>
                <Link
                  href="/lofts/estrela-do-mar"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Estrela do Mar
                </Link>
              </li>
              <li>
                <Link
                  href="/lofts/jubarte"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Jubarte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>(21) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>contato@gercymarlofts.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  Rua das Conchas, 123
                  <br />
                  Praia dos Anjos
                  <br />
                  Arraial do Cabo - RJ
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} GercyMar Lofts. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0">
              <a
                href="https://g.page/r/gercymarlofts/review"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Avalie-nos no Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
