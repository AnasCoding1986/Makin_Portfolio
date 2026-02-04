import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Briefcase, Scale, Building2, HandHeart, Linkedin, Facebook, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Enhanced Hero Section */}
            <section className="relative w-full bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.5) 35px, rgba(0,0,0,.5) 70px)`
                }}></div>

                <div className="container mx-auto px-4 md:px-6 py-16 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <Reveal>
                        <div className="flex flex-col order-2 lg:order-1">
                            <h1 className="text-5xl md:text-7xl font-serif mb-4 leading-tight bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
                                Muhtasim Billah
                            </h1>

                            {/* Accent Line */}
                            <div className="w-32 h-1 bg-gradient-to-r from-accent to-accent/50 mb-6"></div>

                            <p className="text-lg md:text-xl text-muted-foreground mb-6 font-medium">
                                Barrister of England & Wales | Advocate (Bangladesh)
                            </p>

                            <p className="text-base md:text-lg text-foreground/80 mb-10 leading-relaxed max-w-xl">
                                Dedicated to practicing law with precision and a commitment to justice. Providing authoritative legal counsel and personalized representation for complex cases.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all shadow-lg text-base hover-lift hover:scale-105"
                                >
                                    Connect <ArrowRight size={20} />
                                </Link>
                                <button className="flex items-center gap-2 border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-all bg-background text-base group hover-lift hover:shadow-lg hover:border-primary/80">
                                    <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                                    Download CV
                                </button>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-3 mt-8">
                                <a
                                    href="https://linkedin.com/in/muhtasimbillah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-white dark:bg-zinc-800 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transition-all border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent hover:shadow-lg hover:-translate-y-1 duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                                </a>
                                <a
                                    href="https://facebook.com/billah.mak"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-white dark:bg-zinc-800 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transition-all border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent hover:shadow-lg hover:-translate-y-1 duration-300"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                                </a>
                                <Link
                                    href="/contact"
                                    className="group p-3 bg-white dark:bg-zinc-800 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transition-all border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent hover:shadow-lg hover:-translate-y-1 duration-300"
                                    aria-label="Email"
                                >
                                    <Mail size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                                </Link>
                                <a
                                    href="https://wa.me/447716472919"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-white dark:bg-zinc-800 rounded-lg hover:bg-green-500/10 dark:hover:bg-green-500/20 transition-all border border-zinc-200 dark:border-zinc-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg hover:-translate-y-1 duration-300"
                                    aria-label="WhatsApp"
                                >
                                    <Phone size={20} className="text-muted-foreground group-hover:text-green-500 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                            {/* Professional Portrait */}
                            <div className="group relative w-full max-w-md aspect-[4/5] bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-700 hover:border-accent/30 dark:hover:border-accent/40 hover:shadow-3xl transition-all duration-700 ease-out hover:scale-[1.01]">
                                <Image
                                    src="https://i.ibb.co.com/m71KsdN/Makin-Profile.png"
                                    alt="Muhtasim Billah - Professional Portrait"
                                    fill
                                    className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Areas of Expertise Section */}
            <section className="relative w-full bg-white dark:bg-zinc-900 py-20 border-t border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">
                            Areas of Expertise
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Reveal delay={0.1}>
                            <div className="group p-8 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                                        <Briefcase className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-serif font-bold mb-2 text-foreground">Corporate Law</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Corporate law, labor and dispute resolutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="group p-8 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                                        <Scale className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-serif font-bold mb-2 text-foreground">Dispute Resolution</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Deft management of dispute resolution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="group p-8 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                                        <Building2 className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-serif font-bold mb-2 text-foreground">Constitutional Law</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Constitutional Law, and constitutional law.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="group p-8 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                                        <HandHeart className="w-6 h-6 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-serif font-bold mb-2 text-foreground">Human Rights</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Human rights, protection and human rights.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
}
