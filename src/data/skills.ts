export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const coreSkills: Skill[] = [
  { name: "C# / .NET", icon: "code" },
  { name: "ASP.NET Core", icon: "server" },
  { name: "Entity Framework", icon: "database" },
  { name: "SQL / NoSQL", icon: "database" },
  { name: "REST API", icon: "globe" },
  { name: "React", icon: "globe" },
  { name: "TypeScript", icon: "code" },
  { name: "HTML / CSS", icon: "globe" },
  { name: "WPF / XAML", icon: "code" },
  { name: "MVVM / DI", icon: "server" },
];

export const softSkills: Skill[] = [
  { name: "Problem Solving", icon: "lightbulb" },
  { name: "Self-hosting", icon: "server" },
  { name: "Homelab / DevOps", icon: "cpu" },
  { name: "Precision & Detail", icon: "shield" },
];

export const languages = [
  { lang: "Swedish", level: "Native" },
  { lang: "English", level: "Fluent" },
];
