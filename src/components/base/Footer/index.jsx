import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import home from "../../../assets/icons/menu/home.svg";
import expedition from "../../../assets/icons/menu/expedition.svg";
import details from "../../../assets/icons/menu/details.svg";
import sailing from "../../../assets/icons/menu/sailing.svg";
import logo from "../../../assets/icons/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        <div className={styles.footerList}>
          <Link className={styles.footerItem}>
            <div className={styles.footerItemBlock}>
              <img className={styles.footerIcon} src={home} />
              <p className={styles.footerTitle}>HOME</p>
            </div>
          </Link>
          <Link className={styles.footerItem}>
            <div className={styles.footerItemBlock}>
              <img className={styles.footerIcon} src={expedition} />
              <p className={styles.footerTitle}>YOUR EXPEDITION</p>
            </div>
          </Link>
          <Link className={styles.footerItem}>
            <div className={styles.footerItemBlock}>
              <img className={styles.footerIcon} src={details} />
              <p className={styles.footerTitle}>GUEST DETAILS</p>
            </div>
          </Link>
          <Link className={styles.footerItem}>
            <div className={styles.footerItemBlock}>
              <img className={styles.footerIcon} src={sailing} />
              <p className={styles.footerTitle}>ENHANCED SAILING</p>
            </div>
          </Link>
        </div>

        <Link to={"/"} className={styles.footerLogo}>
          <img className={styles.footerLogoIcon} src={logo} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
