import { BlogPost } from "@/lib/blog-data";

export const PersonSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Muhtasim Billah",
        "url": "https://muhtasimbillah.com",
        "jobTitle": "Barrister & Advocate",
        "description": "Dual-qualified Barrister (England & Wales) and Advocate (Bangladesh) specializing in legal analysis, drafting, and compliance.",
        "sameAs": [
            "https://linkedin.com/in/muhtasimbillah",
            "https://facebook.com/muhtasimbillah"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export const ArticleSchema = ({ post }: { post: BlogPost }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": "Muhtasim Billah"
        },
        "url": `https://muhtasimbillah.com/insights/${post.slug}`
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export const BreadcrumbSchema = ({ items }: { items: { name: string, url: string }[] }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://muhtasimbillah.com${item.url}`
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
