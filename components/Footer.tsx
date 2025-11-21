import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const socialLinks = [
    {
        name: "X",
        url: "https://x.com/ManojBuilds",
        icon: Twitter,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/iamsidar",
        icon: Linkedin,
    },
    {
        name: "GitHub",
        url: "https://github.com/ManojBuilds",
        icon: Github,
    },
    {
        name: "Email",
        url: "mailto:mkumar.react@gmail.com",
        icon: Mail,
    },
];

export const Footer = () => {
    return (
        <footer className="max-w-2xl mx-auto p-2 lg:p-0 mt-12 mb-12">
            <h2 className="text-muted-foreground/50 font-medium text-lg lg:text-xl mb-4">
                Let&apos;s connect
            </h2>
            <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.url}
                        target={link.name === "Email" ? undefined : "_blank"}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <link.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{link.name}</span>
                    </Link>
                ))}
            </div>
        </footer>
    );
};