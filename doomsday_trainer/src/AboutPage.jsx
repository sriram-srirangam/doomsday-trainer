const AboutPage = () => {
  return (
    <div className="General-app-text-content App-page-with-bar">
      <div className="Paragraph-block">
        <h1 style={{ color: "black" }}>
          <b>
            <u>About</u>
          </b>
        </h1>
        <p>
          {" "}
          The <b>Doomsday algorithm</b> is a method to mentally compute the day
          of the week for a given date. This web application is designed to both
          teach and provide practice to facilitate learning this skill.{" "}
        </p>
        <p>
          {" "}
          The 'Learn' mode of the application contains sections of content that
          teach the algorithm step by step. Some sections also have practice at
          the end for the content covered in that section. New users who want to
          learn the algorithm for the first time will want to start with this
          mode.{" "}
        </p>
        <p>
          {" "}
          The 'Train' mode of the application offers practice problems for
          training the ability to perform the entire algorithm, as well as
          providing various metrics such as scorekeeping, average response time,
          etc. Returning users who have already completed the previous mode will
          want to go here.{" "}
        </p>
        <p>
          Knowledge of basic arithmetic is sufficient to use this app and learn
          the algorithm.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
