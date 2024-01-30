import styles from "./index.module.scss";
import Header from "../../base/Header";
import Footer from "../../base/Footer";
import Hero from "../../base/Hero";

import ModalContainer from "../../container/ModalContainer";

import { useState } from "react";
import SideMenu from "../../base/SideMenu";


function MainLayout({ children }) {
  const [isMenuVisible, setIsMenuVissible] = useState(false);

  const handleMenuToggle = (isVisible) => () => {
    setIsMenuVissible(isVisible);
  };
  return (
    <main className={styles.container}>
      <ModalContainer />
      <Header
        isMenuVisible={isMenuVisible}
        onMenuToggle={handleMenuToggle(!isMenuVisible)}
      />

      <SideMenu isVisible={isMenuVisible} onClose={handleMenuToggle(false)} />
      <section className={styles.content}>
        <Hero /> {children}
      </section>
      <Footer />
    </main>
  );
}

export default MainLayout;
