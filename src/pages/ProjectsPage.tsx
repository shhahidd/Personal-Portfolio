import Projects from "../components/Content/Projects";
import BasePage from "../components/Page/BasePage";

export default function ProjectsPage() {
  document.title = "Shahid Patel | Projects";

  return (
    <BasePage>
      <Projects />
    </BasePage>
  );
}
