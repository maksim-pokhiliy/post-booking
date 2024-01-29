import styles from "./index.module.scss";
import notification from "../../../assets/icons/notification.svg";

const NotificationCounter = ({ count = 0, onClick = () => {} }) => {
  return (
    <button className={styles.notification} onClick={onClick}>
      <img className={styles.notificationIcon} src={notification} />
      {count ? (
        <div className={styles.notificationCounter}>{count}</div>
      ) : (
        <></>
      )}
    </button>
  );
};

export default NotificationCounter;
