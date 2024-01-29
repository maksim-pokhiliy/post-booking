import styles from "./index.module.scss";
import NotificationCounter from "../../shared/NotificationCounter";
import closeModal from "../../../assets/icons/close-modal.svg";
import StandartButton from "../../shared/StandartButton";
import classNames from "classnames";

const ModalContainer = ({ isModalOpen = false, setClose }) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.container_active]: isModalOpen,
      })}
    >
      <div className={styles.modal}>
        <div className={styles.head}>
          <NotificationCounter />

          <button className={styles.close} onClick={() => setClose(false)}>
            <img className={styles.closeIcon} src={closeModal} />
          </button>
        </div>

        <div className={styles.body}>
          <p className={styles.bodyTitle}>TRAVEL REQUIREMENTS</p>

          <p className={styles.bodyDescription}>
            We kindly remind you that it is your responsibility to determine
            passport and visa requirements for your expedition itinerary and
            your responsibility to ensure that you are in possession of all
            required visas and travel documents prior to sailing.
          </p>

          <StandartButton text="UPLOAD DOCUMENTS" />
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
