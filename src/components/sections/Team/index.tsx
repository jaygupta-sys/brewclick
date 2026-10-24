'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/src/sanity/sanity-utils";

interface TeamMember {
    name: string;
    role: string;
    expertise: string;
    image: any;
}

interface TeamProps {
    heading?: string;
    subheading?: string;
    members: TeamMember[];
}

export default function Team({ heading = "Meet the Team", subheading = "The experts behind your growth", members }: TeamProps) {
    if (!members || members.length === 0) return null;

    return (
        <section className="py-24 bg-gray-50">
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
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="overflow-hidden border-2 border-gray-200 rounded-lg hover:shadow-xl transition-shadow bg-white">
                                <div className="relative h-64 overflow-hidden bg-gray-100">
                                    {member.image && (
                                        <Image
                                            src={urlFor(member.image)}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    )}
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-1 text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="font-semibold mb-2 text-orange-500">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-gray-600">{member.expertise}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
