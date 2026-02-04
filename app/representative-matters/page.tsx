import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/schema";
import { MattersClient } from "@/components/matters-client";

export const metadata: Metadata = {
    title: "Representative Matters",
    description: "Anonymized record of professional engagements across constitutional, civil, and criminal law jurisdictions.",
};

export default function MattersPage() {
    return (
        <div className="flex flex-col">
            <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Matters", url: "/representative-matters" }]} />
            {/* Header */}
            <section className="bg-zinc-50 dark:bg-zinc-950 py-20 border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6">
                            Representative Matters
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A record of selected professional engagements and case support. All descriptions are anonymized to uphold professional privilege and client confidentiality.
                        </p>
                    </Reveal>
                </div>
            </section>

            <MattersClient />

            {/* CTA Section */}
            <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-border">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-serif mb-10">Inquire about specific sector experience?</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                            Specific case lists, redacted drafting samples, and professional references can be provided upon direct request to legal professionals and firms.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-md font-bold hover:opacity-90 transition-all shadow-xl"
                            >
                                Direct Inquiry <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/services"
                                className="flex items-center gap-2 border-2 border-primary px-10 py-4 rounded-md font-bold hover:bg-muted transition-all"
                            >
                                View Services
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
