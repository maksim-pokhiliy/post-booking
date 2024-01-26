import styles from "./index.module.scss";
import Header from "../../base/Header";
import logo from "../../../assets/icons/logo.png";
import { useState } from "react";
import SideMenu from "../../base/SideMenu";

function AuthLayout({ children }) {
  return (
    <main className={styles.block}>
      <Header isMenuDisabled={true} />

      <div className={styles.hero}></div>
      <section className={styles.container}>{children}</section>

      <div className={styles.logo}>
        <img className={styles.logoIcon} src={logo} />
      </div>
    </main>
  );
}

export default AuthLayout;
