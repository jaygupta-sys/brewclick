import { defineType } from "sanity";

export const work = defineType({
    title: 'Case Study',
    name: 'work',
    type: 'document',
    fields: [
        {
            name: 'seo',
            type: 'seo'
        },
        {
            name: 'title',
            title: 'Brand Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {title: 'Beauty & Wellness', value: 'beauty-wellness'},
                    {title: 'Sports & Fitness', value: 'sports-fitness'},
                    {title: 'Home & Living', value: 'home-living'},
                    {title: 'Health & Wellness', value: 'health-wellness'},
                    {title: 'Fashion & Lifestyle', value: 'fashion-lifestyle'},
                    {title: 'Food & Beverage', value: 'food-beverage'},
                ]
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'industry',
            title: 'Industry',
            type: 'string',
            description: 'e.g., Skincare D2C, Athletic Apparel, etc.',
            validation: Rule => Rule.required()
        },
        {
            name: 'duration',
            title: 'Project Duration',
            type: 'string',
            description: 'e.g., 6 Months',
            initialValue: '6 Months',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            description: 'Brief description for listing pages (optional)',
            hidden: true // Hide this field, not used in new design
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [{
                name: 'alt',
                type: 'string',
                title: 'Alternative Text'
            }],
            validation: Rule => Rule.required()
        },
        {
            name: 'webpages',
            title: 'Gallery Images',
            type: 'array',
            of: [{
                type: 'image',
                fields: [{
                    name: 'alt',
                    type: 'string'
                }]
            }],
            hidden: true // Hide this field, not used in new design
        },
        {
            name: 'results',
            title: 'Key Results',
            type: 'array',
            description: 'Add exactly 3 key metrics',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'label',
                        title: 'Label',
                        type: 'string',
                        description: 'e.g., Revenue Growth, ROAS, CAC Reduction',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'value',
                        title: 'Value',
                        type: 'string',
                        description: 'e.g., +285%, 4.2x, -42%',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'icon',
                        title: 'Icon',
                        type: 'string',
                        options: {
                            list: [
                                {title: '📈 Trending Up', value: 'TrendingUp'},
                                {title: '💰 Dollar Sign', value: 'DollarSign'},
                                {title: '👥 Users', value: 'Users'},
                                {title: '🎯 Target', value: 'Target'},
                                {title: '🛒 Shopping Cart', value: 'ShoppingCart'},
                                {title: '📊 Bar Chart', value: 'BarChart3'},
                                {title: '💳 Credit Card', value: 'CreditCard'},
                                {title: '🚀 Rocket', value: 'Rocket'},
                                {title: '⚡ Zap', value: 'Zap'},
                                {title: '🏆 Award', value: 'Award'},
                                {title: '⭐ Star', value: 'Star'},
                                {title: '💡 Lightbulb', value: 'Lightbulb'},
                                {title: '📱 Smartphone', value: 'Smartphone'},
                                {title: '💬 Message', value: 'MessageCircle'},
                                {title: '❤️ Heart', value: 'Heart'},
                            ]
                        },
                        initialValue: 'TrendingUp',
                        validation: Rule => Rule.required()
                    }
                ]
            }],
            validation: Rule => Rule.required().length(3)
        },
        {
            name: 'challenge',
            title: 'The Challenge',
            type: 'text',
            rows: 4,
            description: 'What problem did the client face?',
            validation: Rule => Rule.required()
        },
        {
            name: 'solution',
            title: 'The Solution',
            type: 'text',
            rows: 4,
            description: 'How did you solve it?',
            validation: Rule => Rule.required()
        },
        {
            name: 'keyTactics',
            title: 'Key Tactics',
            type: 'array',
            of: [{type: 'string'}],
            description: 'List exactly 4 key strategies used',
            validation: Rule => Rule.required().length(4)
        },
        {
            name: 'content',
            title: 'Detailed Content',
            type: 'contentEditor',
            description: 'Full case study content (optional)'
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
            initialValue: 0
        },
        {
            name: 'primaryButton',
            type: 'buttonSettings',
            description: 'Call-to-action button (optional)',
            hidden: true // Hide this field, not used in new design
        },
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [
                {field: 'order', direction: 'asc'}
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'featuredImage'
        }
    }
})