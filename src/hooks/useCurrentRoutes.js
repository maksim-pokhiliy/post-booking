// import { useTypedSelector } from "../store/store";
import routes from "../utils/constants/router";

function useCurrentRoutes() {
  // const session = useTypedSelector((state) => state.session);
  // const navigationRoutes = useMemo(() => {
  //   // const isPrivate = !!session.isInitialized && !!session.sessionKey;

  //   if (false) {
  //     return { routes: routes.private, sideMenu: routes.privateSideMenu };
  //   }

  // }, [session.isInitialized, session.sessionKey]);

  return { routes: routes.public, sideMenu: routes.publicSideMenu };
  // return navigationRoutes;
}

export default useCurrentRoutes;
