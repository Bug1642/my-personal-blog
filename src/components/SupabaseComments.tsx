"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Comment {
    id: number;
    name: string;
    content: string;
    created_at: string;
}

interface Props {
    slug: string;
}

export default function SupabaseComments({ slug }: Props) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchComments();
    }, [slug]);

    async function fetchComments() {
        const { data, error } = await supabase
            .from("comments")
            .select("*")
            .eq("slug", slug)
            .order("created_at", { ascending: false });

        if (error) {
            console.error("Error fetching comments:", error);
        } else {
            setComments(data || []);
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (!name.trim() || !content.trim()) {
            setError("Name and comment are required.");
            setLoading(false);
            return;
        }

        const { error } = await supabase
            .from("comments")
            .insert([{ slug, name, content }]);

        if (error) {
            console.error("Error adding comment:", error);
            setError("Failed to submit comment. Please try again.");
        } else {
            setName("");
            setContent("");
            fetchComments(); // Refresh comments
        }

        setLoading(false);
    }

    return (
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-8">Comments</h2>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-12 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium mb-2">
                        Comment
                    </label>
                    <textarea
                        id="comment"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Write a comment..."
                        required
                    ></textarea>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-6 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    {loading ? "Posting..." : "Post Comment"}
                </button>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
                {comments.length === 0 ? (
                    <p className="text-zinc-500 dark:text-zinc-400 italic">
                        No comments yet. Be the first to share your thoughts!
                    </p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold">{comment.name}</h3>
                                <span className="text-xs text-zinc-500">
                                    {new Date(comment.created_at).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
                                {comment.content}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
