import { Head } from "$fresh/runtime.ts";

interface ButtonProps {
  link: string;
  image: string;
  label: string;
}

function AppButton({ link, image, label }: ButtonProps) {
  return (
    <a href={link}>
      <img
        class="aspect-[2/1] w-80 rounded-3xl"
        src={image}
        aria-label={label}
      />
    </a>
  );
}

export default function () {
  return (
    <>
      <Head>
        <title>Apps</title>
        <meta name="description" content="A collection of boring web apps." />
      </Head>

      <div class="flex w-full flex-row flex-wrap justify-center gap-6 px-12 pb-12 pt-24">
        <AppButton
          link="/apps/ttt"
          image="https://images.unsplash.com/photo-1600224374823-211f85c16521?auto=format&fit=crop&w=1080&q=80&fit=max"
          label="Tic tac toe squared"
        />
        <AppButton
          link="/wip"
          image="https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=1080&q=80&fit=max"
          label=""
        />
        <AppButton
          link="/wip"
          image="https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=1080&q=80&fit=max"
          label=""
        />
        <AppButton
          link="/wip"
          image="https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=1080&q=80&fit=max"
          label=""
        />
      </div>
    </>
  );
}
