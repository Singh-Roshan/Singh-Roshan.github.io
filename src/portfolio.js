
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Roshan Singh",
  title: "Hi all, I'm Roshan",
  subTitle: emoji("A passionate Data-Science professional 🚀 with 5+ year’s experience in solving business challenges using ML & Big data."),
  resumeLink: "https://drive.google.com/file/d/1zRg08oR6Ur-n_TBvo11GwQxG8-PAETGz/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/singh-roshan",
  linkedin: "https://www.linkedin.com/in/rs03/",
  gmail: "roshan.singh@rutgers.edu",
  facebook: "https://www.facebook.com/singhroshan03"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY DATA SCIENCE PROFESSIONAL WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Extracting valuable key insights by statistic analytical models, leading to an increase in a business generation along with customer satisfaction."),
    emoji("⚡ Proficient in deploying complex Deep Learning / AI and Statistical modeling algorithms/techniques")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },

    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "word",
      fontAwesomeClassname: "fas fa-file-word"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "salesforce",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
      skillName: "salesforce",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning",  //Insert stack or technology you have experience in
      progressPercentage: "95%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "95%"
    },
    {
      Stack: "Artificial Intelligence",
      progressPercentage: "95%"
    },
    {
      Stack: "Tableau",
      progressPercentage: "90%"
    },
    {
      Stack: "Power BI",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Structures",
      progressPercentage: "90%"
    },
    {
      Stack: "SAP ABAP",
      progressPercentage: "90%"
    },
    {
      Stack: "Big Data",
      progressPercentage: "90%"
    },
    {
      Stack: "Hadoop",
      progressPercentage: "90%"
    },
    {
      Stack: "Apache Spark",
      progressPercentage: "90%"
    },
    {
      Stack: "C/C++",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ]
};

// EducationSection

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  title: "Education",
  schools: [
    {
      schoolName: "Rutgers University",
      logo: require("./assets/images/rutgers.png"),
      degree: "Master of Science in Information Technology & Analytics",
      duration: "August 2018 - December 2019",
      desc: "Ranked top 10% in the program. Participated in the research of data science and published 2 papers."
    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/somaiya.png"),
      degree: "Bachelor of Science in Electronics & Telecommunications",
      duration: "August 2012 - June 2016",
      desc: "Took courses about Software Engineering, Data Science, Statistics, and Database. Published 1 paper.",
    }
  ]
}

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",  
      company: "Fractal",
      companylogo: require("./assets/images/Fractal.png"),
      date: "Mar 2020 – Present",
      descBullets: [
        "Built a generalized template for Insurance domain to do data cleaning, pre-processing, feature engineering, model building and validation reducing the project deployment time by 60%",
        "Accomplished Random Forest and Light GBM modelling to identify customer's purchase behavior in various markets increasing the business revenue by 30%"
      ]
    },
    {
      role: "Research Assistant",   
      company: "Rutgers University",
      companylogo: require("./assets/images/rutgers.png"),
      date: "Dec 2018 – Feb 2020",
      descBullets: [
        "Manipulated high-volume, high-dimensional data, identified patterns, anomalies, trends removing 20% redundancy",
        "Performed feature engineering, built key predictive models and analytics products across 3 verticals in the organization",
        "Completed predictive models using Deep Learning algorithms & optimized campaigns with 95% accuracy"
      ]
    },
    {
      role: "A.D. Analyst",  
      company: "Accenture",
      companylogo: require("./assets/images/accenture.png"),
      date: "Aug 2016 – Jun 2018",
      descBullets: [
        "Developed incident report generation tool using ServiceNow Web Services, which reduced manual work, resulted in fewer errors and resulted in 70% less time in generating the report",
        "Measured KPIs to gain insights on customer complaints enabling issues resolution & reduction of complaints by 12%"
      ]
    },
    {
      role: "Data Scientist",  
      company: "Tech Data Solutions",
      companylogo: require("./assets/images/techdata.jpg"),
      date: "Aug 2014 – Jul 2016",
      descBullets: [
        "Maintained SQL scripts to create and populate tables in data warehouse for daily reporting across 6 departments",
        "Developed ETL processes for data sources used in production reporting for marketing/operations teams of 5 projects",
        "Designed and automated data quality checks, helping proactive issue monitoring and resolution. Reducing Application downtime instances by 50%",
        "Developed, automated daily reports, iteratively created, solving for analytical needs"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "singh-roshan", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/UN.jpg"),
      link: "https://www.un.org/en/"
    },
    {
      image: require("./assets/images/york.png"),
      link: "http://www.ipclcorp.com/"
    },
    {
      image: require("./assets/images/nyc311.jpg"),
      link: "https://www1.nyc.gov/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Harvard- Data Science: Machine Learning",
      image: require("./assets/images/harvard.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/180V9zh19V12J5nyY-b2b8lWrvDQ6NZ2P/view" }
      ]
    },
    {
      title: "Google Analytics- Advanced",
      image: require("./assets/images/google.jpg"),
      footerLink: [
        { name: "Certification", url: "https://analytics.google.com/analytics/academy/certificate/chCEWBqDT96Q5J168pfZUg" }
      ]
    },
    {
      title: "Artificial Intelligence Foundations: Machine Learning",
      image: require("./assets/images/linkedin.png"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1zONATDbZ0Z2Sc9C2YCPI188U8DSfM83h/view" }
      ]
    },
    {
      title: "Best Project in KJSIEIT-INTECH-2016",
      subtitle: "Project: Diagnosis of Breast Abnormality using Noninvasive Digital Infrared Thermal Imaging.",
      image: require("./assets/images/somaiya.png"),
      footerLink: [
      ]
    },
    {
      title: "AGNI",
      subtitle: "Active Member-Action for Good Governance and Networking in India (AGNI)-NGO for welfare of Mumbai city.",
      image: require("./assets/images/agni.jpg"),
      footerLink: []
    },
    {
      title: "Member-Beta Gamma Sigma",
      subtitle: "Ranked top 10% in the program. Beta Gamma Sigma honoree and a lifetime member of elite network of high achievers, business leaders and world changers, for being recognized as one of the most outstanding business students at Rutgers University.",
      image: require("./assets/images/BGS.jpg"),
      footerLink: [
        
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://drive.google.com/file/d/1CV6JcXVKkMdmLW39iK90jZsa_7aaAIAf/view?usp=sharing",
      title: "Developing Machine Learning Models to Automate News Classification",
      description: "Reading news articles is essential and critical for understanding the local, nation-wide, and global emerging and developing events, as well as understanding the citizens’ demands and critics’ opinions. However, with the explosion of social media as news channels, citizens"
    },
    {
      url: "https://drive.google.com/file/d/1MuUOiZYeIZSmgs0pUtrhvdWkvY75vonh/view?usp=sharing",
      title: "Visual Analytics toward Evidence-based Global Migration Policy Making and Governance",
      description: "Migrations and refugees are a global phenomenon. People migrate from their country or region for many reasons, including to seek out economic opportunities, or to escape from atrocities or disasters. These migrants and refugees face various challenges at the destination countries due to language barriers, cultural differences, and social acceptance."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// //Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+646-316-6849",
  email_address: "roshan.singh@rutgers.edu"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, educationInfo, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, contactInfo , twitterDetails};
