import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ROOT } from "./utils/constants/routes";
import useCurrentRoutes from "./hooks/useCurrentRoutes";
import RootLayout from "./components/layouts/Root";

function App() {
  const { routes } = useCurrentRoutes();

  return (
    <Router>
      <Routes>
        {Object.entries(routes).map(([routeKey, route]) => {
          const { element: Element, layout } = route;

          return (
            <Route
              key={routeKey}
              path={routeKey}
              element={
                <RootLayout type={layout}>
                  <Element />
                </RootLayout>
              }
            />
          );
        })}
        <Route path={"*"} element={<Navigate to={ROOT} />} />
      </Routes>
    </Router>
  );
}

export default App;
