import { defineType } from "sanity";

export default defineType({
    name: 'stats',
    title: 'Stats Section',
    type: 'object',
    icon: () => '📊',
    fields: [
        {
            name: 'stats',
            title: 'Statistics',
            type: 'array',
            description: 'Add statistics to display (works best with 2-6 items)',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'value',
                        title: 'Value',
                        type: 'string',
                        description: 'e.g., "150+", "$50M+", "3.5x"',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'label',
                        title: 'Label',
                        type: 'string',
                        description: 'e.g., "Brands Scaled", "Revenue Generated"',
                        validation: Rule => Rule.required()
                    }
                ],
                preview: {
                    select: {
                        title: 'value',
                        subtitle: 'label'
                    }
                }
            }],
            validation: Rule => Rule.required().min(2).max(6)
        }
    ],
    preview: {
        select: {
            stats: 'stats'
        },
        prepare({ stats }) {
            return {
                title: 'Stats Section',
                subtitle: `${stats?.length || 0} statistics`
            }
        }
    }
});
