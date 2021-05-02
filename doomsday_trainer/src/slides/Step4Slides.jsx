import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import { computeDayOfWeek, addLeadingZero } from "../utils.js";

const Step4Slides = () => {
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
    computeDayOfWeek(date[0], date[1], 1873)
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
                <u>Using Doomsday</u>
              </b>
            </h2>
            <p>
              {" "}
              The Doomsday for a given year can be combined with counting modulo
              7 to calculate the day of the week for <b>any</b> date in that
              year
            </p>
            <p>
              This requires that one has the doomsdays in each month memorized
              (see{" "}
              <a href="step1" style={{ textDecoration: "none" }}>
                Doomsdays
              </a>
              )
            </p>
            <p>
              For example: given that the Doomsday for 1917 was Wednesday, what
              day of the week did August 11th, 1917 fall on?
            </p>
            <p style={{ textIndent: "50px" }}>
              The memorized doomsday in August is{" "}
              <Tooltip title="4/4, 6/6, 8/8, 10/10, 12/12" placement="right">
                <span>
                  <u>August 8th</u>
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              August 11th is 3 days later, meaning it can be found by counting 3
              days forward from Wednesday
            </p>
            <p style={{ textIndent: "50px" }}>
              So August 11th, 1917 was a Saturday{" "}
              <Tooltip
                title="because 3 % 7 is 3, and 3 days after Wednesday is Saturday"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p>
              Another example: given that the Doomsday for 2090 is Tuesday, what
              day of the week will September 2nd, 2090 fall on?
            </p>
            <p style={{ textIndent: "50px" }}>
              The memorized doomsday in September is{" "}
              <Tooltip title="I work 9-to-5 at 7-11" placement="right">
                <span>
                  <u>September 5th</u>
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              September 2nd is 3 days before, meaning it can be found by
              counting 3 days backwards from Tuesday
            </p>
            <p style={{ textIndent: "50px" }}>
              So September 2nd, 2090 will be a Saturday{" "}
              <Tooltip
                title="because -3 % 7 is -3, and 3 days before Tuesday is Saturday"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
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
              Given that the Doomsday for 1873 was Friday, enter the day of the
              week for the following dates in that year (dates are of format
              MM/DD):
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

export default Step4Slides;
