import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const CustomGuestList = ({ guests = [] }) => {
  return (
    <div className={styles.guest}>
      {guests.map((item) => (
        <div className={styles.guestItem} key={item.id}>
          <div className={styles.guestBlock}>
            <p className={styles.guestName}>{item.name}</p>
            <p className={styles.guestDate}>{item.date}</p>
          </div>
          <Link className={styles.guestEdit}>Edit</Link>
        </div>
      ))}
      <div className={styles.guestItem}>
        <div className={styles.guestBlock}>
          <p className={styles.guestName}>Mr B. Dickenson</p>
          <p className={styles.guestDate}>03/03/1958</p>
        </div>
        <Link className={styles.guestEdit}>Edit</Link>
      </div>
      <div className={styles.guestItem}>
        <div className={styles.guestBlock}>
          <p className={styles.guestName}>Mr B. Dickenson</p>
          <p className={styles.guestDate}>03/03/1958</p>
        </div>
        <Link className={styles.guestEdit}>Edit</Link>
      </div>
    </div>
  );
};

export default CustomGuestList;
