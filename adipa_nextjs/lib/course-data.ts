import type { CatalogFilterGroup } from "@/lib/catalog-config";

export type Course = {
  area: string;
  category: string;
  description: string;
  discount?: string;
  discountValue: number;
  hours: number;
  instructor: string;
  isFlash: boolean;
  isNew: boolean;
  isPopular: boolean;
  isTop: boolean;
  mode: string;
  oldPrice?: string;
  price: string;
  priceValue: number;
  school: string;
  startDate: string;
  startDateValue: number;
  status?: string;
  tags: string[];
  title: string;
};

function parseDateValue(date: string) {
  const [day, month, year] = date.split("/").map(Number);
  return new Date(year, month - 1, day).getTime();
}

function createCourse(course: Omit<Course, "priceValue" | "startDateValue">): Course {
  return {
    ...course,
    priceValue: Number(course.price.replace(/[^\d]/g, "")),
    startDateValue: parseDateValue(course.startDate),
  };
}

export const featuredTags = ["Autismo", "Ados", "Trauma", "ADI-R", "Peers"];

export const filterGroups: CatalogFilterGroup[] = [
  {
    title: "Ranking cursos",
    options: ["Nuevos lanzamientos", "Más populares", "Top 10", "Ofertas Flash"],
  },
  {
    title: "Área temática",
    options: [
      "Psicología Clínica y Salud Mental Infantil y Adolescente",
      "Psicología Clínica y Salud Mental en la Adultez",
      "Educación y Neurodesarrollo",
      "Psicología Jurídica y Forense",
      "Psicología Organizacional y del Trabajo",
    ],
  },
  {
    title: "Tipo de programa",
    options: [
      "Cursos",
      "Acreditaciones",
      "Congreso",
      "Diplomados",
      "Postitulos",
      "Sesiones Magistrales",
    ],
  },
  {
    title: "Modalidad",
    options: ["En Vivo", "Asincrónica"],
  },
  {
    title: "Categoría",
    options: [
      "Autismo",
      "Primeros auxilios psicológicos",
      "Psicología Clínica",
      "Psicología Educacional",
      "Psicología Jurídica",
      "Psicología Social Comunitaria",
      "Test Psicológicos",
    ],
  },
];

export const courses: Course[] = [
  createCourse({
    area: "Educación y Neurodesarrollo",
    category: "Cursos",
    description:
      "Brindar una comprensión integral de la neurodiversidad, con énfasis en el espectro autista y el TDAH en la adultez.",
    discountValue: 0,
    hours: 24,
    instructor: "Dra. Valentina Morales",
    isFlash: true,
    isNew: true,
    isPopular: true,
    isTop: true,
    mode: "En Vivo",
    price: "$120.000 COP",
    school: "Escuela de Educación y Neurodesarrollo, Escuela en Salud Mental Adultos",
    startDate: "06/04/2026",
    status: "En progreso",
    tags: ["Autismo", "Psicología Clínica", "Psicología Educacional"],
    title:
      "Curso: Estrategias terapéuticas en personas adultas autistas y TDAH desde el paradigma de la neurodiversidad",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental en la Adultez",
    category: "Cursos",
    description:
      "Aplicar conocimientos avanzados y habilidades prácticas en la aplicación de técnicas de TCC en diversos contextos.",
    discountValue: 0,
    hours: 16,
    instructor: "Ps. Rodrigo Fernández",
    isFlash: false,
    isNew: true,
    isPopular: true,
    isTop: true,
    mode: "En Vivo",
    price: "$140.000 COP",
    school: "Escuela en Salud Mental Adultos",
    startDate: "08/04/2026",
    status: "En progreso",
    tags: ["Psicología Clínica", "Ansiedad y Depresión", "Terapia Cognitivo Conductual"],
    title: "Curso: Técnicas Efectivas de Terapia Cognitivo-Conductual en Psicoterapia",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental en la Adultez",
    category: "Diplomados",
    description:
      "Formación avanzada y práctica en evaluación neuropsicológica de adultos con enfoque clínico y psicométrico.",
    discountValue: 0,
    hours: 240,
    instructor: "Dr. Andrés Castillo",
    isFlash: false,
    isNew: false,
    isPopular: true,
    isTop: true,
    mode: "En Vivo",
    price: "$1.500.000 COP",
    school: "Escuela en Salud Mental Adultos",
    startDate: "13/04/2026",
    status: "En progreso",
    tags: ["Psicología Clínica", "Salud Mental", "Test Psicológicos"],
    title:
      "Diplomado de Especialización en Neuropsicología Clínica en Adultos: Evaluación, semiología, y psicometría",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental en la Adultez",
    category: "Diplomados",
    description:
      "Una formación rigurosa y actual en teoría, técnica y clínica psicoanalítica freudiana.",
    discountValue: 0,
    hours: 180,
    instructor: "Ps. María José Vera",
    isFlash: false,
    isNew: false,
    isPopular: false,
    isTop: false,
    mode: "En Vivo",
    price: "$1.500.000 COP",
    school: "Escuela en Salud Mental Adultos",
    startDate: "13/04/2026",
    status: "En progreso",
    tags: ["Ansiedad y Depresión", "Psicoanálisis", "Salud Mental"],
    title: "Diplomado en Clínica, Técnica y Teoría Psicoanalítica en la Obra de Sigmund Freud",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental en la Adultez",
    category: "Cursos",
    description:
      "Fortalecer las competencias clínicas para aplicar entrevista motivacional en psicoterapia.",
    discountValue: 0,
    hours: 8,
    instructor: "Ps. Camila Reyes",
    isFlash: false,
    isNew: true,
    isPopular: true,
    isTop: false,
    mode: "En Vivo",
    price: "$120.000 COP",
    school: "Escuela en Salud Mental Adultos",
    startDate: "14/04/2026",
    status: "En progreso",
    tags: ["Adicciones", "Ansiedad y Depresión", "Salud Mental"],
    title: "Curso: Entrevista Motivacional y su aplicación Clínica en Psicoterapia",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental en la Adultez",
    category: "Cursos",
    description:
      "Comprensión, evaluación y tratamiento de los trastornos depresivos desde el modelo cognitivo.",
    discountValue: 0,
    hours: 20,
    instructor: "Dr. Pablo Soto",
    isFlash: false,
    isNew: false,
    isPopular: true,
    isTop: true,
    mode: "En Vivo",
    price: "$140.000 COP",
    school: "Escuela en Salud Mental Adultos",
    startDate: "20/04/2026",
    tags: ["Psicología Clínica", "Ansiedad y Depresión", "Terapia Cognitivo Conductual"],
    title: "Curso de Especialización en Terapia Cognitiva de los Trastornos Depresivos",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental Infantil y Adolescente",
    category: "Acreditaciones",
    description:
      "Capacitar a los estudiantes para aplicar el instrumento ADOS-2 según estándares internacionales.",
    discount: "30%",
    discountValue: 30,
    hours: 40,
    instructor: "Ps. Isabel Bravo",
    isFlash: true,
    isNew: false,
    isPopular: true,
    isTop: true,
    mode: "En Vivo",
    oldPrice: "$2.000.000 COP",
    price: "$1.400.000 COP",
    school: "Escuela en Salud Mental Adultos, Escuela en Salud Mental Infantojuvenil",
    startDate: "25/04/2026",
    tags: ["Autismo", "Ados", "Test Psicológicos"],
    title: "Acreditación Oficial Clínica Internacional ADOS-2",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental en la Adultez",
    category: "Diplomados",
    description:
      "Aplicación de modelos y técnicas basados en evidencia en el tratamiento del trauma psicológico en población adulta.",
    discount: "27%",
    discountValue: 27,
    hours: 220,
    instructor: "Dra. Daniela Muñoz",
    isFlash: false,
    isNew: false,
    isPopular: true,
    isTop: false,
    mode: "En Vivo",
    oldPrice: "$1.500.000 COP",
    price: "$1.090.000 COP",
    school: "Escuela en Salud Mental Adultos",
    startDate: "05/05/2026",
    tags: ["Psicología Clínica", "Salud Mental", "Trauma"],
    title: "Diplomado en Intervenciones efectivas en Trauma Psicológico en Adultos",
  }),
  createCourse({
    area: "Psicología Organizacional y del Trabajo",
    category: "Diplomados",
    description:
      "Herramientas actuales para atracción, evaluación y selección de talento en contextos organizacionales.",
    discount: "26%",
    discountValue: 26,
    hours: 120,
    instructor: "Ps. Felipe Gutiérrez",
    isFlash: false,
    isNew: false,
    isPopular: false,
    isTop: false,
    mode: "En Vivo",
    oldPrice: "$190.000 COP",
    price: "$140.000 COP",
    school: "Escuela en Psicología Organizacional",
    startDate: "07/05/2026",
    tags: ["Psicología Jurídica", "Organizacional", "Selección", "Talento"],
    title: "Diplomado en Métodos de Reclutamiento y Selección",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental en la Adultez",
    category: "Cursos",
    description:
      "Principios y estrategias concretas para desbloquear procesos terapéuticos estancados.",
    discountValue: 0,
    hours: 10,
    instructor: "Ps. Sofía Herrera",
    isFlash: true,
    isNew: false,
    isPopular: true,
    isTop: false,
    mode: "En Vivo",
    price: "$90.000 COP",
    school: "Escuela en Salud Mental Adultos",
    startDate: "12/05/2026",
    tags: ["Ansiedad y Depresión", "Salud Mental", "Terapia Breve"],
    title: "Curso: La Terapia Breve de Palo Alto como Aliada en Casos Persistentes",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental en la Adultez",
    category: "Postitulos",
    description:
      "Programa orientado a integrar una mirada psicoterapéutica profunda y contextualizada a la práctica clínica.",
    discountValue: 0,
    hours: 160,
    instructor: "Dr. Martín Lagos",
    isFlash: false,
    isNew: false,
    isPopular: false,
    isTop: false,
    mode: "En Vivo",
    price: "$1.090.000 COP",
    school: "Escuela en Salud Mental Adultos",
    startDate: "14/05/2026",
    tags: ["Psicoterapia", "Salud Mental", "Psicología Clínica"],
    title: "Postítulo de Actualización en Psicoterapia con Enfoque Epigenético",
  }),
  createCourse({
    area: "Psicología Clínica y Salud Mental en la Adultez",
    category: "Cursos",
    description:
      "Curso orientado a comprender y aplicar análisis funcional de la conducta dentro del proceso clínico.",
    discountValue: 0,
    hours: 12,
    instructor: "Ps. Carolina Vidal",
    isFlash: false,
    isNew: false,
    isPopular: false,
    isTop: false,
    mode: "En Vivo",
    price: "$90.000 COP",
    school: "Escuela en Salud Mental Adultos",
    startDate: "26/05/2026",
    tags: ["Psicología Clínica", "Conducta", "Análisis Funcional"],
    title: "Curso: Análisis Funcional de la Conducta en la Práctica Clínica",
  }),
];
