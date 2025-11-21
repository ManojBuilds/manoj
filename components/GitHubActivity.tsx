import React from "react";

interface GitHubActivityProps {
    username: string;
}

export const GitHubActivity = ({ username }: GitHubActivityProps) => {
    return (
        <section className="max-w-2xl mx-auto p-2 lg:p-0 mt-12">
            <h2 className="text-muted-foreground/50 font-medium text-lg lg:text-xl mb-4 font-serif">
                GitHub Contributions
            </h2>

            <div className="overflow-x-auto">
                <div className="min-w-[700px]">
                    <img
                        src={`https://ghchart.rshah.org/${username}`}
                        alt={`${username}'s GitHub contribution graph`}
                        className="w-full"
                        style={{ imageRendering: 'crisp-edges' }}
                    />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Contribution activity over the last year</span>
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        View on GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
};
