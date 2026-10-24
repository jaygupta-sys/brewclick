'use client';

import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";

interface StoryProps {
    heading?: string;
    content: any;
}

export default function Story({ heading = "Our Story", content }: StoryProps) {
    if (!content) return null;

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-gray-900">
                            {heading}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg max-w-none"
                    >
                        <div className="p-8 md:p-12 bg-white border-2 border-gray-200 rounded-lg">
                            <PortableText 
                                value={content}
                                components={{
                                    block: {
                                        normal: ({children}) => <p className="text-gray-700 leading-relaxed mb-6 last:mb-0">{children}</p>,
                                    }
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
