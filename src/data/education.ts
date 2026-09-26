import type { Localized } from "@/i18n/ui"

export interface EducationItem {
  id: string
  kind: "degree" | "diploma" | "course"
  institution: string
  date: string
  image: string
  featured: boolean
  title: Localized<string>
  description: Localized<string>
  skills: Localized<string[]>
}

export const EDUCATION: EducationItem[] = 
[
  {
    id: "tuig",
    kind: "degree",
    institution: "Universidad Nacional del Litoral - FICH",
    date: "2021 - 2024",
    image: "/education/tuig.webp",
    featured: true,
    title: {
      es: "Técnico Universitario en Informática",
      en: "University Technician in Computer Science"
    },
    description: {
      es: "Formación técnica orientada a la gestión informática en organizaciones, con énfasis en desarrollo de software, bases de datos, redes, sistemas operativos y herramientas web. Capacita para analizar necesidades administrativas, implementar soluciones tecnológicas y optimizar procesos mediante el uso eficiente de sistemas de información.",
      en: "Technical training oriented to computer management in organizations, with emphasis on software development, databases, networks, operating systems and web tools. Enables to analyze administrative needs, implement technological solutions and optimize processes through efficient use of information systems."
    },
    skills: {
      es: [
        "Programación",
        "Bases de Datos",
        "Desarrollo Web",
        "Sistemas",
        "Metodologías Ágiles"
      ],
      en: [
        "Programming",
        "Databases",
        "Web Development",
        "Systems",
        "Agile Methodologies"
      ]
    }
  },
  {
    id: "desarrollo-web-responsive",
    kind: "course",
    institution: "Universidad Tecnológica Nacional - FRR",
    date: "2020",
    image: "/education/dwr.webp",
    featured: false,
    title: {
      es: "Diseño Web Responsive - HTML5 y CSS3",
      en: "Responsive Web Design - HTML5 and CSS3"
    },
    description: {
      es: "Formación en diseño web responsive con foco en HTML5 y CSS3, abordando maquetación semántica, estilos avanzados, uso de multimedia, animaciones, tipografías web y adaptación de interfaces a distintos dispositivos y resoluciones, priorizando usabilidad, accesibilidad y compatibilidad entre navegadores.",
      en: "Training in responsive web design focused on HTML5 and CSS3, addressing semantic layout, advanced styles, multimedia use, animations, web typography and interface adaptation to different devices and resolutions, prioritizing usability, accessibility and browser compatibility."
    },
    skills: {
      es: [
        "HTML5",
        "CSS3",
        "Diseño Responsive",
        "Frontend",
        "Web Design"
      ],
      en: [
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Frontend",
        "Web Design"
      ]
    }
  },
  {
    id: "programacion-web-inicial",
    kind: "course",
    institution: "Universidad Tecnológica Nacional - FRR",
    date: "2024",
    image: "/education/pwi.webp",
    featured: false,
    title: {
      es: "Programación Web Inicial",
      en: "Initial Web Programming"
    },
    description: {
      es: "Curso introductorio al desarrollo web, abarcando desde el registro de dominios hasta la creación de sitios responsivos con HTML5, CSS3, JavaScript y Bootstrap. Incluye fundamentos de maquetación, estilos, interactividad y diseño adaptable.",
      en: "Introductory course to web development, covering from domain registration to creating responsive sites with HTML5, CSS3, JavaScript and Bootstrap. Includes fundamentals of layout, styles, interactivity and adaptive design."
    },
    skills: {
      es: [
        "HTML",
        "CSS",
        "JavaScript",
        "Desarrollo Web",
        "Frontend Básico"
      ],
      en: [
        "HTML",
        "CSS",
        "JavaScript",
        "Web Development",
        "Frontend Basics"
      ]
    }
  },
  {
    id: "php-mysql",
    kind: "course",
    institution: "Universidad Tecnológica Nacional - FRR",
    date: "2023",
    image: "/education/pwphpmysql.webp",
    featured: false,
    title: {
      es: "Programación Web con PHP y MySQL",
      en: "Web Programming with PHP and MySQL"
    },
    description: {
      es: "Curso de desarrollo web backend con PHP y MySQL. Abarca estructuras de control, manejo de formularios (GET/POST), sesiones, funciones personalizadas, integración con bases de datos mediante MySQLi, y desarrollo de un panel de administración con operaciones CRUD completas.",
      en: "Backend web development course with PHP and MySQL. Covers control structures, form handling (GET/POST), sessions, custom functions, database integration through MySQLi, and development of an administration panel with complete CRUD operations."
    },
    skills: {
      es: [
        "PHP",
        "MySQL",
        "MySQLi",
        "CRUD",
        "Sesiones",
        "Formularios",
        "Estructuras de Control",
        "Arrays",
        "Bootstrap",
        "Backend Development",
        "Panel de Administración"
      ],
      en: [
        "PHP",
        "MySQL",
        "MySQLi",
        "CRUD",
        "Sessions",
        "Forms",
        "Control Structures",
        "Arrays",
        "Bootstrap",
        "Backend Development",
        "Admin Panel"
      ]
    }
  },
  {
    id: "php-mysql-avanzado",
    kind: "course",
    institution: "Universidad Tecnológica Nacional - FRR",
    date: "2023",
    image: "/education/pwphpmysqlna.webp",
    featured: false,
    title: {
      es: "Programación Web con PHP y MySQL Avanzado",
      en: "Advanced Web Programming with PHP and MySQL"
    },
    description: {
      es: "Curso avanzado de PHP y MySQL con enfoque en programación orientada a objetos (POO), manejo de fechas, archivos, imágenes dinámicas, implementación de CAPTCHA, seguridad web y uso de bibliotecas como FPDF y PHPMailer. Incluye desarrollo de sistemas web complejos con integración de bases de datos y contenido dinámico.",
      en: "Advanced PHP and MySQL course with focus on object-oriented programming (OOP), date handling, files, dynamic images, CAPTCHA implementation, web security and use of libraries like FPDF and PHPMailer. Includes development of complex web systems with database integration and dynamic content."
    },
    skills: {
      es: [
        "PHP Avanzado",
        "MySQL",
        "POO (Programación Orientada a Objetos)",
        "Clases y Objetos",
        "Herencia",
        "Polimorfismo",
        "Interfaces",
        "Clases Abstractas",
        "PDO",
        "Seguridad Web",
        "FPDF",
        "PHPMailer",
        "CAPTCHA",
        "Manejo de Archivos",
        "Imágenes Dinámicas",
        "Bootstrap",
        "CRUD",
        "Sesiones",
        "Backend Development"
      ],
      en: [
        "Advanced PHP",
        "MySQL",
        "OOP (Object-Oriented Programming)",
        "Classes and Objects",
        "Inheritance",
        "Polymorphism",
        "Interfaces",
        "Abstract Classes",
        "PDO",
        "Web Security",
        "FPDF",
        "PHPMailer",
        "CAPTCHA",
        "File Handling",
        "Dynamic Images",
        "Bootstrap",
        "CRUD",
        "Sessions",
        "Backend Development"
      ]
    }
  },
  {
    id: "programacion-javascript",
    kind: "course",
    institution: "Universidad Tecnológica Nacional - FRR",
    date: "2023",
    image: "/education/pwjs.webp",
    featured: false,
    title: {
      es: "Programación Web con JavaScript",
      en: "Web Programming with JavaScript"
    },
    description: {
      es: "Curso completo de Javascript para desarrollo frontend. Cubre desde fundamentos del lenguaje (variables, operadores, ciclos, funciones) hasta manipulación del DOM, eventos, validación de formularios e introducción a jQuery. Enfocado en dar dinamismo e interactividad a sitios web desarrollados con HTML y CSS.",
      en: "Complete JavaScript course for frontend development. Covers from language fundamentals (variables, operators, loops, functions) to DOM manipulation, events, form validation and introduction to jQuery. Focused on providing dynamism and interactivity to websites developed with HTML and CSS."
    },
    skills: {
      es: [
        "Javascript",
        "DOM Manipulation",
        "Event Handling",
        "Form Validation",
        "jQuery",
        "BOM",
        "Arrays",
        "Loops",
        "Functions",
        "Conditionals",
        "Frontend Development",
        "Client-side Scripting"
      ],
      en: [
        "Javascript",
        "DOM Manipulation",
        "Event Handling",
        "Form Validation",
        "jQuery",
        "BOM",
        "Arrays",
        "Loops",
        "Functions",
        "Conditionals",
        "Frontend Development",
        "Client-side Scripting"
      ]
    }
  },
  {
    id: "desarrollo-web-fullstack",
    kind: "diploma",
    institution: "Universidad Tecnológica Nacional - FRR",
    date: "2024",
    image: "/education/dpwfs.webp",
    featured: false,
    title: {
      es: "Diplomatura en Programación Web Full Stack",
      en: "Diploma in Full Stack Web Programming"
    },
    description: {
      es: "Diplomatura integral que consolida y certifica la formación completa en desarrollo web FullStack. Cubre desde el diseño frontend responsivo con HTML5 y CSS3, la programación interactiva con JavaScript y jQuery, hasta el desarrollo backend avanzado con PHP y MySQL, incluyendo programación orientada a objetos, seguridad, manejo de sesiones, y operaciones CRUD. Formación estructurada y avalada por la UTN, abarcando 210 horas de contenido especializado.",
      en: "Comprehensive diploma that consolidates and certifies complete FullStack web development training. Covers from responsive frontend design with HTML5 and CSS3, interactive programming with JavaScript and jQuery, to advanced backend development with PHP and MySQL, including object-oriented programming, security, session management, and CRUD operations. Structured and endorsed training by UTN, covering 210 hours of specialized content."
    },
    skills: {
      es: [
        "FullStack Development",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "JavaScript",
        "jQuery",
        "PHP",
        "MySQL",
        "POO",
        "CRUD Operations",
        "Session Management",
        "Form Validation",
        "DOM Manipulation",
        "Bootstrap",
        "Backend Security",
        "RESTful Concepts",
        "Git",
        "Web Deployment"
      ],
      en: [
        "FullStack Development",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "JavaScript",
        "jQuery",
        "PHP",
        "MySQL",
        "OOP",
        "CRUD Operations",
        "Session Management",
        "Form Validation",
        "DOM Manipulation",
        "Bootstrap",
        "Backend Security",
        "RESTful Concepts",
        "Git",
        "Web Deployment"
      ]
    }
  },
  {
    id: "react-js",
    kind: "course",
    institution: "Coderhouse",
    date: "2024",
    image: "/education/rjs.webp",
    featured: false,
    title: {
      es: "React JS",
      en: "React JS"
    },
    description: {
      es: "Curso intensivo de React JS que abarca desde los fundamentos de JSX, componentes y props, hasta hooks avanzados como useState, useEffect y useContext. Incluye routing con React Router, manejo de eventos, consumo de APIs con Fetch, y técnicas de renderizado condicional y optimización con React.memo. Enfoque práctico en el desarrollo de aplicaciones interactivas y escalables.",
      en: "Intensive React JS course covering from JSX fundamentals, components and props, to advanced hooks like useState, useEffect and useContext. Includes routing with React Router, event handling, API consumption with Fetch, and conditional rendering and optimization techniques with React.memo. Practical focus on developing interactive and scalable applications."
    },
    skills: {
      es: [
        "React",
        "JSX",
        "Hooks (useState, useEffect, useContext, useRef)",
        "React Router",
        "Componentes",
        "Props",
        "Event Handling",
        "Fetch API",
        "Renderizado Condicional",
        "React.memo",
        "Patrones de Diseño",
        "Firebase (mención)",
        "Frontend Moderno"
      ],
      en: [
        "React",
        "JSX",
        "Hooks (useState, useEffect, useContext, useRef)",
        "React Router",
        "Components",
        "Props",
        "Event Handling",
        "Fetch API",
        "Conditional Rendering",
        "React.memo",
        "Design Patterns",
        "Firebase (mention)",
        "Modern Frontend"
      ]
    }
  },
  {
    id: "desarrollo-apps",
    kind: "course",
    institution: "Coderhouse",
    date: "2024",
    image: "/education/dapp.webp",
    featured: false,
    title: {
      es: "Desarrollo de Aplicaciones",
      en: "Application Development"
    },
    description: {
      es: "Curso práctico de desarrollo de aplicaciones móviles cross-platform con React Native. Aprende a crear aplicaciones nativas para iOS y Android desde cero, utilizando componentes core, navegación entre pantallas, manejo de estado, conexión a APIs REST y bases de datos en tiempo real (Firebase/Realm). Incluye estilos responsivos, debug, y proceso de publicación en tiendas de aplicaciones.",
      en: "Practical course in cross-platform mobile application development with React Native. Learn to create native applications for iOS and Android from scratch, using core components, screen navigation, state management, REST API connection and real-time databases (Firebase/Realm). Includes responsive styles, debugging, and app store publishing process."
    },
    skills: {
      es: [
        "React Native",
        "JavaScript",
        "Cross-Platform Development",
        "Core Components",
        "Navigation",
        "State Management",
        "REST APIs",
        "Firebase",
        "Realm DB",
        "Async/Await",
        "Responsive Design",
        "Android Studio",
        "Xcode",
        "Debugging",
        "App Deployment",
        "UI/UX Mobile"
      ],
      en: [
        "React Native",
        "JavaScript",
        "Cross-Platform Development",
        "Core Components",
        "Navigation",
        "State Management",
        "REST APIs",
        "Firebase",
        "Realm DB",
        "Async/Await",
        "Responsive Design",
        "Android Studio",
        "Xcode",
        "Debugging",
        "App Deployment",
        "UI/UX Mobile"
      ]
    }
  },
  {
    id: "python-coderhouse",
    kind: "course",
    institution: "Coderhouse",
    date: "2025",
    image: "/education/pch.webp",
    featured: false,
    title: {
      es: "Programación con Python",
      en: "Python Programming"
    },
    description: {
      es: "Curso completo de Python desde cero hasta desarrollo web con Django Framework. Incluye fundamentos del lenguaje (tipos de datos, control de flujo, POO, manejo de archivos), creación de aplicaciones web con arquitectura MVT, implementación de CRUD, autenticación de usuarios, gestión de formularios con ModelForms, y despliegue en plataformas como Heroku y PythonAnywhere. Enfoque en buenas prácticas, TDD y uso de Git/GitHub.",
      en: "Complete Python course from scratch to web development with Django Framework. Includes language fundamentals (data types, control flow, OOP, file handling), web application creation with MVT architecture, CRUD implementation, user authentication, form management with ModelForms, and deployment on platforms like Heroku and PythonAnywhere. Focus on best practices, TDD and Git/GitHub usage."
    },
    skills: {
      es: [
        "Python",
        "Django",
        "MVT Architecture",
        "POO",
        "CRUD",
        "ModelForms",
        "Authentication",
        "User Management",
        "Git",
        "GitHub",
        "Heroku",
        "PythonAnywhere",
        "Unit Testing",
        "TDD",
        "RESTful Concepts",
        "JSON",
        "Virtual Environments",
        "Database Management",
        "Backend Development"
      ],
      en: [
        "Python",
        "Django",
        "MVT Architecture",
        "OOP",
        "CRUD",
        "ModelForms",
        "Authentication",
        "User Management",
        "Git",
        "GitHub",
        "Heroku",
        "PythonAnywhere",
        "Unit Testing",
        "TDD",
        "RESTful Concepts",
        "JSON",
        "Virtual Environments",
        "Database Management",
        "Backend Development"
      ]
    }
  },
  {
    id: "python-midudev",
    kind: "course",
    institution: "MiduDev",
    date: "2025",
    image: "/education/pmd.webp",
    featured: false,
    title: {
      es: "Python Desde Cero",
      en: "Python From Zero"
    },
    description: {
      es: "Curso introductorio a Python diseñado para aprender los fundamentos del lenguaje desde cero. Cubre sintaxis básica, estructuras de datos, control de flujo, funciones, y conceptos esenciales de programación. Enfoque práctico y moderno, impartido por Miguel Ángel Durán (Midudev), con énfasis en la resolución de problemas y buenas prácticas desde el primer día.",
      en: "Introductory Python course designed to learn language fundamentals from scratch. Covers basic syntax, data structures, control flow, functions, and essential programming concepts. Practical and modern approach, taught by Miguel Ángel Durán (Midudev), with emphasis on problem solving and best practices from day one."
    },
    skills: {
      es: [
        "Python",
        "Sintaxis Básica",
        "Estructuras de Datos",
        "Control de Flujo",
        "Funciones",
        "Programación Estructurada",
        "Resolución de Problemas",
        "Buenas Prácticas",
        "Algoritmos Básicos",
        "Ejercicios Prácticos"
      ],
      en: [
        "Python",
        "Basic Syntax",
        "Data Structures",
        "Control Flow",
        "Functions",
        "Structured Programming",
        "Problem Solving",
        "Best Practices",
        "Basic Algorithms",
        "Practical Exercises"
      ]
    }
  },
  {
    id: "rid-esba",
    kind: "diploma",
    institution: "ESBA",
    date: "2026",
    image: "/education/dri.webp",
    featured: false,
    title: {
      es: "Diplomatura en Redes Informáticas",
      en: "Diploma in Computer Networks"
    },
    description: {
      es: "Diplomatura en Redes Informáticas con énfasis en la configuración, administración y mantenimiento de redes locales y de área amplia. Se cubren temas como topologías de red, protocolos de comunicación, seguridad informática, y gestión de recursos en entornos empresariales.",
      en: "Diploma in Computer Networks with emphasis on configuration, administration and maintenance of local and wide area networks. Topics covered include network topologies, communication protocols, information security, and resource management in enterprise environments."
    },
    skills: {
      es: [
        "Redes Locales",
        "Protocolos de Comunicación",
        "Seguridad Informática",
        "Gestión de Recursos",
        "Configuración de Redes",
        "Mantenimiento de Redes"
      ],
      en: [
        "Local Networks",
        "Communication Protocols",
        "Information Security",
        "Resource Management",
        "Network Configuration",
        "Network Maintenance"
      ]
    }
  },
  {
    id: "opcw-cert",
    kind: "course",
    institution: "CENEDI",
    date: "2017",
    image: "/education/opcw.webp",
    featured: false,
    title: {
      es: "Operador PC Windows",
      en: "PC Windows Operator"
    },
    description: {
      es: "Curso integral de ofimática y manejo del sistema operativo Windows XP. Cubre el uso de herramientas del sistema (Bloc de notas, Calculadora, Paint, Explorador), gestión de archivos y carpetas, mantenimiento básico (Scandisk, desfragmentador, antivirus), y el dominio de aplicaciones de Office 2003: Word (procesamiento de texto), Excel (planillas electrónicas y bases de datos) y Access (bases de datos relacionales). Enfoque en conocimientos teóricos y procedimentales esenciales para el entorno laboral.",
      en: "Comprehensive course in office automation and Windows XP operating system management. Covers system tools usage (Notepad, Calculator, Paint, Explorer), file and folder management, basic maintenance (Scandisk, defragmenter, antivirus), and mastery of Office 2003 applications: Word (word processing), Excel (spreadsheets and databases) and Access (relational databases). Focus on theoretical and procedural knowledge essential for the work environment."
    },
    skills: {
      es: [
        "Windows XP",
        "Microsoft Word 2003",
        "Microsoft Excel 2003",
        "Microsoft Access 2003",
        "Gestión de Archivos",
        "Mantenimiento de PC",
        "Ofimática",
        "Procesamiento de Texto",
        "Planillas Electrónicas",
        "Bases de Datos",
        "Sistemas Operativos",
        "Herramientas del Sistema"
      ],
      en: [
        "Windows XP",
        "Microsoft Word 2003",
        "Microsoft Excel 2003",
        "Microsoft Access 2003",
        "File Management",
        "PC Maintenance",
        "Office Automation",
        "Word Processing",
        "Spreadsheets",
        "Databases",
        "Operating Systems",
        "System Tools"
      ]
    }
  },
  {
    id: "reparacion-celulares",
    kind: "course",
    institution: "CENEDI",
    date: "2017",
    image: "/education/rtc.webp",
    featured: false,
    title: {
      es: "Reparación de Teléfonos Celulares",
      en: "Mobile Phone Repair"
    },
    description: {
      es: "Curso técnico especializado en la reparación de teléfonos celulares de diferentes marcas y modelos. Incluye fundamentos de telefonía celular, electrónica básica, uso de herramientas de taller, diagnóstico de fallas, desarme y armado de dispositivos, soldadura de componentes, limpieza de placas mojadas, cambio de pantallas táctiles, reparación de audio, y desbloqueo por software. Ideal para iniciarse en el ámbito de la reparación electrónica con un enfoque teórico-práctico.",
      en: "Technical course specialized in repairing mobile phones of different brands and models. Includes cellular telephony fundamentals, basic electronics, workshop tools usage, fault diagnosis, device disassembly and assembly, component soldering, wet board cleaning, touch screen replacement, audio repair, and software unlocking. Ideal for entering the electronic repair field with a theoretical-practical approach."
    },
    skills: {
      es: [
        "Electrónica Básica",
        "Diagnóstico de Fallas",
        "Desarme y Armado",
        "Soldadura",
        "Limpieza de Placas",
        "Cambio de Pantallas",
        "Reparación de Audio",
        "Desbloqueo por Software",
        "Herramientas de Taller",
        "Telefonía Celular",
        "Reparación de Dispositivos Móviles"
      ],
      en: [
        "Basic Electronics",
        "Fault Diagnosis",
        "Disassembly and Assembly",
        "Soldering",
        "Board Cleaning",
        "Screen Replacement",
        "Audio Repair",
        "Software Unlocking",
        "Workshop Tools",
        "Cellular Telephony",
        "Mobile Device Repair"
      ]
    }
  },
  {
    id: "cb-cert",
    kind: "course",
    institution: "ClMe",
    date: "2021",
    image: "/education/cb.webp",
    featured: false,
    title: {
      es: "Conciliación Bancaria",
      en: "Bank Reconciliation"
    },
    description: {
      es: "Curso práctico de conciliación bancaria, enfocado en el control y ajuste de diferencias entre los registros contables de una empresa y los movimientos bancarios. Cubre conceptos fundamentales de cuentas corrientes, extractos bancarios, cheques comunes y diferidos, diferencias transitorias y permanentes, y aplicación de metodologías para conciliar saldos contables y bancarios mediante ejercicios reales con hojas de cálculo y registros contables.",
      en: "Practical bank reconciliation course, focused on controlling and adjusting differences between a company's accounting records and bank movements. Covers fundamental concepts of checking accounts, bank statements, common and deferred checks, transitory and permanent differences, and application of methodologies to reconcile accounting and bank balances through real exercises with spreadsheets and accounting records."
    },
    skills: {
      es: [
        "Conciliación Bancaria",
        "Contabilidad",
        "Extractos Bancarios",
        "Cuentas Corrientes",
        "Cheques Comunes y Diferidos",
        "Diferencias Transitorias",
        "Diferencias Permanentes",
        "Registros Contables",
        "Control Financiero",
        "Ajustes Contables",
        "Saldo Contable vs Saldo Bancario",
        "Ejercicios Prácticos",
        "Excel para Contabilidad",
        "Gestión de Cuentas Bancarias"
      ],
      en: [
        "Bank Reconciliation",
        "Accounting",
        "Bank Statements",
        "Checking Accounts",
        "Common and Deferred Checks",
        "Transitory Differences",
        "Permanent Differences",
        "Accounting Records",
        "Financial Control",
        "Accounting Adjustments",
        "Accounting vs Bank Balance",
        "Practical Exercises",
        "Excel for Accounting",
        "Bank Account Management"
      ]
    }
  }
]