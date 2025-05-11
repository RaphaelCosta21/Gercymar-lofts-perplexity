"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  pergunta: string;
  resposta: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

const FaqAccordion = ({ faqs }: FaqAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className={`flex justify-between items-center w-full p-4 text-left font-medium transition ${
              activeIndex === index
                ? "bg-ocean-blue-50"
                : "bg-white hover:bg-gray-50"
            }`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <span>{faq.pergunta}</span>
            <motion.div
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="text-gray-500" />
            </motion.div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                id={`faq-content-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 border-t border-gray-200">
                  <p className="text-gray-700">{faq.resposta}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
