import type { Feature } from "../types/feature";
import {
  BsServer,
  BsShieldCheck,
  BsArrowRepeat,
  BsLock,
  BsHouseDoor,
  BsCloud,
} from "react-icons/bs";

export const features: Feature[] = [
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
