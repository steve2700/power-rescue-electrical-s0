import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("bedfordview")

export const metadata = areaMetadata(area)

export default function BedfordviewServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
