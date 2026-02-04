import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#0F172A", // Deep Navy
                    foreground: "#F8FAFC",
                },
                accent: {
                    DEFAULT: "#94702D", // Muted Gold
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#F1F5F9",
                    foreground: "#64748B",
                },
            },
            fontFamily: {
                serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
                sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
