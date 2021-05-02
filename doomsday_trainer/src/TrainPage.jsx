import { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import {
  addLeadingZero,
  getRandDate,
  computeDayOfWeek,
  allDays,
} from "./utils.js";

const TrainPage = () => {
  const [date, setDate] = useState(getRandDate());
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="General-app-content App-page-with-bar">
      <h4 style={{ color: "black" }}>
        <b>
          <u>Practice makes perfect</u>
        </b>
      </h4>
      <p>Dates are of the format: MM/DD/YYYY</p>
      <p>
        Date: {addLeadingZero(date[0])}/{addLeadingZero(date[1])}/{date[2]}
      </p>

      <ButtonGroup
        color="gray"
        orientation="vertical"
        aria-label="outlined primary button group"
      >
        {allDays.map((dayOfWeek) => (
          <Button
            onClick={() => {
              const day = computeDayOfWeek(...date);
              if (dayOfWeek === day) {
                const newScore = score + 1;

                if (newScore > highScore) {
                  setHighScore(newScore);
                }

                setScore(newScore);

                alert("CORRECT!");
              } else {
                setScore(0);
                alert(`INCORRECT!\nThe correct answer is: ${day}.`);
              }

              const newDate = getRandDate();
              setDate(newDate);
            }}
          >
            {dayOfWeek}
          </Button>
        ))}
      </ButtonGroup>
      <p
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
        }}
      >
        SCORE: {score}
      </p>
      <p
        style={{
          position: "fixed",
          bottom: 0,
          right: 30,
        }}
      >
        HIGH SCORE: {highScore}
      </p>
    </div>
  );
};

export default TrainPage;
