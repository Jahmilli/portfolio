import styles from "./styles.module.css";

type SkillsCardProps = {
  imgPath: string;
  title: string;
  onClick: () => void;
};

export const SkillsCard = (props: SkillsCardProps) => {
  return (
    <div className={styles.skillsCardContainer}>
      <button onClick={props.onClick}>
        <img src={props.imgPath} draggable={false} />
        <p>{props.title}</p>
      </button>
    </div>
  );
};
