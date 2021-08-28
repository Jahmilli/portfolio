import styles from "./styles.module.css";

type TwoSideContainerProps = {
  leftSideContent: React.ReactNode;
  imageUrl: string;
  borderRadius?: string;
  reversed?: boolean;
};

export const TwoSideContainer = (props: TwoSideContainerProps) => {
  const borderRadius = props.borderRadius ?? "0";

  return (
    <div
      className={
        props.reversed
          ? styles.twoSideContainerReversed
          : styles.twoSideContainer
      }
      style={{ borderRadius }}
    >
      <div className={styles.twoSideContainerTextLockup}>
        {props.leftSideContent}
      </div>
      <div
        className={
          props.reversed
            ? styles.twoSideContainerImageLockupReversed
            : styles.twoSideContainerImageLockup
        }
      >
        <img
          src={props.imageUrl}
          draggable={false}
          style={{
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
          }}
        />
      </div>
    </div>
  );
};
