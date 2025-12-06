import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/PostList";

export const metadata = {
    title: "Blog | Hasan.dev",
    description: "Read my latest thoughts on software development and technology.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-2xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter mb-4">Blog</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Thoughts, tutorials, and insights about software engineering.
                </p>
            </div>
            <PostList posts={posts} />
        </div>
    );
}
