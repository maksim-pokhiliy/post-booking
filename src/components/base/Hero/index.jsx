import styles from "./index.module.scss";
import home from "../../../assets/icons/menu/home.svg";
import expedition from "../../../assets/icons/menu/expedition.svg";
import details from "../../../assets/icons/menu/details.svg";
import sailing from "../../../assets/icons/menu/sailing.svg";
import backgroundHome from "../../../assets/images/background-home.jpg";
import backgroundEscape from "../../../assets/images/background-escape.jpg";
import backgroundGuest from "../../../assets/images/background-guest.jpg";
import backgroundSailing from "../../../assets/images/background-sailing.jpg";
import { Link, useLocation } from "react-router-dom";
import {
  ROOT,
  ESCAPE,
  GUEST_DETAILS,
  GUEST_EDIT,
  GUEST_DOCUMENT,
  SAILING,
} from "../../../utils/constants/routes";

const Hero = () => {
  const location = useLocation();

  const backgroundList = {
    [ROOT]: backgroundHome,
    [ESCAPE]: backgroundEscape,
    [GUEST_DETAILS]: backgroundGuest,
    [GUEST_EDIT]: backgroundGuest,
    [GUEST_DOCUMENT]: backgroundGuest,
    [SAILING]: backgroundSailing,
  };

  const getBackground = () => {
    return backgroundList[location.pathname];
  };

  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${getBackground() ? getBackground() : backgroundHome})`,
      }}
    >
      <div className={styles.navigation}>
        <div className={styles.navigationList}>
          <Link className={styles.navigationItem}>
            <div className={styles.navigationItemBlock}>
              <img className={styles.navigationIcon} src={home} />

              <p className={styles.navigationTitle}>HOME</p>
            </div>
          </Link>
          <Link className={styles.navigationItem}>
            <div className={styles.navigationItemBlock}>
              <img className={styles.navigationIcon} src={expedition} />
              <p className={styles.navigationTitle}>YOUR EXPEDITION</p>
            </div>
          </Link>
          <Link className={styles.navigationItem}>
            <div className={styles.navigationItemBlock}>
              <img className={styles.navigationIcon} src={details} />

              <p className={styles.navigationTitle}>GUEST DETAILS</p>
            </div>
          </Link>
          <Link className={styles.navigationItem}>
            <div className={styles.navigationItemBlock}>
              <img className={styles.navigationIcon} src={sailing} />
              <p className={styles.navigationTitle}>ENHANCED SAILING</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
