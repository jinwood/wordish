import { useState } from "react";
import { GRID_X } from "../../config";

interface GridItem {
  index: [number, number];
}

export default function Grid() {
  const [grid, setGrid] = useState<GridItem[]>([]);

  if (!grid.length) {
    setGrid(generateGrid());
  }

  function generateGrid() {
    const grid: GridItem[] = [];
    for (let i = 0; i < GRID_X; i++) {
      for (let j = 0; j < GRID_X; j++) {
        grid.push({
          index: [i, j],
        });
      }
    }
    return grid;
  }
  console.log(grid);
  return (
    <>
      <div className="grid">
        {grid &&
          grid.length &&
          grid.map((item) => (
            <div
              className="grid-item"
              key={`${item.index[0]},${item.index[1]}`}
            >
              {item.index[0]}, {item.index[1]}
            </div>
          ))}
      </div>
    </>
  );
}
