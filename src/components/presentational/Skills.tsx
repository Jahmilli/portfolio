import { useState } from "react";
import { technicalSkillsList } from "./data";
import { SkillsCard } from "./SkillsCard";
import styles from "./styles.module.css";

export const Skills = () => {
  const [currentSelectedSkillIndex, setCurrentSelectedSkillIndex] = useState(0);
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.midPageTitleLockup}>
        <h2>Technical Skills & Tools</h2>
        <p>
          Below is a list of recent languages/tools that I've used in work and
          side-projects. Click on them for some brief details of what I've done
          with a particular tool!
        </p>
      </div>
      <div className={styles.technicalSkillsContainer}>
        <div className={styles.techToolsContainer}>
          {technicalSkillsList.map((skill, index) => (
            <SkillsCard
              key={index}
              imgPath={skill.icon}
              title={skill.title}
              onClick={() => setCurrentSelectedSkillIndex(index)}
            />
          ))}
        </div>
        <div className={styles.techToolsDescription}>
          <div className={styles.techToolsDescriptionTitleLockup}>
            <img src={technicalSkillsList[currentSelectedSkillIndex].icon} />
            <h3>{technicalSkillsList[currentSelectedSkillIndex].title}</h3>
          </div>
          {technicalSkillsList[currentSelectedSkillIndex].work}
        </div>
      </div>
      <div className={styles.softSkillsContainer}>
        <h2>Transferable Skills</h2>
        <div className={styles.softSkillsGrid}>
          <div>
            <h3>Communication</h3>
            <ul>
              <li>
                <p>
                  Have done a few talks on different topics that i'm extremely
                  interested in at internal meetups and brown-bags, including
                  the including the following:
                </p>
                <ul>
                  <li>Testing in React using React Testing Library</li>
                  <li>
                    End-to-end testing using the SIT testing framework I built
                  </li>
                  <li>An introduction to Kafka</li>
                </ul>
              </li>
              <li>
                <p>
                  Through the use of a proof-of-concept I built integrating a
                  React application into a Webview in both Android and iOS. I
                  was able to give a presentation on some of the pros/cons of
                  using a WebView to build web applications into a native mobile
                  application which helped enable this type of development with
                  Optus Pause and Call Translate.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Leadership</h3>
            <ul>
              <li>
                <p>
                  Starting as the only developer at the very beginning of Optus
                  Pause, I have been involved in the setup of technical
                  practices around the new platform we're building to enable
                  more efficient product development as part of company
                  strategic initiative known as the Living Network.
                </p>
              </li>
              <li>
                <p>
                  I have also been involved in helping grow the team around this
                  interviewing, onboarding and upskilling a variety of junior
                  and senior software engineers with different backgrounds in
                  development, devops and testing to grow the team to currently
                  &gt; 20 engineers.
                </p>
              </li>
              <li>
                <p>
                  Lead the backend development of Optus Pause and Call Translate
                  working with solution designers and maintaining consistent
                  communication with business stakeholders as well as team mates
                  working on the frontend to ensure alignment between the
                  frontend and the backend. I have also worked with operations
                  teams to ensure they were capable of supporting the platform
                  and products that had been built.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Collaboration</h3>
            <ul>
              <li>
                <p>
                  Worked with an external team who had no prior experience with
                  containers or Kubernetes but were interested in moving their
                  Springboot applications running on virtual machines to
                  containers being deployed onto Openshift; Redhat's Kubernetes
                  platform. Was able to successfully help them migrate their
                  applications providing documentation on everything we had
                  done, a framework to manage their application configuration as
                  well as built pipelines in Jenkins that built and deployed
                  their applications. This team has since built and deployed
                  entirely new products independently using the framework and
                  skills that were developed during this.
                </p>
              </li>
              <li>
                <p>
                  Worked with an external team to help migrate a series of
                  applications required to support Call Translate into a Rancher
                  cluster from Openshift. Through this was able to build a
                  strong relationship with the team to help bridge a gap between
                  the Digital domain and Networks domain building trust that we
                  can more effectively build applications across the domains
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
