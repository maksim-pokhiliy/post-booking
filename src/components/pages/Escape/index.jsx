import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import Collapsible from "../../shared/Collapsible";
import StandartButton from "../../shared/StandartButton";
import ExpeditionBody from "./molecules/ExpeditionBody";
import ExpeditionHead from "./molecules/ExpeditionHead";

import polarIcon from "../../../assets/icons/polar-expeditions.svg";
import cabins1 from "../../../assets/images/cabins/image-1.jpg";
import cabins2 from "../../../assets/images/cabins/image-2.jpg";
import sailing1 from "../../../assets/images/sailing/image-1.jpg";
import sailing2 from "../../../assets/images/sailing/image-2.jpg";
import sailing3 from "../../../assets/images/sailing/image-3.jpg";
import sailing4 from "../../../assets/images/sailing/image-4.jpg";

const Escape = () => {
  const navigation = useNavigate();

  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.titles}>
          <img className={styles.polar} src={polarIcon} />
          <p className={styles.title}>9-Night Ushuaia Roundtrip 11.26.23</p>
          <p className={styles.bookingId}>Booking ID: AS1234321</p>
        </div>

        <div className={styles.flex}>
          <div className={styles.dates}>
            <div className={styles.datesItem}>
              <p className={styles.datesItemTitle}>Date of Departure:</p>
              <p className={styles.dateItemValue}>9th Dec 2023</p>
            </div>
            <div className={styles.datesItem}>
              <p className={styles.datesItemTitle}>Number of nights:</p>
              <p className={styles.dateItemValue}>9 nights</p>
            </div>
            <div className={styles.datesItem}>
              <p className={styles.datesItemTitle}>Booking date:</p>
              <p className={styles.dateItemValue}>21st July 2021</p>
            </div>
          </div>
          <div className={styles.balances}>
            <div className={styles.balancesItem}>
              <p className={styles.balancesItemTitle}>Balance remaining:</p>
              <p className={styles.balancesItemValue}>$9882</p>
            </div>
            <div className={styles.balancesItem}>
              <p className={styles.balancesItemTitle}>Balance due:</p>
              <p className={styles.balancesItemValue}>5th Dec 2023</p>
            </div>
          </div>
        </div>

        <div className={styles.cabins}>
          <div className={styles.cabinsTitle}>
            <p className={styles.cabinsTitleText}>CABINS</p>
            <Link className={styles.cabinsTitleLink}>
              View guest information
            </Link>
          </div>

          <div className={styles.cabinsList}>
            <div className={styles.cabinsItem}>
              <div className={styles.cabinsImage}>
                <img className={styles.cabinsImg} src={cabins1} />
                <div className={styles.cabinsSuite}>NAVIGATOR SUITE: 3421</div>
              </div>
              <div className={styles.cabinsGuest}>
                <div className={styles.cabinsGuestItem}>
                  <div className={styles.cabinsGuestBlock}>
                    <p className={styles.cabinsGuestName}>Mr B. Dickenson</p>
                    <p className={styles.cabinsGuestDate}>03/03/1958</p>
                  </div>
                  <Link className={styles.cabinsGuestEdit}>Edit</Link>
                </div>
                <div className={styles.cabinsGuestItem}>
                  <div className={styles.cabinsGuestBlock}>
                    <p className={styles.cabinsGuestName}>Mr B. Dickenson</p>
                    <p className={styles.cabinsGuestDate}>03/03/1958</p>
                  </div>
                  <Link className={styles.cabinsGuestEdit}>Edit</Link>
                </div>
              </div>
            </div>
            <div className={styles.cabinsItem}>
              <div className={styles.cabinsImage}>
                <img className={styles.cabinsImg} src={cabins2} />
                <div className={styles.cabinsSuite}>NAVIGATOR SUITE: 3421</div>
              </div>
              <div className={styles.cabinsGuest}>
                <div className={styles.cabinsGuestItem}>
                  <div className={styles.cabinsGuestBlock}>
                    <p className={styles.cabinsGuestName}>Mr B. Dickenson</p>
                    <p className={styles.cabinsGuestDate}>03/03/1958</p>
                  </div>
                  <Link className={styles.cabinsGuestEdit}>Edit</Link>
                </div>
                <div className={styles.cabinsGuestItem}>
                  <div className={styles.cabinsGuestBlock}>
                    <p className={styles.cabinsGuestName}>Mr B. Dickenson</p>
                    <p className={styles.cabinsGuestDate}>03/03/1958</p>
                  </div>
                  <Link className={styles.cabinsGuestEdit}>Edit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.expedition}>
          <p className={styles.expeditionTitle}>YOUR EXPEDITION</p>
          <p className={styles.expeditionSecond}>Antarctic wildlife awakens</p>
          <p className={styles.expeditionDescription}>
            Delve deep into the Antarctic Peninsula, guided by a world-class
            expedition team that takes you on daily landings and complimentary
            Zodiac safaris. November is the start of the continent’s summer,
            which means you’re met with pristine landscapes of snowy mountains
            and sea ice. This is also when Antarctica’s sea birds begin their
            courting rituals, making it a prime time for birders to explore. In
            December, immature male fur seals can be found in abundance on the
            peninsula. Experience it all while wrapped up in relaxed luxury and
            highly personalized, attentive service.
          </p>
          <p className={styles.expeditionSecond}>Itinerary</p>

          <div className={styles.expeditionList}>
            <Collapsible
              renderHeader={ExpeditionHead}
              renderBody={ExpeditionBody}
            />
            <Collapsible
              renderHeader={ExpeditionHead}
              renderBody={ExpeditionBody}
            />
          </div>
        </div>

        <div className={styles.sailing}>
          <p className={styles.sailingTitle}>ENHANCED SAILING</p>
          <p className={styles.sailingSecond}>Booked experiences</p>

          <div className={styles.sailingList}>
            <div className={styles.sailingItem}>
              <div className={styles.sailingImage}>
                <img className={styles.sailingImg} src={sailing1} />
                <div className={styles.sailingExcursion}>EXCURSION</div>
              </div>
              <p className={styles.sailingTitle}>
                Escorted sightseeing safaris by Zodiac
              </p>
            </div>
            <div className={styles.sailingItem}>
              <div className={styles.sailingImage}>
                <img className={styles.sailingImg} src={sailing2} />
                <div className={styles.sailingExcursion}>EXCURSION</div>
              </div>
              <p className={styles.sailingTitle}>
                Escorted sightseeing safaris by Zodiac
              </p>
            </div>
            <div className={styles.sailingItem}>
              <div className={styles.sailingImage}>
                <img className={styles.sailingImg} src={sailing3} />
                <div className={styles.sailingExcursion}>EXCURSION</div>
              </div>
              <p className={styles.sailingTitle}>
                Escorted sightseeing safaris by Zodiac
              </p>
            </div>
            <div className={styles.sailingItem}>
              <div className={styles.sailingImage}>
                <img className={styles.sailingImg} src={sailing4} />
                <div className={styles.sailingExcursion}>EXCURSION</div>
              </div>
              <p className={styles.sailingTitle}>
                Escorted sightseeing safaris by Zodiac
              </p>
            </div>
          </div>

          <StandartButton
            text="VIEW ALL EXPERIENCES"
            click={() => navigation("/")}
            style={{ width: "unset" }}
            styleContainer={{ display: "flex", justifyContent: "flex-end" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Escape;
