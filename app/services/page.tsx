import { Reveal } from "@/components/reveal";
import { ArrowRight, BookOpen, Briefcase, Gavel, Globe, Users, GraduationCap, CheckCircle2, Sparkles, FileText, Shield } from "lucide-react";
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
        icon: <BookOpen className="text-white" size={32} />,
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
        icon: <Briefcase className="text-white" size={32} />,
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
        icon: <Gavel className="text-white" size={32} />,
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
        icon: <Globe className="text-white" size={32} />,
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
        icon: <Users className="text-white" size={32} />,
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
        icon: <GraduationCap className="text-white" size={32} />,
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
                            <span className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold mx-4">Services</span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif mb-8 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent leading-tight">
                            Professional Legal<br />Support & Advisory
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Methodical, research-driven support tailored to high-stakes and compliance-driven environments across UK and international jurisdictions.
                        </p>

                        {/* Service Count Badge */}
                        <div className="flex items-center justify-center gap-6 mt-12">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
                                <Sparkles className="text-accent" size={20} />
                                <span className="font-bold text-accent">{services.length} Specialized Services</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
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
                                        className="group flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-accent transition-all py-2 duration-300"
                                    >
                                        <div className="h-px w-4 bg-muted-foreground group-hover:w-8 group-hover:bg-accent transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{s.title}</span>
                                    </Link>
                                ))}
                            </nav>
                            <div className="pt-10 border-t border-border mt-10">
                                <p className="text-xs text-muted-foreground leading-relaxed mb-6 italic">
                                    Available for independent consultation and collaborative support for legal firms.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:underline group"
                                >
                                    Request Service Details
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Areas */}
                    <main className="lg:col-span-3 space-y-16 md:space-y-24">
                        {services.map((service, i) => (
                            <section key={service.id} id={service.id} className="scroll-mt-32">
                                <Reveal>
                                    <div className="group relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-3xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-500 overflow-hidden hover:shadow-2xl hover:scale-[1.02]">
                                        {/* Decorative Glow */}
                                        <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative p-8 md:p-12">
                                            {/* Header */}
                                            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                                                <div className="p-5 bg-accent rounded-2xl shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 inline-flex">
                                                    {service.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">{service.title}</h2>
                                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                                                {/* What I help with */}
                                                <div>
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <div className="h-px w-8 bg-accent" />
                                                        <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-accent font-bold">What I help with</h3>
                                                    </div>
                                                    <ul className="space-y-4">
                                                        {service.helpWith.map((item, idx) => (
                                                            <li key={idx} className="group/item flex gap-3 text-foreground/90 leading-relaxed hover:text-foreground transition-colors">
                                                                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Typical documents/steps */}
                                                <div className="relative bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                                                    <div className="absolute top-4 right-4 opacity-10">
                                                        <FileText size={48} className="text-accent" />
                                                    </div>
                                                    <div className="flex items-center gap-3 mb-6 relative">
                                                        <div className="h-px w-8 bg-accent" />
                                                        <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-accent font-bold">Typical deliverables</h3>
                                                    </div>
                                                    <ul className="space-y-4 font-medium text-sm relative">
                                                        {service.steps.map((step, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 group/step">
                                                                <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 group-hover/step:scale-150 transition-transform" />
                                                                <span className="text-foreground/80 group-hover/step:text-foreground transition-colors">{step}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* CTA Buttons */}
                                            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700/50 flex flex-wrap gap-4">
                                                <Link
                                                    href="/contact"
                                                    className="group/btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-sm hover:shadow-xl transition-all hover:scale-105"
                                                >
                                                    Enquire about this service
                                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                                <Link
                                                    href="/representative-matters"
                                                    className="group/btn inline-flex items-center gap-2 border-2 border-accent/50 hover:border-accent px-8 py-4 rounded-xl font-bold text-sm hover:bg-accent/5 transition-all hover:scale-105 bg-white dark:bg-zinc-800"
                                                >
                                                    View related matters
                                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </section>
                        ))}
                    </main>
                </div>
            </div>

            {/* Global Disclaimer */}
            <section className="py-20 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="max-w-4xl mx-auto">
                        <div className="relative bg-white dark:bg-zinc-900 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 p-10 md:p-12 overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

                            <div className="relative text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
                                    <Shield className="text-accent" size={16} />
                                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Professional Standards</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-serif mb-6 text-foreground">Regulatory Notice</h2>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    These services are provided as legal support and advisory in accordance with professional regulatory frameworks. Muhtasim Billah adheres to the Bar Standards Board (BSB) in the UK and the Bangladesh Bar Council regulations. Direct instructions are subject to professional status and conflict-of-interest checks.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
