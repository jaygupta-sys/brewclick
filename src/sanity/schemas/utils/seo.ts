import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "seo",
    options: {
        collapsible: true,
        collapsed: false
    },
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'SEO Title'
        },
        {
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: input => {
                    if (input == 'Home') {
                        return '/';
                    }
                    return input
                        .toLowerCase()
                        .replace(/[^a-zA-Z0-9]+/g, '-');
                }
            }
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: Rule => Rule
                .required()
                .min(120)
                .max(160),
        },
    ]
})