export interface Action {
  type: string;
  payload: {
    index: [number, number];
    guessValue: string;
    softMatch: boolean;
    hardMatch: boolean;
  };
}

export const addLetterAction = (
  index: [number, number],
  guessValue: string,
  softMatch: boolean,
  hardMatch: boolean
): Action => {
  return {
    type: "ADD_LETTER",
    payload: {
      index,
      guessValue,
      softMatch,
      hardMatch,
    },
  };
};
