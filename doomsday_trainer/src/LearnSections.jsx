import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Step1Page from "./Step1Page";
import Step2Page from "./Step2Page";
import Step3Page from "./Step3Page";

const LearnSections = () => {
  let match = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/step1`}>
          <Step1Page />
        </Route>
        <Route path={`${match.path}/step2`}>
          <Step2Page />
        </Route>
        <Route path={`${match.path}/step3`}>
          <Step3Page />
        </Route>
        <Route path={match.path}>
          <TableOfContents className="App-page-with-bar" />
        </Route>
      </Switch>
    </Router>
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
          <strong>
            Part 3: Compute the Doomsday for the year in the given date
          </strong>
          <ul>
            <LinkListItem text="TODO" urlPath="step6" />
            <LinkListItem text="TODO" urlPath="step7" />
            <LinkListItem text="TODO" urlPath="step8" />
            <LinkListItem text="TODO" urlPath="step9" />
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
