import {
  AiBasketballContent,
  CallTranslateContent,
  OptusPauseContent,
  SESHealthContent,
  VoluntimeContent,
} from "../presentational/ProjectDescriptions";
import { TwoSideContainer } from "../presentational/TwoSideContainer";
import styles from "./styles.module.css";

export const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Projects</h2>
      <p>
        Some work that I am quite proud of and was lucky enough to work on with
        a variety of awesome people!
      </p>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard}>
          <TwoSideContainer
            leftSideContent={<OptusPauseContent />}
            imageUrl={`${process.env.PUBLIC_URL}/images/optus-pause.jpg`}
            borderRadius="2rem"
          />
        </div>
        <div className={styles.projectCard}>
          <TwoSideContainer
            leftSideContent={<CallTranslateContent />}
            imageUrl={`${process.env.PUBLIC_URL}/images/call-translate.jpg`}
            borderRadius="2rem"
            reversed
          />
        </div>
        <div className={styles.projectCard}>
          <TwoSideContainer
            leftSideContent={<AiBasketballContent />}
            imageUrl={`${process.env.PUBLIC_URL}/images/ai-basketball.png`}
            borderRadius="2rem"
          />
        </div>
        <div className={styles.projectCard}>
          <TwoSideContainer
            leftSideContent={<SESHealthContent />}
            imageUrl={`${process.env.PUBLIC_URL}/images/ses-health.png`}
            borderRadius="2rem"
            reversed
          />
        </div>
        <div className={styles.projectCard}>
          <TwoSideContainer
            leftSideContent={<VoluntimeContent />}
            imageUrl={`${process.env.PUBLIC_URL}/images/voluntime.png`}
            borderRadius="2rem"
          />
        </div>
      </div>
    </div>
  );
};
