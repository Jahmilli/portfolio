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
      <div className={styles.midPageTitleLockup}>
        <h2>Work Projects</h2>
        <p>
          Some projects that I am extremely proud to say I worked on with so
          many awesome people!
        </p>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard} style={{ marginTop: "-4rem" }}>
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
      </div>
      <div className={styles.midPageTitleLockup}>
        <h2>University Projects</h2>
        <p>
          Some of the projects I've helped build and that I feel have been the
          most interesting to work on during my time at university!
        </p>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.projectCard} style={{ marginTop: "-4rem" }}>
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
