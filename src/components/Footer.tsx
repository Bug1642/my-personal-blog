export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-8 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    © {new Date().getFullYear()} Hasan. All rights reserved.
                </p>

            </div>
        </footer>
    );
}
