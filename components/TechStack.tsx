import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const techStack = [
  {
    name: "Next.js",
    image: "https://cdn.simpleicons.org/nextdotjs",
  },
  {
    name: "React",
    image: "https://cdn.simpleicons.org/react",
  },
  {
    name: "TypeScript",
    image: "https://cdn.simpleicons.org/typescript",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.simpleicons.org/tailwindcss",
  },
  {
    name: "Node.js",
    image: "https://cdn.simpleicons.org/nodedotjs",
  },
  {
    name: "Redux",
    image: "https://cdn.simpleicons.org/redux",
  },
];

export const TechStack = () => {
  return (
    <section className="max-w-2xl mx-auto p-2 lg:p-0 mt-12 mb-12">
      <h2 className="text-muted-foreground/50 font-medium text-lg lg:text-xl mb-6 font-serif">
        Tech stack I use
      </h2>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="space-y-2 px-4 py-2"
            >
              <div className="relative size-12 mx-auto">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  unoptimized
                />
              </div>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};
