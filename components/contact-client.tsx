"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

export const ContactClient = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setApiError(null);

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    title: "New Contact Message",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (result.status === 200) {
                setIsSuccess(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
            }
        } catch (error) {
            console.error("Email sending failed:", error);
            setApiError("Failed to send message. Please try again or contact directly via email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[40vh] px-4 text-center">
                <Reveal>
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-150" />

                        <div className="relative h-24 w-24 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-accent/20">
                            <CheckCircle2 size={48} />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif mb-6">Message Sent Successfully</h1>
                    <p className="text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed">
                        Thank you for reaching out. I will review your inquiry and get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="group inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-xl hover:scale-105"
                    >
                        Send Another Message
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Reveal>
            </div>
        );
    }

    return (
        <Reveal delay={200}>
            <div className="relative bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-800 dark:to-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 p-8 md:p-10 rounded-2xl shadow-sm overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

                <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-accent" />
                        <h2 className="text-2xl md:text-3xl font-serif">Send a Message</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-accent">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className={cn(
                                        "w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all",
                                        errors.name ? "border-red-500" : "border-zinc-200 dark:border-zinc-700 focus:border-accent"
                                    )}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                />
                                {errors.name && <p id="name-error" className="text-xs text-red-500 font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-accent">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    className={cn(
                                        "w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all",
                                        errors.email ? "border-red-500" : "border-zinc-200 dark:border-zinc-700 focus:border-accent"
                                    )}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                />
                                {errors.email && <p id="email-error" className="text-xs text-red-500 font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-accent">Inquiry Type</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                            >
                                <option value="">General Inquiry</option>
                                <option value="legal-analysis">Legal Analysis & Research</option>
                                <option value="drafting">Drafting & Case Prep</option>
                                <option value="compliance">Compliance Advisory</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-accent">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Briefly describe your inquiry..."
                                className={cn(
                                    "w-full px-4 py-3 rounded-xl border-2 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none",
                                    errors.message ? "border-red-500" : "border-zinc-200 dark:border-zinc-700 focus:border-accent"
                                )}
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : undefined}
                            />
                            {errors.message && <p id="message-error" className="text-xs text-red-500 font-bold flex items-center gap-1"><AlertCircle size={12} /> {errors.message}</p>}
                        </div>

                        {apiError && (
                            <div className="p-4 bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
                                <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-red-700 dark:text-red-400">{apiError}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group w-full flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-xl hover:scale-105"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                        </button>

                        <div className="flex items-center justify-center gap-2 pt-4">
                            <Sparkles className="text-accent" size={14} />
                            <p className="text-xs text-center text-muted-foreground uppercase tracking-widest">
                                Response typically within 24-48 hours
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Reveal>
    );
};
