import { Reveal } from "@/components/reveal";
import { posts } from "@/lib/blog-data";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
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
            {/* Header */}
            <section className="bg-zinc-50 dark:bg-zinc-950 py-20 border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Insights & Perspectives
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Commentary on legal developments, comparative law, and professional practice across UK and international jurisdictions.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Grid */}
            <section className="py-20 md:py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post, i) => (
                            <Reveal key={post.slug} delay={i * 100} className="flex flex-col h-full group">
                                <Link href={`/insights/${post.slug}`} className="flex flex-col h-full bg-background border border-border rounded-xl overflow-hidden hover:border-accent transition-all hover:shadow-xl hover:-translate-y-1">
                                    <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase transition-colors group-hover:bg-accent/5">
                                        {post.category} Perspective
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-accent uppercase mb-4">
                                            <span className="bg-accent/10 px-2 py-1 rounded">{post.category}</span>
                                        </div>
                                        <h2 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                                <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                                                <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readingTime}</span>
                                            </div>
                                            <ArrowRight size={18} className="text-accent transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subscription CTA */}
            <section className="py-24 bg-primary text-primary-foreground border-t border-border">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Reveal>
                        <h3 className="text-3xl font-serif mb-6 text-white">Stay Informed</h3>
                        <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">
                            Follow for updates on professional practice and legal commentary across multiple jurisdictions.
                        </p>
                        <Link
                            href="https://linkedin.com/in/muhtasimbillah"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-md font-bold hover:brightness-110 transition-all shadow-xl"
                        >
                            Follow on LinkedIn <ArrowRight size={18} />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
