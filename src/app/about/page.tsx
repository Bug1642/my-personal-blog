export const metadata = {
    title: "About | Hasan.dev",
    description: "Learn more about me and my background.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter mb-8">About Me</h1>

            <div className="prose prose-zinc dark:prose-invert">
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                    Hello! I&apos;m Hasancan Nişancı, a software engineer based in Bursa, Turkey. I enjoy creating things that live on the internet.
                </p>

                <h2 className="text-2xl font-bold mb-4">Background</h2>
                <p className="mb-6">
                    I graduated from Anadolu University with a degree in Computer Programming. Since then, I&apos;ve been working on various web development projects, focusing on frontend technologies like React and Next.js.
                </p>

                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>JavaScript</li>
                    <li>React / Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>Node.js</li>
                    <li>MSSQL</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">Connect</h2>
                <p>
                    Feel free to reach out to me on <a href="https://www.linkedin.com/in/hasancannisanci/" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a> or check out my code on <a href="https://github.com/Bug1642" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>.
                </p>
            </div>
        </div>
    );
}
