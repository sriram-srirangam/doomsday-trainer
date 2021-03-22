import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Step5Page from "./Step5Page";

const LearnSections = () => {
  let match = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/step5`}>
          <Step5Page />
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
    <div className="General-app-content">
      <h1>Learn the steps of the algorithm</h1>
      <ul>
        <li>
          <strong>Compute the Doomsday for the year in the given date</strong>
          <ul>
            <LinkListItem
              text="Memorize anchor Doomsdays for four consecutive century years"
              urlPath="step1"
            />
            <LinkListItem
              text="Calculate the offset within the century for the given date"
              urlPath="step2"
            />
            <LinkListItem
              text="Find the remainder of the offset modulo 7"
              urlPath="step3"
            />
            <LinkListItem
              text="Add the remainder to the relevant anchor Doomsday"
              urlPath="step4"
            />
          </ul>
        </li>
        <li>
          <strong>
            Use the Doomsday to calculate the day of the week for the given
            month & day
          </strong>
          <ul>
            <LinkListItem
              text="Memorize 12 Doomsday dates within a year, one for each month"
              urlPath="step5"
            />
            <LinkListItem
              text="Find the closest Doomsday date to the given date and calculate the
              difference in days"
              urlPath="step6"
            />
            <LinkListItem
              text="Add the day difference to the Doomsday found in the previous step"
              urlPath="step7"
            />
          </ul>
        </li>
      </ul>
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
