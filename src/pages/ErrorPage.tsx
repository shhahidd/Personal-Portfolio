import { Anchor } from "@barrelrolla/react-components-library";
import { Link, useRouteError } from "react-router";
import PageTitle from "../components/ui/PageTitle";

export default function ErrorPage() {
  document.title = "Shahid Patel | Error";

  const error = useRouteError();
  return (
    <div className="text-center px-4 pt-40">
      <PageTitle>Oooops! Something went wrong!</PageTitle>
      <p className="mt-8">{error instanceof Error ? error.message : ""}</p>
      <p className="mt-8">
        Please try again later or go back to the{" "}
        <Anchor as={Link} to="/">
          Home Page
        </Anchor>
      </p>
    </div>
  );
}
