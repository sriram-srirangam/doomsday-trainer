import logo from "./doomsday_logo.png";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import "./App.css";

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="Info-link"
          href="https://en.wikipedia.org/wiki/Doomsday_rule"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>Become a human calendar</p>
        <a href="learn" style={{ textDecoration: "none" }}>
          <Tooltip title="Learn the theory" placement="right">
            <Button
              variant="outlined"
              style={{ marginBottom: "32px" }}
              size="large"
            >
              Learn
            </Button>
          </Tooltip>
        </a>
        <a href="practice" style={{ textDecoration: "none" }}>
          <Tooltip title="Practice the Algorithm" placement="right">
            <Button variant="outlined" size="large">
              Practice
            </Button>
          </Tooltip>
        </a>
      </header>
    </div>
  );
};

export default HomePage;
