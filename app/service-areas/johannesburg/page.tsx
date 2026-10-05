import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("johannesburg")

export const metadata = areaMetadata(area)

export default function JohannesburgServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
