import classNames from "classnames";

import SvgIcon from "../SvgIcon";

import styles from "./index.module.scss";

function SvgButton({ icon, className, onClick }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-label={icon}
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      <SvgIcon type={icon} className={styles.icon} />
    </button>
  );
}

SvgButton.defaultProps = {
  className: "",
};

export default SvgButton;
