const About = () => {
  return (
    <section id="about" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary font-mono">
          About me
        </p>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          From CNC and CAD/CAM to .NET-developer
        </h2>

        <div className="mt-6 max-w-3xl space-y-4 text-neutral-300">
          <p>
            I'm studying .NET-development and has yet worked with .NET, C#, SQL,
            NoSQL, React, Typescript, HTML, CSS.
          </p>
          <p>
            Before i started studying i used to work as a CNC-Machinist /
            technician, i did the whole process from raw meterial to finished
            product. It has given me a technical mindset, precision and the
            importance of problemsolving.
          </p>
          <p>
            I'm often enjoying the nature in my sparetime, fishing or hiking.
            Otherwise i'm exploring new services to host in my homelab, more
            homeautomations or new developer skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
