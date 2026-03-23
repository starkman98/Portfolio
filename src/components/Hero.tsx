import profileImg from "../assets/anton-profile.jpg";
import { BsGithub, BsLinkedin, BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { LuChevronDown } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="relative min-h-[55vh] print:min-h-0 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="section-container relative z-10 py-12 print:py-4 w-full">
        <div className="flex flex-col lg:flex-row print:flex-row items-center gap-8 lg:gap-12 print:gap-8">
          {/* Profile image with corner bracket decorations */}
          <div className="relative animate-fade-up shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72 print:w-40 print:h-40 rounded-2xl overflow-hidden glow-effect">
              <img
                src={profileImg}
                alt="Anton Stark"
                className="w-full h-full object-cover object-top saturate-105 transition-all duration-700"
              />
            </div>
            {/* Corner brackets */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
          </div>

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-up">
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm tracking-wider mb-3 text-primary font-mono lg:justify-start print:justify-start">
                <span>.NET-student | Fullstack Developer</span>
                <span className="text-neutral-400">— Sweden</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl print:text-5xl font-bold tracking-tight mb-4">
                Anton Stark
              </h1>
              <p className="text-xl md:text-2xl print:text-lg text-neutral-400 max-w-xl mb-8 print:mb-4 leading-relaxed">
                Former CNC technician with a strong technical background, now
                transitioning into software development with a focus on .NET and
                fullstack development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start print:justify-start animate-fade-up-delay">
              <a
                href="mailto:ant.stark@hotmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 text-sm font-medium"
              >
                <FiMail className="w-4 h-4" />
                <span>Email</span>
              </a>
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

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-float">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-primary transition-colors"
          >
            <span className="text-xs font-mono tracking-wider">Scroll</span>
            <LuChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
