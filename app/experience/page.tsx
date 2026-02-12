import { Reveal } from "@/components/reveal";
import { Briefcase, Calendar, MapPin, Download, Sparkles, Award, TrendingUp, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/schema";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Experience",
    description: "Chronology of Muhtasim Billah's legal career in the UK and Bangladesh, including roles in litigation, advisory, and public service.",
};

const ukExperience = [
    {
        role: "Prison Officer",
        org: "His Majesty's Prison & Probation Service, UK",
        duration: "Jun 2024 – Present",
        location: "United Kingdom",
        bullets: [
            "Operate within stringent legal, human rights, and safeguarding frameworks.",
            "Manage highly sensitive information with discretion and professional judgement.",
            "De-escalate conflict; prepare detailed reports and liaise with legal agencies.",
            "Recognised for maintaining dignity and composure in high-pressure environments."
        ]
    },
    {
        role: "Pro Bono Legal Assistant",
        org: "Law Dale Solicitors, London, UK",
        duration: "Nov 2023 – Present",
        location: "London, UK",
        bullets: [
            "Support civil and criminal case preparation through research, drafting, and bundles.",
            "Assist with client correspondence and procedural compliance.",
            "Build trusted relationships with vulnerable clients."
        ]
    },
    {
        role: "Shift Leader",
        org: "Tesco Stores Ltd, UK",
        duration: "Feb 2023 – Sep 2024",
        location: "United Kingdom",
        bullets: [
            "Led teams in a compliance-driven environment.",
            "Managed incidents, financial controls, and disputes.",
            "Delivered tailored customer service in high-volume operations (previously as Assistant)."
        ]
    }
];

const internationalExperience = [
    {
        role: "Lawyer",
        org: "Supreme Court of Bangladesh (High Court Division)",
        duration: "Apr 2019 – Present",
        location: "Dhaka, Bangladesh",
        bullets: [
            "Represent clients in constitutional, civil, and family law matters.",
            "Draft complex writ petitions and submissions in major disputes.",
            "Known for persuasive advocacy and client-centred professionalism."
        ]
    },
    {
        role: "Income Tax Lawyer",
        org: "Sylhet Taxes Bar Association",
        duration: "Jan 2018 – Present",
        location: "Sylhet, Bangladesh",
        bullets: [
            "Advise on tax compliance, regulatory obligations, and dispute resolution.",
            "Represent clients in tribunal hearings and appeals."
        ]
    },
    {
        role: "Legal Practitioner",
        org: "Judge's Court",
        duration: "Oct 2014 – Present",
        location: "Sylhet, Bangladesh",
        bullets: [
            "Conduct litigation across civil, criminal, and family law.",
            "Manage full case lifecycle from consultation to judgment."
        ]
    },
    {
        role: "Associate",
        org: "The Law Castle – A.K.M. Faiz & Associates",
        duration: "Oct 2014 – Dec 2021",
        location: "Dhaka, Bangladesh",
        bullets: [
            "Led legal drafting across civil, criminal, and commercial matters.",
            "Managed litigation support and client liaison.",
            "Worked closely with senior counsel on complex disputes."
        ]
    },
    {
        role: "Law Lecturer",
        org: "Bengal Institute of Business & Law",
        duration: "Jan 2018 – Dec 2021",
        location: "Sylhet, Bangladesh",
        bullets: [
            "Delivered modules in Public Law and Legal Method.",
            "Mentored students progressing into professional legal careers."
        ]
    },
    {
        role: "Associate → Senior Associate",
        org: "Mazumder & Associates",
        duration: "Jan 2008 – Oct 2014",
        location: "Sylhet, Bangladesh",
        bullets: [
            "Supervised junior teams and coordinated complex litigation files.",
            "Built a reputation for reliability and high professional standards."
        ]
    }
];

export default function ExperiencePage() {
    return (
        <div className="flex flex-col">
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Experience", url: "/experience" }]} />

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
                            <span className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold mx-4">Experience</span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif mb-8 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent leading-tight">
                            Professional<br />Chronology
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
                            A dual-jurisdictional career history spanning the United Kingdom and Bangladesh, characterized by high-stakes advocacy, compliance, and legal support.
                        </p>

                        {/* Career Statistics */}
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
                                <TrendingUp className="text-accent" size={20} />
                                <span className="font-bold text-accent">16+ Years Experience</span>
                            </div>
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
                                <Building2 className="text-accent" size={20} />
                                <span className="font-bold text-accent">9 Professional Roles</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Primary: UK Experience */}
            <section className="py-24 md:py-32 bg-white dark:bg-zinc-900">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
                            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold">Primary Jurisdiction</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-serif text-foreground">United Kingdom Experience</h3>
                    </Reveal>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/50 before:via-accent/30 before:to-transparent">
                        {ukExperience.map((exp, i) => (
                            <Reveal key={i} delay={i * 100} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">
                                {/* Enhanced Timeline Dot */}
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-accent bg-white dark:bg-zinc-900 shadow-lg absolute left-0 md:left-1/2 md:-ml-6 z-10 group-hover:bg-accent group-hover:scale-125 transition-all duration-300">
                                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Briefcase size={20} className="text-accent group-hover:text-white transition-colors relative z-10" />
                                </div>

                                {/* Enhanced Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] group-hover:scale-[1.02] transition-all duration-300">
                                    <div className="relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-8 md:p-10 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 group-hover:border-accent transition-all duration-300 shadow-sm group-hover:shadow-2xl overflow-hidden">
                                        {/* Decorative Glow */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative">
                                            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                                <h4 className="text-2xl md:text-3xl font-serif text-foreground flex-1">{exp.role}</h4>
                                                <span className="text-xs font-bold font-sans uppercase tracking-widest bg-accent/10 px-4 py-2 rounded-full text-accent whitespace-nowrap border border-accent/20">
                                                    {exp.duration}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm font-bold mb-8 text-foreground/80">
                                                <MapPin size={16} className="text-accent" />
                                                {exp.org}
                                            </div>

                                            <ul className="space-y-4">
                                                {exp.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="group/item text-muted-foreground text-sm leading-relaxed flex gap-3 hover:text-foreground transition-colors">
                                                        <div className="h-1.5 w-1.5 bg-accent rounded-full shrink-0 mt-2 group-hover/item:scale-150 transition-transform" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Secondary: International Experience */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
                            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold">Secondary Depth</h2>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-serif text-foreground">International Experience (Bangladesh)</h3>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {internationalExperience.map((exp, i) => (
                            <Reveal key={i} delay={i * 50}>
                                <div className="group h-full relative bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 p-8 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
                                    {/* Decorative Glow */}
                                    <div className="absolute top-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-accent rounded-xl shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                                                <Calendar className="text-white" size={24} />
                                            </div>
                                            <span className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1 rounded-full">
                                                {exp.duration.split(' – ')[0]}
                                            </span>
                                        </div>

                                        <h4 className="text-xl md:text-2xl font-serif mb-3 text-foreground">{exp.role}</h4>
                                        <p className="text-foreground/80 font-bold text-sm mb-6 leading-relaxed">{exp.org}</p>

                                        <ul className="space-y-3">
                                            {exp.bullets.map((bullet, idx) => (
                                                <li key={idx} className="group/item text-muted-foreground text-sm leading-relaxed flex gap-3 hover:text-foreground transition-colors">
                                                    <div className="h-1 w-1 bg-accent rounded-full shrink-0 mt-2 group-hover/item:scale-150 transition-transform" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Footer CTA */}
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
                                <Award className="text-accent" size={20} />
                                <span className="text-sm font-bold text-accent uppercase tracking-wider">Full Credentials</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-serif mb-6 text-white">Complete Professional Portfolio</h3>
                            <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed">
                                For a comprehensive overview of cases, detailed references, or educational certifications, please request the full professional portfolio.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <a
                                    href="https://drive.google.com/file/d/1ukrrYkYlrSft5b0O3AxJUQVuR_yoTAxw/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 bg-accent text-white px-10 py-5 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl hover:scale-105"
                                >
                                    Download PDF CV
                                    <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                </a>
                                <Link
                                    href="/contact"
                                    className="group flex items-center gap-2 border-2 border-white/30 px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-primary transition-all hover:scale-105 bg-white/5"
                                >
                                    Inquire Directly
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
