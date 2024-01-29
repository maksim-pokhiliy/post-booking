import styles from "./index.module.scss";
import notification from "../../../assets/icons/notification.svg";

const NotificationCounter = () => {
  return (
    <button className={styles.notification}>
      <img className={styles.notificationIcon} src={notification} />
      <div className={styles.notificationCounter}>1</div>
    </button>
  );
};

export default NotificationCounter;
