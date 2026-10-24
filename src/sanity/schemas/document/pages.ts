import { defineField } from "sanity";

export const page = {
    title: 'Page',
    name: 'page',
    type: 'document',
    preview: {
        select: {
            title: 'seo.title'
        }
    },
    fields: [
        {
            name: 'seo',
            type: 'seo'
        },
        {
            name: 'components',
            type: 'array',
            title: 'Page Components',
            of: [
                {
                    type: 'hero'
                },
                {
                    type: 'features'
                },
                {
                    type: 'callToAction'
                },
                {
                    type: 'process'
                },
                {
                    type: 'caseStudies'
                },
                {
                    type: 'testimonialsSection'
                },
                {
                    type: 'contactForm'
                },
                {
                    type: 'faq'
                },
                {
                    type: 'servicesSection'
                }
            ],
        },
    ]
}