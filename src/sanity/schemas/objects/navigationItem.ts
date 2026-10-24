import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "navigationItem",
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'layoutType',
            type: 'string',
            options: {
                list: ['internal', 'external']
            }
        },
        {
            name: 'link',
            type: 'reference',
            to: [{type: 'page'}, {type: 'blog'}, {type: 'work'}, {type: 'service'}],
            hidden: ({ parent }) => parent?.layoutType !== 'internal',
        },
        {
            name: 'externalLink',
            type: 'string',
            hidden: ({ parent }) => parent.layoutType !== 'external'
        }
    ]
})