import Contacts from "../components/Content/Contacts";
import BasePage from "../components/Page/BasePage";

export default function ContactsPage() {
  document.title = "Shahid Patel | Contacts";
  return (
    <BasePage>
      <Contacts />
    </BasePage>
  );
}
