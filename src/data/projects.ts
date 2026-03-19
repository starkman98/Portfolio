import type { Project } from "../types/project";
import twitchwatcherImg from "../assets/screenshots/twitchwatcher.png";
import blackjackImg from "../assets/screenshots/blackjack.png";
import packerlabImg from "../assets/screenshots/packerlab.png";

export const projects: Project[] = [
  {
    title: "TwitchWatcher",
    description:
      "A project mainly for learning WPF and using API:s in C#, it's monitoring twitch channels and opening them in a browser to earn points if they're live.",
    tech: ["C#", "WPF", ".NET", "API", "MVVM", "DI"],
    githubUrl: "https://github.com/starkman98/TwitchWatcher",
    imgPath: twitchwatcherImg,
    imgAlt: "TwitchWatcher screenshot",
  },
  {
    title: "OnlineBlackJack",
    description:
      "A school assignment to build a blackjack web app with vanilla Javascript.",
    tech: ["HTML", "JS", "CSS", "Vite"],
    githubUrl: "https://github.com/starkman98/OnlineBlackJack",
    imgPath: blackjackImg,
    imgAlt: "OnlineBlackJack screenshot",
  },
  {
    title: "PackerLab",
    description:
      "A school assignment to build a WPF app that's using MongoDB. I didn't like the teachers provided options of apps, so i did this app with packinglists instead. I'm planning on further develop this idea to a mobile app in the future.",
    tech: ["C#", ".NET", "MongoDB", "WPF", "MVVM", "DI"],
    githubUrl: "https://github.com/starkman98/OnlineBlackJack",
    imgPath: packerlabImg,
    imgAlt: "PackerLab screenshot",
  },
];
