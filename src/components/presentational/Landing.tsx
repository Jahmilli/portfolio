import { DownArrowIcon } from "../../svgs";
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
      <div className={styles.seeMoreContainer}>
        <button
          onClick={() =>
            alert(
              "Too lazy to make this work atm sorry... I'll get to it i swear"
            )
          }
        >
          <img src={DownArrowIcon} />
        </button>
      </div>
    </div>
  );
};
