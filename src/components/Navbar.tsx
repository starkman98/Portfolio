import { useState } from "react";
import { LuX } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import { LuDownload } from "react-icons/lu";

const cvUrl = `${import.meta.env.BASE_URL}Anton-Stark-CV.pdf`;

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Homelab", href: "#homelab" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky w-full top-0 z-50 border-b border-neutral-800 bg-neutral-950/40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-white hover:text-primary"
        >
          <span className="text-neutral-400">&lt;</span>
          AS
          <span className="text-neutral-400"> /&gt;</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900/50 hover:border-primary hover:bg-primary/20 text-sm font-medium  transition-all duration-300"
          >
            <LuDownload className="w-3.5 h-3.5 text-primary" />
            CV
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-neutral-800 p-2 text-neutral-300 transition hover:text-white md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <LuX className="h-5 w-5" />
          ) : (
            <MdMenu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-neutral-800 px-4 py-4 md:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={cvUrl}
              download
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <LuDownload className="w-4 h-4" />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
