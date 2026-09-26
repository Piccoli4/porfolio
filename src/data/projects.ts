import type { Localized } from "@/i18n/ui"
import type { TechKey } from "./tech"

export interface Project {
  id: string
  title: string
  status: "live" | "completed"
  featured: boolean
  link: string
  github: string
  image: string
  gallery: string[]
  tags: TechKey[]
  description: Localized<string>
}

export const PROJECTS: Project[] = 
[
  {
    id: "pilates-gravity",
    title: "Pilates Gravity",
    status: "live",
    featured: true,
    link: "https://pilatesgravity.com.ar",
    github: "",
    image: "/projects/gravity.webp",
    gallery: [
      "/projects/gravity/gravity-gallery-1.webp",
      "/projects/gravity/gravity-gallery-2.webp",
      "/projects/gravity/gravity-gallery-3.webp",
      "/projects/gravity/gravity-gallery-4.webp",
      "/projects/gravity/gravity-gallery-5.webp",
      "/projects/gravity/gravity-gallery-6.webp",
      "/projects/gravity/gravity-gallery-7.webp",
      "/projects/gravity/gravity-gallery-8.webp",
      "/projects/gravity/gravity-gallery-9.webp",
      "/projects/gravity/gravity-gallery-10.webp",
      "/projects/gravity/gravity-gallery-11.webp",
      "/projects/gravity/gravity-gallery-12.webp",
      "/projects/gravity/gravity-gallery-13.webp",
      "/projects/gravity/gravity-gallery-14.webp"
    ],
    tags: [
      "DJANGO",
      "PYTHON",
      "TAILWIND",
      "JAVASCRIPT",
      "SQLITE",
      "POSTGRESQL",
      "GIT"
    ],
    description: {
      es: "PilatesGravity es una plataforma web completa para la gestión integral del estudio de Pilates. Permite a los usuarios reservar clases, administrar sus planes y realizar seguimiento de pagos, mientras que los administradores pueden gestionar horarios, clientes y facturación desde un panel centralizado. Con diseño responsive y notificaciones automáticas, optimiza la experiencia tanto para estudiantes como para el personal del estudio.",
      en: "PilatesGravity is a complete web platform for comprehensive Pilates studio management. It allows users to book classes, manage their plans, and track payments, while administrators can manage schedules, clients, and billing from a centralized panel. With responsive design and automatic notifications, it optimizes the experience for both students and studio staff."
    }
  },
  {
    id: "drabble-legal",
    title: "Drabble Legal",
    status: "live",
    featured: false,
    link: "https://drabblelegal.com.ar/",
    github: "",
    image: "/projects/drabble.webp",
    gallery: [
      "/projects/drabble/drabble.webp",
      "/projects/drabble/drabble2.webp",
      "/projects/drabble/drabble3.webp",
      "/projects/drabble/drabble4.webp",
      "/projects/drabble/drabble5.webp"
    ],
    tags: [
      "REACT",
      "TAILWIND",
      "JAVASCRIPT",
      "VITE",
      "GIT"
    ],
    description: {
      es: "Sitio web profesional para abogada de marcas y propiedad intelectual Desarrollo completo de una single-page application (SPA) para Melina Drabble, abogada especializada en marcas y propiedad intelectual con base en Paraná, Entre Ríos, que atiende clientes de forma remota en todo el país. El proyecto abarca desde el diseño visual hasta el despliegue en producción. Se construyó con React 18, Vite y Tailwind CSS v3, siguiendo una estética editorial de lujo: tonos oscuros cálidos, acentos en oro, tipografía serif (Cormorant Garamond) y una identidad visual centrada en el monograma 'MD'. Entre las funcionalidades implementadas se destacan: sistema de tema claro/oscuro con persistencia en localStorage y detección de preferencia del sistema; menú hamburguesa para mobile con overlay y cierre por tap externo; sección de servicios, proceso de trabajo paso a paso, y bloque de contacto con accesos directos a WhatsApp, Instagram, correo electrónico y Google Maps. El proyecto incluye SEO técnico completo: meta tags, Open Graph, Twitter Cards, tres schemas JSON-LD encadenados (WebSite, LegalService/LocalBusiness, Person), sitemap, robots.txt, favicons multiplataforma y OG image optimizada. La arquitectura responde a un patrón de configuración centralizada (config.js) que permite al cliente actualizar contenido de forma sencilla.",
      en: "Professional website for a trademark and IP lawyer End-to-end development of a single-page application (SPA) for Melina Drabble, a lawyer specializing in trademarks and intellectual property based in Paraná, Argentina, serving clients remotely across the country. The project covers everything from visual design to production deployment. Built with React 18, Vite, and Tailwind CSS v3, it follows an editorial luxury aesthetic: warm dark tones, gold accents, Cormorant Garamond serif typography, and a visual identity anchored by the 'MD' monogram. Key features include: a light/dark theme system with localStorage persistence and system preference detection; a mobile hamburger menu with overlay and outside-tap dismissal; a services section, a step-by-step process breakdown, and a contact block with direct links to WhatsApp, Instagram, email, and Google Maps. Full technical SEO was implemented: meta tags, Open Graph, Twitter Cards, three chained JSON-LD schemas (WebSite, LegalService/LocalBusiness, Person), sitemap, robots.txt, cross-platform favicons, and an optimized OG image. The architecture follows a centralized configuration pattern (config.js) that allows the client to update content without touching component code."
    }
  },
  {
    id: "ontrip",
    title: "OnTrip",
    status: "live",
    featured: false,
    link: "https://ontripoficial.com/",
    github: "",
    image: "/projects/ontrip.webp",
    gallery: [
      "/projects/ontrip.webp",
      "/projects/ontrip/ontrip_proximamente.webp",
      "/projects/ontrip/ontrip_inicio.webp",
      "/projects/ontrip/ontrip_contacto.webp"
    ],
    tags: [
      "REACT",
      "TAILWIND",
      "JAVASCRIPT",
      "GIT",
      "NEXTJS",
      "WORDPRESS"
    ],
    description: {
      es: "OnTrip es un sitio web profesional para una empresa de turismo de Coronda, Santa Fe, Argentina. El proyecto presenta cuatro modos de viaje —Educativo, Egresados, Quince y Trip— a través de una interfaz moderna y responsive. El proceso incluyó el desarrollo de un prototipo funcional con Next.js 15, TypeScript y Tailwind CSS, que sirvió como maqueta visual y de funcionalidad para el cliente. El sitio final fue implementado en WordPress. El prototipo contó con hero animado con video de fondo, páginas por modo con plantilla reutilizable, navbar responsive con menú hamburguesa, página de contacto, SEO completo con Open Graph y JSON-LD, sitemap autogenerado, 404 personalizado y transiciones de página fluidas.",
      en: "OnTrip is a professional website for a tourism company based in Coronda, Santa Fe, Argentina. The project presents four travel modes —Educational, Graduates, Quince (15th birthday), and Trip— through a modern, responsive interface. The process included building a fully functional prototype with Next.js 15, TypeScript, and Tailwind CSS, which served as a visual and functional mockup for the client. The final site was implemented in WordPress. The prototype featured an animated hero with video background, per-mode pages with a reusable template, responsive navbar with hamburger menu, contact page, full SEO with Open Graph and JSON-LD, auto-generated sitemap, custom 404 page, and smooth page transitions."
    }
  },
  {
    id: "emercor",
    title: "Emercor",
    status: "completed",
    featured: false,
    link: "",
    github: "https://github.com/Piccoli4/Emercor",
    image: "/projects/emercor.webp",
    gallery: [
      "/projects/emercor/emercor.webp",
      "/projects/emercor/emercor-gallery-1.webp",
      "/projects/emercor/emercor-gallery-2.webp",
      "/projects/emercor/emercor-gallery-3.webp",
      "/projects/emercor/emercor-gallery-4.webp",
      "/projects/emercor/emercor-gallery-5.webp"
    ],
    tags: [
      "REACTNATIVE",
      "NEXTJS",
      "EXPO",
      "FIREBASE"
    ],
    description: {
      es: "Aplicación de Marketplace desarrollada con React Native y Firebase, que permite a los usuarios comprar y vender productos de forma sencilla.",
      en: "Marketplace application developed with React Native and Firebase, allowing users to easily buy and sell products."
    }
  },
  {
    id: "turnosmart",
    title: "TurnoSmart",
    status: "completed",
    featured: false,
    link: "",
    github: "https://github.com/Piccoli4/TurnoSmart",
    image: "/projects/turnosmart.webp",
    gallery: [
      "/projects/turnosmart/turnosmart.webp",
      "/projects/turnosmart/turnosmart-gallery-1.webp",
      "/projects/turnosmart/turnosmart-gallery-2.webp",
      "/projects/turnosmart/turnosmart-gallery-3.webp",
      "/projects/turnosmart/turnosmart-gallery-4.webp",
      "/projects/turnosmart/turnosmart-gallery-5.webp",
      "/projects/turnosmart/turnosmart-gallery-6.webp",
      "/projects/turnosmart/turnosmart-gallery-7.webp"
    ],
    tags: [
      "REACTNATIVE",
      "NEXTJS",
      "EXPO",
      "FIREBASE"
    ],
    description: {
      es: "TurnoSmart es una app intuitiva para gestionar turnos. Permite reservar, ver y administrar citas con un panel personalizado, actualizaciones en tiempo real y seguridad con Firebase.",
      en: "TurnoSmart is an intuitive app for managing appointments. It allows users to book, view, and manage appointments with a personalized dashboard, real-time updates, and security powered by Firebase."
    }
  },
  {
    id: "basketdrip",
    title: "BasketDrip",
    status: "live",
    featured: false,
    link: "https://basketdrip.vercel.app/",
    github: "https://github.com/Piccoli4/BasketDrip",
    image: "/projects/Basketdrip.webp",
    gallery: [
      "/projects/basketdrip/basketdrip.webp",
      "/projects/basketdrip/basketdrip-gallery-1.webp",
      "/projects/basketdrip/basketdrip-gallery-2.webp"
    ],
    tags: [
      "REACT",
      "CHAKRA",
      "FIREBASE"
    ],
    description: {
      es: "BasketDrip es un sitio web responsive para amantes del baloncesto, donde pueden descubrir y comprar ropa y accesorios exclusivos con un diseño intuitivo y sin complicaciones.",
      en: "BasketDrip is a responsive website for basketball enthusiasts, where they can discover and purchase exclusive clothing and accessories with an intuitive and hassle-free design."
    }
  }
]