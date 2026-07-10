import {
  Footer as BarrelrollaFooter,
  FooterIconsContainer,
  FooterLink,
} from "@barrelrolla/react-components-library";
import { contacts } from "../../data/bio";

export default function Footer() {
  return (
    <BarrelrollaFooter color="main">
      <div className="flex w-full items-center justify-start pt-2">
        <FooterIconsContainer>
          {contacts.map((contact) => (
            <FooterLink
              key={contact.title}
              target="_blank"
              aria-label={`${contact.title} link`}
              href={contact.url}
            >
              <contact.icon strokeWidth={10} />
            </FooterLink>
          ))}
        </FooterIconsContainer>
      </div>
    </BarrelrollaFooter>
  );
}
