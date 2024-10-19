import { Head } from "$fresh/runtime.ts";
import Grid from "../../islands/Grid.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>Tic-Tac-Toe²</title>
        <meta
          name="description"
          content="A way more interesting Tic-Tac-Toe variant."
        />
      </Head>

      <Grid />
    </>
  );
}
