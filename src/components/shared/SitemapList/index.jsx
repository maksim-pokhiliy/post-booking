import { Link } from "react-router-dom";
import styles from "./index.module.scss";

import image1 from "../../../assets/images/home-navigation/image-1.jpg";
import image2 from "../../../assets/images/home-navigation/image-2.jpg";
import image3 from "../../../assets/images/home-navigation/image-3.jpg";
import image4 from "../../../assets/images/home-navigation/image-4.jpg";

import buttonHome from "../../../assets/icons/button-home.svg";

const SitemapList = () => {
  return (
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
          <p className={styles.sitemapContentTitle}>got any questions?</p>
          <div className={styles.sitemapFlex}>
            <p className={styles.sitemapDescription}>
              Need to talk to someone about your trip?
            </p>
            <img className={styles.sitemapIcon} src={buttonHome} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SitemapList;
