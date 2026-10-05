import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("rosebank")

export const metadata = areaMetadata(area)

export default function RosebankServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
