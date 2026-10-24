import { defineType } from "sanity";

export const Services = defineType({
    name: 'servicesSection',
    title: 'Services Section',
    type: 'object',
    fields: [
        {
            name: 'badge',
            title: 'Badge Text',
            type: 'string',
            description: 'Small badge text above the heading',
            initialValue: 'What We Do'
        },
        {
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
            initialValue: 'Full-Stack Marketing for Ecommerce',
            validation: Rule => Rule.required()
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            rows: 2,
            initialValue: 'We\'re your growth partner, handling everything from customer acquisition to retention'
        },
        {
            name: 'displayMode',
            title: 'Display Mode',
            type: 'string',
            options: {
                list: [
                    {title: 'Auto - Show All Featured Services', value: 'auto'},
                    {title: 'Manual - Select Specific Services', value: 'manual'}
                ],
                layout: 'radio'
            },
            initialValue: 'auto',
            description: 'Auto mode shows all services marked as "Featured" in the Service documents'
        },
        {
            name: 'selectedServices',
            title: 'Selected Services',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{type: 'service'}]
                }
            ],
            hidden: ({parent}) => parent?.displayMode === 'auto',
            description: 'Manually select which services to display',
            validation: Rule => Rule.custom((value: any, context: any) => {
                const displayMode = context.parent?.displayMode;
                if (displayMode === 'manual' && (!value || value.length === 0)) {
                    return 'Please select at least one service';
                }
                return true;
            })
        },
        {
            name: 'maxServices',
            title: 'Maximum Services to Display',
            type: 'number',
            description: 'Limit the number of services shown (only for Auto mode)',
            hidden: ({parent}) => parent?.displayMode === 'manual',
            initialValue: 6,
            validation: Rule => Rule.min(1).max(12)
        },
        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            options: {
                list: [
                    {title: 'White', value: 'bg-white'},
                    {title: 'Light Gray', value: 'bg-gray-50'},
                    {title: 'Dark', value: 'bg-gray-900'},
                ]
            },
            initialValue: 'bg-white'
        }
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'subheading',
            displayMode: 'displayMode'
        },
        prepare({title, subtitle, displayMode}) {
            return {
                title: title || 'Services Section',
                subtitle: `${displayMode === 'auto' ? 'Auto (Featured)' : 'Manual Selection'} - ${subtitle || ''}`
            }
        }
    }
});
