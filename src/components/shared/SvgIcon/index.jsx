import classNames from "classnames";

import styles from "./index.module.scss";

const BASE = {};

const SVG_BY_TYPE = {
  ...BASE,
};

function SvgIcon({ type, className, onClick }) {
  const CustomSvg = SVG_BY_TYPE[type] || "svg";

  return (
    <CustomSvg
      className={classNames(styles.icon, className)}
      onClick={onClick}
    />
  );
}

SvgIcon.defaultProps = {
  className: "",
  onClick: () => {},
};

export default SvgIcon;
