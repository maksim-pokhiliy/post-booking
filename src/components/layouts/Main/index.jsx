import styles from "./index.module.scss";
import Header from "../../base/Header";
import Footer from "../../base/Footer";

function MainLayout({ children }) {
  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.content}>{children}</section>
      <Footer />
    </main>
  );
}

export default MainLayout;
