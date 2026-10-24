'use client';

import { client, urlFor } from "@/src/sanity/sanity-utils";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Loading from "@/src/components/Loading";

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
    content: any;
    tags?: string[];
    seo: {
        title: string;
        description: string;
    };
}

interface TableOfContentsItem {
    id: string;
    text: string;
    level: number;
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
    const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
    const [activeSection, setActiveSection] = useState<string>("");
    const [scrollProgress, setScrollProgress] = useState(0);
    const [slug, setSlug] = useState<string>("");
    const headingIndexRef = useRef(0);

    // Unwrap params
    useEffect(() => {
        params.then(p => setSlug(p.slug));
    }, [params]);

    // Track scroll progress
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const trackLength = documentHeight - windowHeight;
            const progress = (scrollTop / trackLength) * 100;
            setScrollProgress(Math.min(progress, 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!slug) return;
        
        const fetchPost = async () => {
            const data = await client.fetch(
                groq`*[_type == "blog" && slug.current == $slug][0] {
                    _id,
                    title,
                    slug,
                    excerpt,
                    category,
                    featuredImage,
                    publishedAt,
                    readTime,
                    author,
                    content,
                    tags,
                    seo
                }`,
                { slug }
            );
            
            if (!data) {
                notFound();
            }
            
            setPost(data);

            // Extract headings for table of contents
            if (data.content) {
                const headings: TableOfContentsItem[] = [];
                let tempIndex = 0;
                data.content.forEach((block: any) => {
                    if (block.style === 'h2' || block.style === 'h3') {
                        const text = block.children?.map((child: any) => child.text).join('') || '';
                        const id = `heading-${tempIndex}`;
                        headings.push({
                            id,
                            text,
                            level: block.style === 'h2' ? 2 : 3
                        });
                        tempIndex++;
                    }
                });
                setTableOfContents(headings);
                console.log('Table of Contents:', headings);
            }

            // Fetch related posts
            const related = await client.fetch(
                groq`*[_type == "blog" && category == $category && slug.current != $slug] | order(publishedAt desc) [0...3] {
                    _id,
                    title,
                    slug,
                    excerpt,
                    category,
                    featuredImage,
                    publishedAt,
                    readTime,
                    author
                }`,
                { category: data.category, slug }
            );
            setRelatedPosts(related);
        };

        fetchPost();
    }, [slug]);

    useEffect(() => {
        if (!post) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry with highest intersection ratio that is intersecting
                const intersectingEntries = entries.filter(entry => entry.isIntersecting);
                
                if (intersectingEntries.length > 0) {
                    // Sort by intersection ratio and pick the most visible one
                    const mostVisible = intersectingEntries.reduce((prev, current) => {
                        return current.intersectionRatio > prev.intersectionRatio ? current : prev;
                    });
                    
                    console.log('Active section changed to:', mostVisible.target.id);
                    setActiveSection(mostVisible.target.id);
                }
            },
            { 
                rootMargin: '-20% 0px -70% 0px',
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
            }
        );

        // Wait for content to render before observing
        const observeHeadings = () => {
            const headings = document.querySelectorAll('h2[id], h3[id]');
            console.log('Found headings:', headings.length, Array.from(headings).map(h => h.id));
            if (headings.length > 0) {
                headings.forEach((heading) => observer.observe(heading));
                
                // Set initial active section to first heading
                if (headings[0]) {
                    setActiveSection(headings[0].id);
                }
            } else {
                console.log('No headings found, retrying...');
                // Retry if headings aren't ready yet
                setTimeout(observeHeadings, 500);
            }
        };

        // Delay observation to ensure content is rendered
        const timer = setTimeout(observeHeadings, 1000);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [post]);

    if (!post) {
        return <Loading />;
    }

    const categoryLabels: Record<string, string> = {
        "website-development": "Website Development",
        "seo-strategy": "SEO Strategy",
        "ecommerce": "Ecommerce",
        "d2c-growth": "D2C Growth",
        "conversion-optimization": "Conversion Optimization",
        "case-studies": "Case Studies",
    };

    // Reset heading index before rendering
    headingIndexRef.current = 0;

    return (
        <main className="min-h-screen bg-white">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div
                    className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Back Button */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>

            <article className="py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            {/* Article Header */}
                            <header className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-sm font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                        {categoryLabels[post.category] || post.category}
                                    </span>
                                    {post.readTime && (
                                        <span className="text-sm text-gray-500 flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            {post.readTime} min read
                                        </span>
                                    )}
                                </div>

                                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    {post.title}
                                </h1>

                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pb-8 border-b border-gray-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                            <span className="text-purple-700 font-bold text-lg">
                                                {post.author.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">{post.author}</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <Calendar className="w-4 h-4" />
                                                <time dateTime={post.publishedAt}>
                                                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </time>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="hidden sm:flex items-center gap-2">
                                        <span className="text-sm text-gray-500 mr-2">Share:</span>
                                        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-colors">
                                            <Twitter className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-colors">
                                            <Facebook className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center transition-colors">
                                            <Linkedin className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </header>

                            {/* Featured Image */}
                            {post.featuredImage && (
                                <div className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden mb-12 border border-gray-200">
                                    <Image
                                        src={urlFor(post.featuredImage)}
                                        alt={post.featuredImage.alt || post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Article Content */}
                            <div className="prose prose-lg max-w-none">
                                <PortableText
                                    value={post.content}
                                    components={{
                                        block: {
                                            h2: ({ children }) => {
                                                const id = `heading-${headingIndexRef.current++}`;
                                                return (
                                                    <h2 id={id} className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">
                                                        {children}
                                                    </h2>
                                                );
                                            },
                                            h3: ({ children }) => {
                                                const id = `heading-${headingIndexRef.current++}`;
                                                return (
                                                    <h3 id={id} className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-24">
                                                        {children}
                                                    </h3>
                                                );
                                            },
                                            h4: ({ children }) => (
                                                <h4 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                                                    {children}
                                                </h4>
                                            ),
                                            normal: ({ children }) => (
                                                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                                    {children}
                                                </p>
                                            ),
                                            blockquote: ({ children }) => (
                                                <blockquote className="border-l-4 border-purple-600 bg-purple-50 pl-6 pr-6 py-4 italic my-8 text-gray-700 rounded-r-lg">
                                                    {children}
                                                </blockquote>
                                            ),
                                        },
                                        list: {
                                            bullet: ({ children }) => (
                                                <ul className="space-y-3 mb-8 ml-6">
                                                    {children}
                                                </ul>
                                            ),
                                            number: ({ children }) => (
                                                <ol className="space-y-3 mb-8 ml-6 list-decimal">
                                                    {children}
                                                </ol>
                                            ),
                                        },
                                        listItem: {
                                            bullet: ({ children }) => (
                                                <li className="text-gray-700 text-lg flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                                                    <span>{children}</span>
                                                </li>
                                            ),
                                            number: ({ children }) => (
                                                <li className="text-gray-700 text-lg">{children}</li>
                                            ),
                                        },
                                        marks: {
                                            strong: ({ children }) => (
                                                <strong className="font-bold text-gray-900">{children}</strong>
                                            ),
                                            em: ({ children }) => (
                                                <em className="italic">{children}</em>
                                            ),
                                            link: ({ children, value }) => (
                                                <a
                                                    href={value?.href}
                                                    className="text-purple-600 hover:text-purple-700 underline font-medium"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {children}
                                                </a>
                                            ),
                                        },
                                    }}
                                />
                            </div>

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Author CTA */}
                            <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-lg border border-purple-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Ready to Scale Your Ecommerce Brand?
                                </h3>
                                <p className="text-gray-700 mb-6">
                                    Get a free strategy session with our team to discuss how we can help you achieve similar results for your brand.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                                >
                                    Book Your Free Consultation
                                </Link>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-24 space-y-8">
                                {/* Table of Contents */}
                                {tableOfContents.length > 0 && (
                                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                                        <nav>
                                            <ul className="space-y-2">
                                                {tableOfContents.map((item) => (
                                                    <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                                                        <a
                                                            href={`#${item.id}`}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                console.log('Clicked TOC item:', item.id);
                                                                const element = document.getElementById(item.id);
                                                                console.log('Found element:', element);
                                                                if (element) {
                                                                    const offset = 100; // Account for sticky header
                                                                    const elementPosition = element.getBoundingClientRect().top;
                                                                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                                                                    
                                                                    window.scrollTo({
                                                                        top: offsetPosition,
                                                                        behavior: 'smooth'
                                                                    });
                                                                    
                                                                    setActiveSection(item.id);
                                                                }
                                                            }}
                                                            className={`block text-sm py-2 px-3 rounded-md transition-all cursor-pointer ${
                                                                activeSection === item.id
                                                                    ? 'text-purple-600 font-semibold bg-purple-100 border-l-4 border-purple-600'
                                                                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                                                            }`}
                                                        >
                                                            {item.text}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                )}

                                {/* Newsletter Signup */}
                                <div className="bg-gray-900 rounded-lg p-6 text-white">
                                    <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                                    <p className="text-sm text-gray-300 mb-4">
                                        Get weekly insights on ecommerce growth delivered to your inbox.
                                    </p>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3"
                                    />
                                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-cyan-50 border-t border-gray-200">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Continue Reading</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost._id}
                                    href={`/blog/${relatedPost.slug.current}`}
                                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-purple-100"
                                >
                                    {relatedPost.featuredImage && (
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={urlFor(relatedPost.featuredImage)}
                                                alt={relatedPost.featuredImage.alt || relatedPost.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
                                                {categoryLabels[relatedPost.category] || relatedPost.category}
                                            </span>
                                            {relatedPost.readTime && (
                                                <span className="text-xs text-gray-500">
                                                    {relatedPost.readTime} min
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
