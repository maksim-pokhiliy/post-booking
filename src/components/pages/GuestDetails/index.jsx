import { Link } from "react-router-dom";
import CustomGuestList from "../../shared/CustomGuestList";
import styles from "./index.module.scss";
import SitemapList from "../../shared/SitemapList";

const GuestDetails = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <p className={styles.title}>GUEST DETAILS</p>
        <p className={styles.second}>Booking ID: AS1234321</p>

        <div className={styles.guest}>
          <p className={styles.guestTitle}>GUESTS</p>

          <div className={styles.guestList}>
            <div className={styles.guestItem}>
              <p className={styles.guestNumber}>NAVIGATOR SUITE: 3421</p>

              <CustomGuestList />

              <Link className={styles.guestAddCabin}>
                Add a guest to this cabin
              </Link>
            </div>
            <div className={styles.guestItem}>
              <p className={styles.guestNumber}>NAVIGATOR SUITE: 3421</p>

              <CustomGuestList />

              <Link className={styles.guestAddCabin}>
                Add a guest to this cabin
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.document}>
          <p className={styles.documentTitle}>GUESTS DOCUMENTS</p>

          <div className={styles.documentFlex}>
            <p className={styles.documentSecond}>
              Guest travel documents missing
            </p>

            <p className={styles.documentScore}>2</p>
          </div>

          <CustomGuestList />

          <p className={styles.documentDescription}>
            We kindly remind you that it is your responsibility to determine
            passport and visa requirements for your expedition itinerary and
            your responsibility to ensure that you are in possession of all
            required visas and travel documents prior to sailing.
          </p>

          <SitemapList />
        </div>
      </div>
    </div>
  );
};

export default GuestDetails;
