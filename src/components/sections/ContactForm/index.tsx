'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MessageSquare, Calendar, Phone, MapPin, Clock } from "lucide-react";
import { Card } from "@/src/components/ui/Card";
import { Input } from "@/src/components/ui/Input";
import { Textarea } from "@/src/components/ui/Textarea";
import Button from "@/src/components/ui/Button";

const iconMap: Record<string, any> = {
    'Mail': Mail,
    'MessageSquare': MessageSquare,
    'Calendar': Calendar,
    'Phone': Phone,
    'MapPin': MapPin,
    'Clock': Clock,
};

interface ContactFormProps {
    content: {
        _type: string;
        _key?: string;
        layout?: 'simple' | 'detailed';
        badge?: string;
        sectionTitle?: string;
        sectionSubtitle?: string;
        contactOptions?: Array<{
            iconType: string;
            title: string;
            description: string;
            actionText?: string;
        }>;
        benefitsList?: Array<{
            title: string;
            description: string;
        }>;
        officeHours?: {
            weekdayHours?: string;
            saturdayHours?: string;
            sundayHours?: string;
        };
        responseTimeCard?: {
            title?: string;
            description?: string;
        };
    };
}

const ContactForm = ({ content }: ContactFormProps) => {
    const {
        layout = 'simple',
        badge,
        sectionTitle,
        sectionSubtitle,
        contactOptions = [],
        benefitsList = [],
        officeHours,
        responseTimeCard,
    } = content;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        revenue: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    // Simple Layout (Gradient Background)
    if (layout === 'simple') {
        return (
            <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            {badge && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-block px-4 py-2 rounded-full bg-white/20 text-white mb-4"
                                >
                                    {badge}
                                </motion.div>
                            )}
                            {sectionTitle && (
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl sm:text-5xl mb-4 text-white"
                                >
                                    {sectionTitle}
                                </motion.h2>
                            )}
                            {sectionSubtitle && (
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-xl text-white/90 max-w-2xl mx-auto"
                                >
                                    {sectionSubtitle}
                                </motion.p>
                            )}
                        </div>

                        {/* Contact Options */}
                        {contactOptions.length > 0 && (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                                {contactOptions.map((option, index) => {
                                    const IconComponent = iconMap[option.iconType] || Mail;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Card className="p-8 text-center h-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-colors">
                                                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                                                    <IconComponent className="w-7 h-7 text-white" />
                                                </div>
                                                <h3 className="text-xl mb-2 text-white font-semibold">{option.title}</h3>
                                                <p className="text-white/80">{option.description}</p>
                                                {option.actionText && (
                                                    <p className="text-sm text-white/60 mt-2">{option.actionText}</p>
                                                )}
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 md:p-12 bg-white">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-700">Name *</label>
                                            <Input
                                                type="text"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                                            <Input
                                                type="email"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-700">Company Name *</label>
                                            <Input
                                                type="text"
                                                placeholder="Your company"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-gray-700">Monthly Revenue</label>
                                            <Input
                                                type="text"
                                                placeholder="e.g., $50k-100k"
                                                value={formData.revenue}
                                                onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Tell us about your goals *</label>
                                        <Textarea
                                            placeholder="What are your biggest growth challenges? What are you looking to achieve?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            className="min-h-32"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        );
    }

    // Detailed Layout (Multi-Column with Info)
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 md:p-10 bg-white">
                            {sectionTitle && (
                                <h2 className="text-3xl mb-2 text-gray-900 font-semibold">
                                    {sectionTitle}
                                </h2>
                            )}
                            {sectionSubtitle && (
                                <p className="text-gray-600 mb-8">
                                    {sectionSubtitle}
                                </p>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Name *</label>
                                        <Input
                                            type="text"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                                        <Input
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">Company Name *</label>
                                        <Input
                                            type="text"
                                            placeholder="Your company"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700">
                                            Monthly Revenue (Optional)
                                        </label>
                                        <select
                                            className="w-full px-4 py-2 h-10 rounded-lg border border-gray-300 bg-white text-gray-900 outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-colors"
                                            value={formData.revenue}
                                            onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                                        >
                                            <option value="">Select range</option>
                                            <option value="0-50k">$0 - $50k</option>
                                            <option value="50k-100k">$50k - $100k</option>
                                            <option value="100k-250k">$100k - $250k</option>
                                            <option value="250k-500k">$250k - $500k</option>
                                            <option value="500k+">$500k+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">
                                        Tell us about your goals *
                                    </label>
                                    <Textarea
                                        placeholder="What are your biggest growth challenges? What are you looking to achieve?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        className="min-h-32"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="secondary"
                                    size="lg"
                                    className="w-full"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                    {/* Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Benefits List */}
                        {benefitsList && benefitsList.length > 0 && (
                            <Card className="p-8 bg-white">
                                <h3 className="text-2xl mb-4 text-gray-900 font-semibold">
                                    Why Partner with Us?
                                </h3>
                                <div className="space-y-4">
                                    {benefitsList.map((item: any, index: number) => (
                                        <div key={index} className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            </div>
                                            <div>
                                                <h4 className="mb-1 font-semibold text-gray-900">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {/* Office Hours */}
                        {officeHours && (
                            <Card className="p-8 bg-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-2xl text-gray-900 font-semibold">
                                        Office Hours
                                    </h3>
                                </div>
                                <div className="space-y-2 text-gray-600">
                                    {officeHours.weekdayHours && (
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span>{officeHours.weekdayHours}</span>
                                        </div>
                                    )}
                                    {officeHours.saturdayHours && (
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span>{officeHours.saturdayHours}</span>
                                        </div>
                                    )}
                                    {officeHours.sundayHours && (
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span>{officeHours.sundayHours}</span>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        )}

                        {/* Response Time Card */}
                        {responseTimeCard && (
                            <Card className="p-8 text-center bg-purple-600 border-purple-600">
                                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-white" />
                                <h3 className="text-xl mb-2 text-white font-semibold">
                                    {responseTimeCard.title || 'Quick Response Time'}
                                </h3>
                                <p className="text-white/90 text-sm">
                                    {responseTimeCard.description || 'We typically respond within 24 hours.'}
                                </p>
                            </Card>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
