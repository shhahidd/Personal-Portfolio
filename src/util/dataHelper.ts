import {
  BioCategory,
  educationData,
  experienceData,
  projectsData,
} from "../data/bio";

export function getBioData(id: string, category: BioCategory) {
  let data;
  switch (category) {
    case "experience":
      data = experienceData.filter((data) => data.id === id);
      if (data.length > 0) {
        return data[0];
      }
      break;

    case "education":
      data = educationData.filter((data) => data.id === id);
      if (data.length > 0) {
        return data[0];
      }
      break;

    case "projects":
      data = projectsData.filter((data) => data.id === id);
      if (data.length > 0) {
        return data[0];
      }
      break;

    default:
      break;
  }
}
