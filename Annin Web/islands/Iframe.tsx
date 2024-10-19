import { createRef } from "preact";
import Portfolio from "../routes/(HasNavbar)/portfolio.tsx";
import Navbar from "../components/Navbar.tsx";

interface IframeProps {
  render: boolean;
}

export default function (props: IframeProps) {
  if (props.render === false) {
    return null;
  }

  const iframeRef = createRef();

  const handleScroll = () => {
    iframeRef.current.scroll({
      top: globalThis.scrollY * 1.5,
      behavior: "smooth",
    });
  };
  globalThis.addEventListener("scroll", handleScroll);

  return (
    <div
      class="absolute -z-10 size-full scale-75 overflow-scroll"
      ref={iframeRef}
    >
      <Navbar />
      <Portfolio renderIframe={false} />
    </div>
  );
}
