import { Head } from "$fresh/runtime.ts";

interface ButtonProps {
  link: string;
  image: string;
  title: string;
  description: string;
}

function BlogButton({ link, image, title, description }: ButtonProps) {
  return (
    <a href={link}>
      <div class="aspect-[4/3] h-64 overflow-clip rounded-xl bg-surface0">
        <div class="h-2/3 overflow-clip">
          <img class="size-full object-cover" src={image} alt="" />
        </div>
        <div class="h-1/3 p-2">
          <h1 class="text-lg">{title}</h1>
          <p class="text-xs">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default function () {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="I write useless things." />
      </Head>

      <div class="flex flex-col items-center gap-12 pb-12 pt-24">
        <BlogButton
          link="/blog/1"
          image="https://images.unsplash.com/photo-1715963433657-559b3ea01e0d?auto=format&fit=crop&w=1080&q=80&fit=max"
          title="Blog_01"
          description="A new beginning."
        />
        <BlogButton
          link="/wip"
          image="https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=1080&q=80&fit=max"
          title="Title"
          description="Description"
        />
        <BlogButton
          link="/wip"
          image="https://images.unsplash.com/photo-1621839673705-6617adf9e890?auto=format&fit=crop&w=1080&q=80&fit=max"
          title="Title"
          description="Description"
        />
      </div>
    </>
  );
}
