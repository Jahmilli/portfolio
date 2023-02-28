import styles from "./styles.module.css";
import { TwoSideContainer } from "./TwoSideContainer";

const AboutLeftSideContent = () => {
  return (
    <div>
      <h1>Professional Aeronautics & Astronautics Society</h1>
      <p>Whats next for me?</p>
    </div>
  );
};

export const Other = () => {
  return (
    <div className={styles.otherContainer}>
      <h1>Other</h1>
      <TwoSideContainer
        leftSideContent={<AboutLeftSideContent />}
        imageUrl={`${process.env.PUBLIC_URL}/images/paas.png`}
      />
    </div>
  );
};
