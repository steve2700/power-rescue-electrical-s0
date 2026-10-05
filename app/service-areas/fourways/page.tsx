import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("fourways")

export const metadata = areaMetadata(area)

export default function FourwaysServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
