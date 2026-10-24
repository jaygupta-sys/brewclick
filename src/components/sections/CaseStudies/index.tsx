'use client';

import { urlFor } from '../../../sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/src/components/ui/Button';
import SanityButton from '@/src/components/ui/SanityButton';
import { motion } from 'framer-motion';

interface CaseStudiesProps {
    content: {
        _type: string;
        _key?: string;
        badge?: string;
        sectionTitle?: string;
        sectionSubtitle?: string;
        studies?: any[];
        viewAllButton?: any;
    };
}

const CaseStudies = ({ content }: CaseStudiesProps) => {
    const { badge, sectionTitle, sectionSubtitle, studies, viewAllButton } = content;

    if (!studies || studies.length === 0) {
        return null;
    }

    return (
        <section id="work" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-4"
                        >
                            {badge}
                        </motion.div>
                    )}
                    {sectionTitle && (
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl mb-4 text-gray-900 font-bold"
                        >
                            {sectionTitle}
                        </motion.h2>
                    )}
                    {sectionSubtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                        >
                            {sectionSubtitle}
                        </motion.p>
                    )}
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {studies.map((study: any, index: number) => (
                        <motion.div
                            key={study._key || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="overflow-hidden h-full hover:shadow-2xl transition-shadow rounded-lg bg-white border border-gray-200"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                {study.image ? (
                                    <Image
                                        src={urlFor(study.image)}
                                        alt={study.brand || 'Case study'}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                                )}
                                {study.gradientColor && (
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${study.gradientColor} opacity-20`}
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {study.category && (
                                    <div className="text-sm text-primary mb-2 font-medium">{study.category}</div>
                                )}
                                {study.brand && (
                                    <h3 className="text-2xl mb-4 text-gray-900 font-bold">{study.brand}</h3>
                                )}
                                {study.description && (
                                    <p className="text-gray-600 mb-6">{study.description}</p>
                                )}

                                {/* Results */}
                                {study.results && study.results.length > 0 && (
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {study.results.map((result: any, idx: number) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-2xl text-primary mb-1 font-bold">
                                                    {result.value}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {result.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* View Case Study Button */}
                                {study.caseStudyUrl && (
                                    <Link
                                        href={study.caseStudyUrl}
                                        className="inline-flex items-center gap-2 text-primary font-semibold group/btn hover:gap-3 transition-all w-full justify-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
                                    >
                                        View Case Study
                                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                {viewAllButton?.button && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <SanityButton
                            data={{
                                text: viewAllButton.button.text || 'View All Case Studies',
                                link: viewAllButton.button.externalUrl || '#',
                                variant: 'primary',
                                size: 'lg',
                            }}
                        />
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default CaseStudies;
