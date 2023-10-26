import classes from "./home.module.css";
import { Element, scroller } from "react-scroll";
import Navbar from "../components/Layout/navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    scroller.scrollTo("intro", {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <button className={classes.scrolltotop} onClick={scrollToTop}>
      Scroll to Top
    </button>
  );
};

const HomePage = () => {
  return (
    <main>
      <Element name="intro">
        <div className={classes.intro}>
          <div className={classes.theTitle}>
            <h1>eunsong koh</h1>
            <br />
            <h3>student, designer, developer</h3>
            <Navbar />
          </div>
        </div>
      </Element>
      <div className={classes.projects} id="projects">
        <h2>My Projects</h2>
        <section className={classes.theCards}></section>
      </div>
      <div className={classes.multimedia} id="multimedia">
        <h2>multimedia</h2>
      </div>
      <div className={classes.contact} id="contact">
        <h2>Contact Me</h2>
      </div>
      <ScrollToTopButton />
    </main>
  );
};

export default HomePage;
