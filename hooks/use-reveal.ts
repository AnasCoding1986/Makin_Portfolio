"use client";

import { useEffect, useRef, useState } from "react";

export const useReveal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can stop observing
                    if (domRef.current) observer.unobserve(domRef.current);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
        });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    return { isVisible, domRef };
};
