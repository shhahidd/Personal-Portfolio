import { ElementType } from "react";
import { PolymorphicProps } from "@barrelrolla/react-components-library";

const defaultType = "h1";
export default function PageTitle<E extends ElementType = typeof defaultType>({
  as,
  children,
}: PolymorphicProps<E>) {
  const H = as || defaultType;
  return (
    <H className="text-5xl font-medium capitalize md:text-6xl">{children}</H>
  );
}
