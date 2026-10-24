'use client';

import { Card } from "@/src/components/ui/Card";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useEffect, useState } from 'react';
import { client } from '@/src/sanity/sanity-utils';
import { groq } from 'next-sanity';

const Services = ({ content }: any) => {
    const { badge, heading, subheading, selectedServices = [], backgroundColor } = content;
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!selectedServices || selectedServices.length === 0) {
            setLoading(false);
            return;
        }

        const fetchServices = async () => {
            try {
                const serviceIds = selectedServices
                    .filter((s: any) => s._ref)
                    .map((s: any) => s._ref);

                if (serviceIds.length === 0) {
                    setLoading(false);
                    return;
                }

                const query = groq`*[_id in $ids]`;
                const result = await client.fetch(query, { ids: serviceIds });
                setServices(result);
            } catch (error) {
                console.error('Error fetching services:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, [selectedServices]);

    if (loading || !services || services.length === 0) {
        return null;
    }

    return (
        <section className={`py-24 ${backgroundColor || 'bg-white'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    {badge && (
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                            {badge}
                        </span>
                    )}
                    {heading && (
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                            {heading}
                        </h2>
                    )}
                    {subheading && (
                        <p className="text-lg text-gray-600">
                            {subheading}
                        </p>
                    )}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service: any, index: number) => {
                        const IconComponent = service.icon ? (LucideIcons as any)[service.icon] : null;

                        return (
                            <Card
                                key={service._id || index}
                                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-primary/50"
                            >
                                {/* {service.gradientColor && (
                                    <div className={`h-24 bg-gradient-to-r ${service.gradientColor} opacity-10`} />
                                )} */}
                                
                                <div className="p-8">
                                    {IconComponent && (
                                        <div className="mb-6 inline-block p-3 rounded-lg bg-primary/10">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                        {service.seo.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-6">
                                        {service.shortDescription}
                                    </p>

                                    {service.features && service.features.length > 0 && (
                                        <ul className="space-y-2 mb-6">
                                            {service.features.slice(0, 3).map((feature: any, idx: number) => (
                                                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                                    <span className="text-primary font-bold mt-1">•</span>
                                                    <span>{typeof feature === 'string' ? feature : feature.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {service.slug && (
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center gap-2 text-primary font-semibold group/btn hover:gap-3 transition-all"
                                        >
                                            Learn More
                                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* View All Services Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
                    >
                        View All Services
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
