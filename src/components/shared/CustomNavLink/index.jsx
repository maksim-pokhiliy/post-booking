import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./index.module.scss";
import home from "../../../assets/icons/menu/home.svg";

function CustomNavLink({ label, to, className }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.link, className, {
          [styles.link_active]: isActive,
        })
      }
    >
      <img className={styles.icon} src={home} />
      {label}
    </NavLink>
  );
}

CustomNavLink.defaultProps = {
  className: "",
};

export default CustomNavLink;
