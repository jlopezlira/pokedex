import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from './layout'
import Loader from "./components/Loader";
import { TJSXElement } from "./types";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));
const Error404 = lazy(() => import("./pages/Error404"));

const App = (): TJSXElement => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/details/:id"
              component={Details}
            />
            <Route
              exact
              path="*"
              component={Error404}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
