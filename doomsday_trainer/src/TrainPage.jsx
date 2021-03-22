import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const TrainPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Practice all the things</p>
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
        <a href="train" style={{ textDecoration: "none" }}>
          <Tooltip title="Practice the Algorithm" placement="right">
            <Button variant="outlined" size="large">
              Train
            </Button>
          </Tooltip>
        </a>
      </header>
    </div>
  );
};

export default TrainPage;
