'use client';

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client, urlFor } from "@/src/sanity/sanity-utils";
import { groq } from "next-sanity";
import Loading from "@/src/components/Loading";
import Button from "@/src/components/ui/Button";

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
}

const iconMap: Record<string, any> = {
    'trending-up': TrendingUp,
    'dollar-sign': DollarSign,
    'users': Users,
};

export default function CaseStudiesPage() {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pageSettings, setPageSettings] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const [caseStudiesData, settingsData] = await Promise.all([
                client.fetch(
                    groq`*[_type == "work"] | order(order asc) {
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
                        keyTactics
                    }`
                ),
                client.fetch(
                    groq`*[_type == "pageSettings"][0]{
                        landingPages
                    }`
                )
            ]);
            setCaseStudies(caseStudiesData);
            setPageSettings(settingsData);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    const categoryLabels: Record<string, string> = {
        'beauty-wellness': 'Beauty & Wellness',
        'sports-fitness': 'Sports & Fitness',
        'home-living': 'Home & Living',
        'health-wellness': 'Health & Wellness',
        'fashion-lifestyle': 'Fashion & Lifestyle',
        'food-beverage': 'Food & Beverage',
    };

    // Get landing page content from settings
    const landingContent = pageSettings?.landingPages?.caseStudiesLanding;
    const badge = landingContent?.badge || "Success Stories";
    const heading = landingContent?.heading || "Real Results for";
    const headingGradient = landingContent?.headingGradient || "Real Brands";
    const subheading = landingContent?.subheading || "See how we've helped ecommerce brands achieve measurable growth through data-driven strategies and creative execution.";
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
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className={`py-24 ${bgClass}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6"
                        >
                            {badge}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900"
                        >
                            {heading}{" "}
                            {headingGradient && (
                                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                                    {headingGradient}
                                </span>
                            )}
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

            {/* Case Studies Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {caseStudies.map((study, index) => {
                            // Skip if results array is missing or empty
                            if (!study.results || study.results.length === 0) {
                                return null;
                            }
                            
                            const Icon = iconMap[study.results[0]?.icon] || TrendingUp;
                            
                            return (
                                <motion.div
                                    key={study._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="overflow-hidden rounded-lg border-2 border-purple-200 hover:shadow-2xl transition-shadow bg-white">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                            {/* Image Section */}
                                            <div className="relative h-64 lg:h-auto overflow-hidden">
                                                {study.featuredImage && (
                                                    <>
                                                        <Image
                                                            src={urlFor(study.featuredImage)}
                                                            alt={study.featuredImage.alt || study.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-purple-900 opacity-20" />
                                                    </>
                                                )}
                                            </div>

                                            {/* Content Section */}
                                            <div className="p-8 lg:p-12">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-sm px-3 py-1 rounded-full bg-purple-600 text-white">
                                                        {categoryLabels[study.category] || study.category}
                                                    </span>
                                                    <span className="text-sm text-gray-500">{study.duration}</span>
                                                </div>

                                                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                                    {study.title}
                                                </h3>
                                                <p className="text-gray-500 mb-6">{study.industry}</p>

                                                {/* Results */}
                                                <div className="grid grid-cols-3 gap-4 mb-6 p-6 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-xl">
                                                    {study.results.map((result, idx) => {
                                                        const ResultIcon = iconMap[result.icon] || TrendingUp;
                                                        return (
                                                            <div key={idx} className="text-center">
                                                                <ResultIcon className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                                                                <div className="text-2xl font-bold mb-1 text-purple-600">
                                                                    {result.value}
                                                                </div>
                                                                <div className="text-xs text-gray-500">{result.label}</div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>

                                                {/* Challenge & Solution */}
                                                {(study.challenge || study.solution) && (
                                                    <div className="space-y-4 mb-6">
                                                        {study.challenge && (
                                                            <div>
                                                                <h4 className="font-semibold text-gray-900 mb-2">
                                                                    Challenge
                                                                </h4>
                                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                                    {study.challenge}
                                                                </p>
                                                            </div>
                                                        )}
                                                        {study.solution && (
                                                            <div>
                                                                <h4 className="font-semibold text-gray-900 mb-2">
                                                                    Solution
                                                                </h4>
                                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                                    {study.solution}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Key Tactics */}
                                                {study.keyTactics && study.keyTactics.length > 0 && (
                                                    <div className="mb-6">
                                                        <h4 className="font-semibold text-gray-900 mb-3">
                                                            Key Tactics
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {study.keyTactics.map((tactic, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700"
                                                                >
                                                                    {tactic}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                <Button
                                                    href={`/case-studies/${study.slug.current}`}
                                                    variant="outline"
                                                    icon={ArrowUpRight}
                                                    iconPosition="right"
                                                >
                                                    Read Full Case Study
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900"
                        >
                            Ready to Become Our Next Success Story?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-600 mb-8"
                        >
                            Let&apos;s discuss how we can help you achieve similar results for your brand.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                href="/contact"
                                variant="primary"
                                size="lg"
                            >
                                Schedule a Free Consultation
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
