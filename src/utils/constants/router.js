// CONSTANTS
import { LOGIN, ROOT } from "./routes";
import Home from "../../pages/home";
import Login from "../../pages/login";

const PUBLIC_ROUTES = {
  [ROOT]: { element: Home },
  [LOGIN]: { element: Login },
};

const PRIVATE_ROUTES = {};

const PUBLIC_SIDE_MENU = {};

const PRIVATE_SIDE_MENU = {
  [ROOT]: {
    type: "link",
    label: "home",
  },
};

const routes = {
  public: PUBLIC_ROUTES,
  private: PRIVATE_ROUTES,
  publicSideMenu: PUBLIC_SIDE_MENU,
  privateSideMenu: PRIVATE_SIDE_MENU,
};

export default routes;
