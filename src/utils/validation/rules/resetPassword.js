const forgottenPasswordRules = {
  newPassword: ["required", "trim", "string", { min_length: 8 }],
};

export default forgottenPasswordRules;
