import { createContext, useReducer } from "react";
import { gridReducer, GridState } from "./reducer";

interface GridContext {
  state: GridState;
}

const initialState: GridState = {
  grid: [],
};

const Context = createContext<GridContext>({ state: initialState });

const combineReducers =
  (...reducers: any) =>
  (state: any, action: any) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(gridReducer, initialState);

  const value: { state: GridState; dispatch: any } = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
