import { projectsData } from "../../data/bio";
import BioContent from "./BioContent";

export default function Projects({ title }: { title?: string }) {
  return <BioContent bioData={projectsData} title={title} />;
}
