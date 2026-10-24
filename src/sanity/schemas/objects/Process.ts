import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "process",
    title: "Process Section",
    icon: () => '🔄',
    preview: {
        select: {
            title: 'grid[0].name',
            media: 'image',
        },
        prepare(selection) {
            return {
                title: selection.title,
                media: selection.media,
                subtitle: 'Process'
            }
        }
    },
    fields: [
        {
            type: "contentEditor",
            name: "content"
        },
        {
            type: 'array',
            name: 'grid',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            type: 'string',
                            name: 'name'
                        },
                        {
                            type: 'text',
                            name: 'description'
                        }
                    ]
                }
            ]
        }
    ]
})