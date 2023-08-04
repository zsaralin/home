// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#000000, #090979, #1f024d ",
  firstName: "Saralin",
  middleName: "",
  lastName: "Zassman",
  message: "Welcome to my website! *virtual high five*",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/zsaralin",
    },
    // {
    //   image: "fa-rocket",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/saralin-zassman-66880b196/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Hi! I'm Saralin╰(°ᴥ°)",
  imageLink: require("../editable-stuff/saralin-zassman.png"),
  imageSize: 250,
  message: "I'm a master’s student at the University of Waterloo. I am supervised by " +
      "Dr. Daniel Vogel in the human-computer interaction lab, and Dr. " +
      "Craig Kaplan in the computer graphics lab." +
      " I'm passionate about human-computer interaction, all things computer science, and visual art! ",
  resume: require("../editable-stuff/Resume.pdf"),
  cv: require("../editable-stuff/CV.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Portfolio",
  gitHubUsername: "zsaralin", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ['infinite-scroll', 'meetingSMLR', 'chatbot', 'haiku-generator', 'DOM-tree-data',],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Projects",
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "˚✧₊⁎ Thanks for making it to the end! ⁎⁺˳✧༚",
  message: "Shoot me an email me if you have any questions",
  email: "zsaralin@gmail.com",
};

const experiences = {
  show: true,
  heading: "Art",
  data: [
    // {
    //   role: 'Software Engineer',// Here Add Company Name
    //   companylogo: require('../assets/img/dell.png'),
    //   date: 'June 2018 – Present',
    // },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: require('../assets/img/boeing.png'),
    //   date: 'May 2017 – May 2018',
    // },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
