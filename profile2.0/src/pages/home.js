import classes from "./home.module.css";
import { Element, scroller } from "react-scroll";
import Navbar from "../components/Layout/navbar";
import { Card } from "@mui/material";
// import { useSpring } from "react-spring";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    scroller.scrollTo("intro", {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <button className="scroll-to-top" onClick={scrollToTop}>
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
        <div className={classes.theCards}>
          <Card className={classes.MuiCard}>
            <CardMedia
              sx={{ height: 140 }}
              title="Gesture Genius"
              image="/img/gesture.png" // Relative path from the public folder
              alt="Gesture Genius"
            />
            <CardContent>
              {/* gutterBottom = boolean prop that adds a margin at the bottom
            creating some extra spacing between it and the elements below it 
            variant = specify the text's styling and the additional spacing or margin adjustments are typically done*/}
              <Typography gutterBottom variant="h5" component="div">
                Gesture Genius - Hack the North Hackathon 2023
              </Typography>
              <Typography variant="body3" color="text.primary">
                An accessible ASL Translator utilizing Google Cloud's API and
                Teachable Machine AI Model
              </Typography>
              <Typography variant="body2" color="text.secondary">
                HTML/CSS, JS, Ajax, Node.js, Google Cloud API
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.buttons}
                href="https://devpost.com/software/gesture-genius-asl-ai-recognition"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.MuiCard}>
            <CardMedia
              sx={{ height: 140 }}
              title="DNS Website"
              image="/img/DNSPoster.png" // Relative path from the public folder
              alt="DNS Poster"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                SFU Developers & Systems Club Official Website
              </Typography>
              <Typography variant="body3" color="text.primary">
                The official website of SFU DNS Club website created with
                React.js
              </Typography>
              <Typography variant="body2" color="text.secondary">
                React.js, HTML/CSS
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.buttons}
                href="https://dnsclub.github.io/dnsWeb/"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.MuiCard}>
            <CardMedia
              sx={{ height: 140 }}
              title="Autofill PDF"
              image="/img/pdf.jpg" // Relative path from the public folder
              alt="PDF Logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                AutoFill PDF
              </Typography>
              <Typography variant="body3" color="text.primary">
                A Python program developed to automate onboarding contracts for
                NCI HR Department
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Python
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.MuiCard}>
            <CardMedia
              sx={{ height: 140 }}
              title="Weather App"
              image="/img/clouds.png" // Relative path from the public folder
              alt="Clouds"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Weather App
              </Typography>
              <Typography variant="body3" color="text.primary">
                An application that provides real-time updates on weather
                conditions on user-inputted cities
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Python, Json, Requests, Open-Weather API, Tkinter GUI
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.buttons}
                href="https://github.com/eunsongkoh/weather-app.py"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.MuiCard}>
            <CardMedia
              sx={{ height: 140 }}
              title="Password Manager"
              image="/img/password.png" // Relative path from the public folder
              alt="Password Lock"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Password Manager
              </Typography>
              <Typography variant="body3" color="text.primary">
                A Python application that stores a database of passwords
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Python, SQLite3, Tkinter, HashLib
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.buttons}
                href="https://github.com/eunsongkoh/passwordVault.py"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.MuiCard}>
            <CardMedia
              sx={{ height: 140 }}
              title="Kode with Klossy"
              image="/img/kwk.jpg" // Relative path from the public folder
              alt="KWK"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kode with Klossy Data Science Scholar
              </Typography>
              <Typography variant="body3" color="text.primary">
                Utilized Python and SQL to analyze global and national data on
                violence against women and provided insights into patterns and
                trends on a web application
              </Typography>
              <Typography variant="body2" color="text.secondary">
                SQL, Python, Google Data Studio
              </Typography>
            </CardContent>
          </Card>
        </div>
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
