import { useState } from "react";
import styles from "./index.module.scss";
import TextInput from "../../shared/TextInput";
import StandartButton from "../../shared/StandartButton";
import TOAST from "../../../utils/constants/toast";
import { showToast } from "../../../redux/reducer/toast";
import { validateCreateAgentSession } from "../../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import useCookies from "../../../hooks/useCookies";
import dayjs from "dayjs";

const Login = () => {
  const { setCookie } = useCookies();
  const dispatch = useDispatch();

  // const [initAgentSession] = useLazyInitAgentSessionQuery();

  const { isLoading } = useSelector((state) => state.session);

  const [inputs, setInputs] = useState({
    email: { value: "", errorMessage: "" },
    password: { value: "", errorMessage: "" },
  });

  const login = async (credentials) => {
    // const { isError } = await initAgentSession(credentials);

    // if (isError) {
    //   dispatch(
    //     showToast({
    //       type: TOAST.ERROR_TYPE,
    //       message: "Wrong credentials",
    //       duration: TOAST.DEFAULT_DURATION,
    //     }),
    //   );
    //   return;
    // }

    const sessionKeyExp = dayjs().add(3600, "seconds").format();

    setCookie("sessionKey_exp", sessionKeyExp);
  };

  const handleFormError = (errors) => {
    const updatedInputs = structuredClone(inputs);

    Object.keys(errors).forEach((errorKey) => {
      if (updatedInputs[errorKey]) {
        updatedInputs[errorKey].errorMessage = errors[errorKey];
      }
    });

    setInputs(updatedInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateCreateAgentSession({
      data: {
        email: inputs.email.value,
        password: inputs.password.value,
      },
      onSuccess: async (validData) => await login(validData),
      onError: (errors) => handleFormError(errors),
    });
  };

  return (
    <div className={styles.block}>
      <div className={styles.form}>
        <TextInput
          title={"Booking ID"}
          placeholrder={"Enter booking ID"}
          errorText={inputs.email.errorMessage}
          errorActive={inputs.email.errorMessage}
          theme={"light"}
          value={inputs.email.value}
          setInput={(value) => {
            setInputs({
              password: inputs.password,
              email: { errorMessage: "", value },
            });
          }}
        />

        <TextInput
          title={"Lead passenger surname"}
          placeholrder={"Enter Surname"}
          errorText={inputs.password.errorMessage}
          errorActive={inputs.password.errorMessage}
          theme={"light"}
          value={inputs.password.value}
          setInput={(value) => {
            setInputs({
              password: { errorMessage: "", value },
              email: inputs.email,
            });
          }}
        />
      </div>
      <StandartButton text={"login"} click={handleSubmit} />
    </div>
  );
};

export default Login;
