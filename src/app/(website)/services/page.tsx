import { getServices, getPageSettings } from "../../../sanity/sanity-utils";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Metadata } from "next";
import Button from "@/src/components/ui/Button";

export const metadata: Metadata = {
    title: "Our Services | Brewclick",
    description: "Full-stack marketing services for ecommerce brands",
};

export default async function ServicesPage() {
    const services = (await getServices()) || [];
    const settings = await getPageSettings();
    const landingContent = settings?.landingPages?.servicesLanding;

    // Fallback defaults if settings not available
    const badge = landingContent?.badge || "Our Services";
    const heading = landingContent?.heading || "Full-Stack Marketing for";
    const headingGradient = landingContent?.headingGradient || "Ecommerce Brands";
    const subheading = landingContent?.subheading || "We're your growth partner, handling everything from customer acquisition to retention with data-driven strategies and creative excellence.";
    const ctaText = landingContent?.ctaButton?.text || "Schedule a Consultation";
    const ctaLink = landingContent?.ctaButton?.link || "/contact";
    const bgStyle = landingContent?.backgroundColor || "gradient";
    
    const bottomCTA = landingContent?.bottomCTA || {
        heading: "Ready to Grow Your Ecommerce Brand?",
        subheading: "Let's discuss how our services can help you achieve your growth goals.",
        primaryButton: { text: "Get Started", link: "/contact" },
        secondaryButton: { text: "View Our Work", link: "/case-studies" }
    };

    const bgClass = bgStyle === 'gradient' 
        ? 'bg-gradient-to-br from-purple-50 via-white to-cyan-50'
        : bgStyle === 'gray' 
        ? 'bg-gray-50' 
        : 'bg-white';

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className={`py-24 ${bgClass}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6">
                            {badge}
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900">
                            {heading}{" "}
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                                {headingGradient}
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                            {subheading}
                        </p>
                        <Button
                            href={ctaLink}
                            variant="primary"
                            size="lg"
                            icon={LucideIcons.ArrowRight}
                            iconPosition="right"
                        >
                            {ctaText}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service: any, index: number) => {
                            const IconComponent = service.icon 
                                ? (LucideIcons as any)[service.icon] 
                                : LucideIcons.Sparkles;

                            return (
                                <Link
                                    key={service._id}
                                    href={`/services/${service.slug}`}
                                    className="group"
                                >
                                    <div className="p-8 h-full border-2 rounded-lg hover:border-purple-200 hover:shadow-xl transition-all bg-white">
                                        <div
                                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradientColor} flex items-center justify-center mb-6`}
                                        >
                                            {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                                            {service.seo?.title || service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {service.shortDescription}
                                        </p>
                                        {service.features && service.features.length > 0 && (
                                            <div className="space-y-3">
                                                {service.features.map((feature: string, idx: number) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <LucideIcons.CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-purple-600" />
                                                        <span className="text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <div className="mt-6 flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                                            Learn More
                                            <LucideIcons.ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                            {bottomCTA.heading}
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            {bottomCTA.subheading}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                href={bottomCTA.primaryButton.link}
                                variant="primary"
                                size="lg"
                            >
                                {bottomCTA.primaryButton.text}
                            </Button>
                            <Button
                                href={bottomCTA.secondaryButton.link}
                                variant="outline"
                                size="lg"
                            >
                                {bottomCTA.secondaryButton.text}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
