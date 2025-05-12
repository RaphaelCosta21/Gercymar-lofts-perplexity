interface Loft {
  id: number;
  nome: string;
  capacidade: number;
  metragem: string;
}

interface LoftHeaderProps {
  loft: Loft;
}

const LoftHeader = ({ loft }: LoftHeaderProps) => {
  return (
    <div className="bg-ocean-blue-800 text-white">
      <div className="container pt-24 pb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Loft {loft.nome}
        </h1>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 text-sm">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            Capacidade: {loft.capacidade} hóspedes
          </span>
          <span className="flex items-center gap-1 text-sm">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
              ></path>
            </svg>
            Metragem: {loft.metragem}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoftHeader;
