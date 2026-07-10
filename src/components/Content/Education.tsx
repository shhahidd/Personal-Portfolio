import { educationData } from "../../data/bio";
import BioContent from "./BioContent";

export default function Education({ title }: { title?: string }) {
  return <BioContent bioData={educationData} title={title} />;
}
