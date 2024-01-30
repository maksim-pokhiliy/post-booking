import classNames from "classnames";
import { Link } from "react-router-dom";

import logo from "../../../assets/icons/logo.png";
import logoFull from "../../../assets/icons/logo-full.png";
import SvgButton from "../../shared/SvgButton";
import NotificationCounter from "../../shared/NotificationCounter";

import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/reducer/modal";

function Header({ isMenuVisible, onMenuToggle, isMenuDisabled = false }) {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to={"/"}>
          <img className={styles.logoIcon} src={logo} />
        </Link>

        <Link className={styles.logoFull} to={"/"}>
          <img className={styles.logoIcon} src={logoFull} />
        </Link>

        <div
          className={classNames(styles.notification, {
            [styles.notification_disabled]: isMenuVisible || isMenuDisabled,
          })}
        >
          <NotificationCounter
            isMenuVisible={isMenuDisabled}
            isMenuDisabled={isMenuDisabled}
            count={1}
            onClick={() => dispatch(setModal(true))}
          />
        </div>

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
