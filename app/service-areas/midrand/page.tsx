import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("midrand")

export const metadata = areaMetadata(area)

export default function MidrandServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
