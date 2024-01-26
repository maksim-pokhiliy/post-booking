// CONSTANTS
import Escape from "../../components/pages/Escape";
import GuestDetails from "../../components/pages/GuestDetails";
import Home from "../../components/pages/Home";
import Login from "../../components/pages/Login";
import { ESCAPE, GUEST_DETAILS, LOGIN, ROOT } from "./routes";

const PUBLIC_ROUTES = {
  [LOGIN]: { element: Login, layout: "auth" },
  [ROOT]: { element: Home, layout: "main" },
  [ESCAPE]: { element: Escape, layout: "main" },
  [GUEST_DETAILS]: { element: GuestDetails, layout: "main" },
};

const PRIVATE_ROUTES = {};

const PUBLIC_SIDE_MENU = {
  [ROOT]: {
    type: "link",
    label: "home",
  },
  [ESCAPE]: {
    type: "link",
    label: "your_expedition",
  },
  [GUEST_DETAILS]: {
    type: "link",
    label: "guest_details",
  },
};

const PRIVATE_SIDE_MENU = {
  [ROOT]: {
    type: "link",
    label: "home",
  },

  [ESCAPE]: {
    type: "link",
    label: "your_expedition",
  },
  [GUEST_DETAILS]: {
    type: "link",
    label: "guest_details",
  },
};

const routes = {
  public: PUBLIC_ROUTES,
  private: PRIVATE_ROUTES,
  publicSideMenu: PUBLIC_SIDE_MENU,
  privateSideMenu: PRIVATE_SIDE_MENU,
};

export default routes;
