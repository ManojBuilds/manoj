import { WORK_EXPERIENCE } from "@/constants";
import Image from "next/image";

export const ProfessionalExperience = () => {
  return (
    <section className="max-w-2xl mx-auto p-2 lg:p-0 mt-12">
      <h2 className="text-muted-foreground/50 font-medium text-lg lg:text-xl font-serif">
        Professional Experience
      </h2>
      <div className="space-y-4 mt-4">
        {
          WORK_EXPERIENCE.map((experience, index) => (
            <CompanyCard
              key={index}
              name={experience.name}
              duration={experience.duration}
              role={experience.role}
              logo={experience.logo}
            />
          ))
        }
      </div>
    </section>
  );
};

const CompanyCard = ({
  name,
  duration,
  role,
  logo,
}: {
  name: string;
  duration: string;
  role: string;
  logo: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
      <div className="flex gap-4">
        <Image
          className="size-8 object-contain overflow-hidden rounded-md"
          alt={name}
          src={logo}
          width={48}
          height={48}
        />
        <div>
          <h3 className="text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{role}</p>
        </div>
      </div>
      <p className="text-muted-foreground text-sm pl-12 sm:pl-0">{duration}</p>
    </div>
  );
};
