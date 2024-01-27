import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import TextInput from "../../shared/TextInput";
import StandartButton from "../../shared/StandartButton";
import SitemapList from "../../shared/SitemapList";
import SelectInput from "../../shared/SelectInput";
import { useState } from "react";
import { validateDocumentGuest } from "../../../utils/validation";

const GuestDocument = () => {
  const [type, setType] = useState({ value: "", errorMessage: "" });
  const [document, setDocument] = useState({ value: "", errorMessage: "" });
  const [documentDate, setDocumentDate] = useState({
    value: "",
    errorMessage: "",
  });

  const handleFormError = (errors) => {
    const updatedInputs = structuredClone({
      type: type,
      document: document,
      documentDate: documentDate,
    });

    Object.keys(errors).forEach((errorKey) => {
      if (updatedInputs[errorKey]) {
        updatedInputs[errorKey].errorMessage = errors[errorKey];
      }
    });

    setType(updatedInputs.type);
    setDocument(updatedInputs.document);
    setDocumentDate(updatedInputs.documentDate);
  };

  const submitForm = () => {
    validateDocumentGuest({
      data: {
        type: type.value,
        document: document.value,
        documentDate: documentDate.value,
      },
      onSuccess: async (validData) => {
        console.log(validData);
      },
      onError: (errors) => handleFormError(errors),
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>TRAVEL DOCUMENTS</p>

        <Link className={styles.back}>Back to all guests</Link>

        <p className={styles.second}>Mr Barry Dickenson</p>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <p className={styles.infoTitle}>Document type:</p>
            <p className={styles.infoValue}>Passport</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoTitle}>Document number:</p>
            <p className={styles.infoValue}>P245332</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoTitle}>Expiry date:</p>
            <p className={styles.infoValue}>02/25/2030</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoTitle}>Status:</p>
            <p className={styles.infoValue}>Passport</p>
          </div>
          <div className={styles.infoItem}>
            <p className={styles.infoTitle}>Action:</p>
            <p className={styles.infoValue}>No action required</p>
          </div>
        </div>

        <div className={styles.add}>
          <p className={styles.addTitle}>Add a document</p>

          <div className={styles.form}>
            <div className={styles.grid}>
              <SelectInput
                defaultText="Select type"
                required
                value={type.value}
                setValue={(value) =>
                  setType({ value: value, errorMessage: "" })
                }
                errorActive={type.errorMessage}
                errorText={type.errorMessage}
              />
              <div className={styles.firstItem}></div>
              <TextInput
                title="Document no"
                placeholrder="upload document"
                value={document.value}
                setInput={(value) =>
                  setDocument({ value: value, errorMessage: "" })
                }
                errorActive={document.errorMessage}
                errorText={document.errorMessage}
                required
              />

              <TextInput
                title="Document expiration date"
                placeholrder="xx/xx/xxxx"
                value={documentDate.value}
                setInput={(value) =>
                  setDocumentDate({ value: value, errorMessage: "" })
                }
                errorActive={documentDate.errorMessage}
                errorText={documentDate.errorMessage}
                required
              />
            </div>

            <p className={styles.formText}>
              We kindly remind you that it is your responsibility to determine
              passport and visa requirements for your expedition itinerary and
              your responsibility to ensure that you are in possession of all
              required visas and travel documents prior to sailing.
            </p>

            <StandartButton text="SAVE CHANGES" click={submitForm} />
          </div>
        </div>
        <SitemapList />
      </div>
    </div>
  );
};

export default GuestDocument;
