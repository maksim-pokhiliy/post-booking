import styles from "./index.module.scss";
import home from "../../../assets/icons/menu/home.svg";
import expedition from "../../../assets/icons/menu/expedition.svg";
import details from "../../../assets/icons/menu/details.svg";
import sailing from "../../../assets/icons/menu/sailing.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>
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
