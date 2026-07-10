import { ElementType } from "react";
import PageTitle from "./PageTitle";
import {
  Divider,
  PolymorphicProps,
} from "@barrelrolla/react-components-library";

export default function PageTitleWithDivider<H extends ElementType>({
  children,
  as,
}: PolymorphicProps<H>) {
  const H = as || "h1";

  return (
    <>
      <PageTitle as={H}>{children}</PageTitle>
      <Divider width={2} className="w-3/4" />
    </>
  );
}
