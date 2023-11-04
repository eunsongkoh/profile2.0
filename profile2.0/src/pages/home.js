import classes from "./home.module.css";
import { Element, scroller } from "react-scroll";
import Navbar from "../components/Layout/navbar";
import { Chrono } from "react-chrono";
import { InstagramEmbed } from "react-social-media-embed";
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
        source: {
          url: "/img/logo.jpg",
        },
        type: "IMAGE",
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
        source: {
          url: "/img/gesture.png",
        },
        type: "IMAGE",
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
        source: {
          url: "/img/DNSPoster.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "AutoFill PDF 2023",
      cardTitle: "AutoFill PDF",
      cardSubtitle:
        "A Python program developed to automate onboarding contracts for NCI HR Department",
      cardDetailedText: "Python",
      media: {
        source: {
          url: "/img/password.png",
        },
        type: "IMAGE",
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
        source: {
          url: "/img/clouds.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Password Manager 2022",
      cardTitle: "Password Manager",
      url: "https://github.com/eunsongkoh/passwordVault.py",
      cardSubtitle: "A Python application that stores a database of passwords",
      cardDetailedText: "Python, SQLite3, Tkinter, HashLib",
      media: {
        source: {
          url: "/img/password.png",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Kode with Klossy Data Science Scholar 2022",
      cardTitle: "KWK Data Science Scholar 2022",
      cardSubtitle:
        "Utilized Python and SQL to analyze global and national data on violence against women and provided insights into patterns and trends on a web application",
      cardDetailedText: "SQL, Python, Google Data Studio",
      media: {
        source: {
          url: "/img/kwk.jpg",
        },
        type: "IMAGE",
      },
    },
  ];

  const languages = [
    "Python",
    "C/C++",
    "SQL",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
  ];
  const tech = ["React", "Next", "Node.js", "Express.js", ""];
  const courses = [
    "Data Structures & Algorithms: C/C++",
    "Client-Side Development: HTML/CSS, JS, TS, Angular",
  ];

  const lan = languages.map((lan) => (
    <l1>
      {lan}
      <br></br>
    </l1>
  ));
  const technology = tech.map((t) => <l1>{tech}</l1>);
  const crs = courses.map((c) => <l1>{courses}</l1>);
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
      <Element name="about">
        <div className={classes.about}>
          <h2>About Me</h2>
          <div className={classes.aboutMeDivs}>
            <div className={classes.aboutMeText}>
              <h3>
                Hi, My name is Song. I'm a 2nd Year Computing Science student at
                Simon Fraser University. I'm passionate about all things
                computer science! I think it's awesome how we can bring creative
                ideas and solutions to real-world problems with something as
                technical as a computer.
                <br></br>
                Thanks for coming by!
              </h3>

              <h3>
                <big>My Languages & Technologies:</big>
                <i>
                  <br></br>
                  -Python
                  <br></br>
                  -C/C++
                  <br></br>
                  -SQL
                  <br></br>
                  -JavaScript
                  <br></br>
                  -TypeScript
                  <br></br>
                  -HTML/CSS
                  <br></br>
                  React.js, Next.js, Node.js, Express.js, Bootstrap, MUI, Git
                </i>
              </h3>
              <br></br>
              <h3>
                <big>Relevant Coursework</big>
                <i>
                  <br></br>
                  <b>Data Structures & Algorithms:</b> C/C++
                  <br></br>
                  <br></br>
                  <b>Client-Side Development:</b> HTML/CSS, JavaScript,
                  TypeScript, Angular
                </i>
              </h3>
            </div>
            <div className={classes.spotfy}>
              <h5 className={classes.spotTitle}>My Song of the Week</h5>
              <iframe
                className={classes.spotifysong}
                title="Songs Song of the Week"
                style={{
                  borderRadius: "10px",
                  width: "500px", // Adjust the width here
                }}
                src="https://open.spotify.com/embed/track/6QCPweR3aP6nj7P43WpiZs?utm_source=generator"
                height="400"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
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
          i have a huge passion for digital design! currently, i'm a <br></br>
          <i>
            <big>Video Editor @ SFU Computing Science Student Society</big>
          </i>{" "}
          <br></br>
          <br></br>
          <i>
            <big>
              Director of Communications and Multimedia @ SFU Developers &
              Systems Club
            </big>
          </i>
        </h5>
        <h4>some of my work</h4>
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
