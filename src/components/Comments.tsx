"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comments() {
    const { theme } = useTheme();

    return (
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <Giscus
                id="comments"
                repo="Bug1642/my-personal-blog"
                repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ""}
                category="General"
                categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || ""}
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={theme === "dark" ? "transparent_dark" : "light"}
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
