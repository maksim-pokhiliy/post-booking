import styles from "./index.module.scss";
import TextInput from "../../shared/TextInput";
import StandartButton from "../../shared/StandartButton";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ login: "", password: "" });

  return (
    <div className={styles.block}>
      <div className={styles.form}>
        <TextInput
          title={"Booking ID"}
          placeholrder={"Enter booking ID"}
          errorText={"test"}
          errorActive={false}
          theme={"light"}
          value={data.login}
          setInput={(value) =>
            setData({ login: value, password: data.password })
          }
        />
        <TextInput
          title={"Lead passenger surname"}
          placeholrder={"Enter Surname"}
          errorText={"test"}
          errorActive={false}
          theme={"light"}
          value={data.password}
          setInput={(value) => setData({ login: data.login, password: value })}
        />
      </div>
      <StandartButton text={"login"} />
    </div>
  );
};

export default Login;
