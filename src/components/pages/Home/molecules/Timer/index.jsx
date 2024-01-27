import { useEffect } from "react";
import styles from "./index.module.scss";
import { useTimer } from "use-timer";
import secondsToDhms from "../../../../../utils/helpers/formatSecond";

const Timer = () => {
  const { time, start } = useTimer({
    initialTime: 10000,
    timerType: "DECREMENTAL",
  });

  useEffect(() => {
    start();
  }, []);
  return (
    <>
      <ul className={styles.counter}>
        <li className={styles.counterItem}>
          <div className={styles.counterItemValue}>
            {secondsToDhms(time).days}
          </div>
          <div className={styles.counterItemLabel}>days</div>
        </li>
        <li className={styles.counterItem}>
          <div className={styles.counterItemValue}>
            {secondsToDhms(time).hours}
          </div>
          <div className={styles.counterItemLabel}>hours</div>
        </li>
        <li className={styles.counterItem}>
          <div className={styles.counterItemValue}>
            {secondsToDhms(time).minutes}
          </div>
          <div className={styles.counterItemLabel}>minus</div>
        </li>
        <li className={styles.counterItem}>
          <div className={styles.counterItemValue}>
            {secondsToDhms(time).seconds}
          </div>
          <div className={styles.counterItemLabel}>seconds</div>
        </li>
      </ul>
    </>
  );
};

export default Timer;
