export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Reviews",
    href: "#reviews",
  },
  {
    id: 5,
    name: "Work",
    href: "#work",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Ahmad Mriwed",
    position: "IT Manager at York British Academy",
    img: "/assets/york.jpg",
    review:
      "You have truly excelled and demonstrated your capability in this role. Your performance has been commendable.",
  },
];

export const myProjects = [
  // {
  //   title: "Little Lemon - Restaurant Reservation",
  //   desc: "Responsive website for little lemon restaurant with table reservation feature that shows the available times based on the date using react.js.",
  //   subdesc:
  //     "This was the final project for the Meta frontend specialization course, And my first react application.",
  //   href: "https://ahmad-ebrahim-1.github.io/little-lemon/",
  //   texture: "/textures/project/project1.mp4",
  //   spotlight: "/assets/spotlight1.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //   ],
  // },
  {
    title: "Cryptocurrencies App",
    desc: "Fully responsive and interactive crypto currencies website using react.js, ant design, redux toolkit, chart.js and coinranking, bing news APIs.",
    subdesc:
      "Amazing statistics about crypto world with links and graphs so you can follow up with up to date information and filtering functionality to quickly find any currency.",
    href: "https://ahmad-ebrahim-1.github.io/cryptoapp/",
    texture: "/textures/project/project2.mp4",
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Ant Design",
        path: "assets/ant-design.svg",
      },
      {
        id: 3,
        name: "Redux.js",
        path: "/assets/redux.svg",
      },
    ],
  },
  {
    title: "Googl - Search Engine",
    desc: "Googl is a responsive website that uses Google Web Search API to return search results. Developed using react.js, tailwindcss and contextAPI.",
    subdesc:
      "User-friendly design with dark / light theme feature and debounce search text to optimize the search functionality.",
    href: "https://ahmad-ebrahim-1.github.io/googl/",
    texture: "/textures/project/project3.mp4",
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "Luxe Timepices - Online Store",
    desc: "Watches store using react, redux, mui and php laravel supports authentication ,dynamic roles ,cart management ,admin dashboard and more...",
    subdesc:
      "With modern and rebust design with page for browsing products and adding them to the favorites, Also Cart managment functionality with icrease/decrease quantity and remove. And a dashboard to manage products and users.",
    href: "https://github.com/ahmad-ebrahim-1/Luxe-Timepieces",
    texture: "/textures/project/project4.mp4",
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Redux.js",
        path: "/assets/redux.svg",
      },
      {
        id: 3,
        name: "MUI",
        path: "/assets/mui.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringsPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "York British Academy",
    pos: "Frontend Developer",
    duration: "2/2024 - 4/2024",
    title:
      "As a Frontend Developer at York British Academy, I played a key role in the development and enhancement of a major project for the company. Working remotely, I gained valuable experience and significantly improved my key skills in React, Next, and Redux.",
    icon: "/assets/york.jpg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Davinda",
    pos: "Frontend Developer",
    duration: "2/2025 - Present",
    title:
      "As a Frontend Developer at Davinda, collaborating with backend, design, and test teams to deliver top-notch web solutions. Skilled in React, Next, and Redux, optimizing UI performance, managing state, and leveraging modern styling frameworks for seamless user experiences.",
    icon: "/assets/d.svg",
    animation: "clapping",
  },
  // {
  //   id: 3,
  //   name: "",
  //   pos: "",
  //   duration: "",
  //   title: "",
  //   icon: "",
  //   animation: "salute",
  // },
];
