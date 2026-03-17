import { useState } from "react";
import { LuX } from "react-icons/lu";
import { MdMenu } from "react-icons/md";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky w-full top-0 z-50 border-b border-neutral-800 bg-neutral-950/40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          <span className="text-neutral-400">&lt;</span>
          AS
          <span className="text-neutral-400"> /&gt;</span>
        </a>
        <a href="#" className="text-sm font-semibold tracking-wide text-white">
          starkman.dev
        </a>

        <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-neutral-800 p-2 text-neutral-300 transition hover:text-white md:hidden"
          aria-label={isOpen ? "stäng meny" : "Öppna meny"}
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
