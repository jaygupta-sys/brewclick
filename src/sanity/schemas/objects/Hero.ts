import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "hero",
    title: "Hero Section",
    icon: () => '🎯',
    preview: {
        select: {
            title: 'title',
        },
        prepare(selection) {
            return {
                title: selection.title,
                subtitle: 'Hero'
            }
        }
    },
    fields: [
        {
            type: 'string',
            name: 'badgeText',
            title: 'Badge Text',
            description: 'Small text shown in the badge above the title',
        },
        {
            type: 'string',
            name: 'title',
            title: 'Title',
            description: 'Main hero title (before the highlighted text)',
            validation: Rule => Rule.required(),
        },
        {
            type: 'array',
            name: 'keywordList',
            title: 'Highlighted Keywords',
            description: 'Words that appear in the gradient text (typewriter effect)',
            of: [
                {
                    type: 'string',
                    name: 'keyword'
                }
            ],
            validation: Rule => Rule.required().min(1),
        },
        {
            type: 'string',
            name: 'description',
            title: 'Description',
            description: 'Subheading text below the title',
            validation: Rule => Rule.required(),
        },
        {
            name: 'primaryButton',
            title: 'Primary Button',
            type: 'buttonSettings'
        },
        {
            name: 'secondaryButton',
            title: 'Secondary Button',
            type: 'buttonSettings'
        },
        {
            type: 'array',
            name: 'stats',
            title: 'Statistics',
            description: 'Display stats in a grid at the bottom of the hero',
            of: [
                {
                    type: 'object',
                    name: 'stat',
                    title: 'Statistic',
                    fields: [
                        {
                            type: 'string',
                            name: 'value',
                            title: 'Value',
                            description: 'e.g., "150+", "$50M+", "3.5x"',
                            validation: Rule => Rule.required(),
                        },
                        {
                            type: 'string',
                            name: 'label',
                            title: 'Label',
                            description: 'e.g., "Brands Scaled", "Revenue Generated"',
                            validation: Rule => Rule.required(),
                        }
                    ]
                }
            ]
        }
    ]
})