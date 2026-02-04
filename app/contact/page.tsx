import { Reveal } from "@/components/reveal";
import { Mail, Phone, MapPin, ShieldCheck, MessageCircle, Send } from "lucide-react";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/schema";
import { ContactClient } from "@/components/contact-client";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Muhtasim Billah for legal consultation, drafting support, or compliance advisory in the UK and Bangladesh.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />

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
                            <span className="text-sm font-sans uppercase tracking-[0.3em] text-accent font-bold mx-4">Get in Touch</span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-serif mb-8 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent leading-tight">
                            Connect for<br />Consultation
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
                            Available for professional legal support, compliance advisory, and international cross-border consultations.
                        </p>

                        {/* Contact Methods Badge */}
                        <div className="flex items-center justify-center gap-6">
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full">
                                <MessageCircle className="text-accent" size={20} />
                                <span className="font-bold text-accent">Multiple Contact Options</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 md:py-32 bg-white dark:bg-zinc-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

                        {/* Enhanced Contact Info */}
                        <Reveal className="flex flex-col">
                            <div className="flex items-center gap-3 mb-12">
                                <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-accent" />
                                <h2 className="text-3xl md:text-4xl font-serif">Contact Information</h2>
                            </div>

                            <div className="space-y-6">
                                {/* Email Card */}
                                <div className="group relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative flex items-start gap-4">
                                        <div className="h-14 w-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                            <Mail size={28} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Email Inquiry</p>
                                            <a href="mailto:billah.mak@gmail.com" className="text-lg font-medium hover:text-accent transition-colors block break-all">
                                                billah.mak@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* WhatsApp Card */}
                                <div className="group relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative flex items-start gap-4">
                                        <div className="h-14 w-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                            <Phone size={28} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">WhatsApp</p>
                                            <a
                                                href="https://wa.me/447716472919"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg font-medium hover:text-accent transition-colors flex items-center gap-2 flex-wrap"
                                            >
                                                +44 7716 472919
                                                <span className="inline-flex items-center gap-1.5 text-xs bg-accent/10 border border-accent text-accent px-2.5 py-0.5 rounded-full font-semibold">WhatsApp</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Location Card */}
                                <div className="group relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-6 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative flex items-start gap-4">
                                        <div className="h-14 w-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                            <MapPin size={28} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Location</p>
                                            <p className="text-lg font-medium">London, United Kingdom</p>
                                            <p className="text-sm text-muted-foreground mt-1">Operating across UK & Internationally</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Confidentiality Box */}
                            <div className="mt-12 relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                                <div className="relative flex items-start gap-4">
                                    <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                                        <ShieldCheck className="text-accent" size={24} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="h-px w-8 bg-accent" />
                                            <span className="text-sm font-bold uppercase tracking-widest text-accent">Confidentiality</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            All communications are treated with the utmost professional discretion. Please avoid sending sensitive case documents before a formal professional engagement has been established.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <ContactClient />

                    </div>
                </div>
            </section>
        </div>
    );
}
