"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Wait for client-side to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <section className="hero-section">
      <Image
        src={backgroundImage}
        alt="Arraial do Cabo"
        priority
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="overlay-gradient">
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mt-4 mb-8 text-center max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={buttonVariants}
        >
          <Link href={ctaLink} className="btn-primary">
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
