import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    Hasan.dev
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Home
                    </Link>
                    <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Blog
                    </Link>
                    <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <a href="https://github.com/Bug1642" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/hasancannisanci/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </header>
    );
}
