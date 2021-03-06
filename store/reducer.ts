import { GRID_X, GRID_Y } from "../config";
import { Action } from "./actions";

interface Letter {
  guessValue: string;
  softMatch: boolean;
  hardMatch: boolean;
}

interface GridItem {
  index: [number, number];
  letter?: Letter;
}

export interface GridState {
  grid: GridItem[];
}

function generateGrid() {
  const grid: GridItem[] = [];
  for (let i = 0; i < GRID_X; i++) {
    for (let j = 0; j < GRID_Y; j++) {
      grid.push({
        index: [i, j],
      });
    }
  }
  return grid;
}

const initialState = {
  grid: generateGrid(),
};

export const gridReducer = (
  state = initialState,
  action: Action
): GridState => {
  console.log("reducer", state);
  if (action.type === "ADD_LETTER") {
    return {
      ...state,
      grid: state.grid.map((item) => {
        if (
          item.index[0] === action.payload.index[0] &&
          item.index[1] === action.payload.index[1]
        ) {
          return {
            ...item,
            letter: {
              guessValue: action.payload.guessValue,
              softMatch: action.payload.softMatch,
              hardMatch: action.payload.hardMatch,
            },
          };
        }
        return item;
      }),
    };
  } else {
    return state;
  }
};
