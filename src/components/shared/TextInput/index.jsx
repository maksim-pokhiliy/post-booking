import styles from "./index.module.scss";
import classNames from "classnames";

const TextInput = ({
  title = "",
  placeholrder = "",
  errorActive = false,
  errorText = "",
  value = "",
  setInput = () => {},
  theme = "",
}) => {
  return (
    <label className={styles.label} style={{ marginTop: title ? 55 : 22 }}>
      {title && 
        <p
          className={classNames(styles.title, {
            [styles.titleLight]: theme === "light",
          })}
        >
          {title}
        </p>
      }

      <input
        value={value}
        onInput={({ target }) => setInput(target.value)}
        placeholder={placeholrder}
        className={classNames(styles.input, {
          [styles.inputLight]: theme === "light",
          [styles.inputError]: errorActive,
        })}
      />
      {errorActive && errorText && <p className={styles.error}>{errorText}</p>}
    </label>
  );
};

export default TextInput;
