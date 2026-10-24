import { defineType } from "sanity";

export default defineType({
    name: 'values',
    title: 'Values Section',
    type: 'object',
    icon: () => '💎',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Our Values',
            validation: Rule => Rule.required()
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
            initialValue: 'The principles that guide everything we do'
        },
        {
            name: 'values',
            title: 'Values',
            type: 'array',
            description: 'Add company values (works best with 4 items)',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'icon',
                        title: 'Icon',
                        type: 'string',
                        options: {
                            list: [
                                { title: '🎯 Target', value: 'Target' },
                                { title: '❤️ Heart', value: 'Heart' },
                                { title: '⚡ Zap', value: 'Zap' },
                                { title: '👥 Users', value: 'Users' },
                                { title: '📈 Trending Up', value: 'TrendingUp' },
                                { title: '🏆 Award', value: 'Award' },
                                { title: '✨ Sparkles', value: 'Sparkles' },
                                { title: '🛡️ Shield', value: 'Shield' },
                                { title: '💡 Lightbulb', value: 'Lightbulb' },
                                { title: '🚀 Rocket', value: 'Rocket' },
                                { title: '⭐ Star', value: 'Star' },
                                { title: '🎨 Palette', value: 'Palette' },
                                { title: '🌟 Sparkle', value: 'Sparkle' },
                                { title: '💎 Diamond', value: 'Gem' },
                                { title: '🔥 Flame', value: 'Flame' },
                                { title: '🌍 Globe', value: 'Globe' },
                                { title: '🤝 Handshake', value: 'Handshake' },
                                { title: '🎯 Focus', value: 'Focus' },
                                { title: '💪 Strength', value: 'Dumbbell' },
                                { title: '🧠 Brain', value: 'Brain' },
                            ]
                        },
                        initialValue: 'Target',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'description',
                        title: 'Description',
                        type: 'text',
                        rows: 3,
                        validation: Rule => Rule.required()
                    }
                ],
                preview: {
                    select: {
                        title: 'title',
                        subtitle: 'description',
                        icon: 'icon'
                    }
                }
            }],
            validation: Rule => Rule.required().min(2).max(8)
        }
    ],
    preview: {
        select: {
            heading: 'heading',
            values: 'values'
        },
        prepare({ heading, values }) {
            return {
                title: 'Values Section',
                subtitle: `${heading} - ${values?.length || 0} values`
            }
        }
    }
});
