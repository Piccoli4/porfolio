import { useT, type Lang } from "@/i18n/ui"
import { PROJECTS } from "./projects"
import { EDUCATION } from "./education"

export interface LightboxEntry {
  title: string
  subtitle: string
  images: { src: string; alt: string }[]
  description?: string
  skills?: string[]
  skillsLabel?: string
}

// Clave que usan los botones con data-lightbox
export const projectKey = (id: string) => `project:${id}`
export const educationKey = (id: string) => `edu:${id}`

// Datos del visor por idioma. Se sirven como /lightbox-<lang>.json y se
// descargan recién al abrir el visor, para no inflar el HTML.
export const buildLightboxData = (lang: Lang): Record<string, LightboxEntry> => {
  const t = useT(lang)
  const data: Record<string, LightboxEntry> = {}

  for (const p of PROJECTS) {
    data[projectKey(p.id)] = {
      title: p.title,
      subtitle: `${t.lightbox.galleryOf} ${p.title}`,
      images: p.gallery.map((src, i) => ({ src, alt: `${p.title} — ${t.projects.screenshot} ${i + 1}` })),
    }
  }

  for (const e of EDUCATION) {
    data[educationKey(e.id)] = {
      title: e.title[lang],
      subtitle: `${e.institution} · ${e.date}`,
      images: [{ src: e.image, alt: `${t.education.certificate} ${e.title[lang]}` }],
      description: e.description[lang],
      skills: e.skills[lang],
      skillsLabel: t.education.skills,
    }
  }

  return data
}
