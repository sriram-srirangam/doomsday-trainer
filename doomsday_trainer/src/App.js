import logo from "./doomsday_logo.png";
import HomePage from "./HomePage";
import LearnSections from "./LearnSections";
import TrainPage from "./TrainPage";
import AboutPage from "./AboutPage";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./slides/Slides.css";

function App() {
  const appHeader = (
    <AppBar position="static">
      <Toolbar style={{ background: "DimGray" }}>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <a className="Info-link" href="/">
          <img src={logo} width="203px" height="35px" alt="logo" />
        </a>
      </Toolbar>
    </AppBar>
  );

  return (
    <Router basename="/">
      <Routes>
        <Route
          path="learn/*"
          element={
            <>
              {appHeader} <LearnSections />
            </>
          }
        />
        <Route
          path="train"
          element={
            <>
              {appHeader} <TrainPage />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              {appHeader} <AboutPage />
            </>
          }
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
