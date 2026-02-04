import { Reveal } from "@/components/reveal";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
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
            {/* Header */}
            <section className="bg-zinc-50 dark:bg-zinc-950 py-20 border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Connect for Consultation
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Available for professional legal support, compliance advisory, and international cross-border consultations.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 md:py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                        {/* Contact Info */}
                        <Reveal className="flex flex-col">
                            <h2 className="text-3xl font-serif mb-10">Get in Touch</h2>
                            <div className="space-y-10">
                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Inquiry</p>
                                        <a href="mailto:billah.mak@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">billah.mak@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</p>
                                        <a
                                            href="https://wa.me/447716472919"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-medium hover:text-accent transition-colors flex items-center gap-2"
                                        >
                                            +44 7716 472919
                                            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="h-12 w-12 rounded-xl bg-accent/5 text-accent flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                                        <p className="text-lg font-medium">London, United Kingdom</p>
                                        <p className="text-sm text-muted-foreground">Operating across UK & Internationally</p>
                                    </div>
                                </div>
                            </div>

                            {/* Confidentiality Box */}
                            <div className="mt-16 p-8 bg-muted/30 border border-border rounded-xl">
                                <div className="flex items-center gap-3 mb-4 text-accent">
                                    <ShieldCheck size={20} />
                                    <span className="text-sm font-bold uppercase tracking-widest">Confidentiality</span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    All communications are treated with the utmost professional discretion. Please avoid sending sensitive case documents before a formal professional engagement has been established.
                                </p>
                            </div>
                        </Reveal>

                        <ContactClient />

                    </div>
                </div>
            </section>
        </div>
    );
}
