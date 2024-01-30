import classNames from "classnames";
import styles from "./index.module.scss";

const CheckBox = ({ active = false, text = "", style = {}, changeValue }) => {
  return (
    <div className={styles.block} style={style}>
      <label className={styles.checkbox}>
        <input
          className={classNames(styles.input, {
            [styles.input_active]: active,
          })}
          type="checkbox"
          checked={active}
          onChange={changeValue}
          defaultChecked={false}
        />

        <p className={styles.text}>{text}</p>
      </label>
    </div>
  );
};

export default CheckBox;
