import { Outlet } from "react-router";
import PageTitleWithDivider from "../components/ui/PageTitleWithDivider";

export default function BioLayout({ title }: { title: string }) {
  return (
    <>
      <PageTitleWithDivider>{title}</PageTitleWithDivider>
      <Outlet />
    </>
  );
}
