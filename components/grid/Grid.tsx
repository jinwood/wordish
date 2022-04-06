import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import styles from "./Grid.module.css";

export default function Grid() {
  const { state } = useContext(Context);
  const { grid } = state;
  console.log("Grid.tsx: state", state.grid);
  return (
    <>
      <div className={styles.container}>
        {grid &&
          grid.length &&
          grid.map((item) => (
            <div
              className={styles.tile}
              key={`${item.index[0]},${item.index[1]}`}
            ></div>
          ))}
      </div>
    </>
  );
}
