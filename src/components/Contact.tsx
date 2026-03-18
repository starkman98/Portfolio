import { BsGithub, BsLinkedin, BsPhone } from "react-icons/bs";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-16 relative px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-mono text-2xl md:text-3xl tracking-wider mb-4">
            Let's Connect
          </p>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            Looking for an internship (LIA) or junior developer position where I
            can combine my work experience with my new technical skills.
          </p>

          {/* Primary CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ant.stark@hotmail.com"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-neutral-950 font-semibold hover:opacity-90 hover:shadow-[0_20px_50px_-25px_hsl(210_85%_58%_/_0.6)] transition-all duration-300"
            >
              <FiMail className="w-5 h-5" />
              <span>Get in Touch</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/starkman98"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-neutral-950 font-semibold hover:opacity-90 hover:shadow-[0_20px_50px_-25px_hsl(210_85%_58%_/_0.6)] transition-all duration-300"
            >
              <BsGithub className="w-5 h-5" />
              <span>View Projects</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Secondary icon links */}
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://github.com/starkman98"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
            >
              <BsGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anton-stark-4b8632213/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
            >
              <BsLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ant.stark@hotmail.com"
              aria-label="Email"
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href="tel:+46709255681"
              aria-label="Phone"
              className="p-3 rounded-full bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300"
            >
              <BsPhone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
