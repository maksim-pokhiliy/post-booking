import { Fragment } from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

import useCurrentRoutes from "../../../hooks/useCurrentRoutes";
import { ROOT } from "../../../utils/constants/routes";

import logo from "../../../assets/icons/logo.png";
import logoFull from "../../../assets/icons/logo-full.png";
import SvgButton from "../../shared/SvgButton";
import notification from "../../../assets/icons/notification.svg";

import styles from "./index.module.scss";
import { useDispatch } from "react-redux";

function Header({ isMenuVisible, onMenuToggle, isMenuDisabled = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { sideMenu } = useCurrentRoutes();

  const handleLinkClick = (routeKey) => () => {
    switch (routeKey) {
      case "LOGOUT": {
        navigate(ROOT);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <header className={styles.header}>
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
