import { Link } from "react-scroll";
import classes from "./navbar.module.css";

const navbar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true} duration={1000}>
              Song
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="multimedia" spy={true} smooth={true} duration={1000}>
              Multimedia
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={1000}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navbar;
