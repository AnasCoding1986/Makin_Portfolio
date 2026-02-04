"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
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
                    <div className="h-20 w-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={48} />
                    </div>
                    <h1 className="text-4xl font-serif mb-4">Message Sent Successfully</h1>
                    <p className="text-xl text-muted-foreground max-w-lg mb-10">
                        Thank you for reaching out. I will review your inquiry and get back to you as soon as possible.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:opacity-90 transition-all"
                    >
                        Send Another Message
                    </button>
                </Reveal>
            </div>
        );
    }

    return (
        <Reveal delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-background border border-border p-8 md:p-10 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-foreground">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all",
                                errors.name ? "border-red-500" : "border-border"
                            )}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && <p id="name-error" className="text-[10px] text-red-500 font-bold uppercase mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-foreground">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="email@example.com"
                            className={cn(
                                "w-full px-4 py-3 rounded-lg border bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all",
                                errors.email ? "border-red-500" : "border-border"
                            )}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && <p id="email-error" className="text-[10px] text-red-500 font-bold uppercase mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</p>}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-foreground">Inquiry Type</label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    >
                        <option value="">General Inquiry</option>
                        <option value="legal-analysis">Legal Analysis & Research</option>
                        <option value="drafting">Drafting & Case Prep</option>
                        <option value="compliance">Compliance Advisory</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-foreground">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your inquiry..."
                        className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-zinc-50 dark:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none",
                            errors.message ? "border-red-500" : "border-border"
                        )}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <p id="message-error" className="text-[10px] text-red-500 font-bold uppercase mt-1 flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</p>}
                </div>

                {apiError && (
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                        <AlertCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700 dark:text-red-400">{apiError}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-lg font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg group"
                >
                    {isSubmitting ? "Processing..." : "Send Message"}
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>

                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest mt-4">
                    Response typically within 24-48 hours
                </p>
            </form>
        </Reveal>
    );
};
