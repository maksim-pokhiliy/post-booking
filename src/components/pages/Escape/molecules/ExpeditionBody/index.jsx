import styles from "../../index.module.scss";
import iterary1 from "../../../../../assets/images/itinerary/image-1.jpg";

const ExpeditionBody = () => {
  return (
    <div className={styles.expeditionBody}>
      <div className={styles.expeditionBodyImage}>
        <img className={styles.expeditionBodyImg} src={iterary1} />
      </div>
      <div className={styles.expeditionBodyContent}>
        <div className={styles.expeditionBodyDeparts}>
          <p className={styles.expeditionBodyDepartsText}>Departs:</p>
          <div className={styles.expeditionBodyDepartsValue}>07:00am</div>
        </div>
        <p className={styles.expeditionBodyDescription}>
          Although its nickname the “End of the World” – derived from its
          location along the southernmost tip of South America among the Tierra
          del Fuego archipelago – Ushuaia is far from the end of any adventure.
          Where the Andes meet the Beagle Channel and the snow-capped Martial
          Mountains sit behind a sprawling city of colorful buildings, lies a
          lively town ready and waiting to take you on the thrill ride of a
          lifetime. Scenes like Parque Yatana give you the chance to immerse
          yourself in the rich, indigenous culture.
        </p>
      </div>
    </div>
  );
};

export default ExpeditionBody;
