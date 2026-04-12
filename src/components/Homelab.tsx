import { features } from "../data/features";
import { techStack } from "../data/techStack";

const Homelab = () => {
  return (
    <section id="homelab" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary font-mono">
          [ Homelab ]
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Infrastructure &amp; DevOps
        </h2>

        <p className="mt-6 max-w-2xl text-neutral-400">
          I run my own homelab where I host this portfolio and experiment with
          infrastructure, networking, and automation. It's where I apply
          real-world DevOps practices — from provisioning VMs to shipping code
          through automated pipelines.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 cursor-default"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 border border-primary/20 ">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-400 font-mono">
            Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary/80 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homelab;
