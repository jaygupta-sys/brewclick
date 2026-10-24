import { defineType } from "sanity";

export default defineType({
    title: 'Button',
    name: 'buttonSettings',
    type: 'object',
    fields: [
        {
            title: 'Button Text',
            name: 'text',
            type: 'string',
            description: 'Text displayed on the button',
            validation: Rule => Rule.required()
        },
        {
            title: 'Button Link',
            name: 'link',
            type: 'string',
            description: 'URL or path (e.g., /contact, https://example.com)',
            validation: Rule => Rule.required()
        },
        {
            title: 'Button Variant',
            name: 'variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Primary (Purple)', value: 'primary' },
                    { title: 'Secondary (Pink)', value: 'secondary' },
                    { title: 'Outline (White with Purple border)', value: 'outline' },
                    { title: 'Ghost (Transparent with Purple text)', value: 'ghost' },
                ],
                layout: 'radio'
            },
            initialValue: 'primary'
        },
        {
            title: 'Button Size',
            name: 'size',
            type: 'string',
            options: {
                list: [
                    { title: 'Small', value: 'sm' },
                    { title: 'Medium', value: 'md' },
                    { title: 'Large', value: 'lg' },
                ],
                layout: 'radio'
            },
            initialValue: 'md'
        },
        {
            title: 'Icon',
            name: 'icon',
            type: 'string',
            description: 'Optional: Add a Lucide icon',
            options: {
                list: [
                    { title: 'None', value: '' },
                    { title: '→ Arrow Right', value: 'ArrowRight' },
                    { title: '↗ Arrow Up Right', value: 'ArrowUpRight' },
                    { title: '✉️ Mail', value: 'Mail' },
                    { title: '📞 Phone', value: 'Phone' },
                    { title: '🏠 Home', value: 'Home' },
                    { title: '🔍 Search', value: 'Search' },
                    { title: '📥 Download', value: 'Download' },
                    { title: '📤 Upload', value: 'Upload' },
                    { title: '✓ Check', value: 'Check' },
                    { title: '+ Plus', value: 'Plus' },
                    { title: '🚀 Rocket', value: 'Rocket' },
                    { title: '⭐ Star', value: 'Star' },
                    { title: '❤️ Heart', value: 'Heart' },
                ]
            },
            initialValue: ''
        },
        {
            title: 'Icon Position',
            name: 'iconPosition',
            type: 'string',
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
                layout: 'radio'
            },
            initialValue: 'right',
            hidden: ({ parent }) => !parent?.icon
        },
        {
            title: 'Open in New Tab',
            name: 'openInNewTab',
            type: 'boolean',
            description: 'Open link in a new browser tab',
            initialValue: false
        }
    ],
    preview: {
        select: {
            text: 'text',
            variant: 'variant',
            link: 'link'
        },
        prepare({ text, variant, link }) {
            return {
                title: text || 'Button',
                subtitle: `${variant || 'primary'} → ${link || 'No link'}`
            }
        }
    }
})