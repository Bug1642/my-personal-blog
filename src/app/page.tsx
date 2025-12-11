import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/PostList";

export default function Home() {
    const posts = getAllPosts().slice(0, 3); // Get latest 3 posts

    return (
        <div className="container mx-auto px-4">
            <section className="pt-6 md:pt-12 pb-8 md:pb-16 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
                    Software Engineer & <br />
                    Creative Developer.
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-8">
                    I&apos;m Hasan, a software engineer passionate about building digital products that help people.
                    I write about code, design, and life.
                </p>
                <div className="flex gap-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
                    >
                        Read Blog
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-lg hover:bg-zinc-200 dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
                    >
                        About Me
                    </Link>
                </div>
            </section>

            <section className="py-12 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold tracking-tight">Recent Posts</h2>
                    <Link href="/blog" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                        View all posts
                    </Link>
                </div>
                <PostList posts={posts} />
            </section>
        </div>
    );
}
