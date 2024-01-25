import classNames from "classnames";
import { ReactComponent as Menu } from "../../../assets/icons/menu.svg";
import { ReactComponent as Close } from "../../../assets/icons/close.svg";
import { ReactComponent as Nofication } from "../../../assets/icons/notification.svg";
import { ReactComponent as Details } from "../../../assets/icons/menu/details.svg";
import { ReactComponent as Home } from "../../../assets/icons/menu/home.svg";
import { ReactComponent as Expedition } from "../../../assets/icons/menu/expedition.svg";
import { ReactComponent as Sailing } from "../../../assets/icons/menu/sailing.svg";
import { ReactComponent as Logout } from "../../../assets/icons/logout.svg";
import { ReactComponent as Minus } from "../../../assets/icons/minus.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";

import styles from "./index.module.scss";

const BASE = {
  menu: Menu,
  close: Close,
  nofication: Nofication,
  details: Details,
  home: Home,
  expedition: Expedition,
  sailing: Sailing,
  logout: Logout,
  minus: Minus,
  plus: Plus,
};

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
