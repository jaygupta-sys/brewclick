import { defineField } from "sanity";

export const testimonials = {
    title: 'Testimonials',
    name: 'testimonials',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Author Name',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            type: 'string',
            title: 'Author Role/Title',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'content',
            type: 'text',
            title: 'Testimonial Content',
            validation: (rule) => rule.required().min(10),
        }),
        defineField({
            name: 'rating',
            type: 'number',
            title: 'Rating',
            description: 'Rating from 1 to 5 stars',
            validation: (rule) => rule.required().min(1).max(5),
        }),
        defineField({
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image',
            validation: (rule) => rule.required(),
            options: {
                hotspot: true,
            }
        }),
        {
            name: 'seo',
            type: 'seo'
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'profileImage',
        }
    }
}