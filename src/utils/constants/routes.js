export const routeParams = (path, params) => {
  if (typeof params === "string") {
    path = path.replace(/:([a-z0-9\-_.~]+(\??)(\/|:|$))/gi, `${params}/`);
    if (path[path.length - 1] === "/") {
      path = path.substring(0, path.length - 1);
    }
  } else {
    for (const [key, value] of params) {
      path = path.replace(`:${key}`, value).replace(`:${key}?`, value);
    }
  }

  return path;
};

// PRIVATE ROUTES
export const ROOT = "/";
export const ESCAPE = `${ROOT}escape`;
export const GUEST_DETAILS = `${ROOT}guest`;
export const GUEST_EDIT = `${ROOT}guest-edit`;
export const GUEST_DOCUMENT = `${ROOT}guest-document`;
export const SAILING = `${ROOT}sailing`;
export const SAILING_BUY = `${ROOT}sailing-buy`;

// PUBLIC ROUTES
export const LOGIN = `${ROOT}login`;

// SIDE MENU ROUTES
export const LOGOUT = "LOGOUT";
