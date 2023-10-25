import { Link } from "react-router-dom";
import classes from "./navbar.module.css";

const navbar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <li>
          <Link to="/">Song</Link>
        </li>
        {/* <li>
          <Link to="/pages/#projects">Projects</Link>
        </li> */}
        {/* <li>
          <Link to="/#contact">Contact Me</Link>
        </li>
        <li>
          <Link to="/pages/#multimedia">Multimedia</Link>
        </li> */}
      </nav>
    </header>
  );
};

export default navbar;
