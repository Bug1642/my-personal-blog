"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-14 h-8" />; // Placeholder
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`
        relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-500
        ${isDark ? "bg-zinc-800" : "bg-zinc-200"}
      `}
            aria-label="Toggle theme"
        >
            <motion.div
                className="w-6 h-6 bg-white dark:bg-zinc-950 rounded-full shadow-sm flex items-center justify-center text-zinc-800 dark:text-zinc-200"
                animate={{ x: isDark ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
            >
                {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </motion.div>
        </button>
    );
}
