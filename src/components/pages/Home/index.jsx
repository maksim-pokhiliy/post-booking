import styles from "./index.module.scss";
import { Link } from "react-router-dom";


import image1 from "../../../assets/images/home-navigation/image-1.jpg";
import image2 from "../../../assets/images/home-navigation/image-2.jpg";
import image3 from "../../../assets/images/home-navigation/image-3.jpg";
import image4 from "../../../assets/images/home-navigation/image-4.jpg";

import buttonHome from "../../../assets/icons/button-home.svg";

const Home = () => {
  return (
    <>
      <div className={styles.block}>
        <div className={styles.hero}>
          <ul className={styles.counter}>
            <li className={styles.counterItem}>
              <div className={styles.counterItemValue}>1</div>
              <div className={styles.counterItemLabel}>days</div>
            </li>
            <li className={styles.counterItem}>
              <div className={styles.counterItemValue}>3</div>
              <div className={styles.counterItemLabel}>hours</div>
            </li>
            <li className={styles.counterItem}>
              <div className={styles.counterItemValue}>34</div>
              <div className={styles.counterItemLabel}>minus</div>
            </li>
            <li className={styles.counterItem}>
              <div className={styles.counterItemValue}>48</div>
              <div className={styles.counterItemLabel}>seconds</div>
            </li>
          </ul>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
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

            <div className={styles.navigation}>
              <Link
                className={styles.navigationLink}
                style={{ backgroundImage: `url(${image1})` }}
              >
                <div className={styles.navigationContent}>
                  <p className={styles.navigationContentTitle}>
                    Your expedition
                  </p>
                  <div className={styles.navigationFlex}>
                    <p className={styles.navigationDescription}>
                      Trip itinerary and any extra bookings you’ve made.{" "}
                    </p>
                    <img className={styles.navigationIcon} src={buttonHome} />
                  </div>
                </div>
              </Link>
              <Link
                className={styles.navigationLink}
                style={{ backgroundImage: `url(${image2})` }}
              >
                <div className={styles.navigationContent}>
                  <p className={styles.navigationContentTitle}>Guest details</p>
                  <div className={styles.navigationFlex}>
                    <p className={styles.navigationDescription}>
                      Update passenger details and upload pre sailing documents.
                    </p>
                    <img className={styles.navigationIcon} src={buttonHome} />
                  </div>
                </div>
              </Link>
              <Link
                className={styles.navigationLink}
                style={{ backgroundImage: `url(${image3})` }}
              >
                <div className={styles.navigationContent}>
                  <p className={styles.navigationContentTitle}>
                    Enhanced sailing
                  </p>
                  <div className={styles.navigationFlex}>
                    <p className={styles.navigationDescription}>
                      Book upgrades, activities and excursions for your holiday.
                    </p>
                    <img className={styles.navigationIcon} src={buttonHome} />
                  </div>
                </div>
              </Link>
              <Link
                className={styles.navigationLink}
                style={{ backgroundImage: `url(${image4})` }}
              >
                <div className={styles.navigationContent}>
                  <p className={styles.navigationContentTitle}>
                    got any questions?
                  </p>
                  <div className={styles.navigationFlex}>
                    <p className={styles.navigationDescription}>
                      Need to talk to someone about your trip?
                    </p>
                    <img className={styles.navigationIcon} src={buttonHome} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
