const Footer = () => {
  return (
    <footer className="px-4 py-4">
      <div className="mx-auto max-w-5xl text-center text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Anton Stark</p>
        <p className="mt-2">Built with React, TypeScript &amp; Tailwind</p>
        <p className="mt-2">Hosted on my homelab using Proxmox &amp; Nginx</p>
      </div>
    </footer>
  );
};

export default Footer;
