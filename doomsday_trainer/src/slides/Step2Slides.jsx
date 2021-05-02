import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import Calendar from "react-calendar";

import { getDoomsdays, isLeapYear } from "../utils.js";

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

  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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
                <u>Leap Years</u>
              </b>
            </h2>
            <p>
              {" "}
              A <b>leap year</b> is a year that is a multiple of 4{" "}
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. 2016, 1984, 1836 are leap years
            </p>
            <p>
              {" "}
              ...unless the year is a multiple of 100, in which case it is{" "}
              <b>not</b> a leap year{" "}
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. 1700, 1800, 1900 are not leap years
            </p>
            <p>
              {" "}
              ...but if the year is a multiple of 400, it <b>is</b> a leap year
              after all{" "}
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. 2000, 2400, 1600 are leap years
            </p>
          </div>
        </div>

        <div className="mySlides">
          <div className="Slide-paragraph-block">
            <h2 style={{ color: "black" }}>
              <b>
                <u>Techniques for determining if a year is leap</u>
              </b>
            </h2>
            <p>
              A number is a multiple of 4 if its last two digits are a multiple
              of 4
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. The last two digits of{" "}
              <Tooltip title="16 = 4 x 4" placement="top">
                <span>
                  20<u>16</u>
                </span>
              </Tooltip>
              ,{" "}
              <Tooltip title="84 = 4 x 21" placement="top">
                <span>
                  19<u>84</u>
                </span>
              </Tooltip>
              ,{" "}
              <Tooltip title="36 = 4 x 9" placement="top">
                <span>
                  18<u>36</u>
                </span>
              </Tooltip>{" "}
              are all multiples of 4
            </p>
            <p>A number is a multiple of 100 if its last two digits are 00</p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. The last two digits of{" "}
              <Tooltip title="1700 = 17 x 100" placement="top">
                <span>
                  17<u>00</u>
                </span>
              </Tooltip>
              ,{" "}
              <Tooltip title="1800 = 18 x 100" placement="top">
                <span>
                  18<u>00</u>
                </span>
              </Tooltip>
              ,{" "}
              <Tooltip title="1900 = 19 x 100" placement="top">
                <span>
                  19<u>00</u>
                </span>
              </Tooltip>{" "}
              are all 00
            </p>
            <p>
              A number is a multiple of 400 if it is also a multiple of 100 and
              everything but its last two digits are a multiple of 4
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. Everything but the last two digits of{" "}
              <Tooltip title="20 = 4 x 5" placement="top">
                <span>
                  <u>20</u>00
                </span>
              </Tooltip>
              ,{" "}
              <Tooltip title="24 = 4 x 6" placement="top">
                <span>
                  <u>24</u>00
                </span>
              </Tooltip>
              ,{" "}
              <Tooltip title="16 = 4 x 4" placement="top">
                <span>
                  <u>16</u>00
                </span>
              </Tooltip>{" "}
              are all multiples of 4
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
              Observe that the last day of February is the 29th on leap years
              and 28th otherwise:{" "}
            </p>
            <Calendar
              minDate={new Date(1700, 0, 1)}
              view="month"
              value={new Date(currentYear, 1, 1)}
              showNeighboringMonth={false}
              tileDisabled={({ activeStartDate, date, view }) => {
                const leapDay = isLeapYear(date.getFullYear()) ? 29 : 28;
                return !(date.getMonth() === 1 && date.getDate() === leapDay);
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
            <p>
              {" "}
              Enter the date of the memorized doomsday in each month for leap
              years.{" "}
            </p>
            {allMonths.map((month, index) => {
              const doomsdays = getDoomsdays(2020);
              return (
                <span>
                  <TextField
                    label={month}
                    error={
                      quizFieldValues[index] !== "" &&
                      quizFieldValues[index] !== doomsdays[index].toString()
                    }
                    helperText={
                      quizFieldValues[index] !== "" &&
                      quizFieldValues[index] !== doomsdays[index].toString()
                        ? "Incorrect answer."
                        : ""
                    }
                    onChange={(e) => {
                      var newQuizFieldValues = quizFieldValues;
                      newQuizFieldValues[index] = e.target.value;

                      setQuizFieldValues(newQuizFieldValues);
                      setTest(e.target.value);
                    }}
                    id={month}
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
