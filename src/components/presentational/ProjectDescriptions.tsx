export const OptusPauseContent = () => {
  return (
    <div>
      <h2>Optus Pause</h2>
      <p>
        An Australian first product to pause internet access for both mobile and
        home network connections
      </p>
      <p>
        Worked as a full-stack developer on this product from the very start
        being involved in product design, solution design, development on the
        frontend and backend, to product launch.
      </p>
      <p>Key contributions to this project:</p>
      <ul>
        <li>
          <p>
            Setup the Nodejs application architecture including a Yeoman
            generator for setting up microservices
          </p>
        </li>
        <li>
          <p>
            Built 9 Node.js microservices following a test-driven development
            approach to achieve ~95% coverage on average
          </p>
        </li>
        <li>
          <p>
            Setup practices on managing Kubernetes configuration with kustomize
            enabling 1 press deployment for entire application infrastructure
          </p>
        </li>
        <li>
          <p>
            Setup an end-to-end backend testing framework to validate product
            functionality in minutes
          </p>
        </li>
        <li>
          <p>Setup build/deployment pipelines for backend applications</p>
        </li>
        <li>
          <p>
            Supported entire operations handover prior to taking the product to
            market including troubleshooting production issues, setting up
            dashboards, solution walk-throughs and more
          </p>
        </li>
        <li>
          <p>
            Worked on the initial proof of concept pitched to key business
            stakeholders displaying the benefits of building web applications
            into a native application through the use of a WebView which helped
            enable us to build this way into the My Optus Application
          </p>
        </li>
      </ul>
      <a
        href="https://www.optus.com.au/customer-extras/optus-pause"
        target="_blank"
      >
        Check it out!
      </a>
    </div>
  );
};

export const CallTranslateContent = () => {
  return (
    <div>
      <h2>Call Translate</h2>
      <p>
        A product built to reduce the language barrier between people by
        enabling real-time language translation in the native phone call
      </p>
      <p>
        Worked primarily on backend development on this project, as well as
        being more involved in solution design.
      </p>
      <p>Key contributions to this project:</p>
      <ul>
        <li>
          <p>
            Migrated applications from an Openshift Cluster to Rancher involving
            troubleshooting SIP/RTP traffic in phone calls as well as general
            network connectivity issues to ensure the core networking
            applications driving Call Translate would work
          </p>
        </li>
        <li>
          <p>
            Designed and built an application to help load balance RTP audio
            streams
          </p>
        </li>
        <li>
          <p>
            Worked on solution design to manage onboarding, configuration and
            offboarding of Call Translate for users
          </p>
        </li>
        <li>
          <p>
            Built a number of Node.js applications to support main product
            functionality following a test-driven development approach
          </p>
        </li>
        <li>
          <p>
            Mentored team members across the backend development of applications
            and test-driven development
          </p>
        </li>
      </ul>
      <a
        href="https://www.optus.com.au/customer-extras/call-translate-en"
        target="_blank"
      >
        Check it out!
      </a>
    </div>
  );
};

export const AiBasketballContent = () => {
  return (
    <div>
      <h2>AI Basketball Application</h2>
      <p>
        The capstone project I worked on in 2020 with two other friends. This
        project was an attempt at building a mobile application that would
        record a basketball player’s freethrow, analyse the keypoints detected
        within the video and process them against a series of algorithms to
        provide feedback on how to improve.
      </p>
      <p>Key contributions to this project:</p>
      <ul>
        <li>
          <p>Built the designs for the mobile application in Figma</p>
        </li>
        <li>
          <p>
            Built the end-to-end solution design for video upload and processing
          </p>
        </li>
        <li>
          <p>
            Built the mobile application in React Native with key features
            including: authentication support using Firebase, user management,
            video upload, viewing of videos, as well as the ability to view
            results for each upload
          </p>
        </li>
        <li>
          <p>
            Built the Nodejs API to support video upload, user creation and
            processing videos
          </p>
        </li>
        <li>
          <p>
            Setup all the infrastructure to host the project including S3 for
            videos, EC2 for the microservices, RDS for postgres hosting and
            Firebase for authentication
          </p>
        </li>
        <li>
          <p>
            Provided support to team members when they were building the two
            other backend services
          </p>
        </li>
      </ul>
      <a href={`${process.env.PUBLIC_URL}/downloads/Capstone_02-11-2020.pdf`}>
        Download Report
      </a>
    </div>
  );
};

export const SESHealthContent = () => {
  return (
    <div>
      <h2>Health Application</h2>
      <p>
        An Android application developed to connect patients and doctors
        together. Patients would be able to upload data around their symptons,
        as well as other relevant data. They could also record their heart rate,
        upload an 8 second video and locate nearby medical facilities on a map.
      </p>
      <p>Key contributions to this project:</p>
      <ul>
        <li>
          <p>
            Setup the integration with firebase and the Android application to
            support basic authentication as well as login with Google, email
            verification, real-time display of data, as well as uploading of
            videos.
          </p>
        </li>
        <li>
          <p>
            Built the login, signup, user-registration, forgot-password, viewing
            doctor profile, linking patients to doctors and upload of data from
            a patient to their registered doctor
          </p>
        </li>
        <li>
          <p>
            Supported team members across development of features and
            integration into the primary code base
          </p>
        </li>
      </ul>
      <a
        href="https://drive.google.com/file/d/1d-nYVFdszAHzD1DgwfYN36kMNdtgRLDc/view?usp=sharing"
        target="_blank"
      >
        Check out a demo video
      </a>
      <a href="https://github.com/Jahmilli/SESHealth" target="_blank">
        Check the code
      </a>
    </div>
  );
};

export const VoluntimeContent = () => {
  return (
    <div>
      <h2>Voluntime</h2>
      <p>
        An Android application developed to connect people that want to
        volunteer for charity events. Some of the main features this included
        were the ability for creation of volunteer and charity profiles.
        Charities could create events, manage volunteers for an event as well as
        rate volunteers. Volunteers could register for events, view events on a
        map as well as had a history of the events they attended and what they
        were rated for the event.
      </p>
      <p>Key contributions to this project:</p>
      <ul>
        <li>
          <p>
            Setup the integration with firebase and the Android application to
            support basic authentication as well as login with Google, email
            verification, as well as real-time display of data
          </p>
        </li>
        <li>
          <p>
            Built the login, signup, user-registration, forgot-password,
            creation/editing/viewing of charity events, viewing of volunteer
            profiles and the rating system. I also built the capabilitity for
            emailing volunteers when they had been accepted to an event, removed
            from an event, when an event was about to start or the event had
            been cancelled.
          </p>
        </li>
        <li>
          <p>
            Lead the design and development of this project supporting team
            members who were new to collaborative software development
          </p>
        </li>
      </ul>
      <a
        href="https://drive.google.com/file/d/1r94dcD5NC3Tifmc8Ehn2U02WODtrmXI5/view?usp=sharing"
        target="_blank"
      >
        Check out a demo video
      </a>
      <a href="https://github.com/Jahmilli/Voluntime" target="_blank">
        Check the code
      </a>
    </div>
  );
};
