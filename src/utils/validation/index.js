import LIVR from "livr";
import extraRules from "livr-extra-rules";

import {
  NOT_POSITIVE_ERRORS,
  WRONG_FORMAT_ERRORS,
  REQUIRED_ERRORS,
  NOT_EQUAL_ERRORS,
  TOO_SHORT_ERRORS,
} from "./errors";
import rules from "./rules";

LIVR.Validator.registerDefaultRules(extraRules);
LIVR.Validator.defaultAutoTrim(true);

function validate({ rule, data, onSuccess, onError }) {
  const validator = new LIVR.Validator(rule);
  const validData = validator.validate(data);
  if (validData) {
    if (onSuccess) onSuccess(validData);
  } else {
    const decodedErrors = decodeErrorObject(validator.getErrors());

    if (onError) {
      onError(decodedErrors);
    }
  }
}

export function validateCreateAgentSession(args) {
  return validate({ rule: rules.agentSession, ...args });
}

export function validateEditGuest(args) {
  return validate({ rule: rules.editGuest, ...args });
}

export function validateDocumentGuest(args) {
  return validate({ rule: rules.documentGuest, ...args });
}

export function validateForgottenPassword(args) {
  return validate({ rule: rules.forgottenPassword, ...args });
}

export function validateSearch(args) {
  return validate({ rule: rules.search, ...args });
}

export function validateRooms(args) {
  return validate({ rule: rules.rooms, ...args });
}

export function validateAgencyRegistration(args) {
  return validate({ rule: rules.agencyRegistration, ...args });
}

export function validateAgentRegistration(args) {
  return validate({ rule: rules.agentRegistration, ...args });
}

function decodeErrorObject(errors) {
  const decodedErrors = { ...errors };

  for (const field in decodedErrors) {
    if (Object.prototype.hasOwnProperty.call(decodedErrors, field)) {
      const errorField = field.replace("data/", "");

      decodedErrors[errorField] = decodeErrorCode(
        decodedErrors[field],
        errorField,
      );
    }
  }

  return decodedErrors;
}

export function decodeErrorCode(code, field = "") {
  switch (code) {
    case "REQUIRED": {
      const errorMessage = field && REQUIRED_ERRORS[field];

      return errorMessage || "Required";
    }

    case "WRONG_EMAIL":
    case "WRONG_URL": {
      const errorMessage = field && WRONG_FORMAT_ERRORS[field];

      return errorMessage || "Wrong format";
    }

    case "NOT_POSITIVE_INTEGER": {
      const errorMessage = field && NOT_POSITIVE_ERRORS[field];

      return errorMessage || "Not positive";
    }

    case "FIELDS_NOT_EQUAL": {
      const errorMessage = field && NOT_EQUAL_ERRORS[field];

      return errorMessage || "Not equal";
    }

    case "TOO_SHORT": {
      const errorMessage = field && TOO_SHORT_ERRORS[field];

      return errorMessage || "Too short";
    }

    default: {
      return code;
    }
  }
}
