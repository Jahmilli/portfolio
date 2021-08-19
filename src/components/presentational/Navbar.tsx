import { Link } from "wouter";
import styles from "./styles.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <p>Sebastian Southern</p>
      <ul>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/articles">
            <a>Articles</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact me</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
