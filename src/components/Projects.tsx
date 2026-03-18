import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400">
          Projects
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          My recent projects
        </h2>

        <div className="mt-10 grid grid-cols1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.imgPath}
                  alt={project.imgAlt}
                  className="h-full w-full rounded-xl transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-md font-bold leading-6 text-neutral-300">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6  text-neutral-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-medium text-white underline underline-offset-4"
              >
                Visa på GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
