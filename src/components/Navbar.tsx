"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/o-lugar", label: "O Lugar" },
    { href: "/lofts", label: "Lofts" },
    { href: "/vizinhanca", label: "Vizinhança" },
    { href: "/informacoes-uteis", label: "Informações Úteis" },
    { href: "/contato", label: "Contato" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/logo-gercymar.svg"
            alt="GercyMar Lofts"
            width={150}
            height={40}
            className={scrolled ? "h-10 w-auto" : "h-12 w-auto"}
          />
          <span className="hidden md:block text-xs text-gray-500 ml-2 font-light italic">
            Seu paraíso em Arraial do Cabo
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors text-sm ${
                pathname === link.href
                  ? "text-ocean-blue-600 font-medium"
                  : "text-gray-700 hover:text-ocean-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            Reservar
          </a>
        </div>

        {/* Mobile navigation */}
        <div
          className={`fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg ${
                  pathname === link.href
                    ? "text-ocean-blue-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
