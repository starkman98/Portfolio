import { BsGithub, BsLinkedin, BsPhone } from "react-icons/bs";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { TbFileCv } from "react-icons/tb";

const cvUrl = `${import.meta.env.BASE_URL}Anton-Stark-CV.pdf`;

const Contact = () => {
  return (
    <section id="contact" className="py-16 relative px-4 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-mono text-2xl md:text-3xl tracking-wider mb-4">
            [ Let's Connect ]
          </p>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            Currently looking for a LIA internship (Autumn 2026) as a .NET
            fullstack developer.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col md:flex-row justify-center mb-8 gap-8">
            <a
              href="mailto:ant.stark@hotmail.com"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-neutral-950 font-semibold hover:opacity-90 hover:shadow-[0_20px_50px_-25px_hsl(210_85%_58%_/_0.6)] transition-all duration-300"
            >
              <FiMail className="w-5 h-5" />
              <span>Get in Touch</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={cvUrl}
              download
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-neutral-950 font-semibold hover:opacity-90 hover:shadow-[0_20px_50px_-25px_hsl(210_85%_58%_/_0.6)] transition-all duration-300"
            >
              <TbFileCv className="w-5 h-5" />
              <span>Download CV</span>
              <LuDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Secondary links */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/starkman98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
            >
              <BsGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anton-stark-4b8632213/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
            >
              <BsLinkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="tel:+46709255681"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
            >
              <BsPhone className="w-4 h-4" />
              <span>+46 70 925 56 81</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
