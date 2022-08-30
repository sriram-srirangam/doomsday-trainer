import { Routes, Route, Link } from "react-router-dom";
import Step1Page from "./Step1Page";
import Step2Page from "./Step2Page";
import Step3Page from "./Step3Page";
import Step4Page from "./Step4Page";
import Step5Page from "./Step5Page";
import Step6Page from "./Step6Page";
import Step7Page from "./Step7Page";

const LearnSections = () => {
  return (
    <Routes>
      <Route path={"/step1"} element={<Step1Page />} />
      <Route path={"/step2"} element={<Step2Page />} />
      <Route path={"/step3"} element={<Step3Page />} />
      <Route path={"/step4"} element={<Step4Page />} />
      <Route path={"/step5"} element={<Step5Page />} />
      <Route path={"/step6"} element={<Step6Page />} />
      <Route path={"/step7"} element={<Step7Page />} />
      <Route
        path={"/"}
        element={<TableOfContents className="App-page-with-bar" />}
      />
    </Routes>
  );
};

const TableOfContents = () => {
  return (
    <div className="General-app-content App-page-with-bar">
      <h1>Sections</h1>
      <ol>
        <li>
          <strong>Part 1: Calendar Basics</strong>
          <ul>
            <LinkListItem text="Doomsdays" urlPath="step1" />
            <LinkListItem text="Leap Years" urlPath="step2" />
            <LinkListItem
              text="Modular Arithmetic with days of the week"
              urlPath="step3"
            />
          </ul>
        </li>
        <li>
          <strong>
            Part 2: Use the Doomsday to calculate the day of the week for the
            given month & day
          </strong>
          <ul>
            <LinkListItem
              text="Calculate the day of the week given Doomsday"
              urlPath="step4"
            />
            <LinkListItem
              text="Calculate the day of the week given any reference date"
              urlPath="step5"
            />
          </ul>
        </li>
        <li>
          <strong>Part 3: Compute the Doomsday for any year</strong>
          <ul>
            <LinkListItem text="Doomsdays for Anchor Years" urlPath="step6" />
            <LinkListItem
              text="Calculate Doomsday using the offset"
              urlPath="step7"
            />
          </ul>
        </li>
      </ol>
    </div>
  );
};

const LinkListItem = ({ text, urlPath }) => {
  return (
    <li>
      <Link
        style={{ color: "white", textDecoration: "underline" }}
        to={`/learn/${urlPath}`}
      >
        {text}
      </Link>
    </li>
  );
};

export default LearnSections;
