import type { Metadata } from "next"
import { HomepageExperience } from "@/components/home/homepage-experience"

export const metadata: Metadata = {
  title: { absolute: "Emergency Electrician Gauteng | 24/7 Repairs, Solar & COCs | Power Rescue" },
  description:
    "24/7 emergency electricians across Gauteng. Repairs, DB boards, COCs, solar, inverter backup, electric fences, CCTV and gate motors. Call or WhatsApp 063 039 2007.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Emergency Electrician Gauteng | Power Rescue Electrical",
    description: "When the power goes, we come running. Registered electricians across Gauteng, 24/7.",
    images: ["/pr/hero-db-board.png"],
  },
}

export default function HomePage() {
  return <HomepageExperience />
}
