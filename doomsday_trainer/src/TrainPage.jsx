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
  const [lastAnsweredTime, setLastAnsweredTime] = useState(Date.now());
  const [avgTime, setAvgTime] = useState(0);
  const [numAnswered, setNumAnswered] = useState(0);

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

              // Average time calculations
              const currentTime = Date.now();
              const timeToAnswer = (currentTime - lastAnsweredTime) / 1000;
              const newNumAnswered = numAnswered + 1;
              const newAvgTime =
                (avgTime * numAnswered + timeToAnswer) / newNumAnswered;

              if (dayOfWeek === day) {
                const newScore = score + 1;

                if (newScore > highScore) {
                  setHighScore(newScore);
                }

                setScore(newScore);

                alert(`CORRECT!\nTime: ${timeToAnswer}s`);
              } else {
                setScore(0);
                alert(
                  `INCORRECT!\nThe correct answer is: ${day}\nTime: ${timeToAnswer}s`
                );
              }

              // Average time updates
              setLastAnsweredTime(Date.now());
              setNumAnswered(newNumAnswered);
              setAvgTime(newAvgTime);

              // console.log((currentTime - lastAnsweredTime) / 1000);
              // console.log(numAnswered);
              // console.log(avgTime);

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
      <p
        style={{
          position: "fixed",
          bottom: 0,
          left: 30,
        }}
      >
        AVERAGE RESPONSE TIME: {`${avgTime.toFixed(2)} s`}
      </p>
    </div>
  );
};

export default TrainPage;
