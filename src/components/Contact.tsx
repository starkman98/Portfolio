import { FiMail } from "react-icons/fi";
import { TbFileCv } from "react-icons/tb";

const cvUrl = `${import.meta.env.BASE_URL}Anton-Stark-CV.pdf`;

const Contact = () => {
  return (
    <section id="contact" className="py-16 relative px-4 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-mono text-2xl md:text-3xl tracking-wider mb-4">
            [ Contact ]
          </p>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            Currently looking for a LIA internship (Autumn 2026) as a .NET
            fullstack developer, but im also open for other business proposals.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col md:flex-row justify-center mb-8 gap-8">
            <a
              href="mailto:ant.stark@hotmail.com"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-neutral-700 bg-neutral-900/50 hover:border-primary hover:bg-primary/20 transition-all duration-300"
            >
              <FiMail className="w-5 h-5 text-primary" />
              <span>Send Mail</span>
            </a>
            <a
              href={cvUrl}
              download
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-neutral-700 bg-neutral-900/50 hover:border-primary hover:bg-primary/20 transition-all duration-300"
            >
              <TbFileCv className="w-5 h-5 text-primary" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
