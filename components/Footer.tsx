"use client";

import { person, social } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaFacebook, FaTelegram, FaDiscord } from "react-icons/fa6";

const socialIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  facebook: FaFacebook,
  email: FiMail,
  telegram: FaTelegram,
  discord: FaDiscord,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="space-y-1">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                <span className="text-neutral-400 dark:text-neutral-500">
                  © {currentYear} /
                </span>{" "}
                {person.name}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {social.map((item) => {
                const Icon = socialIconMap[item.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
                    aria-label={item.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
