import { useT, type Lang } from "./ui"

// Secciones de la página, en orden. `num` alimenta la numeración "/// 01".
export const getSections = (lang: Lang) => {
  const t = useT(lang).nav
  return [
    { id: "proyectos", label: t.projects, num: "01" },
    { id: "experiencia", label: t.experience, num: "02" },
    { id: "formacion", label: t.education, num: "03" },
    { id: "sobre-mi", label: t.about, num: "04" },
    { id: "techstack", label: t.stack, num: "05" },
  ]
}
