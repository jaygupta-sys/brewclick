import { defineField, defineType } from "sanity";

export default defineType({
    type: "object",
    name: "linkedinRecommendations",
    title: "LinkedIn Recommendations",
    icon: () => '💼',
    preview: {
        select: {
            title: 'sectionTitle',
        },
        prepare(selection) {
            return {
                title: selection.title || 'LinkedIn Recommendations',
                subtitle: 'LinkedIn Recommendations Carousel'
            }
        }
    },
    fields: [
        defineField({
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
            description: 'Main heading for the recommendations section',
            initialValue: 'LinkedIn Recommendations'
        }),
        defineField({
            name: 'sectionSubtitle',
            title: 'Section Subtitle',
            type: 'string',
            description: 'Subtitle text below the main heading',
            initialValue: 'What professionals say about working with me'
        }),
        {
            name: 'recommendations',
            title: 'Recommendations',
            type: 'array',
            description: 'Add LinkedIn recommendations',
            validation: (Rule: any) => Rule.required().min(1),
            of: [
                {
                    type: 'object',
                    name: 'recommendation',
                    title: 'Recommendation',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            description: 'Full name of the person giving the recommendation',
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: 'title',
                            title: 'Job Title',
                            type: 'string',
                            description: 'Current job title of the recommender',
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: 'company',
                            title: 'Company',
                            type: 'string',
                            description: 'Current company of the recommender',
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: 'relationship',
                            title: 'Relationship',
                            type: 'string',
                            description: 'How you worked together (e.g., "worked directly with", "managed")',
                        },
                        {
                            name: 'recommendationText',
                            title: 'Recommendation Text',
                            type: 'text',
                            description: 'The actual recommendation content',
                            validation: (Rule: any) => Rule.required()
                        },
                        {
                            name: 'profileImage',
                            title: 'Profile Image',
                            type: 'image',
                            description: 'Profile photo of the recommender',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: 'linkedinUrl',
                            title: 'LinkedIn Profile URL',
                            type: 'url',
                            description: 'Link to the recommender\'s LinkedIn profile',
                            validation: (Rule: any) => Rule.uri({
                                scheme: ['http', 'https']
                            })
                        },
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'company',
                            media: 'profileImage'
                        }
                    }
                }
            ]
        },
        defineField({
            name: 'autoPlayInterval',
            title: 'Auto-Play Interval (milliseconds)',
            type: 'number',
            description: 'Time between automatic slide transitions (default: 5000ms / 5 seconds)',
            initialValue: 5000,
            validation: Rule => Rule.min(1000).max(30000)
        }),
        defineField({
            name: 'showNavigation',
            title: 'Show Navigation Arrows',
            type: 'boolean',
            description: 'Display previous/next arrow buttons',
            initialValue: true
        }),
        defineField({
            name: 'showDots',
            title: 'Show Dot Indicators',
            type: 'boolean',
            description: 'Display dot navigation at the bottom',
            initialValue: true
        })
    ]
})
