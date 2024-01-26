import { useEffect, useRef, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";

import useClickOutside from "../../../hooks/useClickOutside";
import useCurrentRoutes from "../../../hooks/useCurrentRoutes";
import { ROOT } from "../../../utils/constants/routes";

import CustomNavLink from "../../shared/CustomNavLink";

import styles from "./index.module.scss";
import { useDispatch } from "react-redux";

import logout from "../../../assets/icons/logout.svg";

function SideMenu({ isVisible, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const { sideMenu } = useCurrentRoutes();

  const menuRef = useRef(null);

  const handleLinkClick = (routeKey) => () => {
    switch (routeKey) {
      case "LOGOUT": {
        onClose();

        requestAnimationFrame(() => {
          navigate(ROOT);
        });
        break;
      }

      default: {
        break;
      }
    }
  };

  useEffect(onClose, [pathname]);

  useClickOutside(menuRef, onClose);

  return (
    <div
      ref={menuRef}
      className={classNames(styles.container, {
        [styles.container_visible]: isVisible,
      })}
    >
      <div className={classNames(styles.content)}>
        <nav className={styles.nav}>
          {Object.entries(sideMenu).map(([routeKey, route]) => {
            const { type, label } = route;

            if (type === "button") {
              return (
                <span
                  key={routeKey}
                  className={styles.buttonLink}
                  onClick={handleLinkClick(routeKey)}
                >
                  {label}
                </span>
              );
            }

            if (type === "link") {
              return (
                <CustomNavLink
                  key={routeKey}
                  label={label}
                  to={routeKey}
                  className={styles.link}
                />
              );
            }

            return <Fragment key={routeKey} />;
          })}
        </nav>
        <div className={styles.logout}>
          <button className={styles.logoutButton}>
            <img className={styles.logoutButtonIcon} src={logout} />
            Logout
          </button>
        </div>
      </div>

      <div
        onClick={onClose}
        className={classNames(styles.backdrop, {
          [styles.backdrop_visible]: isVisible,
        })}
      />
    </div>
  );
}

export default SideMenu;
