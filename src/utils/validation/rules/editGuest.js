const editGuest = {
  title: ["required", "trim", "string"],
  firstName: ["required", "trim", "string"],
  lastName: ["required", "trim", "string"],
  date: ["required", "string"],
  email: ["required", "trim", "email"],
  tel: ["required", "trim", "string"],
  adress1: ["required", "trim", "string"],
  adress2: ["required", "trim", "string"],
  city: ["required", "trim", "string"],
  state: ["required", "trim", "string"],
  zip: ["required", "trim", "string"],
  country: ["required", "trim", "string"],
  gender: ["required", "trim", "string"],
};

export default editGuest;
