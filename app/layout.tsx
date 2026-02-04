import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PersonSchema } from "@/components/schema";

export const metadata: Metadata = {
    title: "Muhtasim Billah | Barrister & Advocate",
    description: "Legal professional portfolio.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen font-sans antialiased flex flex-col")}>
                <PersonSchema />
                <Navbar />
                <main className="flex-grow pt-16 md:pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
