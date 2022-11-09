import React from "react"
import writtyImage from "./assets/projectImg/writty.jpg"
import fitness from "./assets/projectImg/fitness.png"
import flexor from "./assets/projectImg/flexor.png"
import githubBattle from "./assets/projectImg/githubBattle.png"
import quiz from "./assets/projectImg/quiz.png"
import shoppingCart from "./assets/projectImg/shoppingCart.png"
import tictac from "./assets/projectImg/tictac.png"
import timer from "./assets/projectImg/timer.png"

export const techStack = [

  // { name: "C Language", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" },

  { name: "TypeScript", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Express", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" },

  { name: "NodeJS", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Postman", link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },

  // { name: "Dart", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  // { name: "Flutter", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" },
  // { name: "React Native", link: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" },
  { name: "HTML", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
  { name: "Bootstrap", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { name: "Redux", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
  { name: "Sass", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" },

  { name: "Javascript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "React", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "MySQl", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" },
  { name: "Mongo DB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
  { name: "Heroku", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" },
  // { name: "Azure", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain.svg" },
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
  // { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
  // { name: "Firebase", link: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },

  // { name: "Bash", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  // { name: "Vim", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" },

  { name: "VS Code", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  // {name: "", link: "https://repository-images.githubusercontent.com/59065830/b62be480-45d2-11ea-9989-803db0f9c44d"}
]


export const contactLinks = [
  // { name: '', url: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png', link: 'https://stackoverflow.com/users/11788531/aakash-sharma' },
{ name: 'Twitter', url: 'https://img.icons8.com/doodle/40/000000/twitter', link: 'https://twitter.com/UpendraRajput_' },
{ name: 'Github', url: 'https://img.icons8.com/doodle/40/000000/github--v1.png', link :'https://github.com/upendraRajput9'},
{ name: 'LinkedIn', url: 'https://img.icons8.com/doodle/40/000000/linkedin--v2.png', link: 'https://www.linkedin.com/in/upendra-rajput-a8990921b/'}
]



export const serviceData = [
  {
    name: 'Web Application Development',
    desc: 'Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design user interface design  authoring, including standardised code and proprietary software user experience design and search engine',
    img: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png"
  },
  {
    name: 'Mobile Application Development',
    desc: `We provide a range of mobile application development services
    including custom mobile development on Android platforms, building
    cross-platform apps, designing user experience and integrating
    novel mobile interfaces such as chat and voice`,
    img: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png"
  },

  {
    name: 'Backend Development',
    desc: `Graphic design is a craft where professionals create visual
    content to communicate messages. By applying visual hierarchy and
    page layout techniques, designers use typography and pictures to
    meet users' specific needs and focus on the logic of displaying
    elements in interactive designs, to optimize the user experience.`,
    img: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png"
  },


]
export const projects=[
  
    {
      name: 'Writty App',
      desc:"REACT| REACT-ROUTER-DOM | JSX | VERCEL",
      image: 'https://www.loom.com/embed/c9846f57955c48fe80401a934fd6eab5',
     live: 'https://blog-app-repo.vercel.app/',
      TechStack: ['ReactJS', 'ExpressJS', 'MongoDB',"API"],
      hostedOn: 'On Vercel',
    },
    // {
    //   name: 'Shopify Clone',
    //   image: 'https://www.loom.com/embed/c8a6a542c1824667b7608f24e97edeeb',
    //  live: 'https://oshingate-shoopifai.netlify.app',
    //   TechStack: ['ReactJS', 'ExpressJS', 'MongoDB', 'Bulma CSS'],
    //   hostedOn: 'On Netlify',
    // },
    {
      name: 'E-Commerse Site',
      desc:"REACT| REACT-ROUTER-DOM | JSX | VERCEL",
      image: 'https://www.loom.com/embed/b07e2d4ebfd34489877f7b8220de789f',
     live: 'https://shopping-cart-zeta-gules.vercel.app/',
      TechStack: ['ReactJS', 'HTML', 'SCSS'],
      hostedOn: 'On Vercel',
    },
    {
      name: 'Tic Tac Teo',
      desc:"REACT| REACT-ROUTER-DOM | JSX | VERCEL",
      image: 'https://www.loom.com/embed/784ec24a46454d028d4526fcd406031e',
     live: 'https://tic-tac-toe-ashy-alpha.vercel.app/',
      TechStack: ['ReactJS', 'Redux', 'HTML', 'SCSS'],
      hostedOn: 'On Vercel',
    },
    {
      name: 'Activity Tracker',
      desc:"REACT| REACT-ROUTER-DOM | JSX | VERCEL",
      image: 'https://www.loom.com/embed/0fa7a9650084492996ba7847fca7f3a1',
     live: 'https://monthly-activity-tracker-nu.vercel.app/',
      TechStack: ['ReactJS', 'HTML', 'SCSS'],
      hostedOn: 'On Vercel',
    },
    {
      name: 'Fitness Club',
      desc:"JAVASCRIPT| HTML  | GITHUB",
      image: 'https://www.loom.com/embed/dc4190bd75c84dda9a281a819007bc6a',
     live: 'https://upendrarajput9.github.io/Advance-CSS-final-checkpoint/',
      TechStack: ['JavaScript', 'HTML', 'SCSS'],
      hostedOn: 'On GitHub',
    },
    // {
    //   name: 'Event Manager',
    //   image: 'https://www.loom.com/embed/268dbc269d4244cd8325945d5b534dbb',
    //  live: 'https://oshingate-event-manager.herokuapp.com/',
    //   TechStack: ['ExpressJS', 'EJS', 'SCSS'],
    //   hostedOn: 'On Heroku',
    // },
    // {
    //   name: 'Podcast App',
    //   image: 'https://www.loom.com/embed/0e1249261b294408bfb2e93dd33cdc96',
    //  live: 'https://oshingate-event-manager.herokuapp.com/',
    //   TechStack: ['ExpressJS', 'EJS', 'SCSS'],
    //   hostedOn: 'On Heroku',
    // },
    {
      name: 'Quiz App',
      desc:"REACT| REACT-ROUTER-DOM | JSX | VERCEL",
      image: 'https://www.loom.com/embed/dc45dec9db1541f0a6ac04053e98a4d5',
     live: 'https://quiz-app-ten-kohl.vercel.app/',
      TechStack: ['ReactJS', 'HTML', 'SCSS'],
      hostedOn: 'On Vercel',
    },
    {
      name: 'Github Battle',
      desc:"REACT| REACT-ROUTER-DOM | JSX | VERCEL",
      image: 'https://www.loom.com/embed/3f5048831c484c86a89e743c0bb8f456',
     live: 'https://github-battle-ten.vercel.app/',
      TechStack: ['ReactJS', 'HTML', 'SCSS'],
      hostedOn: 'On Vercel',
    },
 
]
