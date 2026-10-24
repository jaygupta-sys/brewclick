import { defineField, defineType } from "sanity";

export const blog = defineType({
    title: 'Blog',
    name: 'blog',
    type: 'document',
    fields: [
        {
            name: 'seo',
            type: 'seo'
        },
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            description: 'Brief summary for blog listing pages',
            validation: Rule => Rule.required().max(200)
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    {title: 'Website Development', value: 'website-development'},
                    {title: 'SEO Strategy', value: 'seo-strategy'},
                    {title: 'Ecommerce', value: 'ecommerce'},
                    {title: 'D2C Growth', value: 'd2c-growth'},
                    {title: 'Conversion Optimization', value: 'conversion-optimization'},
                    {title: 'Case Studies', value: 'case-studies'},
                ]
            },
            validation: Rule => Rule.required()
        }),
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    validation: (Rule: any) => Rule.required()
                }
            ]
        },
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        }),
        defineField({
            name: 'readTime',
            title: 'Read Time (minutes)',
            type: 'number',
            description: 'Estimated reading time in minutes'
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            initialValue: 'Mayank Gupta'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'contentEditor'
        }),
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        },
        defineField({
            name: 'featured',
            title: 'Featured Post',
            type: 'boolean',
            description: 'Show this post as featured on blog page',
            initialValue: false
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'featuredImage'
        }
    }
})