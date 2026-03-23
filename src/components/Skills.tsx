import { coreSkills, softSkills, languages } from "../data/skills";
import {
  BsCodeSlash,
  BsDatabase,
  BsGlobe,
  BsServer,
  BsCpu,
  BsShield,
  BsLightbulb,
  BsCheckCircle,
  BsRocket,
  BsListCheck,
} from "react-icons/bs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: BsCodeSlash,
  database: BsDatabase,
  globe: BsGlobe,
  server: BsServer,
  cpu: BsCpu,
  shield: BsShield,
  lightbulb: BsLightbulb,
  checkcircle: BsCheckCircle,
  rocket: BsRocket,
  listcheck: BsListCheck,
};

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary font-mono">
          [ Skills ]
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Technologies &amp; tools
        </h2>

        <div className="mt-10 space-y-10">
          {/* Core Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-neutral-400">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {coreSkills.map((skill) => {
                const Icon = iconMap[skill.icon] ?? BsCodeSlash;
                return (
                  <div
                    key={skill.name}
                    className="group relative p-4 rounded-xl border bg-primary/10 border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium text-sm text-white leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional knowledge + Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-neutral-400">
                Additional
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => {
                  const Icon = iconMap[skill.icon] ?? BsCodeSlash;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium hover:border-primary hover:bg-primary/20 transition-all duration-300 cursor-default"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-neutral-400">
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((item) => (
                  <span
                    key={item.lang}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium hover:border-primary hover:bg-primary/20 transition-all duration-300 cursor-default"
                  >
                    <span className="text-white">{item.lang}</span>
                    <span className="text-neutral-400 ml-1">
                      ({item.level})
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
