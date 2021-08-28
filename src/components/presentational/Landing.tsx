import styles from "./styles.module.css";
import { TitleContainer } from "./TitleContainer";

export const Landing = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/beach-2.jpg)`,
      }}
      className={styles.landingContainer}
    >
      <TitleContainer />
    </div>
  );
};
