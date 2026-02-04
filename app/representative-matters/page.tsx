import { Reveal } from "@/components/reveal";
import { ArrowRight, Sparkles, FolderOpen } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/schema";
import { MattersClient } from "@/components/matters-client";

export const metadata: Metadata = {
    title: "Representative Matters",
    description: "Anonymized record of professional engagements across constitutional, civil, and criminal law jurisdictions.",
};

export default function MattersPage() {
    return (
        <div className="flex flex-col">
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Matters", url: "/representative-matters" }]} />

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
                            <span className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold mx-4">Portfolio</span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif mb-8 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent leading-tight">
                            Representative<br />Matters
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
                            A record of selected professional engagements and case support. All descriptions are anonymized to uphold professional privilege and client confidentiality.
                        </p>

                        {/* Case Count Badge */}
                        <div className="flex items-center justify-center gap-6">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
                                <FolderOpen className="text-accent" size={20} />
                                <span className="font-bold text-accent">7 Representative Cases</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <MattersClient />

            {/* Enhanced CTA Section */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
                {/* Decorative Glow */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 md:px-6 text-center relative">
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8">
                                <Sparkles className="text-accent" size={20} />
                                <span className="text-sm font-bold text-accent uppercase tracking-wider">Detailed Portfolio</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif mb-6">Inquire about specific sector experience?</h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                                Specific case lists, redacted drafting samples, and professional references can be provided upon direct request to legal professionals and firms.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <Link
                                    href="/contact"
                                    className="group flex items-center gap-2 bg-primary text-white px-10 py-5 rounded-xl font-bold hover:opacity-90 transition-all shadow-xl hover:scale-105"
                                >
                                    Direct Inquiry
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="group flex items-center gap-2 border-2 border-accent/50 hover:border-accent px-10 py-5 rounded-xl font-bold hover:bg-accent/5 transition-all hover:scale-105 bg-white dark:bg-zinc-800"
                                >
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
