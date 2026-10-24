import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "caseStudies",
    title: "Case Studies",
    icon: () => '💼',
    preview: {
        select: {
            title: 'sectionTitle',
        },
        prepare(selection) {
            return {
                title: selection.title || 'Case Studies',
                subtitle: 'Success Stories'
            }
        }
    },
    fields: [
        {
            type: 'string',
            name: 'badge',
            title: 'Badge Text',
            description: 'Small badge text above the title',
            initialValue: 'Success Stories'
        },
        {
            type: 'string',
            name: 'sectionTitle',
            title: 'Section Title',
            initialValue: 'Projects That Delivered Results'
        },
        {
            type: 'string',
            name: 'sectionSubtitle',
            title: 'Section Subtitle',
            initialValue: 'See how I\'ve helped D2C brands grow through better web experiences'
        },
        {
            type: 'array',
            name: 'studies',
            title: 'Case Studies',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            type: 'string',
                            name: 'brand',
                            title: 'Brand Name',
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            type: 'string',
                            name: 'category',
                            title: 'Category',
                            description: 'e.g., Beauty & Wellness, Sports & Fitness'
                        },
                        {
                            type: 'text',
                            name: 'description',
                            title: 'Description',
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            type: 'image',
                            name: 'image',
                            title: 'Featured Image',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            type: 'string',
                            name: 'gradientColor',
                            title: 'Gradient Overlay Color',
                            options: {
                                list: [
                                    {title: 'Primary (Orange/Red)', value: 'from-[#F05454] to-[#d04444]'},
                                    {title: 'Secondary (Dark Blue)', value: 'from-[#30475E] to-[#253545]'},
                                    {title: 'Blue/Cyan', value: 'from-blue-500 to-cyan-500'},
                                    {title: 'Teal/Green', value: 'from-teal-500 to-green-500'},
                                    {title: 'Gray/Slate', value: 'from-gray-500 to-slate-600'},
                                ]
                            },
                            initialValue: 'from-[#F05454] to-[#d04444]'
                        },
                        {
                            type: 'array',
                            name: 'results',
                            title: 'Key Results',
                            description: 'Add 3 key metrics/results',
                            validation: (Rule: any) => Rule.max(3),
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            type: 'string',
                                            name: 'value',
                                            title: 'Result Value',
                                            description: 'e.g., "+285%", "4.2x", "-42%"'
                                        },
                                        {
                                            type: 'string',
                                            name: 'label',
                                            title: 'Result Label',
                                            description: 'e.g., "Revenue Growth", "ROAS"'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'url',
                            name: 'caseStudyUrl',
                            title: 'Case Study URL (optional)',
                            description: 'Link to full case study page'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'brand',
                            subtitle: 'category',
                            media: 'image'
                        }
                    }
                }
            ]
        },
        {
            name: 'viewAllButton',
            type: 'buttonSettings',
            title: 'View All Button (optional)'
        }
    ]
})
