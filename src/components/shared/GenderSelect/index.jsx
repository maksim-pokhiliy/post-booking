import styles from "./index.module.scss";
import classNames from "classnames";

const GenderSelect = ({ gender = "male", setGender }) => {
  return (
    <div className={styles.select}>
      <p className={styles.title}>gender</p>
      <div className={styles.block}>
        <button
          className={classNames(styles.button, {
            [styles.button_active]: gender === "male",
          })}
          onClick={() => setGender("male")}
        >
          Male
        </button>
        <button
          className={classNames(styles.button, {
            [styles.button_active]: gender === "female",
          })}
          onClick={() => setGender("female")}
        >
          Female
        </button>
        <button
          className={classNames(styles.button, {
            [styles.button_active]: gender === "other",
          })}
          onClick={() => setGender("other")}
        >
          Other
        </button>
      </div>
    </div>
  );
};

export default GenderSelect;
