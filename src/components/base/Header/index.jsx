import React, { useState } from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

import logo from "../../../assets/icons/logo.png";
import logoFull from "../../../assets/icons/logo-full.png";

import classNames from "classnames";
import { useSelector } from "react-redux";
import SvgIcon from "../../shared/SvgIcon";

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
            <SvgIcon className={styles.notificationIcon} type={"nofication"} />
            <div className={styles.notificationCounter}>1</div>
          </button>
          <button
            className={styles.openMenu}
            onClick={() => setIsOpen(!isOpen)}
          >
            <SvgIcon className={styles.openMenuIcon} type={"menu"} />
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
              <SvgIcon className={styles.closeMenuIcon} type={"close"} />
            </button>
          </div>

          <ul className={styles.modalMenu}>
            <li className={styles.modalMenuItem}>
              <Link className={styles.modalMenuButton}>
                <SvgIcon className={styles.modalMenuButtonIcon} type={"home"} />
                Home
              </Link>
            </li>
            <li className={styles.modalMenuItem}>
              <Link className={styles.modalMenuButton}>
                <SvgIcon
                  className={styles.modalMenuButtonIcon}
                  type={"expedition"}
                />
                YOUR EXPEDITION
              </Link>
            </li>
            <li className={styles.modalMenuItem}>
              <Link className={styles.modalMenuButton}>
                <SvgIcon
                  className={styles.modalMenuButtonIcon}
                  type={"details"}
                />
                GUEST DETAILS
              </Link>
            </li>
            <li className={styles.modalMenuItem}>
              <Link className={styles.modalMenuButton}>
                <SvgIcon
                  className={styles.modalMenuButtonIcon}
                  type={"sailing"}
                />
                ENHANCED SAILING
              </Link>
            </li>
          </ul>

          <div className={styles.logout}>
            <button className={styles.logoutButton}>
              <SvgIcon className={styles.logoutButtonIcon} type={"logout"} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
