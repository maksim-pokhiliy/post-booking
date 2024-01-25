import React, { useState } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

import logo from "../../../assets/icons/logo.png";
import logoFull from "../../../assets/icons/logo-full.png";
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

        <div
          className={classNames(styles.block, {
            [styles.blockDisabled]: !session.sessionKey,
          })}
        >
          <button className={styles.notification}>
            <img className={styles.notificationIcon} src={notification} />
            <div className={styles.notificationCounter}>1</div>
          </button>
          <button
            className={styles.openMenu}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img className={styles.openMenuIcon} src={menu} />
          </button>
        </div>
        <div
          className={classNames(styles.modal, {
            [styles.modal_active]: isOpen,
          })}
        >
          <div className={styles.modalHead}>
            <Link className={styles.modalHeadLogo} to={"/"}>
              <img className={styles.modalHeadLogoIcon} src={logoFull} />
            </Link>
            <button
              className={styles.closeMenu}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img className={styles.closeMenuIcon} src={close} />
            </button>
          </div>

          <ul className={styles.modalMenu}>
            <li className={styles.modalMenuItem}>
              <Link className={styles.modalMenuButton}>
                <img className={styles.modalMenuButtonIcon} src={home} />
                Home
              </Link>
            </li>
            <li className={styles.modalMenuItem}>
              <Link className={styles.modalMenuButton}>
                <img className={styles.modalMenuButtonIcon} src={expedition} />
                YOUR EXPEDITION
              </Link>
            </li>
            <li className={styles.modalMenuItem}>
              <Link className={styles.modalMenuButton}>
                <img className={styles.modalMenuButtonIcon} src={details} />
                GUEST DETAILS
              </Link>
            </li>
            <li className={styles.modalMenuItem}>
              <Link className={styles.modalMenuButton}>
                <img className={styles.modalMenuButtonIcon} src={sailing} />
                ENHANCED SAILING
              </Link>
            </li>
          </ul>

          <div className={styles.logout}>
            <button className={styles.logoutButton}>
              <img className={styles.logoutButtonIcon} src={logout} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
