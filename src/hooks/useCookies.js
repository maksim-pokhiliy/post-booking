/* eslint-disable no-unreachable-loop */
const useCookies = () => {
  const { cookie } = document;

  const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(";").map((c) => c.trim());
    const cookie = [cookies.find((c) => c.startsWith(nameEQ)) ?? ""];

    for (const c of cookie) {
      const char = c;

      if (char.startsWith(nameEQ)) {
        return char.substring(nameEQ.length, c.length);
      }

      return "";
    }

    return "";
  };

  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}; secure; path=/`;
  };

  return { cookie, getCookie, setCookie };
};

export default useCookies;
