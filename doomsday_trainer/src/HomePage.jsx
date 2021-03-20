import logo from './doomsday_logo.png';
import Button from '@material-ui/core/Button';
import './App.css';

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
        <p>
          Become a human calendar
        </p>
        <Button variant="outlined" style={{marginBottom: "32px"}} size="large">Learn</Button>
        <Button variant="outlined" size="large">Practice</Button>
      </header>
    </div>
  );
}

export default HomePage;
