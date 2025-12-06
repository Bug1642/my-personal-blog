import Link from "next/link";
import { Post } from "@/lib/posts";

interface PostListProps {
    posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <article
                    key={post.slug}
                    className="flex flex-col border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-zinc-900"
                >
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                            <time dateTime={post.date}>{post.date}</time>
                            <span>•</span>
                            <div className="flex gap-1">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h2 className="text-xl font-bold mb-2 tracking-tight">
                            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-1">
                            {post.excerpt}
                        </p>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-auto"
                        >
                            Read more →
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    );
}
