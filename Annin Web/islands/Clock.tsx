import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Etc/GMT-1", // https://www.iana.org/time-zones
});

function getTimeString() {
  return dateTimeFormat.format(new Date());
}

export default function () {
  const time = useSignal(getTimeString());

  if (IS_BROWSER) {
    setInterval(function () {
      time.value = getTimeString();
    }, 1000);
  }

  return <p class="text-xl">It is currently {time} for me.</p>;
}
