import { defineType } from "sanity";

export default defineType({
    type: "object",
    name: "testimonialsSection",
    title: "Testimonials Section",
    icon: () => '⭐',
    preview: {
        select: {
            title: 'heading',
        },
        prepare(selection) {
            return {
                title: selection.title || 'Testimonials',
                subtitle: 'Testimonials Section'
            }
        }
    },
    fields: [
        {
            type: 'string',
            name: 'badge',
            title: 'Badge Text',
            description: 'Small badge text above the title',
            initialValue: 'Testimonials'
        },
        {
            type: 'string',
            name: 'heading',
            title: 'Section Heading',
            initialValue: 'Loved by Ecommerce Brands',
            validation: Rule => Rule.required()
        },
        {
            type: 'text',
            name: 'subheading',
            title: 'Section Subheading',
            rows: 2,
            initialValue: 'Don\'t just take our word for it—hear from the brands we\'ve helped grow'
        },
        {
            type: 'array',
            name: 'selectedTestimonials',
            title: 'Select Testimonials',
            description: 'Leave empty to show all testimonials',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'testimonials' }]
                }
            ]
        }
    ]
})
