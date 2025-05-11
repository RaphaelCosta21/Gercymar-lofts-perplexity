import { Metadata } from "next";
import LoftGrid from "@/components/LoftGrid";
import { lofts } from "@/constants/lofts";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Nossos Lofts | GercyMar Lofts Arraial do Cabo",
  description:
    "Conheça todos os nossos 6 lofts exclusivos em Arraial do Cabo. Acomodações para diferentes perfis e necessidades, todas com vista privilegiada.",
};

export default function LoftsPage() {
  return (
    <>
      <PageHeader
        title="Nossos Lofts"
        description="Conheça nossos 6 lofts exclusivos, cada um com características e personalidade única."
        backgroundImage="/images/lofts-header.jpg"
      />

      <section className="container py-16">
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
          Os lofts GercyMar foram projetados para proporcionar conforto,
          modernidade e bem-estar durante sua estadia em Arraial do Cabo. Cada
          unidade possui decoração temática própria, inspirada nas belezas
          naturais da região.
        </p>

        <LoftGrid lofts={lofts} />
      </section>
    </>
  );
}
