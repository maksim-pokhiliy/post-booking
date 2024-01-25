import styles from "./index.module.scss";
import { Link } from "react-router-dom";

import image1 from "../../../assets/images/home-navigation/image-1.jpg";
import image2 from "../../../assets/images/home-navigation/image-2.jpg";
import image3 from "../../../assets/images/home-navigation/image-3.jpg";
import image4 from "../../../assets/images/home-navigation/image-4.jpg";

import home from "../../../assets/icons/menu/home.svg";
import expedition from "../../../assets/icons/menu/expedition.svg";
import details from "../../../assets/icons/menu/details.svg";
import sailing from "../../../assets/icons/menu/sailing.svg";

import buttonHome from "../../../assets/icons/button-home.svg";

const Home = () => {
  return (
    <>
      <div className={styles.block}>
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
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
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

            <div className={styles.sitemap}>
              <Link
                className={styles.sitemapLink}
                style={{ backgroundImage: `url(${image1})` }}
              >
                <div className={styles.sitemapContent}>
                  <p className={styles.sitemapContentTitle}>Your expedition</p>
                  <div className={styles.sitemapFlex}>
                    <p className={styles.sitemapDescription}>
                      Trip itinerary and any extra bookings you’ve made.{" "}
                    </p>
                    <img className={styles.sitemapIcon} src={buttonHome} />
                  </div>
                </div>
              </Link>
              <Link
                className={styles.sitemapLink}
                style={{ backgroundImage: `url(${image2})` }}
              >
                <div className={styles.sitemapContent}>
                  <p className={styles.sitemapContentTitle}>Guest details</p>
                  <div className={styles.sitemapFlex}>
                    <p className={styles.sitemapDescription}>
                      Update passenger details and upload pre sailing documents.
                    </p>
                    <img className={styles.sitemapIcon} src={buttonHome} />
                  </div>
                </div>
              </Link>
              <Link
                className={styles.sitemapLink}
                style={{ backgroundImage: `url(${image3})` }}
              >
                <div className={styles.sitemapContent}>
                  <p className={styles.sitemapContentTitle}>Enhanced sailing</p>
                  <div className={styles.sitemapFlex}>
                    <p className={styles.sitemapDescription}>
                      Book upgrades, activities and excursions for your holiday.
                    </p>
                    <img className={styles.sitemapIcon} src={buttonHome} />
                  </div>
                </div>
              </Link>
              <Link
                className={styles.sitemapLink}
                style={{ backgroundImage: `url(${image4})` }}
              >
                <div className={styles.sitemapContent}>
                  <p className={styles.sitemapContentTitle}>
                    got any questions?
                  </p>
                  <div className={styles.sitemapFlex}>
                    <p className={styles.sitemapDescription}>
                      Need to talk to someone about your trip?
                    </p>
                    <img className={styles.sitemapIcon} src={buttonHome} />
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
