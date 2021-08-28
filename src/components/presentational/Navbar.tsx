import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link to="/">
        <p>Sebastian Southern</p>
      </Link>
      <ul>
        <li>
          <Link to="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link to="/articles">
            <a>Articles</a>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <a>Contact me</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
