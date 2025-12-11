

"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "");

    if (state.succeeded) {
        return (
            <div className="container mx-auto px-4 py-12 max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tighter mb-8">Message Sent!</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tighter mb-8">Get in Touch</h1>

            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Have a question or want to work together? Send me a message using the form below or email me directly at <a href="mailto:Hasancan1642@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">Hasancan1642@gmail.com</a>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="your@email.com"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        placeholder="Your message..."
                        required
                    ></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                    />
                </div>

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    {state.submitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}

