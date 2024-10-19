interface LinkProps {
  link: string;
  name: string;
}

function Link({ link, name }: LinkProps) {
  return (
    <li>
      <a href={link} class="aria-[current]:text-red">
        {name}
      </a>
    </li>
  );
}

export default function () {
  return (
    <nav class="fixed top-0 z-10 h-12 w-full bg-crust">
      <ul
        id="navbar-list"
        class="flex size-full flex-row items-center gap-6 p-2 font-display"
      >
        <li class="h-full">
          <a class="group size-full" href="/" aria-label="Return home">
            <div class="flex aspect-square h-full items-center justify-center rounded-full bg-surface2 p-1 group-aria-[current=page]:bg-red">
              <img class="size-full" src="/logo.svg" alt="" />
            </div>
          </a>
        </li>
        <Link link="/apps" name="Apps" />
        <Link link="/blog" name="Blog" />
        <Link link="/portfolio" name="Portfolio" />
      </ul>
    </nav>
  );
}
