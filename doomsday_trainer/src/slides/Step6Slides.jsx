import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";

import { computeDayOfWeek } from "../utils.js";

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

  const allCenturies = [17, 18, 19, 20];
  const answers = allCenturies.map((century) =>
    computeDayOfWeek(8, 8, century * 100)
  );
  console.log(answers);

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
                <u>Anchor Years and their Doomsdays</u>
              </b>
            </h2>
            <p>
              {" "}
              In order to calculate Doomsday for a year without a reference
              date, we must memorize Doomsdays for special years called{" "}
              <b>anchor years</b>
            </p>
            <p>
              Put simply, anchor years correspond to the first year in each
              century
            </p>
            <p style={{ textIndent: "50px" }}>
              {" "}
              e.g. 1700, 1800, 1900, 2000, 2100, etc. are all anchor years
            </p>
            <p>
              We will memorize Doomsday for each of the following anchor years:
            </p>
            <ul>
              <li>1700 - Sunday</li>
              <li>1800 - Friday</li>
              <li>1900 - Wednesday</li>
              <li>2000 - Tuesday</li>
            </ul>
            <p>This pattern repeats for subsequent anchor years:</p>
            <p style={{ textIndent: "50px" }}>
              e.g. Doomsday for 2100 is Sunday, 2200 is Friday, 2300 is
              Wednesday, 2400 is Tuesday etc.
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
            <p>Enter the Doomsday for each of the anchor years:</p>
            {allCenturies.map((century, index) => {
              return (
                <span>
                  <TextField
                    label={century * 100}
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
                    id={century}
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

export default Step3Slides;
