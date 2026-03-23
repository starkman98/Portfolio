import type { Project } from "../types/project";
import twitchwatcherImg from "../assets/screenshots/twitchwatcher.png";
import blackjackImg from "../assets/screenshots/blackjack.png";
import packerlabImg from "../assets/screenshots/packerlab.png";

export const projects: Project[] = [
  {
    title: "TwitchWatcher",
    description:
      "A project mainly for learning WPF and using APIs in C#, it's monitoring twitch channels and opening them in a browser to earn points if they're live.",
    tech: ["C#", "WPF", ".NET", "API", "MVVM", "DI"],
    githubUrl: "https://github.com/starkman98/TwitchWatcher",
    imgPath: twitchwatcherImg,
    imgAlt: "TwitchWatcher screenshot",
    schoolAssignment: false,
  },
  {
    title: "OnlineBlackJack",
    description:
      "Interactive blackjack application with full game logic, state handling and user authentication.",
    tech: ["HTML", "JS", "CSS", "Vite"],
    githubUrl: "https://github.com/starkman98/OnlineBlackJack",
    imgPath: blackjackImg,
    imgAlt: "OnlineBlackJack screenshot",
    schoolAssignment: true,
  },
  {
    title: "PackerLab",
    description:
      "A WPF app for learning to use MongoDB. I didn't like the teacher's provided suggestion of apps, so i came up with this packinglist app instead. I'm planning to further develop this idea to a mobile app in the future.",
    tech: ["C#", ".NET", "MongoDB", "WPF", "MVVM", "DI"],
    githubUrl: "https://github.com/starkman98/PackerLab",
    imgPath: packerlabImg,
    imgAlt: "PackerLab screenshot",
    schoolAssignment: true,
  },
];
