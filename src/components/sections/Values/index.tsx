'use client';

import { motion } from "framer-motion";
import { Target, Heart, Zap, Users, TrendingUp, Award, Sparkles, Shield } from "lucide-react";

const iconMap: Record<string, any> = {
    'target': Target,
    'heart': Heart,
    'zap': Zap,
    'users': Users,
    'trending-up': TrendingUp,
    'award': Award,
    'sparkles': Sparkles,
    'shield': Shield,
};

interface ValueItem {
    icon: string;
    title: string;
    description: string;
}

interface ValuesProps {
    heading?: string;
    subheading?: string;
    values: ValueItem[];
}

export default function Values({ heading = "Our Values", subheading = "The principles that guide everything we do", values }: ValuesProps) {
    if (!values || values.length === 0) return null;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900"
                    >
                        {heading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        {subheading}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {values.map((value, index) => {
                        const Icon = iconMap[value.icon] || Target;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="p-6 text-center h-full border-2 border-gray-200 rounded-lg hover:shadow-lg transition-shadow bg-white">
                                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gray-900">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
