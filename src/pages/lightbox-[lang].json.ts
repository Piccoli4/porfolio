import type { APIRoute, GetStaticPaths } from "astro"
import { LANGS, type Lang } from "@/i18n/ui"
import { buildLightboxData } from "@/data/lightbox"

export const getStaticPaths: GetStaticPaths = () => LANGS.map((lang) => ({ params: { lang } }))

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(buildLightboxData(params.lang as Lang)), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  })
