const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 px-4 py-8">
      <div className="mx-auto max-w-5xl text-center text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Anton Stark</p>
        <p className="mt-2">Built with React, TypeScript & Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
