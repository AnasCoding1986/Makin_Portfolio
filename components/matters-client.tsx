"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Filter, ShieldAlert } from "lucide-react";
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

    return (
        <section className="py-20 bg-background min-h-[600px]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Disclaimer */}
                <Reveal className="mb-12 flex items-start gap-4 p-6 bg-muted/30 border border-border rounded-xl max-w-4xl">
                    <ShieldAlert className="text-accent shrink-0 mt-1" size={24} />
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">Confidentiality Notice</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            In accordance with the Bar Standards Board (UK) and Bangladesh Bar Council ethical guidelines, specific client names and sensitive case identifiers have been omitted. The summaries below focus on the legal technicality and role performed.
                        </p>
                    </div>
                </Reveal>

                {/* Filter Chips */}
                <Reveal delay={200} className="flex flex-wrap items-center gap-3 mb-16">
                    <div className="flex items-center gap-2 mr-4 text-muted-foreground">
                        <Filter size={18} />
                        <span className="text-sm font-bold uppercase tracking-wider">Filter by:</span>
                    </div>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                                activeCategory === cat
                                    ? "bg-primary text-white border-primary shadow-md"
                                    : "bg-background text-muted-foreground border-border hover:border-accent hover:text-accent"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </Reveal>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredMatters.map((matter, i) => (
                        <Reveal key={matter.title} className="flex flex-col h-full">
                            <div className="p-10 rounded-xl border border-border bg-background hover:border-accent transition-all duration-300 flex flex-col h-full shadow-sm group">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] py-1 px-3 bg-accent/10 text-accent rounded-full">
                                        {matter.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">{matter.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                    {matter.desc}
                                </p>
                                <div className="pt-6 border-t border-border mt-auto">
                                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-3 flex items-center gap-2">
                                        Professional Role & Impact
                                    </p>
                                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                                        {matter.impact}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {filteredMatters.length === 0 && (
                    <div className="py-32 text-center text-muted-foreground">
                        No matters found in this category.
                    </div>
                )}
            </div>
        </section>
    );
};
