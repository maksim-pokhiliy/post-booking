import styles from "../../index.module.scss";

const ExpeditionHead = () => {
  return (
    <div className={styles.expeditionHead}>
      <div className={styles.expeditionHeadFlex}>
        <p className={styles.expeditionHeadDate}>NOV 26</p>
        <p className={styles.expeditionHeadLocation}>Ushuaia, Argentina</p>
      </div>
    </div>
  );
};

export default ExpeditionHead;
