import { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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

const randInt = (lower, upper) => {
  return Math.floor(Math.random() * (upper - lower)) + lower;
};

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const getRandDate = () => {
  var year = randInt(1700, 2099);
  var month = randInt(1, 12);
  var day = 0;

  if (month === 2) {
    if (isLeapYear(year)) {
      day = randInt(1, 29);
    } else {
      day = randInt(1, 28);
    }
  } else if (month in [9, 4, 6, 11]) {
    day = randInt(1, 30);
  } else {
    day = randInt(1, 31);
  }

  return [month, day, year];
};

const computeDayOfWeek = (month, day, year) => {
  var step_1 = Math.floor((year % 100) / 4);
  var step_2 = step_1 + day;
  var step_3 = step_2 + [4, 2, 0, 6][Math.floor(year / 100) - 17];
  var step_4 = step_3 + [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6][month - 1];
  var step_5 = step_4 - (isLeapYear(year) && [1, 2].includes(month) ? 1 : 0);
  var step_6 = step_5 + (year % 100);
  var step_7 = step_6 % 7;
  return (
    ["Satur", "Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri"][step_7] + "day"
  );
};

export default TrainPage;
