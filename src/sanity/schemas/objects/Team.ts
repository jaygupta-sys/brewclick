import { defineType } from "sanity";

export default defineType({
    name: 'team',
    title: 'Team Section',
    type: 'object',
    icon: () => '👥',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
            initialValue: 'Meet the Team',
            validation: Rule => Rule.required()
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
            initialValue: 'The experts behind your growth'
        },
        {
            name: 'members',
            title: 'Team Members',
            type: 'array',
            description: 'Add team members (works best with 4 or 8 members)',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'name',
                        title: 'Name',
                        type: 'string',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'role',
                        title: 'Role/Position',
                        type: 'string',
                        description: 'e.g., "Founder & CEO", "Head of Marketing"',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'expertise',
                        title: 'Expertise',
                        type: 'string',
                        description: 'e.g., "Growth Strategy & Performance Marketing"',
                        validation: Rule => Rule.required()
                    },
                    {
                        name: 'image',
                        title: 'Profile Image',
                        type: 'image',
                        options: {
                            hotspot: true
                        },
                        fields: [{
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                            description: 'Describe the image for accessibility'
                        }],
                        validation: Rule => Rule.required()
                    }
                ],
                preview: {
                    select: {
                        title: 'name',
                        subtitle: 'role',
                        media: 'image'
                    }
                }
            }],
            validation: Rule => Rule.required().min(1).max(12)
        }
    ],
    preview: {
        select: {
            heading: 'heading',
            members: 'members'
        },
        prepare({ heading, members }) {
            return {
                title: 'Team Section',
                subtitle: `${heading} - ${members?.length || 0} members`
            }
        }
    }
});
