import { defineType } from "sanity";

export default defineType({
    name: 'story',
    title: 'Story Section',
    type: 'object',
    icon: () => '📖',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Our Story',
            validation: Rule => Rule.required()
        },
        {
            name: 'content',
            title: 'Story Content',
            type: 'contentEditor',
            description: 'Write your company story',
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            heading: 'heading'
        },
        prepare({ heading }) {
            return {
                title: 'Story Section',
                subtitle: heading
            }
        }
    }
});
