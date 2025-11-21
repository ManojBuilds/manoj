import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, OPEN_SOURCE_CONTRIBUTIONS } from "@/constants";

interface Project {
  title: string;
  link: string;
  tech?: string[];
  description?: string;
  currentlyWorking?: boolean;
  contributions?: string[];
}

export const Projects = () => {
  return (
    <section className="max-w-2xl mx-auto p-2 lg:p-0 mt-12">
      <h2 className="text-muted-foreground/50 font-medium text-lg lg:text-xl mb-4 font-serif">
        Products I&apos;ve built
      </h2>
      <div className="flex flex-col gap-1">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <h2 className="text-muted-foreground/50 font-medium text-lg lg:text-xl mb-4 mt-8 font-serif">
        Open Source Contributions
      </h2>
      <div className="flex flex-col gap-1">
        {OPEN_SOURCE_CONTRIBUTIONS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, link, description, currentlyWorking, contributions }: Project) => {


  return (
    <Link
      href={link}
      target="_blank"
      className="group flex items-start justify-between p-2 -mx-2 rounded-md hover:bg-secondary/50 transition-colors duration-200"
    >
      <div className="">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
            {title}
          </span>
          {currentlyWorking && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 font-medium whitespace-nowrap">
              Currently Building
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {contributions && (
          <ul className="mt-2 space-y-1">
            {contributions.map((contribution, index) => (
              <li key={index} className="text-xs text-muted-foreground/80 flex items-start gap-1">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                {contribution}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0 mt-1">
        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-foreground transition-colors" />
      </div>
    </Link>
  );
};
