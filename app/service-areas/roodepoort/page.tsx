import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("roodepoort")

export const metadata = areaMetadata(area)

export default function RoodepoortServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
