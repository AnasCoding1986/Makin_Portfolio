import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://muhtasimbillah.com';

    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const routes = [
        '',
        '/about',
        '/services',
        '/experience',
        '/representative-matters',
        '/insights',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return [...routes, ...blogPosts];
}
