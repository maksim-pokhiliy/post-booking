// CONSTANTS
import Home from "../../components/pages/Home";
import Login from "../../components/pages/Login";
import { LOGIN, ROOT } from "./routes";

const PUBLIC_ROUTES = {
  [ROOT]: { element: Home, layout: "main" },
  [LOGIN]: { element: Login, layout: "auth" },
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
