import concertTracker from "./components/images/concert-tracker.jpg";
import k9Cupid from "./components/images/k9cupid.jpg";
import fix from "./components/images/FTF.jpg";
import noteTaker from "./components/images/note-taker.png";
import workOut from "./components/images/workout-tracker.png";
import budget from "./components/images/budget-tracker.png";
import eCommerce from "./components/images/e-commerce.png";

export const projectData = [
  {
    id: 1,
    image: fix,
    title: "Food-Truck-Fix",
    subtitle:
      "A solution for Food-Truck-Owners to built custom mobile applications",
    description:
      "A MERN Stack application that allows for everyday food truck owners to create their own custom application that helps enhance their bussiness. Food truck owners will have the ability to add menu items, customize order experience, and change prices with ease.",
    repo: "https://github.com/D-Y-A-G/food-truck-app-creator",
    demo: "https://food-truck-fix.herokuapp.com/",
    technology: "HTML, CSS, JavaScript, Bulma, Stripe, MongoDB, REACT",
  },

  {
    id: 2,
    image: concertTracker,
    title: "Concert Tracker",
    subtitle: "Find your favorite band and concert info!",
    description:
      "Front-end application created by music lovers that allows users to search a band/artist for upcoming events, provide them with ticket information pricing and links with the top music videos based on search input.",
    repo: "https://github.com/D-Y-A-G/pj1-sam-dav-den",
    demo: "https://d-y-a-g.github.io/pj1-sam-dav-den/",
    technology: "HTML, CSS, JavaScript, Foundation, jQuery, Ticketmaster API",
  },

  {
    id: 3,
    image: k9Cupid,
    title: "K9Cupid",
    subtitle: "A social app for human's Best Friends!",
    description:
      "A built from scratch application for doggies to help them socialize and find other dogs with similar personalities and attributes to make fun and lasting friendships.",
    repo: "https://github.com/D-Y-A-G/K9Cupid",
    demo: "https://k9-cupid-final.herokuapp.com/",
    technology: "HTML, CSS, JavaScript, Bulma, HandleBars, MySQL",
  },

  {
    id: 4,
    image: eCommerce,
    title: "E-Commerce",
    subtitle: "A back-end e-commerce website for a clothes store.",
    description:
      "A back end application for an e-commerce clothing website that uses latest technologies to compete with other e-commerce companies.",
    repo: "https://github.com/D-Y-A-G/Tech-Blog-DA",
    demo: "https://watch.screencastify.com/v/iI7bmrt6TfZticK6IEAG",
    technology: "JavaScript,Express, MySQL ",
  },

  {
    id: 5,
    image: noteTaker,
    title: "Note-Taker",
    subtitle: "Easy to use Note Taker, Lets you add and delete notes",
    description:
      "An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
    repo: "https://github.com/D-Y-A-G/Note-Taker-DA",
    demo: "https://note-taker-da.herokuapp.com/",
    technology: "JavaScript,Express, MySQL, CSS, HTML ",
  },

  {
    id: 6,
    image: workOut,
    title: "Workout-Tracker",
    subtitle: "Track your workouts with an easy to use fitness application",
    description:
      "A simple and convenient workout tracker to help fitness enthusiasts reach their desired fitness goals faster by keeping tracks of their workout progress.",
    repo: "https://github.com/D-Y-A-G/Workout-Tracker-DA",
    demo: "https://workout-tracker-denis.herokuapp.com/?id=61b4e86ec9ec460016041a80",
    technology: "JavaScript,Express, MySQL, CSS, HTML ",
  },
  {
    id: 7,
    image: budget,
    title: "Budget-Tracker",
    subtitle:
      "An application developed to help users keep track of their expenses.",
    description:
      "An application to help users track expenses and deposits to their budget with online/offline functionality..",
    repo: "https://github.com/D-Y-A-G/Budget-Tracker-DA",
    demo: "https://budget-tracker-da.herokuapp.com/",
    technology: "JavaScript,Express, MySQL, CSS, HTML, PWA ",
  },
];
