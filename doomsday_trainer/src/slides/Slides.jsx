import { useEffect, useState } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import Calendar from "react-calendar";

import { getDoomsdays } from "../utils.js";

const Slides = () => {
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
                <u>Doomsdays</u>
              </b>
            </h2>
            <p>
              {" "}
              Every year has a specific day of the week, known as{" "}
              <b>Doomsday</b> that can help simplify the way we can think about
              the calendar.{" "}
            </p>
            <p>
              {" "}
              This day is defined as the day of the week that the last day of
              February falls on.{" "}
            </p>
            <p>
              For example, the Doomsday for 2021 is Sunday (since February 28th,
              2021 was a Sunday).
            </p>
            <p>
              We can think of other days where the day of the week matches the
              Doomsday for a year as also being doomsdays.
            </p>
            <p> This means that every Sunday in 2021 is a doomsday. </p>
            <p>
              {" "}
              We will memorize twelve dates that are guaranteed to be doomsdays
              in any given year, one in each month.{" "}
            </p>
            <p>
              {" "}
              To help commit them to memory, we will use{" "}
              <a
                className="Info-link"
                href="https://en.wikipedia.org/wiki/Mnemonic"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                mnemonics.
              </a>
            </p>
          </div>
        </div>

        <div className="mySlides">
          <div className="Slide-paragraph-block">
            <h2 style={{ color: "black" }}>
              <b>
                <u>Memorize the Doomsdays</u>
              </b>
            </h2>
            <p> Hover over a date to see a mnemonic to help remember it: </p>
            <ul>
              <li>
                <Tooltip
                  title="the 3rd 3 years in 4 and the 4th in the 4th"
                  placement="right"
                >
                  <span> January 3rd (or 4th if it's a leap year) </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="the last day of February" placement="right">
                  <span> February 28th (or 29th if it's a leap year) </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Pi day" placement="right">
                  <span> March 14th </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="4/4, 6/6, 8/8, 10/10, 12/12" placement="right">
                  <span> April 4th </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="I work 9-to-5 at 7-11" placement="right">
                  <span> May 9th </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="4/4, 6/6, 8/8, 10/10, 12/12" placement="right">
                  <span> June 6th </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="I work 9-to-5 at 7-11" placement="right">
                  <span> July 11th </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="4/4, 6/6, 8/8, 10/10, 12/12" placement="right">
                  <span> August 8th </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="I work 9-to-5 at 7-11" placement="right">
                  <span> September 5th </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="4/4, 6/6, 8/8, 10/10, 12/12" placement="right">
                  <span> October 10th </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="I work 9-to-5 at 7-11" placement="right">
                  <span> November 7th </span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="4/4, 6/6, 8/8, 10/10, 12/12" placement="right">
                  <span> December 12th </span>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>

        <div className="mySlides">
          <div className="Slide-paragraph-block">
            <h2 style={{ color: "black" }}>
              <b>
                <u>Doomsdays</u>
              </b>
            </h2>
            <p>
              {" "}
              Note that the doomsdays always fall on the same day of the week
              for any given year:{" "}
            </p>
            <Calendar
              minDate={new Date(1700, 0, 1)}
              view="month"
              showNeighboringMonth={false}
              tileDisabled={({ activeStartDate, date, view }) => {
                const doomsdays = getDoomsdays(date.getFullYear());
                return !(doomsdays[date.getMonth()] === date.getDate());
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

export default Slides;
