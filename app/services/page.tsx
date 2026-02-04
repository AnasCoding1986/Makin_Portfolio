import { Reveal } from "@/components/reveal";
import { ArrowRight, BookOpen, Briefcase, Gavel, Globe, Users, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Services",
    description: "Specialized legal services including analysis, drafting, compliance, and international consultation across UK and Bangladesh.",
};

const services = [
    {
        id: "analysis",
        title: "Legal Analysis & Research",
        icon: <BookOpen className="text-accent" size={32} />,
        description: "Analytical support and research-led legal insights for complex cases across jurisdictions.",
        helpWith: [
            "Identifying key legal issues in multi-faceted disputes.",
            "Reviewing case law and statutory developments in the UK and Bangladesh.",
            "Providing detailed evidence-based situational analysis."
        ],
        steps: [
            "Legal research memorandums.",
            "Case summaries and digests.",
            "Statutory interpretation briefs."
        ]
    },
    {
        id: "drafting",
        title: "Drafting & Case Preparation",
        icon: <Briefcase className="text-accent" size={32} />,
        description: "Professional drafting of legal documents and preparation of case bundles for civil and criminal matters.",
        helpWith: [
            "Drafting clear, concise, and legally sound correspondence.",
            "Organizing and preparing comprehensive case bundles for legal proceedings.",
            "Supporting procedural compliance in case management."
        ],
        steps: [
            "Civil and criminal case bundles.",
            "Drafting of formal legal correspondence.",
            "Procedural checklists and timelines."
        ]
    },
    {
        id: "compliance",
        title: "Compliance & Risk Advisory",
        icon: <Gavel className="text-accent" size={32} />,
        description: "Guidance on regulatory requirements and risk mitigation strategies within professional and institutional frameworks.",
        helpWith: [
            "Assessing compliance with strict legal and human rights frameworks.",
            "Managing sensitive information within regulatory guidelines.",
            "Identifying potential legal and operational risks in high-pressure environments."
        ],
        steps: [
            "Compliance audit reports.",
            "Risk assessment frameworks.",
            "Regulatory guidance notes."
        ]
    },
    {
        id: "international",
        title: "International Legal Consultation",
        icon: <Globe className="text-accent" size={32} />,
        description: "Expert consultation for matters involving the intersection of UK and Bangladesh legal systems.",
        helpWith: [
            "Navigating legal requirements across different jurisdictions.",
            "Multilingual consultation (EN/BN/HI/UR) for diverse stakeholder groups.",
            "Strategic advice on cross-border legal challenges."
        ],
        steps: [
            "Cross-jurisdictional strategy maps.",
            "Comparative legal opinions.",
            "Consultation summary reports."
        ]
    },
    {
        id: "advocacy",
        title: "Advocacy & Dispute Resolution",
        icon: <Users className="text-accent" size={32} />,
        description: "Representation and advocacy support in formal and informal dispute resolution settings.",
        helpWith: [
            "Developing persuasive arguments based on factual and legal grounds.",
            "De-escalating conflicts in sensitive and high-pressure situations.",
            "Supporting clients through formal hearing processes and appeals."
        ],
        steps: [
            "Skeletons of argument.",
            "Conflict resolution plans.",
            "Appeal submission drafts."
        ]
    },
    {
        id: "mentorship",
        title: "Mentorship & Educational Support",
        icon: <GraduationCap className="text-accent" size={32} />,
        description: "Professional guidance for students and early-career individuals in the legal field.",
        helpWith: [
            "Mentoring students progressing into professional legal careers.",
            "Delivering modules on Public Law and Legal Methods.",
            "Providing career guidance within the UK and international legal landscapes."
        ],
        steps: [
            "Mentorship program structures.",
            "Lesson plans for Public Law/Legal Method.",
            "Career development roadmaps."
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]} />
            {/* Hero Section */}
            <section className="bg-zinc-50 dark:bg-zinc-950 py-20 border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Professional Legal Support & Advisory
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Methodical, research-driven support tailored to high-stakes and compliance-driven environments across UK and international jurisdictions.
                        </p>
                    </Reveal>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
                    {/* Sticky Sidebar Navigation (Desktop) */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-32 space-y-4">
                            <h2 className="text-xs font-sans uppercase tracking-widest text-accent font-bold mb-6">Explore Services</h2>
                            <nav className="flex flex-col gap-2">
                                {services.map((s) => (
                                    <Link
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-accent transition-colors py-2"
                                    >
                                        <div className="h-px w-4 bg-muted-foreground group-hover:w-8 group-hover:bg-accent transition-all" />
                                        {s.title}
                                    </Link>
                                ))}
                            </nav>
                            <div className="pt-10 border-t border-border mt-10">
                                <p className="text-xs text-muted-foreground leading-relaxed mb-6 italic">
                                    Available for independent consultation and collaborative support for legal firms.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:underline"
                                >
                                    Request Service Details <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Areas */}
                    <main className="lg:col-span-3 space-y-20 md:space-y-32">
                        {services.map((service, i) => (
                            <section key={service.id} id={service.id} className="scroll-mt-32">
                                <Reveal>
                                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                                        <div className="p-4 bg-muted rounded-xl bg-accent/5 inline-flex">
                                            {service.icon}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-serif">{service.title}</h2>
                                    </div>

                                    <p className="text-xl text-foreground mb-12 max-w-2xl leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        {/* What I help with */}
                                        <div>
                                            <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-accent font-bold mb-6">What I help with</h3>
                                            <ul className="space-y-4">
                                                {service.helpWith.map((item, idx) => (
                                                    <li key={idx} className="flex gap-3 text-foreground/80 leading-relaxed">
                                                        <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Typical documents/steps */}
                                        <div className="bg-muted/30 p-8 rounded-xl border border-border">
                                            <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-accent font-bold mb-6">Typical documents/steps</h3>
                                            <ul className="space-y-4 font-medium text-sm">
                                                {service.steps.map((step, idx) => (
                                                    <li key={idx} className="flex items-center gap-3">
                                                        <div className="h-1.5 w-1.5 bg-accent rounded-full" />
                                                        {step}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-border/50 flex flex-wrap gap-4">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold text-sm hover:opacity-90 transition-all"
                                        >
                                            Enquire about this service <ArrowRight size={16} />
                                        </Link>
                                        <Link
                                            href="/representative-matters"
                                            className="inline-flex items-center gap-2 border border-primary px-6 py-3 rounded-md font-bold text-sm hover:bg-muted transition-all"
                                        >
                                            View related matters
                                        </Link>
                                    </div>
                                </Reveal>
                            </section>
                        ))}
                    </main>
                </div>
            </div>

            {/* Global Disclaimer */}
            <section className="py-20 bg-muted/20 border-t border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="max-w-3xl mx-auto text-center">
                        <h2 className="text-xl font-serif mb-6">Regulatory Notice & Professional Standards</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            These services are provided as legal support and advisory in accordance with professional regulatory frameworks. Muhtasim Billah adheres to the Bar Standards Board (BSB) in the UK and the Bangladesh Bar Council regulations. Direct instructions are subject to professional status and conflict-of-interest checks.
                        </p>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
