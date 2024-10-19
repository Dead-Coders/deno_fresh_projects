import { Head } from "$fresh/runtime.ts";
import { ComponentChildren, VNode } from "preact";
import Iframe from "../../islands/Iframe.tsx";

interface PortfolioProps {
  renderIframe: boolean;
}

interface ContainerProps {
  children: VNode[] | VNode | ComponentChildren;
}

interface PageProps {
  video?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  link?: string;
  others?: ComponentChildren;
}

function Container({ children }: ContainerProps) {
  return (
    <div class="flex size-full flex-col items-center justify-center gap-2 bg-base/80 p-4 text-center">
      {children}
    </div>
  );
}

function Page({
  video,
  heading,
  subheading,
  description,
  link,
  others,
}: PageProps) {
  function Heading() {
    if (!heading) {
      return null;
    }
    return <h1 class="font-display text-7xl">{heading}</h1>;
  }

  function Subheading() {
    if (!subheading) {
      return null;
    }
    return <h2 class="text-2xl">{subheading}</h2>;
  }

  function Description() {
    if (!description) {
      return null;
    }
    return <p class="text-xs">{description}</p>;
  }

  function Link() {
    if (!link) {
      return null;
    }
    return (
      <a href={link} target="_blank" aria-label="Source code at Github">
        <div class="mt-4 size-8 bg-github-mark bg-contain bg-no-repeat dark:bg-github-mark-white" />
      </a>
    );
  }

  function Video() {
    if (!video) {
      return null;
    }
    return (
      <video
        class="absolute -z-10 size-full object-cover [mask-image:_linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(0,0,0,0)_10%,_rgba(0,0,0,1)_30%,_rgba(0,0,0,1)_70%,_rgba(0,0,0,0)_90%,_rgba(0,0,0,0))]"
        src={video}
        autoplay
        muted
        loop
      />
    );
  }

  return (
    <>
      <Video />
      <Container>
        <Heading />
        <Subheading />
        <Description />
        <Link />
        {others}
      </Container>
    </>
  );
}

export default function (props: PortfolioProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My (mostly unfinished) work." />
      </Head>

      <Page
        heading="ANNIN-SITE"
        link="https://github.com/Anninzy/annin-site"
        subheading="Under heavy construction."
        description="Built with Fresh & Tailwind. Written in TS."
        others={
          <>
            <Iframe render={props.renderIframe} />
            <div class="absolute bottom-[10%] aspect-square w-[2vmin] rotate-45 border-b-[0.5vmin] border-r-[0.5vmin] border-text" />
          </>
        }
      />

      <Page
        heading="DUSE-MASH"
        link="https://github.com/Anninzy/duse-mash"
        subheading="A certain rhythm game remade."
        description="Built with Godot. Written in GDScript."
      />

      <Page
        heading="FPS"
        link="https://github.com/Anninzy/fps"
        subheading="An attempt to replicate VALORANT in a Lego game."
        description="Built with Rojo. Written in luau."
      />

      <Container>
        <p class="text-xs">
          Icon traced from{" "}
          <a href="https://j5daigada.tumblr.com/post/619306719958450176/whoops-my-finger-slipped-and-i-drew-modeus">
            daigada's art
          </a>
          .
        </p>
      </Container>
    </>
  );
}
