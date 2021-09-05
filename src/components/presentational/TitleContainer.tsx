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
      text: "Software Developer",
      style: styles.typeSoftwareDeveloper,
    },
    {
      text: "Software Designer",
      style: styles.typeSoftwareDesigner,
    },
    {
      text: "Leader",
      style: styles.typeLeader,
    },
  ];

  const [num, setNum] = useState(0);
  const [typingStyle, setTypingStyle] = useState(typeWriterStyles[1]);
  console.log("typing style", typingStyle);
  // const [typingStyle, setTypingStyle] = useState({
  //   style: styles.typeSoftwareDeveloper,
  //   text: "Software Developer",
  // });
  useInterval(() => {
    setNum((val) => val + 1);
    setTypingStyle(typeWriterStyles[num % typeWriterStyles.length]);
    console.log("val", num);
  }, 4000);

  return (
    <div className={styles.titleContainer}>
      <h1>Hello, my name is Sebastian Southern</h1>
      <div className={typingStyle.style}>
        {/* <div className={styles.typeSoftwareDeveloper}> */}
        {/* <div className={styles.loader}> */}
        <h2 className={styles.typewriter}>{typingStyle.text}</h2>
        {/* <h2 className={styles.typewriter}>Software Developer</h2> */}
      </div>

      <div style={{ display: "block", marginTop: "2rem" }}>
        <a
          href="/downloads/Sebastian_Southern_CV_26082021.pdf"
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
