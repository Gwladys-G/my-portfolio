import Snake from '../../assets/images/portfoliocover/snakecover.png'
import Dino from '../../assets/images/portfoliocover/dinocover.png'
import Pong from '../../assets/images/portfoliocover/PongGame.png'
import Calculator from '../../assets/images/portfoliocover/Calculator.png'
import Currency from '../../assets/images/portfoliocover/Converter.png'
import Todo from '../../assets/images/portfoliocover/Todos.png'
import TicTacToe from '../../assets/images/portfoliocover/TictactoeGame.png'
import Brunchtime from '../../assets/images/portfoliocover/Brunchtime.png'
import BlogPosts from '../../assets/images/portfoliocover/BlogPosts.png'

import cssIcon from '../../assets/images/css-icon.png'
import restApiIcon from '../../assets/images/rest-api-icon.png'
import authentificationIcon from '../../assets/images/authentication-icon.png'
import mongoDbIcon from '../../assets/images/mongodb.png'
import expressIcon from '../../assets/images/express.png'

export const skillIcons = {
  "Node.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  "Mongoose": mongoDbIcon,
  "Express.js": expressIcon,
  "Bootstrap": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
  "authentification": authentificationIcon,
  "Ruby On Rails": "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
  "postgresql": "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  "Javascript": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "CSS": cssIcon,
  "Sass": "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  "React.js": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "RestAPI": restApiIcon,
};


export const dataProjects = [
  {
    cover: BlogPosts,
    title: "BlogPosts",
    skills: ["Node.js", "Mongoose", "Express.js", "Bootstrap", "authentification"],
    github: "https://github.com/Gwladys-G/my-blogposts",
    url:"https://my-blogposts-production.up.railway.app/",
    mobile: true,
  },
  {
    cover: Brunchtime,
    title: "Brunchtime",
    skills: ["Ruby On Rails", "postgresql", "Javascript", "CSS", "Sass"],
    github: "https://github.com/Gwladys-G/brunchtime",
    url:"https://brunchtime-production.up.railway.app/",
    mobile: true,
  },
  {
    cover: Snake,
    title: "Snake Game",
    skills: ["Javascript", "CSS"],
    github: "https://github.com/Gwladys-G/my-snake-game",
    url:"https://gwladys-g.github.io/my-snake-game/",
    mobile: false,
  },
  {
    cover:  Dino,
    title: "Dino Game",
    skills: ["Javascript", "CSS"],
    github: "https://github.com/Gwladys-G/dino-chrom-game",
    url:"https://gwladys-g.github.io/dino-chrom-game/",
    mobile: false,
  },
  {
    cover:  TicTacToe,
    title: "TicTacToe Game",
    skills: ["Javascript", "CSS"],
    github: "https://github.com/Gwladys-G/my-tictactoe-game",
    url:"https://gwladys-g.github.io/my-tictactoe-game/",
    mobile: true,
  },
  {
    cover:  Pong,
    title: "Pong Game",
    skills: ["Javascript", "CSS"],
    github: "https://github.com/Gwladys-G/my-pong-game",
    url:"https://gwladys-g.github.io/my-pong-game/",
    mobile: false,
  },
  {
    cover:  Calculator,
    title: "Calculator",
    skills: ["React.js", "CSS"],
    github: "https://github.com/Gwladys-G/my-calculator",
    url:"https://gwladys-g.github.io/my-calculator/",
    mobile: true,
  },
  {
    cover:  Currency,
    title: "Currency Converter",
    skills: ["React.js", "CSS", "RestAPI"],
    github: "https://github.com/Gwladys-G/my-currencyconverter",
    url:"https://gwladys-g.github.io/my-currencyconverter/",
    mobile: true,
  },
  {
    cover:  Todo,
    title: "To-do App",
    skills: ["React.js", "CSS", "Bootstrap","RestAPI"],
    github: "https://github.com/Gwladys-G/my-todoreactapp",
    url:"https://gwladys-g.github.io/my-todoreactapp/",
    mobile: true,
  }
]
