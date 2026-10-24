'use client';

import Typewriter from '@/src/util/animations/typewriter';
import Link from 'next/link';
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SanityButton from '@/src/components/ui/SanityButton';

type propType = {
    style: string;
    content: any;
}

function index({ style, content }: propType) {
    const { description, primaryButton, secondaryButton, title, keywordList, badgeText, stats } = content;

    // Helper function to get button href
    const getButtonHref = (button: any) => {
        if (!button?.button) return '#';
        if (button.button.linkType === 'external') {
            return button.button.externalUrl || '#';
        }
        // For internal links, you'd need to resolve the reference
        return button.button.internalLink?.slug || '#';
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {badgeText && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>{badgeText}</span>
                        </motion.div>
                    )}

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900"
                    >
                        {title}{" "}
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            <Typewriter names={keywordList} />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        {primaryButton && (
                            <SanityButton
                                data={{
                                    text: primaryButton.text,
                                    link: primaryButton.link || '#',
                                    variant: primaryButton.variant || 'primary',
                                    icon: primaryButton.icon,
                                    iconPosition: 'right',
                                }}
                            />
                        )}
                        {secondaryButton && (
                            <SanityButton
                                data={{
                                    text: secondaryButton.text,
                                    link: secondaryButton.link || '#',
                                    variant: secondaryButton.variant || 'outline',
                                }}
                            />
                        )}
                    </motion.div>

                    {stats && stats.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                        >
                            {stats.map((stat: any, index: number) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default index