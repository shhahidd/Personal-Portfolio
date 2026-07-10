import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-clip pt-12">
      <Navbar />
      <main className="mb-6 w-full max-w-(--max-width) flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}
