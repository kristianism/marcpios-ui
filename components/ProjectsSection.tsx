"use client";

import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-700" />
            <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-500">
              Selected Works
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-700" />
          </div>
        </Reveal>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              summary={project.summary}
              image={project.image}
              tags={project.tags}
              link={project.link}
              year={project.year}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
