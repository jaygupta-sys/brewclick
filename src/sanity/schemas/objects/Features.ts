import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "features",
    title: "Features Section",
    icon: () => '⭐',
    preview: {
        select: {
            title: 'grid[0].name',
            media: 'grid[0].icon',
        },
        prepare(selection) {
            return {
                title: selection.title,
                media: selection.media,
                subtitle: 'Features'
            }
        }
    },
    fields: [
        {
            type: 'array',
            name: 'grid',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            type: 'image',
                            name: 'icon'
                        },
                        {
                            type: 'string',
                            name: 'name'
                        },
                        {
                            type: 'string',
                            name: 'description'
                        }
                    ]
                }
            ]
        }
    ]
})