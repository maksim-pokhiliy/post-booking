import styles from "./index.module.scss";
import ExcursionList from "../../shared/ExcursionList";
import SelectInput from "../../shared/SelectInput";

const Sailing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <p className={styles.title}>ENHANCED SAILING</p>
        <p className={styles.description}>
          Enhance your stay with us by booking some of our extras or excursions.
        </p>

        <div className={styles.filter}>
          <SelectInput defaultText="Show all" title="Filter by..." />
        </div>

        <ExcursionList />
      </div>
    </div>
  );
};

export default Sailing;
