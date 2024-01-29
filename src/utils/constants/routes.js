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
export const ESCAPE = `${ROOT}/escape`;

// PUBLIC ROUTES
export const LOGIN = `${ROOT}login`;

// SIDE MENU ROUTES
export const LOGOUT = "LOGOUT";
