'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/src/sanity/sanity-utils";

interface Testimonial {
    _id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    profileImage: {
        asset: {
            url: string;
        };
    };
}

interface TestimonialsSectionProps {
    badge?: string;
    heading: string;
    subheading?: string;
    selectedTestimonials?: Array<{ _ref: string }>;
}

export default function Testimonials({
    badge,
    heading,
    subheading,
    selectedTestimonials,
}: TestimonialsSectionProps) {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                let query: string;

                if (selectedTestimonials && selectedTestimonials.length > 0) {
                    const refIds = selectedTestimonials.map(t => `"${t._ref}"`).join(',');
                    query = `*[_type == "testimonials" && _id in [${refIds}]]`;
                } else {
                    query = `*[_type == "testimonials"]`;
                }

                const data = await client.fetch(query);
                setTestimonials(data || []);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
                setTestimonials([]);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, [selectedTestimonials]);

    if (loading) {
        return (
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-gray-500">Loading testimonials...</div>
                </div>
            </section>
        );
    }

    if (!testimonials || testimonials.length === 0) {
        return null;
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={star <= rating ? "text-primary" : "text-gray-300"}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    {badge && (
                        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                            {badge}
                        </p>
                    )}
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        {heading}
                    </h2>
                    {subheading && (
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {subheading}
                        </p>
                    )}
                </div>

                {/* Testimonials Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {testimonials.map((testimonial: Testimonial) => (
                        <motion.div
                            key={testimonial._id}
                            className="bg-gray-50 rounded-lg p-6 flex flex-col"
                            variants={itemVariants}
                        >
                            {/* Rating */}
                            <div className="mb-4">
                                {renderStars(testimonial.rating)}
                            </div>

                            {/* Content */}
                            <p className="text-gray-700 mb-6 flex-grow">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                {testimonial.profileImage?.asset?.url && (
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={testimonial.profileImage.asset.url}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div>
                                    <p className="font-semibold text-secondary">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
