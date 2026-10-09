import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePage } from "@/components/service-page"
import { SERVICE_PAGES } from "@/lib/service-pages"

// Static routes (/faq, /areas, /services, /about, /emergency-electrical-repairs...) always win over this route.
// Anything that is not a known service slug returns a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(SERVICE_PAGES).map((slug) => ({ slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = SERVICE_PAGES[slug]
  if (!data) return {}

  return {
    title: { absolute: data.metaTitle },
    description: data.metaDescription,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      url: `/${slug}`,
      title: data.metaTitle,
      description: data.metaDescription,
      images: [data.heroImage],
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const data = SERVICE_PAGES[slug]
  if (!data) notFound()
  return <ServicePage data={data} />
}
