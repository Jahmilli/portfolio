import styles from "./styles.module.css";

export const TitleContainer = () => {
  return (
    <div className={styles.titleContainer}>
      <h1>Hello, my name is Sebastian Southern</h1>
      <h2 className={styles.typewriter}>I am a Software Developer</h2>
      <h2>&lt;Insert cheesy statement here &#47;&gt;</h2>
      <button className={styles.primaryBtn}>Download Resume</button>
      <a
        className={styles.secondaryBtn}
        target="_blank"
        href="https://www.linkedin.com/in/sebastian-southern-50b544126/"
      >
        LinkedIn
      </a>
    </div>
  );
};
