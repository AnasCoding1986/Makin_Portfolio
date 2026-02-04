import { Reveal } from "@/components/reveal";
import { Download, Globe, Award, Shield, User, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Muhtasim Billah's qualifications as a dual-qualified Barrister and Advocate with 10+ years of international experience.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />
            {/* Hero Section */}
            <section className="bg-zinc-50 dark:bg-zinc-950 py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-serif mb-8 text-center">
                            The Intersection of Precision & Humanity
                        </h1>
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-xl text-muted-foreground leading-relaxed italic">
                                "Born to struggle, trained to endure, disciplined to excel. A legal professional delivering justice with both precision and conscience—where authority is matched by humanity."
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Narrative Summary */}
            <section className="py-20 bg-background border-b border-border">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <Reveal>
                        <h2 className="text-sm font-sans uppercase tracking-[0.2em] text-accent font-bold mb-6">Professional summary</h2>
                        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                            <p>
                                A dual-qualified Barrister (England & Wales) and Advocate (Bangladesh) with over a decade of international legal experience across litigation, advisory practice, tax law, and legal education.
                            </p>
                            <p>
                                Combining rigorous legal expertise in high-stakes and compliance-driven environments with a deeply human-centred approach to justice, client care, and leadership. Recognized for disciplined case management, sharp legal analysis, and exceptional emotional intelligence.
                            </p>
                            <p>
                                Particularly effective in law firms, public institutions, and in-house legal teams where integrity, judgement, and trust matter as much as technical excellence.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Qualifications & Languages */}
            <section className="py-20 md:py-32 bg-muted/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Qualifications */}
                        <Reveal>
                            <div className="flex items-center gap-3 mb-8">
                                <Award className="text-accent" size={28} />
                                <h2 className="text-2xl md:text-3xl font-serif">Core Qualifications</h2>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    { title: "Barrister of England & Wales", desc: "Called to the Bar, Lincoln’s Inn (Nov 2024)" },
                                    { title: "Advocate (Bangladesh)", desc: "High Court Division, Supreme Court of Bangladesh" },
                                    { title: "Income Tax Lawyer", desc: "Sylhet Taxes Bar Association" },
                                    { title: "Legal Practitioner", desc: "Judge’s Court, Sylhet" },
                                ].map((item, i) => (
                                    <li key={i} className="bg-background p-6 rounded-lg border border-border shadow-sm">
                                        <h3 className="font-sans font-bold text-foreground mb-1">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        {/* Languages */}
                        <Reveal delay={200}>
                            <div className="flex items-center gap-3 mb-8">
                                <Globe className="text-accent" size={28} />
                                <h2 className="text-2xl md:text-3xl font-serif">Linguistic Proficiency</h2>
                            </div>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Equipped for multilingual consultation and stakeholder management across diverse legal landscapes.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["English (EN)", "Bengali (BN)", "Hindi (HI)", "Urdu (UR)"].map((lang, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                                        <div className="h-2 w-2 rounded-full bg-accent" />
                                        <span className="font-medium">{lang}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-primary text-primary-foreground rounded-xl">
                                <h3 className="text-xl font-serif mb-4 text-white">Multilingual Consultation</h3>
                                <p className="text-sm opacity-80 leading-relaxed mb-6">
                                    Expertise in navigating complex legal terminology across these languages, facilitating clear communication for international clients.
                                </p>
                                <div className="flex items-center gap-2 text-accent font-bold text-sm">
                                    <CheckCircle2 size={16} /> Verified Proficiency
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 md:py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-sm font-sans uppercase tracking-[0.2em] text-accent font-bold mb-4">Core Values</h2>
                        <h3 className="text-3xl md:text-5xl font-serif">The Pillars of My Practice</h3>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Precision",
                                desc: "Methodical attention to detail in drafting, analysis, and case management.",
                                icon: <Shield className="text-accent" size={32} />
                            },
                            {
                                title: "Humanity",
                                desc: "Understanding the human stories behind every brief and judgment.",
                                icon: <User className="text-accent" size={32} />
                            },
                            {
                                title: "Integrity",
                                desc: "Upholding the highest professional standards across both jurisdictions.",
                                icon: <Award className="text-accent" size={32} />
                            },
                        ].map((value, i) => (
                            <Reveal key={i} delay={i * 100} className="p-10 rounded-xl border border-border hover:border-accent transition-all text-center">
                                <div className="flex justify-center mb-6">{value.icon}</div>
                                <h4 className="text-2xl font-serif mb-4">{value.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    {value.desc}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-muted/20 border-t border-border">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-serif mb-10">Want to see my full professional timeline?</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/experience"
                                className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold hover:opacity-90 transition-all shadow-lg"
                            >
                                View Experience
                            </Link>
                            <button className="flex items-center gap-2 border-2 border-primary px-8 py-4 rounded-md font-bold hover:bg-muted transition-all group">
                                Download CV (PDF) <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}

