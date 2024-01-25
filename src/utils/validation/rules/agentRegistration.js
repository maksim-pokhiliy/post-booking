const agentRegistrationRules = {
  sales_area: { one_of: [null] },
  name: ["required", "trim", "string"],
  firstName: ["required", "trim", "string"],
  surname: ["required", "trim", "string"],
  address: ["required", "trim", "string"],
  telephone: ["required", "trim", "string"],
  code: ["required", "trim", "string"],
  agency: ["required", "trim", "string"],
  position: ["required", "trim", "string"],
  iata: ["required", "trim", "string"],
  clia: ["required", "trim", "string"],
  email: ["required", "trim", "email"],
  password: ["required", "trim", "string", { min_length: 8 }],
  confirmPassword: [
    "required",
    "trim",
    "string",
    { equal_to_field: "password", min_length: 8 },
  ],
};

export default agentRegistrationRules;
