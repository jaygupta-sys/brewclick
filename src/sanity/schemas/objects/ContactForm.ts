import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "contactForm",
    title: "Contact Form",
    icon: () => '📧',
    preview: {
        select: {
            title: 'sectionTitle',
            layout: 'layout',
        },
        prepare(selection) {
            const layout = selection.layout === 'detailed' ? 'Detailed' : 'Simple';
            return {
                title: selection.title || 'Contact Form',
                subtitle: `Contact Section - ${layout} Layout`
            }
        }
    },
    fields: [
        {
            type: 'string',
            name: 'layout',
            title: 'Form Layout',
            description: 'Choose between simple gradient form or detailed multi-column layout',
            options: {
                list: [
                    {title: 'Simple (Gradient Background)', value: 'simple'},
                    {title: 'Detailed (Multi-Column with Info)', value: 'detailed'}
                ],
                layout: 'radio'
            },
            initialValue: 'simple'
        },
        {
            type: 'string',
            name: 'badge',
            title: 'Badge Text',
            description: 'Small badge text above the title',
            initialValue: 'Let\'s Talk Growth'
        },
        {
            type: 'string',
            name: 'sectionTitle',
            title: 'Section Title',
            initialValue: 'Ready to Scale Your Brand?'
        },
        {
            type: 'text',
            name: 'sectionSubtitle',
            title: 'Section Subtitle',
            rows: 3,
            initialValue: 'Book a free strategy call and discover how we can help you achieve your growth goals'
        },
        {
            type: 'array',
            name: 'contactOptions',
            title: 'Contact Options',
            description: 'Add contact methods (Email, Chat, Calendar, Phone)',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            type: 'string',
                            name: 'iconType',
                            title: 'Icon Type',
                            options: {
                                list: [
                                    {title: 'Email', value: 'Mail'},
                                    {title: 'Message/Chat', value: 'MessageSquare'},
                                    {title: 'Calendar', value: 'Calendar'},
                                    {title: 'Phone', value: 'Phone'},
                                    {title: 'Map Pin/Location', value: 'MapPin'},
                                    {title: 'Clock/Hours', value: 'Clock'},
                                ]
                            }
                        },
                        {
                            type: 'string',
                            name: 'title',
                            title: 'Option Title',
                            validation: Rule => Rule.required()
                        },
                        {
                            type: 'string',
                            name: 'description',
                            title: 'Description',
                            validation: Rule => Rule.required()
                        },
                        {
                            type: 'string',
                            name: 'actionText',
                            title: 'Action Text (optional)',
                            description: 'Secondary text like "Mon-Fri, 9am-6pm EST"'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            icon: 'iconType'
                        },
                        prepare(selection) {
                            return {
                                title: selection.title,
                                subtitle: selection.icon
                            }
                        }
                    }
                }
            ]
        },
        {
            type: 'array',
            name: 'benefitsList',
            title: 'Benefits List (Detailed Layout Only)',
            description: 'Why partner with you - shown in sidebar for detailed layout',
            hidden: ({parent}) => parent?.layout !== 'detailed',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            type: 'string',
                            name: 'title',
                            title: 'Benefit Title',
                            validation: Rule => Rule.required()
                        },
                        {
                            type: 'text',
                            name: 'description',
                            title: 'Description',
                            rows: 2,
                            validation: Rule => Rule.required()
                        }
                    ]
                }
            ]
        },
        {
            type: 'object',
            name: 'officeHours',
            title: 'Office Hours (Detailed Layout Only)',
            description: 'Business hours information',
            hidden: ({parent}) => parent?.layout !== 'detailed',
            fields: [
                {
                    type: 'string',
                    name: 'weekdayHours',
                    title: 'Weekday Hours',
                    initialValue: '9:00 AM - 6:00 PM EST'
                },
                {
                    type: 'string',
                    name: 'saturdayHours',
                    title: 'Saturday Hours',
                    initialValue: '10:00 AM - 2:00 PM EST'
                },
                {
                    type: 'string',
                    name: 'sundayHours',
                    title: 'Sunday Hours',
                    initialValue: 'Closed'
                }
            ]
        },
        {
            type: 'object',
            name: 'responseTimeCard',
            title: 'Response Time Card (Detailed Layout Only)',
            description: 'Show quick response guarantee',
            hidden: ({parent}) => parent?.layout !== 'detailed',
            fields: [
                {
                    type: 'string',
                    name: 'title',
                    title: 'Card Title',
                    initialValue: 'Quick Response Time'
                },
                {
                    type: 'text',
                    name: 'description',
                    title: 'Description',
                    rows: 2,
                    initialValue: 'We typically respond to all inquiries within 24 hours during business days. Urgent matters? Call us directly!'
                }
            ]
        },
    ]
})
