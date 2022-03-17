import { useQuery } from "react-query";

import styles from "../styles/Home.module.css";

import Chart from "../components/Chart";

export default function Example() {
  const { isLoading, error, data, isFetching } = useQuery("reminders", () =>
    fetch("/api/reminders").then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Chart />
        {data.reminders.map((reminder) => (
          <p key={reminder.id}>{reminder.message}</p>
        ))}
      </main>
    </div>
  );
}
