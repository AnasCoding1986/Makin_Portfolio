"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
    q: string;
    a: string;
}

export const FAQSection = ({ items }: { items: FAQItem[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-serif mb-8">Frequently Asked Questions</h3>
            <div className="space-y-4">
                {items.map((item, i) => (
                    <div key={i} className="border border-border rounded-lg overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-5 text-left bg-muted/20 hover:bg-muted/40 transition-colors"
                            aria-expanded={openIndex === i}
                            aria-controls={`faq-answer-${i}`}
                        >
                            <span className="font-bold text-sm uppercase tracking-wider">{item.q}</span>
                            {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        <div
                            id={`faq-answer-${i}`}
                            role="region"
                            className={cn(
                                "overflow-hidden transition-all duration-300 ease-in-out",
                                openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            )}
                        >
                            <p className="p-5 text-muted-foreground leading-relaxed bg-background">
                                {item.a}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
