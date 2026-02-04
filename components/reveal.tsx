"use client";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
    const { isVisible, domRef } = useReveal();

    return (
        <div
            ref={domRef}
            style={{
                transitionDelay: `${delay}ms`
            }}
            className={cn(
                "fade-in",
                isVisible && "visible",
                className
            )}
        >
            {children}
        </div>
    );
};
