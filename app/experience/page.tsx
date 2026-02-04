import { Reveal } from "@/components/reveal";
import { Briefcase, Calendar, MapPin, Download } from "lucide-react";
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
        org: "His Majesty’s Prison & Probation Service, UK",
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
        org: "Judge’s Court",
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
            {/* Header */}
            <section className="bg-zinc-50 dark:bg-zinc-950 py-20 border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Professional Chronology
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A dual-jurisdictional career history spanning the United Kingdom and Bangladesh, characterized by high-stakes advocacy, compliance, and legal support.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Primary: UK Experience */}
            <section className="py-20 md:py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="mb-16">
                        <h2 className="text-sm font-sans uppercase tracking-[0.2em] text-accent font-bold mb-4">Primary Jurisdiction</h2>
                        <h3 className="text-3xl md:text-4xl font-serif">United Kingdom Experience</h3>
                    </Reveal>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border before:to-transparent">
                        {ukExperience.map((exp, i) => (
                            <Reveal key={i} delay={i * 100} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">
                                {/* Dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-accent shadow absolute left-0 md:left-1/2 md:-ml-5 z-10 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <Briefcase size={18} />
                                </div>

                                {/* Content */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-xl border border-border bg-background hover:border-accent transition-all duration-300 hover:shadow-lg">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                        <h4 className="text-xl md:text-2xl font-serif">{exp.role}</h4>
                                        <span className="text-xs font-bold font-sans uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full text-accent whitespace-nowrap">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-foreground/80 font-bold mb-6">
                                        <MapPin size={14} className="text-accent" />
                                        {exp.org}
                                    </div>
                                    <ul className="space-y-3">
                                        {exp.bullets.map((bullet, idx) => (
                                            <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex gap-3">
                                                <div className="h-1 w-1 bg-accent rounded-full shrink-0 mt-2" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Secondary: International Experience */}
            <section className="py-20 md:py-32 bg-muted/20 border-t border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="mb-16">
                        <h2 className="text-sm font-sans uppercase tracking-[0.2em] text-accent font-bold mb-4">Secondary Depth</h2>
                        <h3 className="text-3xl md:text-4xl font-serif">International Experience (Bangladesh)</h3>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {internationalExperience.map((exp, i) => (
                            <Reveal key={i} delay={i * 50} className="p-8 bg-background border border-border rounded-xl hover:border-accent/50 transition-all group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-muted rounded-lg group-hover:bg-accent/10 transition-colors">
                                        <Calendar className="text-accent" size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold font-sans uppercase tracking-[0.2em] text-muted-foreground">
                                        {exp.duration}
                                    </span>
                                </div>
                                <h4 className="text-xl font-serif mb-2">{exp.role}</h4>
                                <p className="text-foreground/80 font-bold text-sm mb-4">{exp.org}</p>
                                <ul className="space-y-3">
                                    {exp.bullets.map((bullet, idx) => (
                                        <li key={idx} className="text-muted-foreground text-xs leading-relaxed flex gap-2">
                                            <div className="h-1 w-1 bg-accent/50 rounded-full shrink-0 mt-1.5" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 bg-primary text-primary-foreground border-t border-border">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Reveal>
                        <h3 className="text-3xl md:text-4xl font-serif mb-8 text-white">Full Credentials Available</h3>
                        <p className="text-lg opacity-80 mb-12 max-w-2xl mx-auto">
                            For a comprehensive overview of cases, detailed references, or educational certifications, please request the full professional portfolio.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-md font-bold hover:brightness-110 transition-all shadow-xl group">
                                Download PDF CV <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                            </button>
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 border-2 border-white/20 px-10 py-4 rounded-md font-bold hover:bg-white hover:text-primary transition-all"
                            >
                                Inquire Directly
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
