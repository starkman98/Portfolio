import { coreSkills, softSkills, languages } from "../data/skills";
import { BsCircleFill } from "react-icons/bs";

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
                return (
                  <div
                    key={skill.name}
                    className="group relative p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <BsCircleFill className="w-2 h-2 text-primary" />
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
                Soft skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => {
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium cursor-default"
                    >
                      <BsCircleFill className="w-2 h-2 text-primary" />
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm font-medium cursor-default"
                  >
                    <BsCircleFill className="w-2 h-2 text-primary" />
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
