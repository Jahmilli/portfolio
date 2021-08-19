import {
  AWSIcon,
  BashIcon,
  DockerIcon,
  FirebaseIcon,
  JavaIcon,
  JenkinsIcon,
  KafkaIcon,
  NodeJsIcon,
  OpenshiftIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  TypescriptIcon,
} from "../../svgs";

export const technicalSkillsList = [
  {
    icon: NodeJsIcon,
    title: "Node.js",
    work: [
      "Have built a large array of different services ranging from RESTful applications, gRPC applications, streaming applications, applications communicating with SMTP servers, Redis, Kafka, Mongo, Postgres and more!",
      "Some of the more exciting application include:",
      "• A voice translation service that streamed in raw audio via gRPC, and streamed it to Microsoft Speech-To-Speech as a proof of concept",
      "• An audio recording application that streamed in raw audio via gRPC into AWS S3 and pushed events to Kafka after completion",
      "• Designed and developed a load balancing application for a RTP processing application to enable horizontal scaling of it to support 1000s of concurrent phone calls distributed among the applications",
      "• Designed and developed an application that could stream in music into a phone call in real-time that supported capability to change music, change volume, start and stop",
      "• Setup a local system integration testing (SIT) framework that enabled behaviour-driven development to test product functionality end-to-end that would spin up all applications as containers using docker-compose, spin up http servers for any 3rd party service endpoints and then run through test scenarios. This allowed for testing in detail what data was in the Kafka messages, what data was in request body, headers etc to the servers as well as validating what data would be written to Postgres",
    ],
  },
  {
    icon: ReactIcon,
    title: "React",
    work: [
      "Experience building accessible, responsive, well-tested client-side web applications using both styled-components and css-modules.",
      "Some of the work I have done includes:",
      "• Lead the front-end development for Voice Notes; a React application that provides real time voice transcription and call summarisation for call center agents",
      "• Built a React Native application to support uploading videos of someone shooting a free-throw in basketball that would be processed against and show feedback of how to improve their shot (Checkout projects)",
      "• Started as the initial developer and built a number of components on Optus Pause prior to the team growing",
      "• Have built a real-time Trello board as part of a greater Microsoft Teams replication project in Software Engineering Studio 2B in 2020",
      "• Experience with React Testing Library to test components in React. This is one of my favourite testing frameworks and I talked about it at a brown-bag session at Optus in 2020 as well as wrote an article about it (Checkout the 'Articles' section)",
    ],
  },
  {
    icon: TypescriptIcon,
    title: "Typescript",
    work: [
      "See Node.js and React, a majority of all of that work was in Typescript!",
    ],
  },
  {
    icon: PythonIcon,
    title: "Python",
    work: [
      "Although I can build with Python, I haven't used it much and only where necessary or asked for, regardless, some of the work I have done includes:",
      "• Running an 'Introduction to Programming with Python' workshop in 2019 providing the opportunity for students across all faculties at UTS to learn the fundamentals of programming",
      "• Built a testing framework for a startup as part of the Software Development Studio utilising 'Behave', a Python framework to enable Behaviour Driven Development styled testing of their product interacting with Microsoft Azure. This further incorporated Allure reporting so they could have test scenarios executed that would interact with various Azure services, make assertions to validate product functionality and provide nicely formatted testing results.",
    ],
  },
  {
    icon: JavaIcon,
    title: "Java",
    work: [
      "Java was the first programming language I ever picked up at the start of my software engineering degree. Although I struggled with it early on I finally seemed to have gotten a grasp of it. I haven't touched it so much recently but I'm sure it wouldn't take long to get back into!",
      "Some of the work I have done with it includes:",
      "• Helping build and test (using JUnit) a Springboot microservice responsible for authentication",
      "• Helped build a Springboot microservice utilising WebFlux to provide user search functionality",
      "• Some work on a code removal project for a large monolithic Websphere application",
    ],
  },
  {
    icon: BashIcon,
    title: "Bash",
    work: [
      "Coming from a time in 2018 when I had never wanted to touch a command line to now, my interest in the Linux Command Line Interface has grown massively (it's just so useful!)",
      "Aside from utilsing the CLI in everything I do, some slightly larger than normal scripts I have worked on have included the following:",
      "• Building a code migration script to clone repositories from Stash, update references in files to a new repository, make changes to a Jenkinsfile and push the repository to Gitlab",
      "• Building a script to support exporting the JSON from Grafana dashboards based on an id, create a new file for it in a monorepo if it didn't already exist or update the existing dashboard if it did",
      "• Creating a file with a set of useful aliases and functions to speed up development including functions to help speed up using Git, testing, spinning up commonly used Docker containers including Redis, Postgres, Kafka and Minio",
      "• Built a set of scripts to support generating Kubernetes YAML configuration for over 20 applications utilising both Kustomize and EnvSubst to provide configuration for the entire infrastructure among our environments (non-prod, performance-testing, prod) that could easily be versioned in Git",
    ],
  },
  {
    icon: DockerIcon,
    title: "Docker",
    work: [
      "Docker is something I've been using daily in the work I've been doing for 2 years now",
    ],
  },
  {
    icon: OpenshiftIcon,
    title: "Openshift",
    work: ["Some work on Openshift"],
  },
  {
    icon: KafkaIcon,
    title: "Kafka",
    work: ["Some work on Kafka"],
  },
  {
    icon: PostgresIcon,
    title: "Postgres",
    work: ["Some work on Postgres"],
  },
  {
    icon: RedisIcon,
    title: "Redis",
    work: ["Some work on Redis"],
  },
  {
    icon: AWSIcon,
    title: "AWS",
    work: ["Some work on all the different services of AWS"],
  },
  {
    icon: FirebaseIcon,
    title: "Firebase",
    work: ["Some work on all the different services of Firebase"],
  },
  {
    icon: JenkinsIcon,
    title: "Jenkins",
    work: ["Some work on all the different services of Jenkins"],
  },
];
// <SkillsCard imgPath={BashIcon} title="Bash" />
// <SkillsCard imgPath={DockerIcon} title="Docker" />
// <SkillsCard imgPath={OpenshiftIcon} title="Openshift" />
// <SkillsCard imgPath={KafkaIcon} title="Kafka" />
// <SkillsCard imgPath={PostgresIcon} title="Postgres" />
// <SkillsCard imgPath={RedisIcon} title="Redis" />
// <SkillsCard imgPath={AWSIcon} title="AWS" />
// <SkillsCard imgPath={FirebaseIcon} title="Firebase" />
// <SkillsCard imgPath={JenkinsIcon} title="Jenkins" />
