import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "GercyMar Lofts | Hospedagem em Arraial do Cabo",
  description:
    "Descubra os lofts exclusivos da GercyMar em Arraial do Cabo. Conforto e estilo para suas férias na praia mais bonita do Brasil.",
  keywords: "arraial do cabo, lofts, hospedagem, praia, férias, rio de janeiro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
