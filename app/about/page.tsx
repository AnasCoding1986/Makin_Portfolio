import { Reveal } from "@/components/reveal";
import { Download, Globe, Award, Shield, User, CheckCircle2, Sparkles, TrendingUp, Target } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Muhtasim Billah's qualifications as a dual-qualified Barrister and Advocate with 10+ years of international experience.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col relative overflow-hidden">
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />

            {/* Hero Section with Subtle Gradient Background */}
            <section className="relative py-24 md:py-40 overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
                {/* Subtle Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.5) 35px, rgba(0,0,0,.5) 70px)`
                }} />

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
                <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <Reveal>
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
                            <span className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold mx-4">About Me</span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif mb-8 text-center bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent leading-tight">
                            The Intersection of<br />Precision & Humanity
                        </h1>
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="relative">
                                <div className="absolute -left-4 -top-4 text-6xl text-accent/10 font-serif">"</div>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic px-8 py-6 bg-white/50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl">
                                    Born to struggle, trained to endure, disciplined to excel. A legal professional delivering justice with both precision and conscience—where authority is matched by humanity.
                                </p>
                                <div className="absolute -right-4 -bottom-4 text-6xl text-accent/10 font-serif">"</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Narrative Summary - Featured Statement */}
            <section className="py-20 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                </div>

                <div className="container mx-auto px-4 md:px-6 max-w-5xl relative">
                    <Reveal>
                        <div className="flex items-center gap-3 mb-12 justify-center">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
                            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold">Professional Summary</h2>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
                        </div>
                        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/90">
                            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                                <div className="absolute top-4 left-4 w-12 h-12 bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors" />
                                <p className="relative">
                                    A dual-qualified <span className="font-bold text-accent">Barrister (England & Wales)</span> and <span className="font-bold text-accent">Advocate (Bangladesh)</span> with over a decade of international legal experience across litigation, advisory practice, tax law, and legal education.
                                </p>
                            </div>
                            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                                <div className="absolute top-4 right-4 w-12 h-12 bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors" />
                                <p className="relative">
                                    Combining rigorous legal expertise in high-stakes and compliance-driven environments with a deeply human-centred approach to justice, client care, and leadership. Recognized for disciplined case management, sharp legal analysis, and exceptional emotional intelligence.
                                </p>
                            </div>
                            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                                <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/5 rounded-lg group-hover:bg-accent/10 transition-colors" />
                                <p className="relative">
                                    Particularly effective in law firms, public institutions, and in-house legal teams where integrity, judgement, and trust matter as much as technical excellence.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Qualifications & Languages - Enhanced Cards */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(100 100 100) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Qualifications */}
                        <Reveal>
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-3 bg-accent rounded-xl shadow-lg">
                                        <Award className="text-white" size={28} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">Core Qualifications</h2>
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        { title: "Barrister of England & Wales", desc: "Called to the Bar, Lincoln's Inn (Nov 2024)" },
                                        { title: "Advocate (Bangladesh)", desc: "High Court Division, Supreme Court of Bangladesh" },
                                        { title: "Income Tax Lawyer", desc: "Sylhet Taxes Bar Association" },
                                        { title: "Legal Practitioner", desc: "Judge's Court, Sylhet" },
                                    ].map((item, i) => (
                                        <li key={i} className="group relative bg-white dark:bg-zinc-800 p-7 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                                            {/* Accent Glow on Hover */}
                                            <div className="absolute top-0 left-0 w-20 h-20 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="flex items-start gap-4 relative">
                                                <div className="mt-1 w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
                                                <div className="flex-1">
                                                    <h3 className="font-sans font-bold text-foreground mb-2 text-lg group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        {/* Languages */}
                        <Reveal delay={200}>
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-3 bg-accent rounded-xl shadow-lg">
                                        <Globe className="text-white" size={28} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">Linguistic Proficiency</h2>
                                </div>
                                <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                                    Equipped for multilingual consultation and stakeholder management across diverse legal landscapes.
                                </p>

                                {/* Language Pills with Progress Bars */}
                                <div className="grid grid-cols-2 gap-5 mb-10">
                                    {[
                                        { lang: "English", code: "EN", proficiency: 100 },
                                        { lang: "Bengali", code: "BN", proficiency: 100 },
                                        { lang: "Hindi", code: "HI", proficiency: 90 },
                                        { lang: "Urdu", code: "UR", proficiency: 85 }
                                    ].map((item, i) => (
                                        <div key={i} className="group">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-3 w-3 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300 shadow-lg" />
                                                    <span className="font-bold text-foreground">{item.lang}</span>
                                                </div>
                                                <span className="text-xs font-mono text-muted-foreground">{item.code}</span>
                                            </div>
                                            {/* Progress Bar */}
                                            <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-accent transition-all duration-1000 ease-out group-hover:animate-pulse rounded-full"
                                                    style={{ width: `${item.proficiency}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Featured Box */}
                                <div className="relative group overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                                    {/* Subtle Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
                                        }} />
                                    </div>

                                    <div className="relative p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-accent rounded-lg">
                                                <TrendingUp className="text-white" size={20} />
                                            </div>
                                            <h3 className="text-2xl font-serif text-white">Multilingual Consultation</h3>
                                        </div>
                                        <p className="text-white/90 leading-relaxed mb-6 text-sm">
                                            Expertise in navigating complex legal terminology across these languages, facilitating clear communication for international clients and cross-border matters.
                                        </p>
                                        <div className="flex items-center gap-2 text-accent font-bold text-sm bg-white/10 px-4 py-2 rounded-full inline-flex">
                                            <CheckCircle2 size={18} className="animate-pulse" />
                                            Verified Proficiency
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Core Values - Interactive Cards */}
            <section className="py-24 md:py-32 bg-white dark:bg-zinc-900 relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 md:px-6 relative">
                    <Reveal className="flex flex-col items-center text-center mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
                            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold">Core Values</h2>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
                        </div>
                        <h3 className="text-4xl md:text-6xl font-serif text-foreground">
                            The Pillars of My Practice
                        </h3>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        {[
                            {
                                title: "Precision",
                                desc: "Methodical attention to detail in drafting, analysis, and case management.",
                                icon: Shield,
                            },
                            {
                                title: "Humanity",
                                desc: "Understanding the human stories behind every brief and judgment.",
                                icon: User,
                            },
                            {
                                title: "Integrity",
                                desc: "Upholding the highest professional standards across both jurisdictions.",
                                icon: Award,
                            },
                        ].map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <Reveal key={i} delay={i * 100}>
                                    <div className="group relative h-full">
                                        {/* Card */}
                                        <div className="relative h-full p-10 rounded-3xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-500 text-center overflow-hidden bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 hover:shadow-2xl hover:scale-105">
                                            {/* Background Glow */}
                                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Icon with Animation */}
                                            <div className="relative flex justify-center mb-8">
                                                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <div className="relative p-5 bg-accent rounded-2xl shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                                                    <Icon className="text-white" size={40} />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h4 className="text-3xl font-serif mb-6 text-accent group-hover:scale-110 transition-transform duration-500">
                                                {value.title}
                                            </h4>
                                            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500 relative text-base">
                                                {value.desc}
                                            </p>

                                            {/* Decorative Corner Element */}
                                            <div className="absolute top-4 right-4 w-16 h-16 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section - Enhanced */}
            <section className="relative py-24 overflow-hidden bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
                {/* Subtle accent overlay */}
                <div className="absolute inset-0 bg-accent/5" />

                <div className="container mx-auto px-4 md:px-6 text-center relative">
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                                <Sparkles className="text-accent" size={20} />
                                <span className="text-sm font-bold text-accent uppercase tracking-wider">Next Steps</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                                Want to see my full professional timeline?
                            </h2>

                            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                                Explore my comprehensive experience across international legal practice, or download my complete CV for detailed insights.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <Link
                                    href="/experience"
                                    className="group flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                                >
                                    View Experience
                                    <TrendingUp size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Link>

                                <a
                                    href="https://drive.google.com/file/d/1ukrrYkYlrSft5b0O3AxJUQVuR_yoTAxw/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-10 py-5 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 bg-white dark:bg-zinc-800 border-2 border-accent/50 hover:border-accent text-foreground"
                                >
                                    Download CV (PDF)
                                    <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
