import { Link } from "react-router";
import { Anchor } from "@barrelrolla/react-components-library";
import PageTitle from "../ui/PageTitle";

export type NotFoundProps = {
  title: string;
};
export default function NotFoundContent({ title }: NotFoundProps) {
  return (
    <div className="px-4 pt-40 text-center">
      <PageTitle>{`${title} not found!`}</PageTitle>
      <p className="mt-8">
        Please verify the URL you're trying to access or go back to the{" "}
        <Anchor as={Link} to={"/"}>
          Home Page
        </Anchor>
      </p>
    </div>
  );
}
