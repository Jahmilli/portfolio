import { FooterWaveIcon } from "../../svgs";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <div
      className={styles.footerContainer}
      style={{
        backgroundImage: `url(${FooterWaveIcon})`,
      }}
    >
      <div>
        <p>Sebastian Southern 2021</p>
      </div>
    </div>
  );
};
