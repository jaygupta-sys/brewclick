import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "callToAction",
    title: "Call to Action",
    icon: () => '📣',
    preview: {
        select: {
            title: 'button.text',
            media: 'image',
        },
        prepare(selection) {
            return {
                title: selection.title,
                media: selection.media,
                subtitle: 'Call To Action'
            }
        }
    },
    fields: [
        {
            name: 'layout',
            type: 'string',
            options: {
                list: ['vertical', 'horizontal']
            },
            initialValue: 'vertical'
        },
        {
            type: "image",
            name: "image"
        },
        {
            name: "content",
            type: "contentEditor",
        },
        {
            name: 'button',
            type: 'object',
            fields: [
                {
                    type: 'string',
                    name: 'text'
                },
                {
                    type: 'string',
                    name: 'link'
                }
            ]
        }
    ]
})