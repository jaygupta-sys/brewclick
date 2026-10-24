'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Users, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/src/sanity/sanity-utils";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Loading from "@/src/components/Loading";

interface CaseStudy {
    _id: string;
    title: string;
    slug: { current: string };
    category: string;
    industry: string;
    duration: string;
    featuredImage: any;
    results: Array<{
        label: string;
        value: string;
        icon: string;
    }>;
    challenge: string;
    solution: string;
    keyTactics: string[];
    content?: any;
    testimonial?: any;
}

const iconMap: Record<string, any> = {
    'trending-up': TrendingUp,
    'dollar-sign': DollarSign,
    'users': Users,
};

const categoryLabels: Record<string, string> = {
    'beauty-wellness': 'Beauty & Wellness',
    'sports-fitness': 'Sports & Fitness',
    'home-living': 'Home & Living',
    'health-wellness': 'Health & Wellness',
    'fashion-lifestyle': 'Fashion & Lifestyle',
    'food-beverage': 'Food & Beverage',
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
    const [slug, setSlug] = useState<string>("");

    // Unwrap params
    useEffect(() => {
        params.then(p => setSlug(p.slug));
    }, [params]);

    useEffect(() => {
        if (!slug) return;
        
        const fetchCaseStudy = async () => {
            const data = await client.fetch(
                groq`*[_type == "work" && slug.current == $slug][0] {
                    _id,
                    title,
                    slug,
                    category,
                    industry,
                    duration,
                    featuredImage,
                    results,
                    challenge,
                    solution,
                    keyTactics,
                    content,
                    testimonial->{
                        name,
                        position,
                        text,
                        profilePicture
                    }
                }`,
                { slug: slug }
            );
            
            if (!data) {
                notFound();
            }
            
            setCaseStudy(data);
        };

        fetchCaseStudy();
    }, [slug]);

    if (!caseStudy) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Case Studies
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white mb-6"
                        >
                            {categoryLabels[caseStudy.category] || caseStudy.category}
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
                        >
                            {caseStudy.title}
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-600 mb-6"
                        >
                            {caseStudy.industry}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-center gap-2 text-gray-500"
                        >
                            <span>Project Duration: {caseStudy.duration}</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            {caseStudy.featuredImage && (
                <section className="py-8">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
                                <Image
                                    src={urlFor(caseStudy.featuredImage)}
                                    alt={caseStudy.featuredImage.alt || caseStudy.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Results Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Results</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {caseStudy.results.map((result, idx) => {
                                const Icon = iconMap[result.icon] || TrendingUp;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="text-center p-8 rounded-lg bg-gradient-to-br from-purple-50 to-cyan-50"
                                    >
                                        <Icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                                        <div className="text-4xl font-bold mb-2 text-purple-600">
                                            {result.value}
                                        </div>
                                        <div className="text-gray-600">{result.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {caseStudy.challenge}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {caseStudy.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Tactics */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Tactics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {caseStudy.keyTactics.map((tactic, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3 p-4 rounded-lg bg-purple-50"
                                >
                                    <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
                                    <span className="text-gray-700">{tactic}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Content */}
            {caseStudy.content && (
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto prose prose-lg">
                            <PortableText
                                value={caseStudy.content}
                                components={{
                                    block: {
                                        h3: ({ children }) => (
                                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                                {children}
                                            </h3>
                                        ),
                                        normal: ({ children }) => (
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {children}
                                            </p>
                                        ),
                                    },
                                }}
                            />
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonial */}
            {caseStudy.testimonial && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="p-8 rounded-lg bg-gradient-to-br from-purple-50 to-cyan-50">
                                {caseStudy.testimonial.profilePicture && (
                                    <div className="relative w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                                        <Image
                                            src={urlFor(caseStudy.testimonial.profilePicture)}
                                            alt={caseStudy.testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <p className="text-xl text-gray-700 italic mb-6">
                                    &ldquo;{caseStudy.testimonial.text}&rdquo;
                                </p>
                                <div>
                                    <p className="font-semibold text-gray-900">{caseStudy.testimonial.name}</p>
                                    <p className="text-gray-600">{caseStudy.testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-purple-600 to-cyan-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Want Similar Results for Your Brand?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let&apos;s discuss how we can help you achieve your growth goals.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
                        >
                            Schedule a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
