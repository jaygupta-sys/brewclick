import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "faq",
    title: "FAQ Section",
    icon: () => '❓',
    preview: {
        select: {
            title: 'sectionTitle',
        },
        prepare(selection) {
            return {
                title: selection.title || 'FAQ Section',
                subtitle: 'Frequently Asked Questions'
            }
        }
    },
    fields: [
        {
            type: 'string',
            name: 'badge',
            title: 'Badge Text',
            description: 'Small badge text above the title',
            initialValue: 'FAQs'
        },
        {
            type: 'string',
            name: 'sectionTitle',
            title: 'Section Title',
            initialValue: 'Frequently Asked Questions'
        },
        {
            type: 'string',
            name: 'sectionSubtitle',
            title: 'Section Subtitle',
            initialValue: 'Got questions? I\'ve got answers.'
        },
        {
            type: 'array',
            name: 'faqs',
            title: 'FAQ Items',
            description: 'Add your frequently asked questions',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            type: 'string',
                            name: 'question',
                            title: 'Question',
                            validation: Rule => Rule.required()
                        },
                        {
                            type: 'text',
                            name: 'answer',
                            title: 'Answer',
                            rows: 4,
                            validation: Rule => Rule.required()
                        }
                    ],
                    preview: {
                        select: {
                            title: 'question',
                            subtitle: 'answer'
                        }
                    }
                }
            ],
            initialValue: [
                {
                    question: 'What types of websites do you build?',
                    answer: 'I specialize in high-performance websites for D2C and ecommerce brands, including Shopify stores, custom web applications, and landing pages optimized for conversions.'
                },
                {
                    question: 'How long does it take to see SEO results?',
                    answer: 'Most clients start seeing improvements within 2-3 months. Significant ranking improvements typically occur after 4-6 months as search engines index the optimizations and build trust in your site.'
                },
                {
                    question: 'Do you offer ongoing support?',
                    answer: 'Yes! I offer monthly retainers for ongoing optimization, updates, and support. This ensures your website continues to perform well and stays ahead of the competition.'
                }
            ]
        },
        {
            type: 'string',
            name: 'backgroundColor',
            title: 'Background Color',
            description: 'Choose background style for this section',
            options: {
                list: [
                    {title: 'White', value: 'white'},
                    {title: 'Gray (Light)', value: 'gray'},
                    {title: 'Gradient (Purple to Cyan)', value: 'gradient'}
                ],
                layout: 'radio'
            },
            initialValue: 'white'
        }
    ]
});
