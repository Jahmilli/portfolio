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
    work: (
      <>
        <p>
          Have built a large array of different services ranging from RESTful
          applications, gRPC applications, streaming applications, applications
          communicating with SMTP servers, Redis, Kafka, Mongo, Postgres and
          more!
        </p>
        <p>Some of the more exciting application include:</p>
        <ul>
          <li>
            A voice translation service that streamed in raw audio via gRPC, and
            streamed it to Microsoft Speech-To-Speech as a proof of concept
          </li>
          <li>
            An audio recording application that streamed in raw audio via gRPC
            into AWS S3 and pushed events to Kafka after completion
          </li>
          <li>
            Designed and developed a load balancing application for a RTP
            processing application to enable horizontal scaling of it to support
            1000s of concurrent phone calls distributed among the applications
          </li>
          <li>
            Designed and developed an application that could stream in music
            into a phone call in real-time that supported capability to change
            music, change volume, start and stop
          </li>
          <li>
            Setup a local system integration testing (SIT) framework that
            enabled behaviour-driven development to test product functionality
            end-to-end that would spin up all applications as containers using
            docker-compose, spin up http servers for any 3rd party service
            endpoints and then run through test scenarios. This allowed for
            testing in detail what data was in the Kafka messages, what data was
            in request body, headers etc to the servers as well as validating
            what data would be written to Postgres
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: ReactIcon,
    title: "React",
    work: (
      <>
        <p>
          Experience building accessible, responsive, well-tested client-side
          web applications using both styled-components and css-modules
        </p>
        <p>Some of the work I have done includes:</p>
        <ul>
          <li>
            Lead the front-end development for Voice Notes; a React application
            that provides real time voice transcription and call summarisation
            for call center agents
          </li>
          <li>
            Built a React Native application to support uploading videos of
            someone shooting a free-throw in basketball that would be processed
            against and show feedback of how to improve their shot (Checkout
            projects)
          </li>
          <li>
            Started as the initial developer and built a number of components on
            Optus Pause prior to the team growing
          </li>
          <li>
            Have built a real-time Trello board as part of a greater Microsoft
            Teams replication project in Software Engineering Studio 2B in 2020
          </li>
          <li>
            Experience with React Testing Library to test components in React.
            This is one of my favourite testing frameworks and I talked about it
            at a brown-bag session at Optus in 2020 as well as wrote an article
            about it (Checkout the 'Articles' section)
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: TypescriptIcon,
    title: "Typescript",
    work: (
      <>
        <p>
          See Node.js and React, a majority of all of that work was in
          Typescript!
        </p>
      </>
    ),
  },
  {
    icon: PythonIcon,
    title: "Python",
    work: (
      <>
        <p>
          Although I can build with Python, I haven't used it much and only
          where necessary or asked for, regardless, some of the work I have done
          includes:
        </p>
        <li>
          Running an 'Introduction to Programming with Python' workshop in 2019
          providing the opportunity for students across all faculties at UTS to
          learn the fundamentals of programming
        </li>
        <li>
          Built a testing framework for a startup as part of the Software
          Development Studio utilising 'Behave', a Python framework to enable
          Behaviour Driven Development styled testing of their product
          interacting with Microsoft Azure. This further incorporated Allure
          reporting so they could have test scenarios executed that would
          interact with various Azure services, make assertions to validate
          product functionality and provide nicely formatted testing results.
        </li>
      </>
    ),
  },
  {
    icon: JavaIcon,
    title: "Java",
    work: (
      <>
        <p>
          Java was the first programming language I ever picked up at the start
          of my software engineering degree. Although I struggled with it early
          on I finally seemed to have gotten a grasp of it. I haven't touched it
          so much recently but I'm sure it wouldn't take long to get back into!
        </p>
        <p>Some of the work I have done with it includes:</p>
        <ul>
          <li>
            Helping build and test (using JUnit) a Springboot microservice
            responsible for authentication
          </li>
          <li>
            Helped build a Springboot microservice utilising WebFlux to provide
            user search functionality
          </li>
          <li>
            Some work on a code removal project for a large monolithic Websphere
            application
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: BashIcon,
    title: "Bash",
    work: (
      <>
        <p>
          Coming from a time in 2018 when I had never wanted to touch a command
          line to now, my interest in the Linux Command Line Interface has grown
          massively (it's just so useful!)
        </p>
        <p>
          Aside from utilising the CLI in everything I do, some slightly larger
          than normal scripts I have worked on have included the following:
        </p>
        <p>Some of the work I have done with it includes:</p>
        <ul>
          <li>
            Building a code migration script to clone repositories from Stash,
            update references in files to a new repository, make changes to a
            Jenkinsfile and push the repository to Gitlab
          </li>
          <li>
            Building a script to support exporting the JSON from Grafana
            dashboards based on an id, create a new file for it in a monorepo if
            it didn't already exist or update the existing dashboard if it did
          </li>
          <li>
            Creating a file with a set of useful aliases and functions to speed
            up development including functions to help speed up using Git,
            testing, spinning up commonly used Docker containers including
            Redis, Postgres, Kafka and Minio
          </li>
          <li>
            Built a set of scripts to support generating Kubernetes YAML
            configuration for over 20 applications utilising both Kustomize and
            EnvSubst to provide configuration for the entire infrastructure
            among our environments (non-prod, performance-testing, prod) that
            could easily be versioned in Git
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: DockerIcon,
    title: "Docker",
    work: (
      <>
        <p>
          Docker is something I've been using daily in the work I've been doing
          for 2 years now
        </p>
      </>
    ),
  },
  {
    icon: OpenshiftIcon,
    title: "Openshift",
    work: (
      <>
        <p>
          Openshift was the first platform that I was properly introduced into
          Kubernetes with and have enjoyed building on it ever since.
        </p>
        <p>Some of the work I have done with it includes:</p>
        <ul>
          <li>
            Supporting the onboarding of a team onto it who didn't have much
            experience with containers or Kubernetes before (Checkout
            'Collaboration' below to see more info on this)
          </li>
          <li>
            Experience setting up operators onto the Openshift platform
            including Strimzi, Redhat Enterprise and CrunchyDb
          </li>
          <li>
            Setup practices on managing kubernetes configuration with kustomize
            enabling 1 press deployment for entire application infrastructure
          </li>
          <li>
            Basic operation management of Openshift clusters including patching
            nodes, troubleshooting applications experiencing issues as a result
            of platform instability and more
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: KafkaIcon,
    title: "Kafka",
    work: (
      <>
        <p>
          Have some basic experience with Kafka across the design, development
          and operational aspects
        </p>
        <p>Some of the work I have done with it includes:</p>
        <ul>
          <li>Have setup Kafka using the Strimi operator in Openshift</li>
          <li>
            Event design for a number of different projects including Optus
            Pause, Call Translate and more
          </li>
          <li>
            Setup the integration with NodeJs applications with Kafka using
            KafkaJs
          </li>
          <li>
            Setup easy to use abstraction in Nodejs to manage encoding/decoding
            Protobuf messages prior to sending to Kafka and when consuming from
            Kafka
          </li>
          <li>
            Have spoken at a brown-bag session on the basics of Kafka at Optus
            to teach the benefits of Kafka and inspire other engineers to pick
            it up in their projects
          </li>
          <li>
            Using it in production and at scale for the projects i'm currently
            building on at Optus
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: PostgresIcon,
    title: "Postgres",
    work: (
      <>
        <p>
          Have experience with using Postgres over the years understanding the
          fundamentals on database design and querying.
        </p>
        <p>Some of the work I have done with it includes:</p>
        <ul>
          <li>
            Have setup the integration with NodeJs applications and Postgres
            using TypeOrm as well as the Pg package
          </li>
          <li>
            Setup 'Squitch' for database change management to programmatically
            deploy changes to our database in production including building out
            the tables in Postgres for Optus Pause and Call Translate. This
            supported deployment scripts, rollback scripts as well as
            verification scripts to ensure tables were properly created
          </li>
          <li>
            Worked on building out the table design for multiple projects at
            Optus using Draw.io to establish entities and their relationships
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: RedisIcon,
    title: "Redis",
    work: (
      <>
        <p>Experience building applications around Redis in production</p>
        <p>Some of the work I have done with it includes:</p>
        <ul>
          <li>
            Setup integration of NodeJs applications with Redis using the
            IORedis package
          </li>
          <li>Experience using the pub/sub model from Redis</li>
        </ul>
      </>
    ),
  },
  {
    icon: AWSIcon,
    title: "AWS",
    work: (
      <>
        <p>
          AWS was the first cloud I was properly introduced to and i'm extremely
          fond of. I've got experience with a variety of services on it.
        </p>
        <p>Some of the work I have done with it includes:</p>
        <ul>
          <li>Setting up an ECS cluster using Terraform</li>
          <li>
            Built a deployment strategy in Jenkins with Ansible for Springboot
            applications that utilised EC2 to host the applications, Autoscaling
            Groups, Route53 and more to enable day time deployments of the
            microservices at MLC
          </li>
          <li>
            Experience troubleshooting applications in AWS making use of
            CloudWatch and CloudTrail to assist in identifying potential reasons
            for application problems in environments across non-production and
            production at MLC
          </li>
          <li>
            Worked with EC2, S3, RDS, ECS, Cloudfront, Lambda, IAM, EFS, KMS,
            Route53 all using Terraform for a variety of projects
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: FirebaseIcon,
    title: "Firebase",
    work: (
      <>
        <p>
          I've used Firebase across a variety of projects at university mainly
          due to it's incredible ease of use
        </p>
        <p>Some of the work I have done with it includes:</p>
        <ul>
          <li>
            Setting up authentication (including 'Google Auth') for a variety of
            Android projects making use of the Firebase SDK and Firebase
            Authentication
          </li>
          <li>
            Setup emailing in Nodejs that were triggered from changes in the
            Firebase Realtime Database through the use of Firebase's Cloud
            Functions
          </li>
          <li>
            Setup uploading of videos into Firebase Cloud Storage for a Doctor
            Patient application (See 'Projects')
          </li>
          <li>
            Worked on the database model and integrated multiple Android
            applications with Firebase Realtime Database
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: JenkinsIcon,
    title: "Jenkins",
    work: (
      <>
        <p>
          Have quite a bit of experience with Jenkins in setting up build and
          deployment pipelines. Although I've liked using it, I believe there's
          other tools that are easier to use (some which I have experience with
          including Gitlab, Git Actions, TravisCI, TeamCity, Azure Pipelines)
        </p>
        <p>Some of the work I have done with it includes:</p>
        <ul>
          <li>
            Improved existing CI/CD for AEM applications and chaining the build
            and deployment processes enabling automatic deployment of these
            applications into non-production environments
          </li>
          <li>
            Improved an existing microservice deployment job in Jenkins. Through
            making use of stages and utilising a canary deployment method I
            enabled day time releases of our microservices
          </li>
          <li>
            Extended existing microservice deployment job in non-production.
            Through making use of blue green deployments, I improved the
            consistency and reduced time of deployment from ~10mins to ~3mins as
            well as enabled automatic deletion of redundant stacks being
            leftover to overall enhance developer productivity
          </li>
          <li>
            Setup test report generation using Allure for a number of NodeJs and
            Rust applications
          </li>
          <li>
            Setup build and deployment (into non-production) pipelines for
            NodeJs applications that were built as part of Optus Pause and Call
            Translate
          </li>
        </ul>
      </>
    ),
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
