import classNames from "classnames";
import { Link } from "react-router-dom";

import logo from "../../../assets/icons/logo.png";
import logoFull from "../../../assets/icons/logo-full.png";
import menu from "../../../assets/icons/menu.svg";
import close from "../../../assets/icons/close.svg";
import home from "../../../assets/icons/menu/home.svg";
import details from "../../../assets/icons/menu/details.svg";
import expedition from "../../../assets/icons/menu/expedition.svg";
import sailing from "../../../assets/icons/menu/sailing.svg";
import logout from "../../../assets/icons/logout.svg";

import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import NotificationCounter from "../../shared/NotificationCounter";
import { setModal } from "../../../redux/reducer/modal";

const Header = ({ transparent = false }) => {
  const dispatch = useDispatch();
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

        <div
          className={classNames(styles.block, {
            [styles.blockDisabled]: !session.sessionKey,
          })}
        >
          <NotificationCounter onClick={() => dispatch(setModal(true))} />
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
