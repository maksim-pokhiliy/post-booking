import AuthLayout from "../Auth";
import MainLayout from "../Main";

const LAYOUTS_BY_TYPE = {
  auth: AuthLayout,
  main: MainLayout,
};

function RootLayout({ type, children }) {
  const Layout = LAYOUTS_BY_TYPE[type];

  return <Layout>{children}</Layout>;

}

export default RootLayout;
