import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Briefcase, Scale, Building2, HandHeart, Linkedin, Facebook, Mail, Phone, Award, Users, Globe, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export default function Home() {
    return (
        <div className="flex flex-col">
            {/* Enhanced Hero Section */}
            <section className="relative w-full bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 overflow-hidden border-b-2 border-zinc-200 dark:border-zinc-800">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.5) 35px, rgba(0,0,0,.5) 70px)`
                }}></div>

                {/* Floating Particles */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-accent/30 rounded-full animate-pulse" />
                <div className="absolute top-40 right-20 w-3 h-3 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

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

                            <div className="flex flex-wrap gap-4 mb-8">
                                <Link
                                    href="/contact"
                                    className="group flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-xl hover:scale-105"
                                >
                                    Connect
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a
                                    href="https://drive.google.com/file/d/1ukrrYkYlrSft5b0O3AxJUQVuR_yoTAxw/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 border-2 border-accent/50 hover:border-accent px-8 py-4 rounded-xl font-bold hover:bg-accent/5 transition-all bg-white dark:bg-zinc-800 hover:scale-105 shadow-lg"
                                >
                                    <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                                    Download CV
                                </a>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a
                                    href="https://linkedin.com/in/muhtasimbillah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-white dark:bg-zinc-800 rounded-xl hover:bg-accent/10 dark:hover:bg-accent/20 transition-all border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent hover:shadow-lg hover:-translate-y-1 duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                                </a>
                                <a
                                    href="https://facebook.com/billah.mak"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-white dark:bg-zinc-800 rounded-xl hover:bg-accent/10 dark:hover:bg-accent/20 transition-all border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent hover:shadow-lg hover:-translate-y-1 duration-300"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                                </a>
                                <Link
                                    href="/contact"
                                    className="group p-3 bg-white dark:bg-zinc-800 rounded-xl hover:bg-accent/10 dark:hover:bg-accent/20 transition-all border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent hover:shadow-lg hover:-translate-y-1 duration-300"
                                    aria-label="Email"
                                >
                                    <Mail size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                                </Link>
                                <a
                                    href="https://wa.me/447716472919"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-white dark:bg-zinc-800 rounded-xl hover:bg-green-500/10 dark:hover:bg-green-500/20 transition-all border-2 border-zinc-200 dark:border-zinc-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg hover:-translate-y-1 duration-300"
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

            {/* Stats Section */}
            <section className="relative py-16 bg-white dark:bg-zinc-900 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <Reveal delay={0.1}>
                            <div className="group relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden text-center">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10+</div>
                                    <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="group relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden text-center">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</div>
                                    <div className="text-sm text-muted-foreground font-medium">Cases Handled</div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="group relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden text-center">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">2</div>
                                    <div className="text-sm text-muted-foreground font-medium">Jurisdictions</div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="group relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden text-center">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">95%</div>
                                    <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Areas of Expertise Section */}
            <section className="relative w-full bg-zinc-50 dark:bg-zinc-950 py-20 md:py-24 border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent" />
                                <span className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold mx-4">Expertise</span>
                                <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
                                Areas of Practice
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        <Reveal delay={0.1}>
                            <div className="group relative bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-start gap-4">
                                    <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Briefcase className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Corporate Law</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Comprehensive corporate legal services, labor relations, and dispute resolution strategies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="group relative bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-start gap-4">
                                    <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Scale className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Dispute Resolution</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Expert management of complex litigation and alternative dispute resolution mechanisms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="group relative bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-start gap-4">
                                    <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Building2 className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Constitutional Law</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Specialized constitutional litigation and public law advisory services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <div className="group relative bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-start gap-4">
                                    <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                                        <HandHeart className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Human Rights</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            Dedicated advocacy for human rights protection and social justice initiatives.
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
