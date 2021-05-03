import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import Calendar from "react-calendar";

import { computeDayOfWeek, isLeapYear } from "../utils.js";

const Step2Slides = () => {
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

  const allYears = [
    1978,
    1754,
    1800,
    2048,
    1702,
    1813,
    2007,
    1733,
    1916,
    2022,
    1945,
    2010,
  ];
  const answers = allYears.map((year) => computeDayOfWeek(8, 8, year));

  const today = new Date();
  const currentYear = today.getFullYear();

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
                <u>How the Doomsday changes across years</u>
              </b>
            </h2>
            <p>Consider the following doomsday date: August 8th, 1900</p>
            <p style={{ textIndent: "50px" }}>
              From the memorized anchor doomsdays, one knows that this date fell
              on a Wednesday
            </p>
            <p>
              Now consider the exact same date on the following year: August
              8th, 1901
            </p>
            <p style={{ textIndent: "50px" }}>
              This date is 365 days after August 8th, 1900, meaning it fell on a
              Thursday{" "}
              <Tooltip
                title="because 365 % 7 is 1, and 1 day after Wednesday is Thursday"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              Note that the Doomsday advanced by a day between these two years
            </p>
            <p>
              Using similar reasoning, one can conclude that August 8th, 1902
              was a Friday & August 8th, 1903 was a Saturday
            </p>
            <p>Now consider August 8th, 1904</p>
            <p style={{ textIndent: "50px" }}>
              This date is{" "}
              <Tooltip
                title="keep in mind that 1904 is a leap year, giving an extra leap day on February 29th to account for"
                placement="top"
              >
                <span>
                  <u>366</u>
                </span>
              </Tooltip>{" "}
              days after August 8th, 1903, meaning it fell on a Monday{" "}
              <Tooltip
                title="because 366 % 7 is 2, and 2 days after Saturday is Monday"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              Note that the Doomsday advanced by two days between these two
              years
            </p>
            <p>
              This illustrates a general pattern: the Doomsday advances by one
              day with each passing year, with an extra day on leap years
            </p>
          </div>
        </div>

        <div className="mySlides">
          <div className="Slide-paragraph-block">
            <h2 style={{ color: "black" }}>
              <b>
                <u>Calculating the Offset</u>
              </b>
            </h2>
            <p>
              One can calculate the Doomsday for a given year by using the
              aforementioned pattern to find and add the offset for that year to
              the corresponding anchor year
            </p>
            <p>For example, one can find the Doomsday for 1964 as follows:</p>
            <p style={{ textIndent: "50px" }}>
              The Doomsday for the corresponding anchor year (1900) is Wednesday
            </p>
            <p style={{ textIndent: "50px" }}>
              1964 is 64 years later (with 64 / 4 = 16 leap years in between),
              meaning the Doomsday advances 80 days{" "}
              <Tooltip
                title="it advances 64 days (one for each year) plus 16 extra days (one for each leap year in between)"
                placement="top"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              Therefore, Doomsday for 1964 is Saturday{" "}
              <Tooltip
                title="because 80 % 7 is 3, and 3 days after Wednesday is Saturday"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p>
              As yet another example, one can find the Doomsday for 2021 as
              follows:
            </p>
            <p style={{ textIndent: "50px" }}>
              The Doomsday for the corresponding anchor year (2000) is Tuesday
            </p>
            <p style={{ textIndent: "50px" }}>
              2021 is 21 years later (with 21 / 4 = 5 leap years in between),
              meaning the Doomsday advances 26 days{" "}
              <Tooltip
                title="it advances 21 days (one for each year) plus 5 extra days (one for each leap year in between)"
                placement="top"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              Therefore, Doomsday for 2021 is Sunday{" "}
              <Tooltip
                title="because 26 % 7 is 5, and 5 days after Tuesday is Sunday"
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
                <u>Leap Day</u>
              </b>
            </h2>
            <p>
              {" "}
              Observe that the Doomsday advances by a day each year (and by two
              days on leap years):{" "}
            </p>
            <Calendar
              minDate={new Date(1700, 0, 1)}
              view="month"
              value={new Date(currentYear, 7, 1)}
              showNeighboringMonth={false}
              tileDisabled={({ activeStartDate, date, view }) => {
                return !(date.getMonth() === 7 && date.getDate() === 8);
              }}
            />
          </div>
        </div>

        <div className="mySlides">
          <div className="Slide-paragraph-block">
            <h2 style={{ color: "black" }}>
              <b>
                <u>Quiz</u>
              </b>
            </h2>
            <p> Enter the Doomsday for each of the following years: </p>
            {allYears.map((year, index) => {
              return (
                <span>
                  <TextField
                    label={year}
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
                    id={year}
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
          onClick={() => setSlideIndex(Math.min(slideIndex + 1, 3))}
        >
          ❯
        </div>
      </div>

      <div className="dot-container">
        <span className="dot" onClick={() => setSlideIndex(0)}></span>
        <span className="dot" onClick={() => setSlideIndex(1)}></span>
        <span className="dot" onClick={() => setSlideIndex(2)}></span>
        <span className="dot" onClick={() => setSlideIndex(3)}></span>
      </div>
    </div>
  );
};

export default Step2Slides;
