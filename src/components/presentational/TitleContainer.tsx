import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const TitleContainer = () => {
  const typeWriterStyles = [
    {
      text: "Software Engineer",
      style: styles.typeSoftwareEngineer,
    },
    {
      text: "Solution Designer",
      style: styles.typeSolutionDesigner,
    },
    {
      text: "Leader",
      style: styles.typeLeader,
    },
  ];

  const [num, setNum] = useState(0);
  const [typingStyle, setTypingStyle] = useState(typeWriterStyles[0]);
  useInterval(() => {
    let currentNum = num + 1;
    setNum((val) => val + 1);
    setTypingStyle(typeWriterStyles[currentNum % typeWriterStyles.length]);
  }, 4000);

  return (
    <div className={styles.titleContainer}>
      <h1>Hello, my name is Sebastian Southern</h1>
      <div className={typingStyle.style}>
        <h2 className={styles.typewriter}>{typingStyle.text}</h2>
      </div>

      <div style={{ display: "block", marginTop: "2rem" }}>
        <a
          href={`${process.env.PUBLIC_URL}/downloads/Sebastian_Southern_CV_26082021.pdf`}
          download
          className={styles.primaryBtn}
        >
          Download Resume
        </a>
        <a
          className={styles.secondaryBtn}
          target="_blank"
          href="https://www.linkedin.com/in/sebastian-southern-50b544126/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};
