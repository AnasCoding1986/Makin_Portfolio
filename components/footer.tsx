import Link from "next/link";
import { Linkedin, Facebook, Mail, Phone } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-t-2 border-accent/20">
            {/* Decorative top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <h3 className="font-serif font-bold text-3xl mb-2 bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
                            Muhtasim Billah
                        </h3>

                        {/* Accent Line */}
                        <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/50 mb-4"></div>

                        <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
                            Barrister of England & Wales | Advocate (Bangladesh). Delivering justice with both precision and conscience.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
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


                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-foreground">Navigation</h4>
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {[
                                { label: "About", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Experience", href: "/experience" },
                                { label: "Matters", href: "/representative-matters" },
                                { label: "Insights", href: "/insights" },
                                { label: "Contact", href: "/contact" }
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="group text-sm text-muted-foreground hover:text-accent transition-all flex items-center gap-2"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Note */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-foreground">Regulatory Info</h4>
                        <div className="p-4 bg-white/50 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700">
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                References and full professional credentials are provided upon request.
                                All representative matters are anonymized to maintain client confidentiality and professional privilege.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t-2 border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} <span className="font-semibold text-foreground">Muhtasim Billah</span>. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/privacy"
                            className="text-sm text-muted-foreground hover:text-accent transition-colors hover:underline underline-offset-4"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-muted-foreground hover:text-accent transition-colors hover:underline underline-offset-4"
                        >
                            Legal Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
