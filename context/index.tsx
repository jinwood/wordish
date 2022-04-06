import { createContext, useReducer } from "react";
import { gridReducer } from "../store";

const initialState = {};

const Context = createContext({});

const combineReducers =
  (...reducers: any) =>
  (state: any, action: any) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    combineReducers(gridReducer),
    initialState
  );

  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
