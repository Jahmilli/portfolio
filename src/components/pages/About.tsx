import { Achievements } from "../presentational/Achievements";
import { Skills } from "../presentational/Skills";
import { TwoSideContainer } from "../presentational/TwoSideContainer";
import styles from "./styles.module.css";

const AboutLeftSideContent = () => {
  return (
    <div style={{ marginTop: "4rem", paddingRight: "1rem" }}>
      <h2>Getting to know me</h2>
      <p>
        I'm a software engineer who started learning software development in
        2016 when I started my Software Engineering Degree at the University of
        Technology Sydney (UTS). At the very beginning I was told by someone
        close to me that I shouldn't get into this field because I wouldn't be
        able to keep up with everyone, however, it only motivated me to work
        harder to build my skills and push me to where I am today.
      </p>
      <p>
        Throughout university I have been able to continually build both
        technical and social skills. During my time, I have supported two
        societies, one being the UTS Professional Aeronautics & Astronautics
        Society (PAAS) which I joined at it's very inception in 2017. I was the
        Vice President of this society for two years helping ideate and organise
        a variety of social, industry based and technical events to help foster
        interest and social interaction between students at UTS as well at UNSW
        and USYD with a common interest in space!
      </p>
      <p>
        During my time supporting PAAS I also assisted in helping out a Meetup
        known as OrbitOz run at a variety of locations including Fishburners,
        UTS, Atlassian, and even a rooftop bar in Adelaide during the 2017
        International Astronautical Congress.
      </p>
      <p>
        I also worked as a treasurer on the UTS Programmers' Society helping
        ensure the society ran smoothly throughout the 2018 helping organise a
        Hackathon, Programming Competition as well as programming workshops and
        other social events.
      </p>
      <h3>A brief overview of my work life</h3>
      <p>
        My career in software development started in 2018 as a DevOps
        Engineering intern through the NAB Industry Based Learning (IBL) program
        which I developed skills around the devops space focusing on automation,
        cloud computing and infrastructure. I then started shifting my focus
        from DevOps to full-stack web development mainly using React and
        building "microservices" in Java using Springboot. Throughout this
        period, the skills I picked up have been invaluable as it helped me
        understand the full scope of software development, infrastructure
        management, automation and operations. These skills are utilised in the
        work I do now where I work as a Product Engineer at Optus being involved
        in the system design, software development and operational support of
        the newest and most exciting products (in my opinion!).
      </p>
      <p>
        With all of this going on up until this year I was sustaining full-time
        work and a full-time study workload at university but have recently
        reduced the workload at university in order to stay sane... I should
        finish by 2022!
      </p>
      <p>
        If you'd like to learn more, checkout my{" "}
        <a
          href={`${process.env.PUBLIC_URL}/downloads/Sebastian_Southern_CV_26082021.pdf`}
          download
        >
          Resume
        </a>
      </p>
      <h3>What do I aim to achieve?</h3>
      <p>
        I want to make a difference in the world and fortunately enough I
        believe I can achieve this through what I practise every day. Although
        it's cheesy, it's quite important that I can keep this as a focus and so
        the work I do and continue to do needs to be meaningful and interesting.
      </p>
      <p>
        Another important thing I want to keep maintaining is supporting those I
        work with to ensure I'm always being able to help them keep moving
        fowards and improving. Whether this be through providing thoughts and
        opinions on topics, acting as a "rubber duck" to walk through problems,
        pair-programming or anything, I always want to make sure I'm there to
        help whilst also staying afloat with the work I am responsible for.
      </p>
      <h3>What is next?</h3>
      <p>
        Although I still need to continue developing my skills in devops, full
        stack development and system design, the next thing I'm looking at
        developing my skills in, is around cybersecurity so hopefully next time
        you checkout this page, i'll have something exciting to tell you about!
      </p>
      <p>
        Overall, I'm incredibly proud of what I have been able to achieve and
        looking forward to making a bigger difference in whatever I choose to do
        in the future.
      </p>
    </div>
  );
};

export const About = () => {
  return (
    <div className={styles.container}>
      <TwoSideContainer
        leftSideContent={<AboutLeftSideContent />}
        imageUrl={`${process.env.PUBLIC_URL}/images/seb.jpg`}
      />
      <Achievements />
      <Skills />
      {/* <Other /> */}
      {/* <Testimonials /> */}
    </div>
  );
};
