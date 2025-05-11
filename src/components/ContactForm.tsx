"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-8">
          <CheckCircle className="text-green-500 h-16 w-16 mb-4" />
          <h3 className="text-xl font-bold mb-2">Mensagem enviada!</h3>
          <p className="text-center text-gray-600">
            Agradecemos seu contato. Responderemos em breve.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="form-label">
              Nome completo
            </label>
            <input
              id="name"
              type="text"
              className={`form-input ${errors.name ? "border-red-500" : ""}`}
              placeholder="Seu nome"
              {...register("name", { required: "Nome é obrigatório" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className={`form-input ${errors.email ? "border-red-500" : ""}`}
              placeholder="seu@email.com"
              {...register("email", {
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="form-label">
              Telefone
            </label>
            <input
              id="phone"
              type="text"
              className={`form-input ${errors.phone ? "border-red-500" : ""}`}
              placeholder="(00) 00000-0000"
              {...register("phone", {
                required: "Telefone é obrigatório",
              })}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="message" className="form-label">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={4}
              className={`form-input ${errors.message ? "border-red-500" : ""}`}
              placeholder="Como podemos ajudar?"
              {...register("message", {
                required: "Mensagem é obrigatória",
                minLength: {
                  value: 10,
                  message: "A mensagem deve ter pelo menos 10 caracteres",
                },
              })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" /> Enviar mensagem
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
