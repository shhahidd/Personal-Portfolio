import { experienceData } from "../../data/bio";
import BioContent from "./BioContent";

export default function Experience({ title }: { title?: string }) {
  return <BioContent bioData={experienceData} title={title} />;
}
