import { useQuery } from "react-query";

import styles from "../styles/Home.module.css";
import React from "react";
import Chart from "../components/Chart";

export default function Example() {
  const [intervalMs, setIntervalMs] = React.useState(1000);
  const { isLoading, error, data, isFetching } = useQuery(
    "points",
    () => fetch("/api/points1000000").then((res) => res.json()),
    {
      refetchInterval: intervalMs,
    }
  );

  if (isLoading) return <p>Loading...</p>;


  return (
    <div className={styles.container}>
        <main className={styles.main}>
      <label>
        Query Interval speed (ms):{" "}
        <input
          value={intervalMs}
          onChange={(ev) => setIntervalMs(Number(ev.target.value))}
          type="number"
          step="100"
        />{" "}
        <span
          style={{
            display: "inline-block",
            marginLeft: ".5rem",
            width: 10,
            height: 10,
            background: isFetching ? "green" : "transparent",
            transition: !isFetching ? "all .3s ease" : "none",
            borderRadius: "100%",
            transform: "scale(2)",
          }}
        />
      </label>
        <Chart data={data} />
      </main>
    </div>
  );
}

