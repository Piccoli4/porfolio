
export type Level = "advanced" | "intermediate" | "basic"
export type Category = "frontend" | "backend" | "database" | "mobile" | "tools"

interface Tech {
  name: string
  /** Archivo en /public/tech/<icon>.svg */
  icon: string
  level?: Level
  /** Íconos de un solo color que hay que invertir según el tema */
  tone?: "light" | "dark"
}

export const TECH = {
  HTML: { name: "HTML5", icon: "html", level: "advanced" },
  CSS: { name: "CSS3", icon: "css", level: "advanced" },
  JAVASCRIPT: { name: "JavaScript", icon: "javascript", level: "advanced" },
  TYPESCRIPT: { name: "TypeScript", icon: "typescript", level: "intermediate" },
  REACT: { name: "React", icon: "react", level: "advanced" },
  NEXTJS: { name: "Next.js", icon: "nextjs", level: "intermediate" },
  ASTRO: { name: "Astro", icon: "astro", level: "intermediate", tone: "light" },
  TAILWIND: { name: "Tailwind CSS", icon: "tailwind", level: "advanced" },
  BOOTSTRAP: { name: "Bootstrap", icon: "bootstrap", level: "advanced" },
  CHAKRA: { name: "Chakra UI", icon: "chakra", level: "intermediate" },
  REDUX: { name: "Redux", icon: "redux", level: "intermediate" },
  PHP: { name: "PHP", icon: "php", level: "advanced", tone: "light" },
  SYMFONY: { name: "Symfony", icon: "symfony", level: "advanced" },
  LARAVEL: { name: "Laravel", icon: "laravel", level: "basic" },
  PYTHON: { name: "Python", icon: "python", level: "intermediate" },
  DJANGO: { name: "Django", icon: "django", level: "intermediate" },
  FIREBASE: { name: "Firebase", icon: "firebase", level: "intermediate" },
  MYSQL: { name: "MySQL", icon: "mysql", level: "intermediate", tone: "dark" },
  POSTGRESQL: { name: "PostgreSQL", icon: "postgresql", level: "basic" },
  SQLITE: { name: "SQLite", icon: "sqlite", level: "basic" },
  REACTNATIVE: { name: "React Native", icon: "react", level: "intermediate" },
  EXPO: { name: "Expo", icon: "expo", level: "intermediate", tone: "dark" },
  GIT: { name: "Git", icon: "git", level: "intermediate" },
  GITHUB: { name: "GitHub", icon: "github", level: "intermediate", tone: "light" },
  GITLAB: { name: "GitLab", icon: "gitlab", level: "intermediate" },
  VERCEL: { name: "Vercel", icon: "vercel", level: "basic", tone: "light" },
  NETLIFY: { name: "Netlify", icon: "netlify", level: "basic" },
  // Solo se usan como etiquetas de proyectos
  VITE: { name: "Vite", icon: "vite" },
  WORDPRESS: { name: "WordPress", icon: "wordpress" },
} satisfies Record<string, Tech>

export type TechKey = keyof typeof TECH

export const STACK: { id: Category; techs: TechKey[] }[] = [
  { id: "frontend", techs: ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "REACT", "NEXTJS", "ASTRO", "TAILWIND", "BOOTSTRAP", "CHAKRA", "REDUX"] },
  { id: "backend", techs: ["PHP", "SYMFONY", "LARAVEL", "PYTHON", "DJANGO", "FIREBASE"] },
  { id: "database", techs: ["MYSQL", "POSTGRESQL", "SQLITE"] },
  { id: "mobile", techs: ["REACTNATIVE", "EXPO"] },
  { id: "tools", techs: ["GIT", "GITHUB", "GITLAB", "VERCEL", "NETLIFY"] },
]

export const STACK_COUNT = STACK.reduce((total, group) => total + group.techs.length, 0)
