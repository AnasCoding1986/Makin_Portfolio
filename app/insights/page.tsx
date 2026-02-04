import { Reveal } from "@/components/reveal";
import { posts } from "@/lib/blog-data";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, Lightbulb, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Insights",
    description: "Legal perspectives and commentary on professional practice, legal developments, and comparative law.",
};

export default function InsightsPage() {
    return (
        <div className="flex flex-col">
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Insights", url: "/insights" }]} />

            {/* Enhanced Header */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.5) 35px, rgba(0,0,0,.5) 70px)`
                }} />

                {/* Floating Particles */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
                <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="container mx-auto px-4 md:px-6 relative">
                    <Reveal className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
                            <span className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold mx-4">Blog</span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif mb-8 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent leading-tight">
                            Insights &<br />Perspectives
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
                            Commentary on legal developments, comparative law, and professional practice across UK and international jurisdictions.
                        </p>

                        {/* Article Count Badge */}
                        <div className="flex items-center justify-center gap-6">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
                                <BookOpen className="text-accent" size={20} />
                                <span className="font-bold text-accent">{posts.length} Published Articles</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Enhanced Grid */}
            <section className="py-24 md:py-32 bg-white dark:bg-zinc-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {posts.map((post, i) => (
                            <Reveal key={post.slug} delay={i * 50} className="flex flex-col h-full">
                                <Link href={`/insights/${post.slug}`} className="group flex flex-col h-full">
                                    <div className="relative h-full bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                                        {/* Decorative Glow */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Enhanced Image Placeholder */}
                                        <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden border-b-2 border-zinc-200 dark:border-zinc-700 group-hover:border-accent transition-colors">
                                            {/* Decorative Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                                <Lightbulb size={80} className="text-accent transform group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <div className="relative z-10 text-sm font-bold tracking-[0.2em] uppercase text-accent">
                                                {post.category}
                                            </div>
                                        </div>

                                        <div className="relative p-8 flex flex-col flex-grow">
                                            {/* Category Badge */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="inline-flex items-center text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                                                    {post.category}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-2xl md:text-2xl font-serif mb-4 group-hover:text-accent transition-colors leading-tight line-clamp-2">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Meta & CTA */}
                                            <div className="flex items-center justify-between pt-6 border-t-2 border-zinc-200 dark:border-zinc-700 mt-auto">
                                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar size={12} className="text-accent" />
                                                        {post.date}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock size={12} className="text-accent" />
                                                        {post.readingTime}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all">
                                                    Read
                                                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Subscription CTA */}
            <section className="relative py-24 overflow-hidden bg-primary text-primary-foreground border-t border-zinc-800">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
                    }} />
                </div>

                <div className="container mx-auto px-4 md:px-6 text-center relative">
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/20 border border-accent/30 rounded-full mb-8">
                                <Linkedin className="text-accent" size={20} />
                                <span className="text-sm font-bold text-accent uppercase tracking-wider">Stay Connected</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-serif mb-6 text-white">Stay Informed</h3>
                            <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed">
                                Follow for updates on professional practice and legal commentary across multiple jurisdictions.
                            </p>

                            <Link
                                href="https://linkedin.com/in/muhtasimbillah"
                                target="_blank"
                                className="group inline-flex items-center gap-2 bg-accent text-white px-10 py-5 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl hover:scale-105"
                            >
                                Follow on LinkedIn
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
