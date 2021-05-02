import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import { computeDayOfWeek, addLeadingZero } from "../utils.js";

const Step5Slides = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [test, setTest] = useState("");
  const [quizFieldValues, setQuizFieldValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    showSlides(slideIndex);
  });

  const currentDate = new Date();

  const allDates = [
    [5, 10],
    [3, 27],
    [9, 5],
    [10, 23],
    [4, 10],
    [7, 22],
    [1, 14],
    [6, 23],
    [11, 22],
    [8, 6],
    [2, 12],
    [12, 14],
  ];
  const answers = allDates.map((date) =>
    computeDayOfWeek(date[0], date[1], currentDate.getFullYear())
  );

  const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
  };

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides">
          <div className="Slide-paragraph-block">
            <h2 style={{ color: "black" }}>
              <b>
                <u>Using an arbitrary reference date</u>
              </b>
            </h2>
            <p>
              {" "}
              Just as Doomsday can be used to calculate other dates, any
              reference date in a year can also be used to calculate the
              Doomsday for that year as well
            </p>
            <p>
              For example: given that January 17th, 2012 was a Tuesday, what was
              Doomsday for 2012?
            </p>
            <p style={{ textIndent: "50px" }}>
              The memorized doomsday in January is{" "}
              <Tooltip
                title="the 3rd 3 years in 4 and the 4th in the 4th (note that 2012 is a leap year)"
                placement="right"
              >
                <span>
                  <u>January 4th</u>
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              Doomsday is 13 days before the given date, meaning it can be found
              by counting 13 days backwards from Tuesday
            </p>
            <p style={{ textIndent: "50px" }}>
              So Doomsday for 2012 was a Wednesday{" "}
              <Tooltip
                title="because -13 % 7 is -6, and 6 days before Tuesday is Wednesday"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p>
              Any date in a year can serve as reference to calculate Doomsday
              for that year
            </p>
            <p>
              A special case of this is particularly useful: with knowledge of
              just today's date, one can calculate the day of the week for any
              date in the current year!
            </p>
          </div>
        </div>

        <div className="mySlides">
          <div className="Slide-paragraph-block">
            <h2 style={{ color: "black" }}>
              <b>
                <u>Quiz</u>
              </b>
            </h2>
            <p>
              Enter what the day of the week is for each of the given dates in
              the{" "}
              <Tooltip title={currentDate.getFullYear()} placement="top">
                <span>
                  <u>current year</u>
                </span>
              </Tooltip>{" "}
              (dates are of format MM/DD):
            </p>
            {allDates.map((date, index) => {
              return (
                <span>
                  <TextField
                    label={`${addLeadingZero(date[0])}/${addLeadingZero(
                      date[1]
                    )}`}
                    error={
                      quizFieldValues[index] !== "" &&
                      quizFieldValues[index].toLowerCase() !==
                        answers[index].toLowerCase()
                    }
                    helperText={
                      quizFieldValues[index] !== "" &&
                      quizFieldValues[index].toLowerCase() !==
                        answers[index].toLowerCase()
                        ? "Incorrect answer."
                        : ""
                    }
                    onChange={(e) => {
                      var newQuizFieldValues = quizFieldValues;
                      newQuizFieldValues[index] = e.target.value;

                      setQuizFieldValues(newQuizFieldValues);
                      setTest(e.target.value);
                    }}
                    id={date}
                    variant="outlined"
                  />{" "}
                </span>
              );
            })}
          </div>
        </div>

        <div
          className="prev"
          onClick={() => setSlideIndex(Math.max(slideIndex - 1, 0))}
        >
          ❮
        </div>
        <div
          className="next"
          onClick={() => setSlideIndex(Math.min(slideIndex + 1, 1))}
        >
          ❯
        </div>
      </div>

      <div className="dot-container">
        <span className="dot" onClick={() => setSlideIndex(0)}></span>
        <span className="dot" onClick={() => setSlideIndex(1)}></span>
      </div>
    </div>
  );
};

export default Step5Slides;
