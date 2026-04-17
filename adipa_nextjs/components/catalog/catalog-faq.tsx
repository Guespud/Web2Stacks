"use client";

import Link from "next/link";
import { useState } from "react";

type FaqItem = {
  answer: React.ReactNode;
  question: string;
};

const faqItems: FaqItem[] = [
  {
    question:
      "¿Necesito ser psicólogo/a para tomar los cursos de psicología y salud mental?",
    answer:
      "No necesariamente, ya que en ADIPA tenemos cursos para trabajadores sociales, educadores, médicos, terapeutas ocupacionales, entre otros. Siempre debes chequear el apartado “¿A quién está dirigido?” el cual, en cada programa, especifica quiénes pueden tomar el curso.",
  },
  {
    question:
      "¿Debo tener alguna carrera profesional para realizar un curso de psicología y salud mental?",
    answer:
      "Hay cursos que se pueden tomar desde quinto año de carreras psicosociales y de salud. Por otro lado, hay programas que sí requieren que estés titulado, como los cursos de especialización sobre WISC y ADOS-2.",
  },
  {
    question: "¿Cuánto tiempo duran los cursos de psicología y salud mental?",
    answer:
      "El tiempo de los cursos de psicología y salud mental varía dependiendo del tipo de programa y el nivel de profundización. Generalmente duran 8 horas, sin embargo, hay otros que se extienden a más horas de clases.",
  },
  {
    question:
      "¿Se debe tomar una prueba al finalizar el curso de psicología y salud mental?",
    answer:
      "Sí, al finalizar un programa debes realizar una evaluación conducente al certificado.",
  },
  {
    question: "¿Quiénes dictan los cursos de psicología y salud mental?",
    answer: (
      <>
        Los cursos de psicología y salud mental son dictados por docentes y
        profesionales especializados en su área de desarrollo. El 90% cuenta con
        al menos el grado de magíster y/o doctorado. El equipo docente está
        compuesto por profesionales pertenecientes a instituciones de
        reconocimiento internacional. Puedes revisar más en{" "}
        <Link
          className="font-semibold text-[#6d44f7] underline decoration-[#cbbdff] underline-offset-4"
          href="https://adipa.co/docentes/"
          target="_blank"
        >
          adipa.co/docentes
        </Link>
        .
      </>
    ),
  },
  {
    question: "¿Todos los cursos son certificados? ¿Cómo obtengo la certificación?",
    answer:
      "Sí, todos nuestros cursos son certificados. Contamos con certificado de participación y/o de aprobación. Para obtener el certificado de aprobación debes realizar la evaluación correspondiente al curso o diplomado y cumplir con los requisitos del programa.",
  },
  {
    question:
      "¿Tengo que asistir a las clases en vivo? ¿Quedan grabadas? ¿Cuánto tiempo?",
    answer:
      "En la mayoría de los casos, si no puedes acceder a la clase en vivo, puedes estudiar viendo la grabación. Esta quedará disponible por 8 semanas en tu aula virtual posterior al término del curso. No obstante, algunos programas tienen requisitos de aprobación asociados a la asistencia, como ADOS-2 o NCFAS.",
  },
  {
    question: "¿Dónde me comunico si tengo algún problema?",
    answer: (
      <>
        Queremos que te sientas acompañado/a durante todo tu proceso de
        aprendizaje. Si tienes alguna duda respecto al programa de estudio puedes
        comunicarte con la coordinadora a cargo. Si tienes alguna inquietud en
        relación al aula virtual o la logística del proceso de estudio, puedes
        escribir a{" "}
        <a
          className="font-semibold text-[#6d44f7] underline decoration-[#cbbdff] underline-offset-4"
          href="mailto:sac@adipa.cl"
        >
          sac@adipa.cl
        </a>{" "}
        o al WhatsApp{" "}
        <a
          className="font-semibold text-[#6d44f7] underline decoration-[#cbbdff] underline-offset-4"
          href="https://wa.me/+573136178335/?text=Hola, tengo una duda y quisiera contactarme con ustedes"
          target="_blank"
        >
          +57 313 617 8335
        </a>
        .
      </>
    ),
  },
];

export function CatalogFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pb-16 xl:px-6 xl:pb-24">
      <div className="mb-7">
        <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-[#6d44f7]">
          Soporte
        </p>
        <h2 className="mt-3 text-[30px] font-extrabold tracking-[-0.03em] text-[#27223f] md:text-[38px]">
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className={`overflow-hidden rounded-[16px] border transition ${
                isOpen
                  ? "border-[#d9cffd] bg-[#fbfaff] shadow-[0_18px_36px_rgba(109,68,247,0.08)]"
                  : "border-[#f1eefc] bg-white shadow-[0_10px_24px_rgba(31,22,87,0.05)]"
              }`}
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:gap-6 md:px-8 md:py-7"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                type="button"
              >
                <span className="text-[17px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#6d44f7] md:text-[22px]">
                  {item.question}
                </span>
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full border text-[22px] font-light transition md:size-10 md:text-[24px] ${
                    isOpen
                      ? "border-[#6d44f7] bg-[#6d44f7] text-white"
                      : "border-[#d9cffd] text-[#6d44f7]"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen ? (
                <div className="border-t border-[#ece6ff] px-5 pb-5 pt-5 md:px-8 md:pb-7 md:pt-6">
                  <div className="max-w-5xl text-[14px] leading-7 text-[#6f6a89] md:text-[16px] md:leading-8">
                    {item.answer}
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
