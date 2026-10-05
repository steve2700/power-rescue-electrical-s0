import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("pretoria")

export const metadata = areaMetadata(area)

export default function PretoriaServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
