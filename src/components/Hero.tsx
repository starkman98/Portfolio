import profileImg from "../assets/anton-profile.jpg";
import { BsGithub, BsLinkedin, BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="px-4 py-16 flex items-center justify-center">
      <div className="mx-auto max-w-5xl">
        <img
          src={profileImg}
          alt="Anton Stark"
          className="h-32 w-32 rounded-2xl object-cover"
        ></img>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Anton Stark
        </h1>
        <h2 className="text-2xl opacity-50 tracking-tight sm:text-5xl md:text-6xl">
          .NET-student with interest for backend, databases and homelab.
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a
            href="mailto:ant.stark@hotmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30"
          >
            <FiMail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/starkman98"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30"
          >
            <BsGithub className="w-4 h-4" />
            <span>Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anton-stark-4b8632213/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30"
          >
            <BsLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="tel:+46709255681"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30"
          >
            <BsPhone className="w-4 h-4" />
            <span>+46 70 925 56 81</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
