import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("sandton")

export const metadata = areaMetadata(area)

export default function SandtonServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
