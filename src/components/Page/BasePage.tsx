import { PropsWithChildren } from "react";

export default function BasePage({ children }: PropsWithChildren) {
  window.scrollTo(0, 0);

  return <>{children}</>;
}
