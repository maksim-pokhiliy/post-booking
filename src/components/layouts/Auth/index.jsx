import styles from "./index.module.scss";
import Header from "../../base/Header";
import logo from "../../../assets/icons/logo.png";

function AuthLayout({ children }) {
  return (
    <main className={styles.block}>
      <Header style={{ background: "transparent" }} />
      <div className={styles.hero}></div>
      <section className={styles.container}>{children}</section>

      <div className={styles.logo}>
        <img className={styles.logoIcon} src={logo} />
      </div>
    </main>
  );
}

export default AuthLayout;
