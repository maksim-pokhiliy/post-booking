import styles from "./index.module.scss";

import SitemapList from "../../shared/SitemapList";
import Timer from "./molecules/Timer";

const Home = () => {
  return (
    <>
      <div className={styles.block}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Timer />
            <p className={styles.second}>UNTIL YOU SET SAIL WITH US</p>

            <p className={styles.title}>WELCOME ALEX</p>

            <p className={styles.description}>
              We hope you’re excited about your expedition with us. We can’t
              wait to welcome you on board.
              <br />
              <br />
              Within the app you can view your booking, manage guest details,
              upload pre sailing documents, book extras and get excited about
              your holiday.
            </p>

            <SitemapList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
