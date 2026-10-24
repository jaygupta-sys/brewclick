'use client';

import { motion } from 'framer-motion';
import { Card } from '@/src/components/ui/Card';

interface FAQProps {
    content: {
        _type: string;
        _key?: string;
        badge?: string;
        sectionTitle?: string;
        sectionSubtitle?: string;
        backgroundColor?: 'white' | 'gray' | 'gradient';
        faqs?: Array<{
            _key?: string;
            question: string;
            answer: string;
        }>;
    };
}

const FAQ = ({ content }: FAQProps) => {
    const { badge, sectionTitle, sectionSubtitle, backgroundColor = 'white', faqs = [] } = content;

    if (!faqs || faqs.length === 0) {
        return null;
    }

    const bgClass = backgroundColor === 'gradient' 
        ? 'bg-gradient-to-br from-purple-50 via-white to-cyan-50'
        : backgroundColor === 'gray' 
        ? 'bg-gray-50' 
        : 'bg-white';

    return (
        <section className={`py-24 ${bgClass}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        {badge && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-4"
                            >
                                {badge}
                            </motion.div>
                        )}
                        {sectionTitle && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl sm:text-5xl mb-4 text-gray-900"
                            >
                                {sectionTitle}
                            </motion.h2>
                        )}
                        {sectionSubtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-xl text-gray-600"
                            >
                                {sectionSubtitle}
                            </motion.p>
                        )}
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq._key || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-6 border-2 border-gray-200 hover:shadow-lg transition-shadow bg-white">
                                    <h3 className="text-xl mb-3 text-gray-900 font-semibold">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
