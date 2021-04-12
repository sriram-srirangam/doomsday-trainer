import logo from "./doomsday_logo.png";
import HomePage from "./HomePage";
import LearnSections from "./LearnSections";
import TrainPage from "./TrainPage";
import AboutPage from "./AboutPage";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./slides/Slides.css";

function App() {
  const fullPath = window.location.href;
  const relativePath = fullPath.replace(/^(?:\/\/|[^/]+)*\//, "");

  return (
    <div>
      {!(relativePath === "" || relativePath === "/") && (
        <AppBar position="static">
          <Toolbar style={{ background: "DimGray" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <a className="Info-link" href="/">
              <img src={logo} width="203px" height="35px" alt="logo" />
            </a>
          </Toolbar>
        </AppBar>
      )}
      <Router>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/learn">
            <LearnSections />
          </Route>
          <Route path="/train">
            <TrainPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
