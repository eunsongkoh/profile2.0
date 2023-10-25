import classes from "./home.module.css";

const homePage = () => {
  return (
    <main>
      <div className={classes.intro}>
        <h1>Eunsong Koh</h1>
      </div>
      <div className={classes.projects}>
        <h2>My Projects</h2>
      </div>
      <div className={classes.contact}>
        <h2>Contact Me</h2>
      </div>
    </main>
  );
};

export default homePage;
