import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Episodes from "./Episodes";
import EpisodeDetail from "./Episodes/EpisodeDetail";
import CharacterDetail from "./Characters/CharacterDetail";
import Characters from "./Characters";
import Location from "./Location";
import ScrollToTop from "../hooks/ScroolTop";

const Layout = () => {
  return (
    <Router>
      <ScrollToTop />
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
        <Route exact path="/character/:id">
          <div
            className={"container mx-auto my-8 bg-gray-800 bg-opacity-80 pb-12"}
          >
            <CharacterDetail />
          </div>
        </Route>
        <Route exact path="/characters">
          <div
            className={"container mx-auto my-8 bg-gray-800 bg-opacity-80 pb-12"}
          >
            <Characters />
          </div>
        </Route>
        <Route exact path="/locations">
          <div
            className={"container mx-auto my-8 bg-gray-800 bg-opacity-80 pb-12"}
          >
            <Location />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Layout;
