import { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { getRandDate, computeDayOfWeek } from "./utils.js";

const TrainPage = () => {
  const [date, setDate] = useState(getRandDate());
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="General-app-content App-page-with-bar">
      <p>Practice makes perfect</p>
      <p>
        Date: {date[0]}/{date[1]}/{date[2]}
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
