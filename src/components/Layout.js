import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Episodes from "./Episodes";
import EpisodeDetail from "./Episodes/EpisodeDetail";

const Layout = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/episodes">
          <div
            className={"container mx-auto my-8 bg-gray-800 bg-opacity-80 pb-12"}
          >
            <Episodes />
          </div>
        </Route>
        <Route exact path="/episode/:id">
          <div
            className={"container mx-auto my-8 bg-gray-800 bg-opacity-80 pb-12"}
          >
            <EpisodeDetail />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Layout;
