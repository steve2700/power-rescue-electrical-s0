import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("centurion")

export const metadata = areaMetadata(area)

export default function CenturionServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
