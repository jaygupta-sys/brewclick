'use client';

import { client, urlFor } from "@/src/sanity/sanity-utils";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "@/src/components/Loading";
import Button from "@/src/components/ui/Button";

interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt: string;
    category: string;
    featuredImage: any;
    publishedAt: string;
    readTime?: number;
    author: string;
    featured?: boolean;
}

export default function BlogPage() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("All Posts");
    const [isLoading, setIsLoading] = useState(true);
    const [pageSettings, setPageSettings] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [blogsData, settingsData] = await Promise.all([
                    client.fetch(
                        groq`*[_type == "blog"] | order(publishedAt desc) {
                            _id,
                            title,
                            slug,
                            excerpt,
                            category,
                            featuredImage,
                            publishedAt,
                            readTime,
                            author,
                            featured
                        }`
                    ),
                    client.fetch(
                        groq`*[_type == "pageSettings"][0]{
                            landingPages
                        }`
                    )
                ]);
                setBlogs(blogsData || []);
                setPageSettings(settingsData || null);
            } catch (err) {
                console.warn("Failed to fetch blog posts:", err);
                setBlogs([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const categories = [
        "All Posts",
        "website-development",
        "seo-strategy",
        "ecommerce",
        "d2c-growth",
        "conversion-optimization",
        "case-studies",
    ];

    const categoryLabels: Record<string, string> = {
        "All Posts": "All Posts",
        "website-development": "Website Development",
        "seo-strategy": "SEO Strategy",
        "ecommerce": "Ecommerce",
        "d2c-growth": "D2C Growth",
        "conversion-optimization": "Conversion Optimization",
        "case-studies": "Case Studies",
    };

    const featuredPosts = blogs.filter(blog => blog.featured);
    const filteredBlogs = selectedCategory === "All Posts" 
        ? blogs 
        : blogs.filter(blog => blog.category === selectedCategory);

    // Get landing page content from settings
    const landingContent = pageSettings?.landingPages?.blogLanding;
    const badge = landingContent?.badge || "Insights & Resources";
    const heading = landingContent?.heading || "Ecommerce Growth Strategies";
    const subheading = landingContent?.subheading || "Expert insights, proven strategies, and actionable tactics to help your D2C brand scale profitably.";
    const bgStyle = landingContent?.backgroundColor || "gradient";
    
    const bgClass = bgStyle === 'gradient' 
        ? 'bg-gradient-to-br from-purple-50 via-white to-cyan-50'
        : bgStyle === 'gray' 
        ? 'bg-gray-50' 
        : 'bg-white';

    if (isLoading) {
        return <Loading />;
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className={`py-24 ${bgClass}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-2 rounded-full mb-6 bg-purple-100 text-purple-700"
                        >
                            {badge}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900"
                        >
                            {heading}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl sm:text-2xl text-gray-600"
                        >
                            {subheading}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-purple-600 text-white'
                                        : 'bg-transparent text-gray-600 border border-gray-300 hover:border-purple-600 hover:text-purple-600'
                                }`}
                            >
                                {categoryLabels[category]}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPosts.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="overflow-hidden border-2 border-purple-600 rounded-lg hover:shadow-2xl transition-shadow bg-white">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    <div className="relative h-64 lg:h-auto overflow-hidden">
                                        {featuredPosts[0].featuredImage && (
                                            <Image
                                                src={urlFor(featuredPosts[0].featuredImage)}
                                                alt={featuredPosts[0].featuredImage.alt || featuredPosts[0].title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full text-sm flex items-center gap-2 bg-purple-600 text-white">
                                                <TrendingUp className="w-4 h-4" />
                                                Featured
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <span className="text-sm px-3 py-1 rounded-full inline-block w-fit mb-4 bg-gray-900 text-white">
                                            {categoryLabels[featuredPosts[0].category] || featuredPosts[0].category}
                                        </span>
                                        <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900 font-bold">
                                            {featuredPosts[0].title}
                                        </h2>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{featuredPosts[0].excerpt}</p>
                                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(featuredPosts[0].publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                            {featuredPosts[0].readTime && (
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    {featuredPosts[0].readTime} min read
                                                </div>
                                            )}
                                        </div>
                                        <Button
                                            href={`/blog/${featuredPosts[0].slug.current}`}
                                            variant="primary"
                                            icon={ArrowRight}
                                            iconPosition="right"
                                        >
                                            Read Article
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Blog Posts Grid */}
            <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((post, index) => (
                            <motion.div
                                key={post._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={`/blog/${post.slug.current}`}
                                    className="block overflow-hidden h-full hover:shadow-xl transition-shadow border-2 border-purple-100 rounded-lg bg-white"
                                >
                                    {post.featuredImage && (
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={urlFor(post.featuredImage)}
                                                alt={post.featuredImage.alt || post.title}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6 flex flex-col h-full">
                                        <span className="text-xs px-2 py-1 rounded-full inline-block w-fit mb-3 bg-purple-600 text-white">
                                            {categoryLabels[post.category] || post.category}
                                        </span>
                                        <h3 className="text-xl mb-3 text-gray-900 font-bold hover:text-purple-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                                        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </div>
                                            {post.readTime && (
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime} min read
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600">No articles found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="p-8 md:p-12 text-center bg-gray-900 rounded-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl sm:text-4xl mb-4 text-white font-bold">
                                    Get Growth Tips in Your Inbox
                                </h2>
                                <p className="text-white/90 mb-8">
                                    Join 5,000+ ecommerce founders receiving our weekly newsletter with actionable strategies to grow your brand.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900"
                                    />
                                    <Button
                                        variant="primary"
                                        type="submit"
                                    >
                                        Subscribe
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
