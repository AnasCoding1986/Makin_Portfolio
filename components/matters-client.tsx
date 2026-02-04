"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Filter, ShieldAlert, Scale, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Constitutional", "Civil", "Criminal", "Tax & Regulatory"];

const matters = [
    {
        title: "Constitutional Writ Petitions",
        category: "Constitutional",
        desc: "Drafted complex writ petitions addressing fundamental rights and administrative actions in the High Court Division.",
        impact: "Provided critical technical support for senior counsel in high-stakes constitutional litigation."
    },
    {
        title: "Civil Dispute Resolution",
        category: "Civil",
        desc: "Represented clients in a variety of civil, criminal, and family law matters within the Bangladesh judicial system.",
        impact: "Managed full case lifecycles from initial consultation to final judgment."
    },
    {
        title: "UK Case Preparation",
        category: "Criminal",
        desc: "Assisted in the preparation of civil and criminal case bundles, including research, drafting, and procedural organization.",
        impact: "Ensured comprehensive documentation and compliance for ongoing legal proceedings in London."
    },
    {
        title: "Taxation & Compliance Advisory",
        category: "Tax & Regulatory",
        desc: "Advised corporate and individual clients on tax compliance, regulatory obligations, and dispute resolution in tribunal settings.",
        impact: "Facilitated adherence to strict regulatory frameworks and managed hearing representation."
    },
    {
        title: "High-Pressure Incident Management",
        category: "Criminal",
        desc: "Managed highly sensitive legal and human rights incidents within UK institutional frameworks.",
        impact: "Maintained professional discretion and procedural integrity in complex, high-stakes environments."
    },
    {
        title: "Land & Property Litigation",
        category: "Civil",
        desc: "Led legal drafting and litigation support for property-related disputes and commercial matters.",
        impact: "Successfully navigated complex regional land laws and administrative requirements."
    },
    {
        title: "Regulatory Risk Assessment",
        category: "Tax & Regulatory",
        desc: "Assessed compliance risks for large-scale operations and provided mitigation strategies.",
        impact: "Reduced exposure to regulatory violations and improved operational legal safety."
    }
];

export const MattersClient = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredMatters = activeCategory === "All"
        ? matters
        : matters.filter(m => m.category === activeCategory);

    // Get count for each category
    const getCategoryCount = (cat: string) => {
        if (cat === "All") return matters.length;
        return matters.filter(m => m.category === cat).length;
    };

    return (
        <section className="py-24 md:py-32 bg-white dark:bg-zinc-900">
            <div className="container mx-auto px-4 md:px-6">
                {/* Enhanced Disclaimer */}
                <Reveal className="mb-16">
                    <div className="relative max-w-4xl bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-8 md:p-10 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 shadow-sm overflow-hidden">
                        {/* Decorative Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

                        <div className="relative flex items-start gap-4">
                            <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                                <ShieldAlert className="text-accent" size={28} />
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Confidentiality Notice</p>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    In accordance with the Bar Standards Board (UK) and Bangladesh Bar Council ethical guidelines, specific client names and sensitive case identifiers have been omitted. The summaries below focus on the legal technicality and role performed.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Enhanced Filter Chips */}
                <Reveal delay={200} className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/20" />
                        <div className="flex items-center gap-2 text-accent">
                            <Filter size={18} />
                            <span className="text-sm font-bold uppercase tracking-wider">Filter Cases</span>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/20" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "group relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 border-2",
                                    activeCategory === cat
                                        ? "bg-accent text-white border-accent shadow-lg scale-105"
                                        : "bg-white dark:bg-zinc-800 text-muted-foreground border-zinc-200 dark:border-zinc-700 hover:border-accent hover:text-accent hover:scale-105"
                                )}
                            >
                                <span className="flex items-center gap-2">
                                    {cat}
                                    <span className={cn(
                                        "px-2 py-0.5 rounded-full text-xs font-bold",
                                        activeCategory === cat
                                            ? "bg-white/20 text-white"
                                            : "bg-accent/10 text-accent"
                                    )}>
                                        {getCategoryCount(cat)}
                                    </span>
                                </span>
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Enhanced Matter Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredMatters.map((matter, i) => (
                        <Reveal key={matter.title} delay={i * 50}>
                            <div className="group h-full relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-8 md:p-10 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
                                {/* Decorative Glow */}
                                <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Decorative Icon */}
                                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Scale size={80} className="text-accent" />
                                </div>

                                <div className="relative">
                                    {/* Category Badge */}
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] py-2 px-4 bg-accent/10 text-accent rounded-full border border-accent/20">
                                            <FileText size={14} />
                                            {matter.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-serif mb-6 group-hover:text-accent transition-colors">
                                        {matter.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                                        {matter.desc}
                                    </p>

                                    {/* Impact Section */}
                                    <div className="pt-6 border-t-2 border-zinc-200 dark:border-zinc-700 mt-auto">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="h-px w-8 bg-accent" />
                                            <p className="text-xs font-bold uppercase tracking-widest text-accent">
                                                Professional Role & Impact
                                            </p>
                                        </div>
                                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                                            {matter.impact}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Empty State */}
                {filteredMatters.length === 0 && (
                    <div className="py-32 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
                            <Filter className="text-accent" size={32} />
                        </div>
                        <p className="text-xl text-muted-foreground">
                            No matters found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};
