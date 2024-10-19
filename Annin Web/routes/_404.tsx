import { Head } from "$fresh/runtime.ts";

export default function () {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="Wuh oh."></meta>
      </Head>

      <div class="grid size-full place-content-center">
        <div class="grid aspect-square grid-flow-col grid-cols-5 grid-rows-5 place-items-center font-display text-7xl">
          <h1 class="row-span-full">&lt;</h1>

          <h1 class="row-span-full">4</h1>

          <span />
          <h1 class="[writing-mode:vertical-lr]">H</h1>
          <a href="/" aria-label="Return home">
            <div class="m-4 size-16 bg-[url('/logo.svg')] bg-contain bg-center bg-no-repeat" />
          </a>
          <h1 class="[writing-mode:vertical-lr]">M</h1>
          <h1 class="[writing-mode:vertical-lr]">E</h1>

          <h1 class="row-span-full">4</h1>

          <h1 class="row-span-full">&gt;</h1>
        </div>
      </div>
    </>
  );
}
