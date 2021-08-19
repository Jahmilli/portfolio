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
    <div className={styles.twoSideContainer} style={{ borderRadius }}>
      <div className={styles.twoSideContainerTextLockup}>
        {props.leftSideContent}
      </div>
      <div className={styles.twoSideContainerImageLockup}>
        <img
          src={props.imageUrl}
          style={{
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
          }}
        />
      </div>
    </div>
  );
};
