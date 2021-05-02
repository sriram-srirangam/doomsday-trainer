import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

import Calendar from "react-calendar";

import { allDays } from "../utils.js";

const Step3Slides = () => {
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

  const allNumbers = [-14, 15, 1, 12, 3, -6, -24, 21, 7, 2, 27, -19];
  const answers = allNumbers.map(
    (number) => allDays[(((3 + number) % 7) + 7) % 7]
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
                <u>Modular Arithmetic</u>
              </b>
            </h2>
            <p>
              {" "}
              The Doomsday algorithm makes use of an arithmetic system called{" "}
              <b>modular arithmetic</b>
            </p>
            <p>
              Put simply, modular arithmetic is the same as regular arithmetic,
              with the only difference lying in the fact that numbers "wrap
              around" back to 0 upon reaching a certain value called the{" "}
              <b>modulus</b>
            </p>
            <p>
              A familiar example of modular arithmetic can be seen in the
              12-hour clock, in which the day is divided into two 12-hour
              periods
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. if the time is 9 PM now, 5 hours from now it will be 2 AM
              (the modulus in this example is 12)
            </p>
            <p>
              There are seven days of the week that wrap back around to the
              beginning at the end of each week, making arithmetic modulo 7 very
              useful for calendar calculations
            </p>
            <p>The Doomsday algorithm relies heavily on this property</p>
          </div>
        </div>

        <div className="mySlides">
          <div className="Slide-paragraph-block">
            <h2 style={{ color: "black" }}>
              <b>
                <u>Arithmetic modulo 7</u>
              </b>
            </h2>
            <p>
              We will use the following notation to denote that the number x is
              taken modulo 7:
            </p>
            <p style={{ textIndent: "50px" }}>x % 7</p>
            <p>
              To compute the value of this expression, we simply find the
              remainder when x is divided by 7:
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. The value of 4 % 7 is 4{" "}
              <Tooltip
                title="because 4 divided by 7 is 0, with a remainder of 4"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. The value of 38 % 7 is 3{" "}
              <Tooltip
                title="because 38 divided by 7 is 5, with a remainder of 3"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. The value of 0 % 7 is 0{" "}
              <Tooltip
                title="because 0 divided by 7 is 0, with a remainder of 0"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. The value of -2 % 7 is -2{" "}
              <Tooltip
                title="because -2 divided by 7 is 0, with a remainder of -2"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. The value of -29 % 7 is -1{" "}
              <Tooltip
                title="because -29 divided by 7 is -4, with a remainder of -1"
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
                <u>Counting with days</u>
              </b>
            </h2>
            <p>
              Arithmetic modulo 7 allows one to count forwards/backwards from
              any day of the week quickly
            </p>
            <p>
              For example, to find out what the day of the week is 50 days after
              Sunday, one can just count 50 % 7 days after Sunday instead
            </p>
            <p style={{ textIndent: "50px" }}>
              Since 50 % 7 is 1{" "}
              <Tooltip
                title="because 50 divided by 7 is 7, with a remainder of 1"
                placement="top"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
              , one can count 1 day after Sunday instead and determine that the
              answer is Monday
            </p>
            <p>
              A similar approach works for counting backwards too, except with
              the sign changed: to find out what the day of the week is 50 days
              before Sunday, one can just count -50 % 7 days after Sunday
              instead
            </p>
            <p style={{ textIndent: "50px" }}>
              Since -50 % 7 is -1{" "}
              <Tooltip
                title="because -50 divided by 7 is -7, with a remainder of -1"
                placement="top"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
              , one can count 1 day <i>before</i> Sunday instead and determine
              that the answer is Saturday
            </p>
            <p>A few more examples:</p>
            <p style={{ textIndent: "50px" }}>
              e.g. 45 days after Thursday is Sunday{" "}
              <Tooltip
                title="because 45 % 7 is 3, and 3 days after Thursday is Sunday"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              e.g. 17 days before Monday is Friday{" "}
              <Tooltip
                title="because -17 % 7 is -3, and 3 days before Monday is Friday"
                placement="right"
              >
                <span>
                  (<u>why?</u>)
                </span>
              </Tooltip>
            </p>
            <p style={{ textIndent: "50px" }}>
              e.g. 28 days after Tuesday is still Tuesday{" "}
              <Tooltip
                title="because 28 % 7 is 0, and 0 days after Tuesday is still Tuesday"
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
              Enter what the day of the week is the given number of days after
              Wednesday:
            </p>
            {allNumbers.map((year, index) => {
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

export default Step3Slides;
