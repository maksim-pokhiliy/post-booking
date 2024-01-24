export const countryCodeToFullName = (code) => {
  const country = new Intl.DisplayNames(["en"], { type: "region" }).of(code);

  return country ?? code;
};
