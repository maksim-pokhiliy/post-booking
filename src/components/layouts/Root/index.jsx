import AuthLayout from "../Auth";
import MainLayout from "../Main";
import SailingLayout from "../Sailing";

const LAYOUTS_BY_TYPE = {
  auth: AuthLayout,
  main: MainLayout,
  sailing: SailingLayout,
};

function RootLayout({ type, children }) {
  const Layout = LAYOUTS_BY_TYPE[type];

  return <Layout>{children}</Layout>;
}

export default RootLayout;
