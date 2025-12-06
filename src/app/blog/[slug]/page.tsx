import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import SupabaseComments from "@/components/SupabaseComments";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const post = getPostBySlug(params.slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Hasan.dev`,
        description: post.excerpt,
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const options = {
        mdxOptions: {
            rehypePlugins: [rehypeHighlight],
        },
    };

    return (
        <article className="container mx-auto px-4 py-12 max-w-3xl">
            <Link
                href="/blog"
                className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
            </Link>

            <header className="mb-8">
                <div className="flex gap-2 mb-4">
                    {post.tags.map((tag) => (
                        <span key={tag} className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full text-xs font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-4xl font-bold tracking-tighter mb-4">{post.title}</h1>
                <time className="text-zinc-500 dark:text-zinc-400 text-sm">{post.date}</time>
            </header>

            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <MDXRemote source={post.content} options={options} />
            </div>

            <SupabaseComments slug={params.slug} />
        </article>
    );
}
