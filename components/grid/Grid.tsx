import { useEffect, useState } from "react";
import styles from "./Grid.module.css";

export default function Grid() {
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
