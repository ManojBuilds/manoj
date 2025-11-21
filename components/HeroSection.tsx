import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { socialLinks } from "./Footer";


const HeroSection = () => {
  return (
    <div className="p-2 pt-12">
      <div>
        <Image
          src={"/assets/manoj.png"}
          width={1024}
          height={1024}
          className="size-32 rounded-md overflow-hidden object-cover"
          alt="Manoj's profile picture"
        />
      </div>
      <h1 className="mt-4 text-2xl lg:text-4xl font-semibold font-serif">Manoj Kumar</h1>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-muted-foreground">22 . Engineer . Builder</p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ url, icon: Icon }, i) => (
            <Link href={url} key={i} target="_blank">
              <Button variant={"link"} size={"icon-sm"}>
                <Icon />
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-6 text-muted-foreground">
        <span className="font-semibold">
          I build end to end solution of a problem.
        </span>{" "}
        From planning frontend design to building and integrating with backend.
        Whether it is an AI application or normal application I do all of it.
        I&apos;m a very boring person and My friend is my LAPTOP!
      </p>
    </div>
  );
};
export default HeroSection;
