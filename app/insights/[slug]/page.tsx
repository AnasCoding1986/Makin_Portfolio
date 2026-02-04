import { posts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { FAQSection } from "@/components/faq-section";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { ArticleSchema, BreadcrumbSchema } from "@/components/schema";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: ['Muhtasim Billah'],
        }
    };
}

export default function PostPage({ params }: { params: { slug: string } }) {
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

    return (
        <div className="flex flex-col">
            <ArticleSchema post={post} />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "/" },
                    { name: "Insights", url: "/insights" },
                    { name: post.title, url: `/insights/${post.slug}` }
                ]}
            />
            <section className="py-12 md:py-20 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <Reveal>
                        <Link
                            href="/insights"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent mb-12 hover:underline"
                        >
                            <ArrowLeft size={16} /> Back to Insights
                        </Link>

                        <div className="flex items-center gap-6 mb-6">
                            <span className="bg-accent/10 px-3 py-1 rounded text-accent text-xs font-bold uppercase tracking-widest">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                                <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readingTime}</span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
                            {post.title}
                        </h1>

                        <div className="aspect-[21/9] bg-muted rounded-xl mb-16 flex items-center justify-center text-muted-foreground text-sm font-bold uppercase tracking-widest border border-border">
                            Cover Image Placeholder
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-p:leading-relaxed prose-p:text-foreground/80">
                            <p className="text-xl font-medium leading-relaxed mb-10 text-foreground">
                                {post.excerpt}
                            </p>
                            <div className="whitespace-pre-wrap leading-relaxed">
                                {post.content}
                            </div>
                        </div>

                        {post.faqs && <FAQSection items={post.faqs} />}

                        {/* Related Posts */}
                        <div className="mt-24 pt-16 border-t border-border">
                            <h3 className="text-2xl font-serif mb-10">Related Perspectives</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {relatedPosts.map((rp) => (
                                    <Link
                                        key={rp.slug}
                                        href={`/insights/${rp.slug}`}
                                        className="p-6 rounded-xl border border-border hover:border-accent transition-all group"
                                    >
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3 block">{rp.category}</span>
                                        <h4 className="text-xl font-serif mb-4 group-hover:text-accent transition-colors">{rp.title}</h4>
                                        <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                                            Read Post <ArrowRight size={14} />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
