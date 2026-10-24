import { defineType } from "sanity";

export const service = defineType({
    title: 'Service',
    name: 'service',
    type: 'document',
    fields: [
        {
            name: 'seo',
            type: 'seo'
        },
        {
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 2,
            description: 'Brief description for service cards and listings',
            validation: Rule => Rule.required().max(200)
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            options: {
                list: [
                    {title: '📈 Trending Up', value: 'TrendingUp'},
                    {title: '📢 Megaphone', value: 'Megaphone'},
                    {title: '🎨 Palette', value: 'Palette'},
                    {title: '📊 Bar Chart', value: 'BarChart3'},
                    {title: '✉️ Mail', value: 'Mail'},
                    {title: '🛒 Shopping Cart', value: 'ShoppingCart'},
                    {title: '🔍 Search', value: 'Search'},
                    {title: '💻 Code', value: 'Code'},
                    {title: '⚡ Zap', value: 'Zap'},
                    {title: '👥 Users', value: 'Users'},
                    {title: '🎯 Target', value: 'Target'},
                    {title: '🌐 Globe', value: 'Globe'},
                    {title: '✅ Check Circle', value: 'CheckCircle2'},
                    {title: '💡 Lightbulb', value: 'Lightbulb'},
                    {title: '🚀 Rocket', value: 'Rocket'},
                    {title: '💰 Dollar Sign', value: 'DollarSign'},
                    {title: '📱 Smartphone', value: 'Smartphone'},
                    {title: '🎬 Video', value: 'Video'},
                    {title: '📸 Camera', value: 'Camera'},
                    {title: '💬 Message Circle', value: 'MessageCircle'},
                    {title: '📞 Phone', value: 'Phone'},
                    {title: '🔔 Bell', value: 'Bell'},
                    {title: '⭐ Star', value: 'Star'},
                    {title: '❤️ Heart', value: 'Heart'},
                    {title: '📦 Package', value: 'Package'},
                    {title: '🏆 Award', value: 'Award'},
                    {title: '📝 File Text', value: 'FileText'},
                    {title: '⚙️ Settings', value: 'Settings'},
                    {title: '🔒 Lock', value: 'Lock'},
                    {title: '🔓 Unlock', value: 'Unlock'},
                    {title: '👁️ Eye', value: 'Eye'},
                    {title: '🔗 Link', value: 'Link2'},
                    {title: '📅 Calendar', value: 'Calendar'},
                    {title: '🕒 Clock', value: 'Clock'},
                    {title: '📍 Map Pin', value: 'MapPin'},
                    {title: '🏠 Home', value: 'Home'},
                    {title: '🏢 Building', value: 'Building2'},
                    {title: '✏️ Edit', value: 'Edit'},
                    {title: '🗑️ Trash', value: 'Trash2'},
                    {title: '📥 Download', value: 'Download'},
                    {title: '📤 Upload', value: 'Upload'},
                    {title: '🔄 Refresh', value: 'RefreshCw'},
                    {title: '🎁 Gift', value: 'Gift'},
                    {title: '💳 Credit Card', value: 'CreditCard'},
                    {title: '📈 Line Chart', value: 'LineChart'},
                    {title: '🥇 Medal', value: 'Medal'},
                    {title: '🎓 Graduation Cap', value: 'GraduationCap'},
                    {title: '🔊 Volume', value: 'Volume2'},
                    {title: '🖼️ Image', value: 'Image'},
                    {title: '🎵 Music', value: 'Music'},
                ]
            },
            initialValue: 'TrendingUp',
            description: 'Icon shown on service cards'
        },
        {
            name: 'gradientColor',
            title: 'Card Gradient Color',
            type: 'string',
            options: {
                list: [
                    {title: 'Purple', value: 'from-purple-500 to-purple-600'},
                    {title: 'Pink', value: 'from-pink-500 to-pink-600'},
                    {title: 'Cyan', value: 'from-cyan-500 to-cyan-600'},
                    {title: 'Indigo', value: 'from-indigo-500 to-indigo-600'},
                    {title: 'Orange', value: 'from-orange-500 to-orange-600'},
                    {title: 'Teal', value: 'from-teal-500 to-teal-600'},
                    {title: 'Blue', value: 'from-blue-500 to-blue-600'},
                    {title: 'Green', value: 'from-green-500 to-green-600'},
                    {title: 'Red', value: 'from-red-500 to-red-600'},
                ]
            },
            initialValue: 'from-purple-500 to-purple-600',
            description: 'Gradient color for service card icon background'
        },
        {
            name: 'featured',
            title: 'Featured Service',
            type: 'boolean',
            description: 'Show in services section when using auto mode',
            initialValue: true
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which service appears (lower number = first)',
            initialValue: 0
        },
        {
            name: 'features',
            title: 'Key Features',
            type: 'array',
            description: 'List of features/deliverables for service cards',
            of: [{
                type: 'string'
            }],
            validation: Rule => Rule.max(8)
        },
        // PAGE BUILDER - Full landing page control
        {
            name: 'components',
            type: 'array',
            title: 'Page Components (Landing Page Builder)',
            description: 'Build your custom service landing page using these sections',
            of: [
                { type: 'hero' },
                { type: 'features' },
                { type: 'callToAction' },
                { type: 'process' },
                { type: 'caseStudies' },
                { type: 'testimonialsSection' },
                { type: 'contactForm' },
                { type: 'faq' },
                { type: 'servicesSection' },
                { type: 'stats' },
                { type: 'values' },
                { type: 'team' },
                { type: 'story' }
            ],
        }
    ],
    preview: {
        select: {
            title: 'seo.title',
            subtitle: 'shortDescription'
        }
    }
});
