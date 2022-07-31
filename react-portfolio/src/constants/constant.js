const data = {
  educationData: [
    {
      title: "AltCampus, Dharamashala",
      desc: "Bootcamp (MERN Stack)",
      date: "July 2021 - Dec 2021",
    },
    {
      title: "National  Institute Of Technology, Jamshedpur",
      desc: "B-TECH(Hons.). (Electrical and Electronics Engineering)",
      date: "Jun 2015 - May 2019",
    },
    {
      title: " SBM Inter college, Rath Hamirpur",
      desc: "12th (HSC)",
      date: "Jun 2012 - May 2014",
    },
  ],
  certifiacates: [
    {
      link: "https://www.linkedin.com/learning/smarter-cities-using-data-to-drive-urban-innovation",
      title: "Innovation",
      by: "linkedin-learning",
      credentialId: "UC-b1ac32a4-82f6-45b8-b64c-a9d905e49b82",
      expiary: "Oct 2020 - No Exp.",
    },
  ],
  experience: [
    {
      company: "Siemens Technology and Services Pvt. Ltd. Banglore",
      title: "Software Developer",
      period: "Jul 2019 - Dec 2021.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYFwsP6yjLYn7lEx0mACzpqxcK5d5jbCg2JnuAix0iRm7Tf5fDZmOmy53bIQsMPaloFQ&usqp=CAU",
    },
  ],
  techStack: [
    {
      basic: [
        {
          name: "HTML5",
          image:
            "https://d33wubrfki0l68.cloudfront.net/6025574ad65d47490faa40426923ab469fbbf212/8faa4/static/img/html5.webp",
        },
        {
          name: "CSS",
          image:
            "https://d33wubrfki0l68.cloudfront.net/85d95abba214bcf7e35827a5bc225245ea4fe757/dd7a4/static/img/css3.webp",
        },
        {
          name: "JavaScript",
          image:
            "https://d33wubrfki0l68.cloudfront.net/48fa03eb2a15ef7fd6d9b3193cab75f0a5d9e633/cd3a1/static/img/javascript.webp",
        },
        {
          name: "SCSS",
          image:
            "https://d33wubrfki0l68.cloudfront.net/eedee52655bdf4e3721b625af4c1611f948498dd/a6631/static/img/sass.webp",
        }
      ],
      frontEnd: [
        {
          name: "React",
          image:
            "https://d33wubrfki0l68.cloudfront.net/01c22ebd7a23c0f7a5f8e5c0c8a330f864072dc6/cd5c5/static/img/react.webp",
        },
        {
          name: "Redux",
          image:
            "data:image/png;base64,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",
        },
      ],
      backEnd: [
        {
          name: "NodeJS",
          image:
            "https://d33wubrfki0l68.cloudfront.net/c3544fe6c91781268c0d4bdd0b18f8b03d95d0ee/7bf21/static/img/nodejs.webp",
        },
        {
          name: "ExpressJS",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OBx4zthO57vyyxQtlTwIBusic1H8zYAbZA&usqp=CAU",
        },
        {
          name: "MongoDB",
          image:
            "data:image/png;base64,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",
        },
      ],
      buildTools: [
        {
          name: "VS Code",
          image:
            "https://pbs.twimg.com/profile_images/1410632439370641409/Pt-7RucE.jpg",
        },
        {
          name: "NPM",
          image:
            "https://d33wubrfki0l68.cloudfront.net/252ec52bc63b79df9967ff231797eef6c5e0ab8c/99fe8/static/img/npm-logo.webp",
        },
        {
          name: "Eclipse",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOlqoEvzVZ7vClJpOL4SL2wYMtMDQ3iBmAQ&usqp=CAU",
        },
        {
          name: "RTRT",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEESonjBQpx4mYJDHg11AGwguaY6Y7A03Z8g&usqp=CAU",
        },
        {
          name: "PowerShell",
          image:
            "data:image/png;base64,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",
        },
      ],
      other: [
        {
          name: "Github",
          image:
            "https://d33wubrfki0l68.cloudfront.net/332911b40f844e95266fcbc83b36fbd44a467d62/0617e/static/img/github.webp",
        },
        {
          name: "Heroku",
          image:
            "https://d33wubrfki0l68.cloudfront.net/e44bd765fb81b06475216da561e4a28295a54c52/5dc9d/static/img/heroku.webp",
        },
        {
          name: "Netlify",
          image:
            "https://cdn.sanity.io/images/ti7si9cx/production/656e951d31f3dc0f061a57466d01def70a81a6af-1500x1000.gif?w=1382",
        },
        {
          name: "Polarian",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx-zXE2Z5aS8OQVe5R12YBDrv147PB2cAQmA&usqp=CAU",
        },
      ],
    },
  ],
  blogPosts: [
    {
      title: "Basics of Unix ,Git and GitHub",
      desc: "Here we are going to understand how to use basic crud operations on CLI",
      image:
        "data:image/png;base64,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",
      url: "https://hashnode.com/post/unix-git-and-github-ckrq94wgq0aya0ls17tcc88rq",
      postedOn: "hashnode.com",
    },
  ],
  projects: [
    {
      title: "Writy App",
      image: "https://www.loom.com/embed/18a6c9ce5b6a4bf8b5a566791bf599a5",
      url: "https://61c3f7c1e6cf7600075d9da9--writy.netlify.app/",
      TechStack: ["ReactJS", "ExpressJS", "MongoDB"],
      hostedOn: "On Netlify",
    },
    {
      title: "E-Commerse Site",
      image: "https://www.loom.com/embed/3d0dd225fb244ef9adfa13f60243a1e8",
      url: "https://61c33c8742fc113010b5a8c4--shoppingcartunique.netlify.app/",
      TechStack: ["ReactJS", "HTML", "SCSS"],
      hostedOn: "On Netlify",
    },
    {
      title: "Quiz App",
      image: "https://www.loom.com/embed/cf56a2577cef4940954abb3cb66371bb",
      url: "https://61c494a7b8174000082a0644--quiz-app-asvindra.netlify.app/",
      TechStack: ["ReactJS", "HTML", "SCSS"],
      hostedOn: "On Netlify",
    },
    {
      title: "Github Battle",
      image: "https://www.loom.com/embed/8c15f6cb7534428d8cd325bdcf915ab0",
      url: "https://61c365983753455e3d0bd2cc--githubbattlegame.netlify.app/",
      TechStack: ["ReactJS", "HTML", "SCSS"],
      hostedOn: "On Netlify",
    },
  ],
};

export default data;
