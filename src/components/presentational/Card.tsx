import styles from "./styles.module.css";

type CardProps = {
  title: string;
  description: string;
  url?: string;
};
export const Card = (props: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <p>{props.title}</p>
      <p>{props.description}</p>
      {props.url && <a href={props.url}>Check it out</a>}
    </div>
  );
};
