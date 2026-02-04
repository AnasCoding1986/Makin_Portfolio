export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: "Career" | "Technical" | "Jurisdiction" | "Education";
    readingTime: string;
    content: string;
    faqs?: { q: string; a: string }[];
}

export const posts: BlogPost[] = [
    {
        slug: "navigating-uk-bar-international-advocate",
        title: "Navigating the UK Bar as an International Advocate",
        category: "Career",
        date: "Feb 02, 2025",
        readingTime: "5 min read",
        excerpt: "Reflections on the transition from the Bangladesh Supreme Court to being called to the Bar at Lincoln’s Inn.",
        content: "The transition from one legal jurisdiction to another is more than a change of rules; it is a change of culture. Having practiced for a decade in Bangladesh before being called to the Bar of England and Wales at Lincoln’s Inn, I have observed the striking parallels and unique challenges of dual qualification...",
        faqs: [
            { q: "Is dual qualification recognized in both countries?", a: "Yes, though practicing rights are subject to individual Bar Council regulations in each jurisdiction." },
            { q: "What is the primary challenge for international advocates?", a: "Adapting to the specific procedural nuances and the 'Call to the Bar' process in the UK." }
        ]
    },
    {
        slug: "precision-in-legal-case-preparation",
        title: "The Importance of Precision in Legal Case Preparation",
        category: "Technical",
        date: "Jan 15, 2025",
        readingTime: "4 min read",
        excerpt: "How methodical drafting and bundle organization can influence the trajectory of a legal dispute.",
        content: "In high-stakes litigation, the strength of an argument is often built on the quality of its foundation. This foundation consists of the bundles, the research, and the precision of the initial drafting...",
        faqs: [
            { q: "What constitutes a 'complete' case bundle?", a: "A chronological organization of all relevant evidence, pleadings, and orders, meticulously indexed for ease of reference." }
        ]
    },
    {
        slug: "comparative-analysis-public-law",
        title: "Comparative Analysis: Public Law in the UK vs Bangladesh",
        category: "Jurisdiction",
        date: "Dec 10, 2024",
        readingTime: "6 min read",
        excerpt: "Exploring the evolution of writ jurisdictions and administrative law across two distinct yet connected systems.",
        content: "Bangladesh’s legal system inherits much of its structure from the Common Law tradition. However, the evolution of Public Law and Writ jurisdiction in the High Court Division has taken on its own unique characteristics...",
        faqs: [
            { q: "How is Writ Jurisdiction used in Bangladesh?", a: "It is a primary tool for the enforcement of fundamental rights and the judicial review of administrative actions." }
        ]
    }
];
