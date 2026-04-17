"use client";

import { useState } from "react";

type FormField = "nombre" | "email" | "mensaje";
type FormValues = Record<FormField, string>;
type FormErrors = Partial<Record<FormField, string>>;

const EMPTY: FormValues = { nombre: "", email: "", mensaje: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.nombre.trim().length < 2) {
    errors.nombre = "El nombre debe tener al menos 2 caracteres.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  if (values.mensaje.trim().length < 10) {
    errors.mensaje = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: FormField, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const next = validate({ ...values, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: next[field] }));
    }
  }

  function handleBlur(field: FormField) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validate(values)[field] }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ nombre: true, email: true, mensaje: true });
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setValues(EMPTY);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  }

  const inputClass = (field: FormField) =>
    `h-11 w-full rounded-[8px] border px-4 text-[14px] text-[#27223f] outline-none transition placeholder:text-[#b2b6c8] focus:ring-2 focus:ring-[#6d44f7]/20 ${
      errors[field]
        ? "border-[#e8364f] bg-[#fff5f6] focus:border-[#e8364f]"
        : "border-[#d7d1f0] bg-white focus:border-[#6d44f7]"
    }`;

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-[#f2f0fb] py-16 xl:py-20"
      id="contacto"
    >
      <div className="mx-auto max-w-[1280px] px-4 xl:px-6">
        <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_rgba(109,68,247,0.1)]">
          <div className="grid md:grid-cols-2">

            {/* Info panel */}
            <div className="bg-[linear-gradient(135deg,#6843f7_0%,#744cff_55%,#35a8f5_100%)] px-5 py-10 md:px-8 xl:px-12">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/70">
                Contáctanos
              </p>
              <h2
                className="text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-white xl:text-[36px]"
                id="contact-heading"
              >
                ¿Tienes alguna pregunta?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                Nuestro equipo está disponible para ayudarte a elegir el
                programa que mejor se adapta a tus metas profesionales.
              </p>

              <div className="mt-8 space-y-4 md:mt-10 md:space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg
                      fill="none"
                      height="18"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-white/70">
                      Correo
                    </p>
                    <p className="text-[15px] font-medium text-white">
                      contacto@adipa.cl
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg
                      fill="none"
                      height="18"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.34h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.82-.83a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-white/70">
                      Teléfono
                    </p>
                    <p className="text-[15px] font-medium text-white">
                      +56 2 2938 7600
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <svg
                      fill="none"
                      height="18"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-white/70">
                      Dirección
                    </p>
                    <p className="text-[15px] font-medium text-white">
                      Av. Providencia 1208, Santiago
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="px-5 py-10 md:px-8 xl:px-12">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-[#f0fdf4]">
                    <svg
                      fill="none"
                      height="32"
                      stroke="#22c55e"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      width="32"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-[26px] font-extrabold text-[#27223f]">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-[#6c6890]">
                    Gracias por escribirnos. Te responderemos en menos de 24
                    horas hábiles.
                  </p>
                  <button
                    className="mt-8 inline-flex h-11 items-center rounded-[8px] bg-[#ebe4ff] px-6 text-[14px] font-semibold text-[#6d44f7] transition hover:bg-[#6d44f7] hover:text-white"
                    onClick={handleReset}
                    type="button"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className="space-y-5 md:space-y-6" noValidate onSubmit={handleSubmit}>
                  <div>
                    <h2 className="text-[24px] font-extrabold tracking-[-0.02em] text-[#27223f] md:text-[26px]">
                      Escríbenos
                    </h2>
                    <p className="mt-1 text-[14px] text-[#6c6890]">
                      Completa el formulario y nos pondremos en contacto
                      contigo.
                    </p>
                  </div>

                  <div>
                    <label
                      className="mb-1.5 block text-[13px] font-semibold text-[#27223f]"
                      htmlFor="contact-nombre"
                    >
                      Nombre{" "}
                      <span aria-hidden="true" className="text-[#e8364f]">
                        *
                      </span>
                    </label>
                    <input
                      aria-describedby={
                        errors.nombre ? "contact-nombre-error" : undefined
                      }
                      aria-invalid={!!errors.nombre}
                      autoComplete="name"
                      className={inputClass("nombre")}
                      id="contact-nombre"
                      onBlur={() => handleBlur("nombre")}
                      onChange={(e) => handleChange("nombre", e.target.value)}
                      placeholder="Tu nombre completo"
                      type="text"
                      value={values.nombre}
                    />
                    {errors.nombre && (
                      <p
                        className="mt-1.5 text-[12px] font-medium text-[#e8364f]"
                        id="contact-nombre-error"
                        role="alert"
                      >
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="mb-1.5 block text-[13px] font-semibold text-[#27223f]"
                      htmlFor="contact-email"
                    >
                      Correo electrónico{" "}
                      <span aria-hidden="true" className="text-[#e8364f]">
                        *
                      </span>
                    </label>
                    <input
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      aria-invalid={!!errors.email}
                      autoComplete="email"
                      className={inputClass("email")}
                      id="contact-email"
                      onBlur={() => handleBlur("email")}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="tu@correo.com"
                      type="email"
                      value={values.email}
                    />
                    {errors.email && (
                      <p
                        className="mt-1.5 text-[12px] font-medium text-[#e8364f]"
                        id="contact-email-error"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="mb-1.5 block text-[13px] font-semibold text-[#27223f]"
                      htmlFor="contact-mensaje"
                    >
                      Mensaje{" "}
                      <span aria-hidden="true" className="text-[#e8364f]">
                        *
                      </span>
                    </label>
                    <textarea
                      aria-describedby={
                        errors.mensaje ? "contact-mensaje-error" : undefined
                      }
                      aria-invalid={!!errors.mensaje}
                      className={`w-full resize-none rounded-[8px] border px-4 py-3 text-[14px] text-[#27223f] outline-none transition placeholder:text-[#b2b6c8] focus:ring-2 focus:ring-[#6d44f7]/20 ${
                        errors.mensaje
                          ? "border-[#e8364f] bg-[#fff5f6] focus:border-[#e8364f]"
                          : "border-[#d7d1f0] bg-white focus:border-[#6d44f7]"
                      }`}
                      id="contact-mensaje"
                      onBlur={() => handleBlur("mensaje")}
                      onChange={(e) =>
                        handleChange("mensaje", e.target.value)
                      }
                      placeholder="¿En qué podemos ayudarte?"
                      rows={5}
                      value={values.mensaje}
                    />
                    {errors.mensaje && (
                      <p
                        className="mt-1.5 text-[12px] font-medium text-[#e8364f]"
                        id="contact-mensaje-error"
                        role="alert"
                      >
                        {errors.mensaje}
                      </p>
                    )}
                  </div>

                  <button
                    className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#6843f7_0%,#744cff_100%)] text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(109,68,247,0.28)] transition hover:brightness-105 active:scale-[0.98]"
                    type="submit"
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
