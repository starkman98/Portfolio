const Contact = () => {
  return (
    <section id="contact" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto mx-w-5xl  text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-400">
          Contact
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Get in touch
        </h2>
        <div className="mt-6 flex justify-center gap-3 text-neutral-300">
          <a
            href="mailto:ant.stark@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Mail
          </a>
          <a
            href="https://github.com/starkman98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a href="tel:+46709255681" className="hover:text-white">
            Phonenumber
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
