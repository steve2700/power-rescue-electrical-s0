import { ServiceAreaTemplate, areaMetadata } from "@/components/service-area-template"
import { getServiceArea } from "@/lib/service-areas"

const area = getServiceArea("morningside")

export const metadata = areaMetadata(area)

export default function MorningsideServiceAreaPage() {
  return <ServiceAreaTemplate area={area} />
}
