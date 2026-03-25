import {
  BsServer,
  BsShieldCheck,
  BsArrowRepeat,
  BsLock,
  BsHouseDoor,
  BsCloud,
} from "react-icons/bs";

const features = [
  {
    icon: BsServer,
    title: "Proxmox Virtualization",
    description:
      "This portfolio and other services run as isolated VMs on a Proxmox hypervisor, giving clean environment separation and easy snapshotting.",
  },
  {
    icon: BsShieldCheck,
    title: "Nginx Reverse Proxy & HTTPS",
    description:
      "Nginx sits in front of all services, handling domain routing and TLS termination with Let's Encrypt certificates — HTTPS enforced site-wide.",
  },
  {
    icon: BsArrowRepeat,
    title: "CI/CD via GitHub Actions",
    description:
      "A self-hosted GitHub Actions runner automates the full build-and-deploy pipeline on every push, keeping deployments repeatable and hands-off.",
  },
  {
    icon: BsLock,
    title: "Secure Internal Deployment",
    description:
      "No public SSH port exposed. The runner deploys over the internal network only, minimising the attack surface while still enabling fully automated releases.",
  },
  {
    icon: BsHouseDoor,
    title: "Self-Hosted Services",
    description:
      "Home Assistant, monitoring dashboards, and other tools run alongside the portfolio — a living testbed for infrastructure and automation ideas.",
  },
  {
    icon: BsCloud,
    title: "Nextcloud (Private Cloud)",
    description:
      "Nextcloud runs in its own VM, providing private file sync, sharing, and storage — a self-hosted alternative to Google Drive with full data ownership.",
  },
];

const techStack = [
  "Proxmox",
  "Nginx",
  "Let's Encrypt",
  "GitHub Actions",
  "Linux",
  "Home Assistant",
  "Nextcloud",
  "Flask",
  "RustDesk",
  "Docker",
];

const Homelab = () => {
  return (
    <section id="homelab" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary font-mono">
          [ Homelab ]
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Infrastructure &amp; DevOps
        </h2>

        <p className="mt-6 max-w-2xl text-neutral-300">
          I run my own homelab where I host this portfolio and experiment with
          infrastructure, networking, and automation. It's where I apply
          real-world DevOps practices — from provisioning VMs to shipping code
          through automated pipelines.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-400 font-mono">
            Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary/80 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homelab;
