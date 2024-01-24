// import { useState } from "react";

import AuthLayout from "../Auth";
import MainLayout from "../Main";
// import SearchLayout from "../Search";
// import Header from "../../base/Header";
// import SideMenu from "../../base/SideMenu";
// import Footer from "../../base/Footer";

import styles from "./index.module.scss";

const LAYOUTS_BY_TYPE = {
  auth: AuthLayout,
  main: MainLayout,
};

function RootLayout({ type, children }) {
  // const [isMenuVisible, setIsMenuVissible] = useState(false);

  // const handleMenuToggle = (isVisible) => () => {
  //   setIsMenuVissible(isVisible);
  // };

  const Layout = LAYOUTS_BY_TYPE[type];

  return (
    <div>
      {/* <Header
        isMenuVisible={isMenuVisible}
        onMenuToggle={handleMenuToggle(!isMenuVisible)}
      /> */}

      {/* <SideMenu isVisible={isMenuVisible} onClose={handleMenuToggle(false)} /> */}

      <main className={styles.container}>
        <div className={styles.content}>
          <Layout>{children}</Layout>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default RootLayout;
