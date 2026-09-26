import type { Localized } from "@/i18n/ui"

export interface ExperienceItem {
  company: Localized<string>
  role: Localized<string>
  date: Localized<string>
  current: boolean
  highlights: Localized<string[]>
  stack: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: { es: "Sanatorio Santa Fe", en: "Sanatorio Santa Fe" },
    role: { es: "Técnico Informático · Soporte y Desarrollo", en: "IT Technician · Support & Development" },
    date: { es: "Oct 2024 — Actualidad", en: "Oct 2024 — Present" },
    current: true,
    highlights: {
      es: [
        "Desarrollo herramientas web internas, principalmente del lado del frontend, con HTML, CSS, Bootstrap, PHP y Python.",
        "Ejecuto consultas SQL con Navicat para generar reportes y análisis de datos que usan otras áreas del sanatorio.",
        "Brindo soporte técnico integral: resolución de incidencias, instalación de sistemas operativos y del software interno.",
        "Instalo, configuro y armo equipos, PCs y periféricos, tanto a nivel hardware como software.",
      ],
      en: [
        "I build internal web tools, mainly on the frontend, with HTML, CSS, Bootstrap, PHP and Python.",
        "I run SQL queries with Navicat to produce reports and data analysis used by other areas of the hospital.",
        "I provide end-to-end technical support: incident resolution, operating system and internal software installation.",
        "I install, configure and assemble equipment, PCs and peripherals, both hardware and software.",
      ],
    },
    stack: ["PHP", "Python", "SQL", "Bootstrap", "HTML", "CSS"],
  },
  {
    company: {
      es: "Ministerio de Salud de Santa Fe · Sectorial Informática",
      en: "Santa Fe Ministry of Health · IT Department",
    },
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    date: { es: "Ene 2023 — Ene 2024", en: "Jan 2023 — Jan 2024" },
    current: false,
    highlights: {
      es: [
        "Desarrollé y mantuve sistemas con PHP y Symfony aplicando MVC y principios SOLID.",
        "Optimicé bases de datos SQL con ORM y transacciones ACID, asegurando la integridad de los datos y reduciendo tiempos de inactividad.",
        "Implementé seguridad en el backend para proteger datos médicos sensibles.",
        "Integré Web Services y APIs REST para mejorar la interoperabilidad entre sistemas.",
        "Mejoré la experiencia de usuario con AJAX, JavaScript y Bootstrap; versionado en GitLab y gestión de tareas en Redmine.",
      ],
      en: [
        "Built and maintained systems with PHP and Symfony following MVC and SOLID principles.",
        "Optimized SQL databases with ORM and ACID transactions, ensuring data integrity and reducing downtime.",
        "Implemented backend security to protect sensitive medical data.",
        "Integrated Web Services and REST APIs to improve interoperability between systems.",
        "Improved the user experience with AJAX, JavaScript and Bootstrap; versioning on GitLab and task tracking in Redmine.",
      ],
    },
    stack: ["PHP", "Symfony", "SQL", "REST APIs", "JavaScript", "GitLab"],
  },
  {
    company: { es: "Freelance", en: "Freelance" },
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    date: { es: "2022 — Actualidad", en: "2022 — Present" },
    current: true,
    highlights: {
      es: [
        "Diseño y desarrollo soluciones web y móviles de punta a punta: planificación, arquitectura, desarrollo, despliegue y mantenimiento.",
        "Trabajo directamente con cada cliente para traducir sus necesidades en productos simples y funcionales.",
        "Mejoro y optimizo proyectos existentes con foco en código limpio, escalabilidad y experiencia de usuario.",
        "Proyectos en producción como Pilates Gravity, Drabble Legal y OnTrip.",
      ],
      en: [
        "I design and build end-to-end web and mobile solutions: planning, architecture, development, deployment and maintenance.",
        "I work directly with each client to turn their needs into simple, functional products.",
        "I improve and optimize existing projects with a focus on clean code, scalability and user experience.",
        "Projects in production such as Pilates Gravity, Drabble Legal and OnTrip.",
      ],
    },
    stack: ["React", "Next.js", "React Native", "Django", "Tailwind", "Firebase"],
  },
]
