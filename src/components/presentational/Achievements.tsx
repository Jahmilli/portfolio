import { Card } from "./Card";
import styles from "./styles.module.css";

export const Achievements = () => {
  return (
    <div className={styles.container}>
      <h2>Awards & Certifications</h2>
      <p>
        Below is a list of awards, accrediations and general accomplishments
      </p>
      <div className={styles.achievementsList}>
        <Card
          title="Akamai Web Performance Foundations"
          description="For successfully completing the Akamai Web Performance Solutions course which provided an overview of the basics of using Akamai and configuring it"
        />
        <Card
          title="AWS Certified Developer"
          description="For successfully passing the AWS Certified Developer - Associate exam covering a range of topics across a variety of AWS specific services"
        />
        <Card
          title="Dean's list 2020"
          description="For achieving a weighted average mark over 85 among the subjects I was studying"
        />
        <Card
          title="Dean's list 2019"
          description="For achieving a weighted average mark over 85 among the subjects I was studying"
        />
        <Card
          title="Wisetech Global Software Engineering Prize 2018"
          description="For placing second in the subject Software Architecture"
        />
        <Card
          title="Wisetech Global Software Development Studio Prize 2017"
          description="Awarded for the work my team and I did on a project in the Software Development Studio"
        />
      </div>
    </div>
  );
};
