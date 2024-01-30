import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import TextInput from "../../shared/TextInput";
import GenderSelect from "../../shared/GenderSelect";
import CheckBox from "../../shared/CheckBox";
import { useEffect, useState } from "react";
import StandartButton from "../../shared/StandartButton";
import SitemapList from "../../shared/SitemapList";
import { validateEditGuest } from "../../../utils/validation";

const GuestEdit = () => {
  const [title, setTitle] = useState({ value: "", errorMessage: "" });
  const [firstName, setFirstName] = useState({ value: "", errorMessage: "" });
  const [lastName, setLastName] = useState({ value: "", errorMessage: "" });
  const [date, setDate] = useState({ value: "", errorMessage: "" });
  const [email, setEmail] = useState({ value: "", errorMessage: "" });
  const [tel, setTel] = useState({ value: "", errorMessage: "" });
  const [adress1, setAdress1] = useState({ value: "", errorMessage: "" });
  const [adress2, setAdress2] = useState({ value: "", errorMessage: "" });
  const [city, setCity] = useState({ value: "", errorMessage: "" });
  const [state, setState] = useState({ value: "", errorMessage: "" });
  const [zip, setZip] = useState({ value: "", errorMessage: "" });
  const [country, setCountry] = useState({ value: "", errorMessage: "" });

  const [gender, setGender] = useState({ value: "male", errorMessage: "" });

  const [infoAccept, setInfoAccept] = useState(false);
  const [subscribeEmailAcceptset, setSubscribeEmailAccept] = useState(false);

  const handleFormError = (errors) => {
    const updatedInputs = structuredClone({
      title: title,
      firstName: firstName,
      lastName: lastName,
      date: date,
      email: email,
      tel: tel,
      adress1: adress1,
      adress2: adress2,
      city: city,
      state: state,
      zip: zip,
      country: country,
      gender: gender,
    });

    Object.keys(errors).forEach((errorKey) => {
      if (updatedInputs[errorKey]) {
        updatedInputs[errorKey].errorMessage = errors[errorKey];
      }
    });

    setTitle(updatedInputs.title);
    setFirstName(updatedInputs.firstName);
    setLastName(updatedInputs.lastName);
    setDate(updatedInputs.date);
    setEmail(updatedInputs.email);
    setTel(updatedInputs.tel);
    setAdress1(updatedInputs.adress1);
    setAdress2(updatedInputs.adress2);
    setCity(updatedInputs.city);
    setState(updatedInputs.state);
    setZip(updatedInputs.zip);
    setCountry(updatedInputs.country);
  };

  const submitForm = () => {
    validateEditGuest({
      data: {
        title: title.value,
        firstName: firstName.value,
        lastName: lastName.value,
        date: date.value,
        email: email.value,
        tel: tel.value,
        adress1: adress1.value,
        adress2: adress2.value,
        city: city.value,
        state: state.value,
        zip: zip.value,
        country: country.value,
        gender: gender.value,
      },
      onSuccess: async (validData) => {
        console.log(validData);
      },
      onError: (errors) => handleFormError(errors),
    });
  };

  useEffect(() => {
    console.log("ok");
  }, []);

  return (
    <div className={styles.container}>
      <div className="">
        <p className={styles.title}>EDIT GUESTS</p>

        <Link className={styles.back}>Back to all guests</Link>

        <p className={styles.second}>Mr Barry Dickenson</p>
        <p className={styles.description}>
          Greyed out fields can’t be edited. Contact us if you spot a mistake.
        </p>

        <div className={styles.form}>
          <div className={styles.grid}>
            <TextInput
              title="Title"
              placeholrder="Mr"
              value={title.value}
              setInput={(value) => setTitle({ value: value })}
              errorActive={title.errorMessage}
              errorText={title.errorMessage}
            />

            <div className={styles.firstItem}></div>

            <TextInput
              title="First Name"
              placeholrder="Barry"
              value={firstName.value}
              setInput={(value) => setFirstName({ value: value })}
              errorActive={firstName.errorMessage}
              errorText={firstName.errorMessage}
            />
            <TextInput
              title="Last Name"
              placeholrder="Dickenson"
              value={lastName.value}
              setInput={(value) => setLastName({ value: value })}
              errorActive={lastName.errorMessage}
              errorText={lastName.errorMessage}
            />
            <TextInput
              title="Date of Birth"
              placeholrder="03/03/1958"
              value={date.value}
              setInput={(value) => setDate({ value: value })}
              errorActive={date.errorMessage}
              errorText={date.errorMessage}
            />

            <GenderSelect
              gender={gender.value}
              setGender={(value) => setGender({ value: value })}
            />

            <div className={styles.secondItem}></div>

            <TextInput
              title="Email address"
              placeholrder="Barry@gmail.com"
              value={email.value}
              setInput={(value) => setEmail({ value: value })}
              errorActive={email.errorMessage}
              errorText={email.errorMessage}
            />
            <TextInput
              title="Telephone"
              placeholrder="02041908655"
              value={tel.value}
              setInput={(value) => setTel({ value: value })}
              errorActive={tel.errorMessage}
              errorText={tel.errorMessage}
            />
            <div className={styles.threeItem}></div>
            <TextInput
              title="Address 1"
              placeholrder="Flat, House"
              value={adress1.value}
              setInput={(value) => setAdress1({ value: value })}
              errorActive={adress1.errorMessage}
              errorText={adress1.errorMessage}
            />
            <TextInput
              title="Address 2"
              placeholrder="Street"
              value={adress2.value}
              setInput={(value) => setAdress2({ value: value })}
              errorActive={adress2.errorMessage}
              errorText={adress2.errorMessage}
            />
            <TextInput
              title="City"
              placeholrder="City"
              value={city.value}
              setInput={(value) => setCity({ value: value })}
              errorActive={city.errorMessage}
              errorText={city.errorMessage}
            />
            <TextInput
              title="State"
              placeholrder="State"
              value={state.value}
              setInput={(value) => setState({ value: value })}
              errorActive={state.errorMessage}
              errorText={state.errorMessage}
            />
            <TextInput
              title="Zip code"
              placeholrder="State"
              value={zip.value}
              setInput={(value) => setZip({ value: value })}
              errorActive={zip.errorMessage}
              errorText={zip.errorMessage}
            />
            <TextInput
              title="Country"
              placeholrder="Country"
              value={country.value}
              setInput={(value) => setCountry({ value: value })}
              errorActive={country.errorMessage}
              errorText={country.errorMessage}
            />
          </div>
          <div className={styles.info}>
            <CheckBox
              text="I hereby declare that the above given details are true to the best of my knowledge and belief."
              style={{ marginTop: 59 }}
              active={infoAccept}
              changeValue={() => setInfoAccept(!infoAccept)}
            />
            <CheckBox
              text="Yes, I would like to receive marketing emails from Margarettaville at Sea, and I certify that I am a US resident and a over 13 years of age."
              style={{ marginTop: 59 }}
              active={subscribeEmailAcceptset}
              changeValue={() =>
                setSubscribeEmailAccept(!subscribeEmailAcceptset)
              }
            />

            <StandartButton
              text="SAVE CHANGES"
              style={{ marginTop: 50 }}
              click={submitForm}
            />
          </div>
        </div>

        <SitemapList />
      </div>
    </div>
  );
};

export default GuestEdit;
