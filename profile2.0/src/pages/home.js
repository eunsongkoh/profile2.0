import classes from "./home.module.css";
import { Element, scroller } from "react-scroll";
import Navbar from "../components/Layout/navbar";
import { Chrono } from "react-chrono";

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
  const items = [
    {
      title: "Gesture Genius, Hack the North",
      cardTitle: "HTN",
      url: "https://devpost.com/software/gesture-genius-asl-ai-recognition",
      cardSubtitle:
        "An accessible ASL Translator utilizing Google Cloud's API and Teachable Machine AI Model",
      cardDetailedText: "HTML/CSS, JS, Ajax, Node.js, Google Cloud API",
      media: {
        type: "IMAGE",
        source: {
          media: "/img/gesture.png",
        },
      },
    },
    {
      title: "SFU Developers & Systems Club Official Website",
      cardTitle: "SFU DNS Club",
      url: "https://dnsclub.github.io/dnsWeb/",
      cardSubtitle:
        "The official website of SFU DNS Club website created with React.js",
      cardDetailedText: "React.js, HTML/CSS",
      media: {
        type: "IMAGE", // You can specify other media types if needed
        source: {
          media: "DNSPoster.png", // Replace with the actual image URL
        },
      },
    },
  ];

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
        <section className={classes.theCards}>
          <div style={{ width: "100%", height: "100%" }}>
            <Chrono items={items} mode="HORIZONTAL" />
          </div>
        </section>
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
