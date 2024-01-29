import styles from "./index.module.scss";
import Header from "../../base/Header";
import Footer from "../../base/Footer";
import { useState } from "react";
import SideMenu from "../../base/SideMenu";
import { Link } from "react-router-dom";
import home from "../../../assets/icons/menu/home.svg";
import expedition from "../../../assets/icons/menu/expedition.svg";
import details from "../../../assets/icons/menu/details.svg";
import sailing from "../../../assets/icons/menu/sailing.svg";

function SailingLayout({ children }) {
  const [isMenuVisible, setIsMenuVissible] = useState(false);

  const handleMenuToggle = (isVisible) => () => {
    setIsMenuVissible(isVisible);
  };
  return (
    <main className={styles.container}>
      <Header
        isMenuVisible={isMenuVisible}
        onMenuToggle={handleMenuToggle(!isMenuVisible)}
      />

      <SideMenu isVisible={isMenuVisible} onClose={handleMenuToggle(false)} />
      <section className={styles.content}>
        {" "}
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
          <p className={styles.price}>ADULT $99 CHILD $67</p>
        </div>
        {children}
      </section>
      <Footer />
    </main>
  );
}

export default SailingLayout;
