import styles from "./index.module.scss";
import Header from "../../base/Header";

function AuthLayout({ children }) {
  return (
    <main className={styles.block}>
      <Header style={{ background: "transparent" }} />
      <div className={styles.hero}></div>
      <section className={styles.container}>{children}</section>
    </main>
  );
}

export default AuthLayout;
