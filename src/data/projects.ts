import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "TwitchWatcher",
    description:
      "A project mainly for learning WPF and using APIs in C#, it's monitoring twitch channels and opening them in a browser to earn points if they're live.",
    tech: ["C#", "WPF", ".NET", "API", "MVVM", "DI"],
    githubUrl: "https://github.com/starkman98/TwitchWatcher",
    schoolAssignment: false,
  },
  {
    title: "OnlineBlackJack",
    description:
      "Interactive blackjack web application with full game logic, state handling and user authentication.",
    tech: ["HTML", "JS", "CSS", "Vite"],
    githubUrl: "https://github.com/starkman98/OnlineBlackJack",
    schoolAssignment: true,
  },
  {
    title: "PackerLab",
    description:
      "A WPF app for learning to use MongoDB. I didn't like the teacher's provided suggestion of apps, so i came up with this packinglist app instead. I'm planning to further develop this idea to a mobile app in the future.",
    tech: ["C#", ".NET", "MongoDB", "WPF", "MVVM", "DI"],
    githubUrl: "https://github.com/starkman98/PackerLab",
    schoolAssignment: true,
  },
];
