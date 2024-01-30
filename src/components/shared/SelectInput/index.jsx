import { useState } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

const SelectInput = ({
  title = "",
  defaultText = "",
  required = false,
  value = "",
  setValue,
  errorActive = "",
  errorText = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.block}>
      <p className={styles.title}>
        {title} {required && <span className={styles.required}>*</span>}
      </p>
      <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
        <div
          className={classNames(styles.selectValue, {
            [styles.selectValue_active]: errorActive,
          })}
        >
          {value ? value : defaultText}
        </div>
        <div
          className={classNames(styles.selectThoomb, {
            [styles.selectThoomb_active]: isOpen,
          })}
        >
          <button
            className={styles.selectItem}
            onClick={() => setValue("test1")}
          >
            <p className={styles.selectItemText}>test1</p>
          </button>
          <button
            className={styles.selectItem}
            onClick={() => setValue("test2")}
          >
            <p className={styles.selectItemText}>test2</p>
          </button>
          <button
            className={styles.selectItem}
            onClick={() => setValue("test3")}
          >
            <p className={styles.selectItemText}>test3</p>
          </button>
        </div>
      </div>
      {errorActive && errorText && <p className={styles.error}>{errorText}</p>}
    </div>
  );
};

export default SelectInput;
