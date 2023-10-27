import classes from "./home.module.css";
import { Element, scroller } from "react-scroll";
import Navbar from "../components/Layout/navbar";
import { Chrono } from "react-chrono";
import { InstagramEmbed } from "react-social-media-embed";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    scroller.scrollTo("intro", {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <Button
      variant="contained"
      style={{
        position: "fixed",
        top: " 20px",
        right: "20px",
        backgroundColor: "#ffa8a9",
      }}
      onClick={scrollToTop}
    >
      Scroll to Top
    </Button>
  );
};

const HomePage = () => {
  const items = [
    {
      title: "Personal Website",
      cardTitle: "Personal Website",
      cardSubtitle:
        "What you're looking at right now! I love learning and challenging myself with new skills. This website will be a real-time update of where I am in my coding journey!",
      cardDetailedText: "React.js",
    },
    {
      title: "Every Second Devotion, 2023",
      cardTitle: "Every Second Devotion",
      cardSubtitle:
        "A devotional web app that generates descriptions of any Bible verse. Created as a birthday gift! ",
      cardDetailedText: "Next.js, Express.js, Node.js",
      media: {
        type: "IMAGE",
        source: {
          media: "",
        },
      },
    },
    {
      title: "Gesture Genius, Hack the North 2023",
      cardTitle: "Gesture Genius, Hack the North 2023",
      url: "https://devpost.com/software/gesture-genius-asl-ai-recognition",
      cardSubtitle:
        "An accessible ASL Translator utilizing Google Cloud's API and Teachable Machine AI Model",
      cardDetailedText: "HTML/CSS, JS, Ajax, Node.js, Google Cloud API",
      media: {
        type: "IMAGE",
        source: {
          media: "./img/gesture.png",
        },
      },
    },
    {
      title: "SFU Developers & Systems Club Official Website 2023",
      cardTitle: "SFU DNS Club Website",
      url: "https://dnsclub.github.io/dnsWeb/",
      cardSubtitle:
        "The official website of SFU DNS Club website created with React.js",
      cardDetailedText: "React.js, HTML/CSS",
      media: {
        type: "IMAGE", // You can specify other media types if needed
        source: {
          media: "./img/DNSPoster.png", // Replace with the actual image URL
        },
      },
    },
    {
      title: "AutoFill PDF 2023",
      cardTitle: "AutoFill PDF",
      cardSubtitle:
        "A Python program developed to automate onboarding contracts for NCI HR Department",
      cardDetailedText: "Python",
      media: {
        type: "IMAGE", // You can specify other media types if needed
        source: {
          media: "./img/pdf.jpg", // Replace with the actual image URL
        },
      },
    },
    {
      title: "Weather App 2022",
      cardTitle: "Weather App",
      url: "https://github.com/eunsongkoh/weather-app.py",
      cardSubtitle:
        "An application that provides real-time updates on weather conditions on user-inputted cities",
      cardDetailedText: "Python, Json, Requests, Open-Weather API, Tkinter GUI",
      media: {
        type: "IMAGE", // You can specify other media types if needed
        source: {
          media: "./img/password.png", // Replace with the actual image URL
        },
      },
    },
    {
      title: "Password Manager 2022",
      cardTitle: "Password Manager",
      url: "https://github.com/eunsongkoh/passwordVault.py",
      cardSubtitle: "A Python application that stores a database of passwords",
      cardDetailedText: "Python, SQLite3, Tkinter, HashLib",
      media: {
        type: "IMAGE", // You can specify other media types if needed
        source: {
          media: "./img/DNSPoster.png", // Replace with the actual image URL
        },
      },
    },
    {
      title: "Kode with Klossy Data Science Scholar 2022",
      cardTitle: "KWK Data Science Scholar 2022",
      cardSubtitle:
        "Utilized Python and SQL to analyze global and national data on violence against women and provided insights into patterns and trends on a web application",
      cardDetailedText: "SQL, Python, Google Data Studio",
      media: {
        type: "IMAGE", // You can specify other media types if needed
        source: {
          media: "./img/kwk.jpg", // Replace with the actual image URL
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
            <Chrono
              items={items}
              theme={{
                primary: "#8693AB",
                secondary: "#8693AB",
                titleColor: "white",
                titleColorActive: "#F4D6CC",
                cardTitleColor: "#8693AB",
              }}
              mode="HORIZONTAL"
            />
          </div>
        </section>
      </div>
      <div className={classes.multimedia} id="multimedia">
        <h2>Multimedia</h2>
        <h5>
          i have a huge passion for digital design! <br></br>currently, i'm a{" "}
          <i>Video Editor for the Computing Science Student Society</i> and{" "}
          <br></br>the{" "}
          <i>Director of Communications and Multimedia at SFU DNS Club</i>
        </h5>
        <h4>some of my projects</h4>
        <div className={classes.social}>
          <div style={{ display: "flex", justifyContent: "left" }}>
            <InstagramEmbed
              url="https://www.instagram.com/reel/CyE7V65tl4h/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/CyAX1CPu3K5/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
              width={328}
            />
          </div>
        </div>
      </div>
      <div className={classes.contact} id="contact">
        <h2>Contact Me</h2>
        <div className={classes.contactInfo}>
          <a
            href="https://www.linkedin.com/in/songkoh/"
            className={classes.links}
          >
            <CiLinkedin style={{ fill: "black" }} /> chat with me on linkedin!
          </a>
          <br></br>
          <br></br>
          <a href="mailto: eka74@sfu.ca" className={classes.links}>
            <AiOutlineMail style={{ fill: "black" }} /> send me an email!
          </a>
          <br></br>
          <br></br>
          <a href="https://github.com/eunsongkoh" className={classes.links}>
            <AiFillGithub style={{ fill: "black" }} /> my github
          </a>
        </div>
      </div>
      <ScrollToTopButton />
      <footer>Created By Eunsong Koh</footer>
    </main>
  );
};

export default HomePage;
