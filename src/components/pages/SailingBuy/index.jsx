import styles from "./index.module.scss";
import plus from "../../../assets/icons/count/plus.svg";
import minus from "../../../assets/icons/count/minus.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const SailingBuy = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const increment = (type) => {
    switch (type) {
      case "adults":
        setAdults(adults + 1);
        break;
      case "children":
        setChildren(children + 1);
    }
  };

  const decrement = (type) => {
    switch (type) {
      case "adults":
        if (adults <= 0) return;
        setAdults(adults - 1);
        break;
      case "children":
        if (children <= 0) return;
        setChildren(children - 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.buttons}>
          <Link className={styles.back}>Back to all </Link>
        </div>
        <p className={styles.title}>ESCORTED SIGHTSEEING SAFARI BY ZODIAC</p>

        <div className={styles.flex}>
          <p className={styles.price}>ADULT $99 CHILD $67</p>
        </div>
        <p className={styles.description}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. <br />
          <br />
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia. It is a
          paradisematic country, in which roasted parts of sentences fly into
          your mouth.
        </p>

        <div className={styles.grid}>
          <div className={styles.count}>
            <button
              className={styles.minus}
              onClick={() => decrement("adults")}
            >
              <img className={styles.minusIcon} src={minus} />
            </button>

            <div className={styles.info}>
              <p className={styles.infoNumber}>{adults}</p>
              <p className={styles.infoTitle}>adults</p>
              <p className={styles.infoDesc}>AGED 18+ YEARS</p>
            </div>

            <button className={styles.plus} onClick={() => increment("adults")}>
              <img className={styles.plusIcon} src={plus} />
            </button>
          </div>

          <div className={styles.count}>
            <button
              className={styles.minus}
              onClick={() => decrement("children")}
            >
              <img className={styles.minusIcon} src={minus} />
            </button>

            <div className={styles.info}>
              <p className={styles.infoNumber}>{children}</p>
              <p className={styles.infoTitle}>CHILDREN</p>
              <p className={styles.infoDesc}>
                AGED 3-17 AT THE TIME OF SAILING
              </p>
            </div>

            <button
              className={styles.plus}
              onClick={() => increment("children")}
            >
              <img className={styles.plusIcon} src={plus} />
            </button>
          </div>
        </div>

        <div className={styles.totalFlex}>
          <div className={styles.total}>
            <div className={styles.totalBlock}>
              <p className={styles.totalSub}>SUBTOTAL</p>
              <p className={styles.totalNumber}>$199</p>
            </div>
          </div>
          <button className={styles.totalButton}>BOOK</button>
        </div>
      </div>
    </div>
  );
};

export default SailingBuy;
