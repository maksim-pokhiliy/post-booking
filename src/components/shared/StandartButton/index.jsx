import React from "react";
import styles from "./index.module.scss";

const StandartButton = ({
  text = "",
  click = () => {},
  style = {},
  styleContainer = {},
}) => {
  return (
    <div className={styles.flex} style={styleContainer}>
      <button className={styles.button} onClick={click} style={style}>
        {text}
      </button>
    </div>
  );
};

export default StandartButton;
