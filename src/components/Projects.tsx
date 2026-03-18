import { projects } from "../data/projects";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary font-mono">
          Projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          My recent projects
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src={project.imgPath}
                  alt={project.imgAlt}
                  className="h-full w-full"
                />
              </div>
              <h3 className="mt-4 text-base font-bold leading-6 text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors duration-200"
              >
                <BsGithub className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
