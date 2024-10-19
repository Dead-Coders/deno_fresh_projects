import { ComponentChildren, FunctionComponent } from "preact";
import { Signal, useSignal } from "@preact/signals";

const magicSquare = [2, 7, 6, 9, 5, 1, 4, 3, 8];

interface GridItemProps {
  parentIndex: number;
  index: number;
}

interface GridProps {
  GridItem: FunctionComponent<GridItemProps>;
  gridIndex: number;
}

type MagicSquareArray = Array<number>;
type MagicSquareArrays = Array<MagicSquareArray>;
type SignalArray = Array<Signal>;

function Nought() {
  return (
    <div class="size-full p-[10%]">
      <div class="size-full rounded-full border-[0.25rem] border-text" />
    </div>
  );
}

function Cross() {
  return (
    <div class="relative size-full">
      <div class="absolute left-1/2 h-full w-1 -rotate-45 bg-text" />
      <div class="absolute left-1/2 h-full w-1 rotate-45 bg-text" />
    </div>
  );
}

function hasWon(magicSquareArray: MagicSquareArray) {
  for (let i = 0; i < magicSquareArray.length - 2; i++) {
    for (let j = i + 1; j < magicSquareArray.length - 1; j++) {
      for (let k = j + 1; k < magicSquareArray.length; k++) {
        if (
          magicSquareArray[i] + magicSquareArray[j] + magicSquareArray[k] ===
          15
        ) {
          return true;
        }
      }
    }
  }
}

export default function () {
  const player = useSignal(<Cross />);
  const activeGrid = useSignal(-1);
  let overlaySignals: Array<Signal> = [];
  const noughts: MagicSquareArrays = [];
  const crosses: MagicSquareArrays = [];
  let gridsNoughts: MagicSquareArray = [];
  let gridsCrosses: MagicSquareArray = [];
  const buttonSignals: SignalArray = [];
  let gameOver = false;
  const descriptor = useSignal("is playing");

  function Button({ index, parentIndex }: GridItemProps) {
    const symbol = useSignal<ComponentChildren>(null);
    buttonSignals.push(symbol);

    function handleClick() {
      if (gameOver) {
        return;
      }

      if (activeGrid.value !== -1 && activeGrid.value !== parentIndex) {
        return;
      }

      if (symbol.value) {
        return;
      }

      symbol.value = player.value;

      let newPlayer;
      let symbolArray;
      let gridsSymbolArray;
      if (player.value.type === Nought) {
        newPlayer = <Cross />;
        symbolArray = noughts;
        gridsSymbolArray = gridsNoughts;
      } else {
        newPlayer = <Nought />;
        symbolArray = crosses;
        gridsSymbolArray = gridsCrosses;
      }
      symbolArray[parentIndex].push(magicSquare[index]);

      let overlaySymbol;
      if (hasWon(symbolArray[parentIndex])) {
        overlaySymbol = player.value;
      } else if (
        crosses[parentIndex].length + noughts[parentIndex].length ===
        9
      ) {
        overlaySymbol = " ";
      }
      if (overlaySymbol) {
        gridsSymbolArray.push(magicSquare[parentIndex]);

        overlaySignals[parentIndex].value = (
          <div class="absolute z-10 size-full bg-overlay2/90">
            {overlaySymbol}
          </div>
        );
      }

      if (overlaySignals[index].value === null) {
        activeGrid.value = index;
      } else {
        activeGrid.value = -1;
      }

      if (hasWon(gridsSymbolArray)) {
        descriptor.value = "has won";
      } else if (gridsCrosses.length + gridsNoughts.length === 9) {
        descriptor.value = "has tied with the opponent";
      } else {
        player.value = newPlayer;
        return;
      }

      gameOver = true;
    }

    return (
      <button
        class="border border-crust"
        aria-label={"Grid " + parentIndex + " Button " + index}
        onClick={handleClick}
      >
        <div class="size-full">{symbol}</div>
      </button>
    );
  }

  function SmallGrid({ index }: GridItemProps) {
    const overlay = useSignal<ComponentChildren>(null);
    overlaySignals.push(overlay);

    const isActive = activeGrid.value === index;

    noughts.push([]);
    crosses.push([]);

    return (
      <div
        class={
          "relative w-full " +
          (isActive ? "border-2" : "border") +
          " " +
          (isActive ? "border-red" : "border-crust")
        }
      >
        {overlay}
        <Grid GridItem={Button} gridIndex={index} />
      </div>
    );
  }

  function Grid({ GridItem, gridIndex }: GridProps) {
    const gridItems = [];

    for (let i = 0; i < 9; i++) {
      gridItems.push(<GridItem index={i} parentIndex={gridIndex} />);
    }

    return <div class="grid h-full grid-cols-3 grid-rows-3">{gridItems}</div>;
  }

  function handleClick() {
    player.value = <Cross />;
    activeGrid.value = -1;
    for (const signal of overlaySignals) {
      signal.value = null;
    }
    overlaySignals = [];
    for (const array of noughts) {
      array.length = 0;
    }
    for (const array of crosses) {
      array.length = 0;
    }
    gridsNoughts = [];
    gridsCrosses = [];
    for (const signal of buttonSignals) {
      signal.value = null;
    }
    gameOver = false;
    descriptor.value = "is playing";
  }

  return (
    <div class="flex flex-row flex-wrap place-items-center">
      <div class="size-[100vmin] shrink-0">
        <Grid GridItem={SmallGrid} gridIndex={-1} />
      </div>

      <div class="flex grow flex-col place-items-center">
        <div class="size-40">{player}</div>
        <h2 class="mb-8">{descriptor}</h2>
        <button
          class="my-8 rounded-full bg-surface0 px-4 py-2"
          onClick={handleClick}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
