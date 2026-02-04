"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { Logo } from "@/components/logo";

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Experience", href: "/experience" },
    { label: "Matters", href: "/representative-matters" },
    { label: "Insights", href: "/insights" },
];

export const Navbar = () => {
    const pathname = usePathname();
    const scrolled = useScrollTop();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on navigation or escape key
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full transition-all duration-300 border-b",
                scrolled || isOpen
                    ? "bg-white dark:bg-zinc-950 py-2 border-border shadow-sm z-50"
                    : "bg-transparent py-6 border-transparent z-50"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-10">
                <Logo />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-base font-semibold transition-colors hover:text-accent",
                                pathname === link.href ? "text-accent" : "text-foreground/80"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-base font-semibold hover:opacity-90 hover:shadow-lg transition-all group"
                    >
                        Connect <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform motion-reduce:transform-none" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "md:hidden flex items-center justify-center h-12 w-12 -mr-2 relative z-50 transition-colors rounded-lg",
                        isOpen ? "text-foreground bg-zinc-100 dark:bg-zinc-800" : "text-foreground"
                    )}
                    aria-expanded={isOpen}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 top-0 z-40 md:hidden transition-transform duration-300 ease-in-out bg-white dark:bg-zinc-950 overflow-y-auto",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col pt-[72px] px-6 pb-6 gap-2 min-h-screen">
                    {/* Close Button Inside Menu */}
                    <div className="flex justify-between items-start mb-4">
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-serif font-bold text-foreground hover:text-accent transition-colors">
                            Muhtasim Billah
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-foreground hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-base font-serif border-b border-border pb-2",
                                pathname === link.href ? "text-accent" : "text-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="flex items-center justify-between bg-primary text-primary-foreground p-4 rounded-xl text-base font-semibold mt-2"
                    >
                        Connect <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};
