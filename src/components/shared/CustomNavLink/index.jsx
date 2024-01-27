import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./index.module.scss";
import home from "../../../assets/icons/menu/home.svg";
import expedition from "../../../assets/icons/menu/expedition.svg";
import details from "../../../assets/icons/menu/details.svg";
import sailing from "../../../assets/icons/menu/sailing.svg";

function CustomNavLink({ label, to, className }) {
  const icons = {
    home: home,
    your_expedition: expedition,
    guest_details: details,
    enhanced_sailing: sailing,
  };
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.link, className, {
          [styles.link_active]: isActive,
        })
      }
    >
      <img className={styles.icon} src={icons[label]} />
      {label.replaceAll("_", " ")}
    </NavLink>
  );
}

CustomNavLink.defaultProps = {
  className: "",
};

export default CustomNavLink;
