import styles from "./index.module.scss";
import image1 from "../../../assets/images/sailing/image-1.jpg";
import image2 from "../../../assets/images/sailing/image-2.jpg";
import image3 from "../../../assets/images/sailing/image-3.jpg";
import image4 from "../../../assets/images/sailing/image-4.jpg";

const ExcursionList = () => {
  return (
    <div className={styles.list}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img className={styles.img} src={image1} />
          <div className={styles.excursion}>EXCURSION</div>
        </div>
        <p className={styles.title}>Escorted sightseeing safaris by Zodiac</p>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <img className={styles.img} src={image2} />
          <div className={styles.excursion}>EXCURSION</div>
        </div>
        <p className={styles.title}>Escorted sightseeing safaris by Zodiac</p>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <img className={styles.img} src={image3} />
          <div className={styles.excursion}>EXCURSION</div>
        </div>
        <p className={styles.title}>Escorted sightseeing safaris by Zodiac</p>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <img className={styles.img} src={image4} />
          <div className={styles.excursion}>EXCURSION</div>
        </div>
        <p className={styles.title}>Escorted sightseeing safaris by Zodiac</p>
      </div>
    </div>
  );
};

export default ExcursionList;
