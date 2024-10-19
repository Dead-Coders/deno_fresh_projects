import { PageProps } from "$fresh/server.ts";
import Navbar from "../../components/Navbar.tsx";

export default function ({ Component }: PageProps) {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}
