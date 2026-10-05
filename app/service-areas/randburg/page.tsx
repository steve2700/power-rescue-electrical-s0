import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("randburg")

export const metadata = areaMetadata(area)

export default function RandburgServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
