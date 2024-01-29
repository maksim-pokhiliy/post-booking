import styles from "./index.module.scss";
import Header from "../../base/Header";
import Footer from "../../base/Footer";
import Hero from "../../base/Hero";
import ModalContainer from "../../container/ModalContainer";

function MainLayout({ children }) {
  return (
    <main className={styles.container}>
      <ModalContainer />
      <Header />
      <section className={styles.content}>
        <Hero /> {children}
      </section>
      <Footer />
    </main>
  );
}

export default MainLayout;
