import classNames from "classnames";
import { Link } from "react-router-dom";

import logo from "../../../assets/icons/logo.png";
import logoFull from "../../../assets/icons/logo-full.png";
import SvgButton from "../../shared/SvgButton";
import styles from "./index.module.scss";
import notification from "../../../assets/icons/notification.svg";
import menu from "../../../assets/icons/menu.svg";
import close from "../../../assets/icons/close.svg";
import home from "../../../assets/icons/menu/home.svg";
import details from "../../../assets/icons/menu/details.svg";
import expedition from "../../../assets/icons/menu/expedition.svg";
import sailing from "../../../assets/icons/menu/sailing.svg";
import logout from "../../../assets/icons/logout.svg";

import classNames from "classnames";
import { useSelector } from "react-redux";

const Header = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const session = useSelector((state) => state.session);


function Header({ isMenuVisible, onMenuToggle, isMenuDisabled = false }) {
  return (
    <header
      className={classNames(styles.header, {
        [styles.headerTransparent]: transparent,
      })}
    >
      <div className={styles.container}>
        <Link className={styles.logo} to={"/"}>
          <img className={styles.logoIcon} src={logo} />
        </Link>

        <Link className={styles.logoFull} to={"/"}>
          <img className={styles.logoIcon} src={logoFull} />
        </Link>

        <button
          className={classNames(styles.notification, {
            [styles.notification_disabled]: isMenuVisible || isMenuDisabled,
          })}
        >
          <img className={styles.notificationIcon} src={notification} />
          <div className={styles.notificationCounter}>1</div>
        </button>

        <>
          <SvgButton
            icon="menu"
            onClick={onMenuToggle}
            className={classNames(styles.menuIcon, {
              [styles.menuIcon_visible]: !isMenuVisible,
              [styles.menuIcon_disabled]: isMenuDisabled,
            })}
          />

          <SvgButton
            icon="close"
            onClick={onMenuToggle}
            className={classNames(styles.menuIcon, {
              [styles.menuIcon_visible]: isMenuVisible,
              [styles.menuIcon_disabled]: isMenuDisabled,
            })}
          />
        </>
      </div>
    </header>
  );
}

export default Header;
