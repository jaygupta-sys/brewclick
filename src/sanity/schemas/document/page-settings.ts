import { defineType } from "sanity";

export default defineType({
    title: 'Page Settings',
    name: 'pageSettings',
    type: 'document',
    groups: [
        {title: 'Header', name: 'header'},
        {title: 'Footer', name: 'footer'},
        {title: 'Brand', name: 'brand'},
        {title: 'Landing Pages', name: 'landingPages'},
    ],
    fields: [
        {
            name: "header",
            type: "object",
            group: 'header',
            fields: [
                {
                    type: "image",
                    name: "logo",
                    title: "Logo",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            type: "string",
                            name: "alt",
                            title: "Alternative Text",
                            initialValue: "Brewclick Logo"
                        },
                        {
                            type: "string",
                            name: 'link',
                            title: "Logo Link",
                            initialValue: "/"
                        },
                        {
                            type: 'number',
                            name: 'height',
                            title: "Height (px)",
                            initialValue: 40
                        },
                        {
                            type: 'number',
                            name: 'width',
                            title: "Width (px)",
                            initialValue: 150
                        }
                    ]
                },
                {
                    name: "position",
                    title: "Header Positioning",
                    type: "object",
                    options: { collapsible: true, collapsed: false },
                    fields: [
                        {
                            name: "mode",
                            title: "Mode",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Overlay (content under header)", value: "overlay" },
                                    { title: "Offset (push content below)", value: "offset" },
                                ],
                                layout: "radio",
                            },
                            initialValue: "overlay",
                        },
                        {
                            name: "offsetStrategy",
                            title: "Offset Strategy",
                            type: "string",
                            description: "Only used if Mode = Offset",
                            options: {
                                list: [
                                    { title: "Auto (measure header height)", value: "auto" },
                                    { title: "Fixed (use specific pixels)", value: "fixed" },
                                ],
                                layout: "radio",
                            },
                            initialValue: "auto",
                            hidden: ({ parent }) => parent?.mode !== "offset",
                        },
                        {
                            name: "fixedOffsetPx",
                            title: "Fixed Offset (px)",
                            type: "number",
                            description: "Used when Offset Strategy = Fixed",
                            validation: (Rule: any) => Rule.min(0).max(400),
                            hidden: ({ parent }) => !(parent?.mode === "offset" && parent?.offsetStrategy === "fixed"),
                        },
                    ],
                },
                {
                    name: "style",
                    title: "Header Style",
                    type: "object",
                    options: { collapsible: true, collapsed: false },
                    fields: [
                        {
                            name: "initialBackground",
                            title: "Initial Background",
                            type: "color",
                            description: "Background color when the page loads (before scroll).",
                        },
                        {
                            name: "initialOpacity",
                            title: "Initial Opacity",
                            type: "number",
                            description: "0 → transparent, 1 → solid",
                            validation: (Rule: any) => Rule.min(0).max(1),
                            initialValue: 0.9
                        },
                        {
                            name: "scrolledBackground",
                            title: "Scrolled Background",
                            type: "color",
                            description: "Background color after the user scrolls.",
                        },
                        {
                            name: "scrolledOpacity",
                            title: "Scrolled Opacity",
                            type: "number",
                            description: "0 → transparent, 1 → solid",
                            validation: (Rule: any) => Rule.min(0).max(1),
                            initialValue: 1
                        },
                        {
                            name: "enableBlurOnScroll",
                            title: "Enable Blur On Scroll",
                            type: "boolean",
                            initialValue: true,
                        },
                        {
                            name: "blurAmount",
                            title: "Blur Amount (px)",
                            type: "number",
                            initialValue: 10,
                            validation: (Rule: any) => Rule.min(0).max(40),
                        },
                        {
                            name: "enableShadowOnScroll",
                            title: "Enable Shadow On Scroll",
                            type: "boolean",
                            initialValue: true,
                        },
                    ],
                },
                {
                    name: "items",
                    type: "array",
                    title: "Navigation Links",
                    of: [{ type: "navigationItem" }]
                },
                {
                    type: "object",
                    name: "callToAction",
                    title: "Call to Action Button",
                    fields: [
                        {
                            type: "string",
                            name: "text",
                            title: "Button Text",
                            initialValue: "Get Started"
                        },
                        {
                            type: "string",
                            name: "link",
                            title: "Button Link",
                            initialValue: "/contact"
                        }
                    ]
                },
            ]
        },
        {
            name: "footer",
            type: "object",
            group: "footer",
            fields: [
                {
                    type: "image",
                    name: "logo",
                    title: "Footer Logo",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            type: "string",
                            name: "alt",
                            title: "Alternative Text",
                            initialValue: "Brewclick Logo"
                        },
                        {
                            type: "string",
                            name: 'link',
                            title: "Logo Link",
                            initialValue: "/"
                        },
                        {
                            type: 'number',
                            name: 'height',
                            title: "Height (px)",
                            initialValue: 40
                        }
                    ]
                },
                {
                    type: "text",
                    name: "description",
                    title: "Footer Description",
                    rows: 3,
                    initialValue: "Helping D2C and ecommerce brands grow revenue through high-performance websites and strategic SEO."
                },
                {
                    name: "navigationSections",
                    type: "array",
                    title: "Navigation Sections",
                    of: [{
                        type: "object",
                        fields: [
                            {
                                type: "string",
                                name: "title",
                                title: "Section Title"
                            },
                            {
                                name: "items",
                                type: "array",
                                title: "Links",
                                of: [{ type: "navigationItem" }]
                            }
                        ],
                        preview: {
                            select: {
                                title: 'title'
                            }
                        }
                    }]
                },
                {
                    name: "socialLinks",
                    type: "array",
                    title: "Social Media Links",
                    of: [{
                        type: "object",
                        fields: [
                            {
                                type: "string",
                                name: "platform",
                                title: "Platform",
                                options: {
                                    list: [
                                        {title: "Instagram", value: "instagram"},
                                        {title: "LinkedIn", value: "linkedin"},
                                        {title: "Twitter", value: "twitter"},
                                        {title: "Facebook", value: "facebook"},
                                        {title: "Email", value: "email"},
                                    ]
                                }
                            },
                            {
                                type: "url",
                                name: "url",
                                title: "URL"
                            }
                        ],
                        preview: {
                            select: {
                                title: 'platform',
                                subtitle: 'url'
                            }
                        }
                    }]
                },
                {
                    type: "string",
                    name: "copyrightText",
                    title: "Copyright Text",
                    initialValue: "© {year} Brewclick. All rights reserved."
                }
            ]
        },
        {
            name: 'brand',
            type: 'object',
            group: 'brand',
            title: "Brand Settings",
            fields: [
                {
                    type: 'color',
                    name: 'primaryColor',
                    title: "Primary Color",
                    description: "Main brand color (e.g., #F05454)"
                },
                {
                    type: 'color',
                    name: 'secondaryColor',
                    title: "Secondary Color",
                    description: "Secondary brand color (e.g., #30475E)"
                },
                {
                    type: 'color',
                    name: 'pageBackground',
                    title: "Page Background Color"
                }
            ]
        },
        {
            name: 'landingPages',
            type: 'object',
            group: 'landingPages',
            title: "Landing Pages Settings",
            description: "Configure hero sections for Blog, Case Studies, and Services landing pages",
            fields: [
                // BLOG LANDING PAGE
                {
                    name: 'blogLanding',
                    title: 'Blog Landing Page',
                    type: 'object',
                    options: { collapsible: true, collapsed: false },
                    fields: [
                        {
                            name: 'badge',
                            title: 'Badge Text',
                            type: 'string',
                            initialValue: 'Our Blog'
                        },
                        {
                            name: 'heading',
                            title: 'Heading',
                            type: 'string',
                            initialValue: 'Insights & Resources'
                        },
                        {
                            name: 'subheading',
                            title: 'Subheading',
                            type: 'text',
                            rows: 2,
                            initialValue: 'Expert insights on ecommerce growth, marketing strategies, and industry trends.'
                        },
                        {
                            name: 'backgroundColor',
                            title: 'Background Style',
                            type: 'string',
                            options: {
                                list: [
                                    {title: 'Gradient (Purple to Cyan)', value: 'gradient'},
                                    {title: 'White', value: 'white'},
                                    {title: 'Gray', value: 'gray'},
                                ]
                            },
                            initialValue: 'gradient'
                        }
                    ]
                },
                // CASE STUDIES LANDING PAGE
                {
                    name: 'caseStudiesLanding',
                    title: 'Case Studies Landing Page',
                    type: 'object',
                    options: { collapsible: true, collapsed: false },
                    fields: [
                        {
                            name: 'badge',
                            title: 'Badge Text',
                            type: 'string',
                            initialValue: 'Case Studies'
                        },
                        {
                            name: 'heading',
                            title: 'Heading',
                            type: 'string',
                            initialValue: 'Our Work'
                        },
                        {
                            name: 'headingGradient',
                            title: 'Gradient Text (optional)',
                            type: 'string',
                            description: 'This text will have gradient styling',
                            placeholder: 'e.g., "Results That Matter"'
                        },
                        {
                            name: 'subheading',
                            title: 'Subheading',
                            type: 'text',
                            rows: 2,
                            initialValue: 'See how we\'ve helped ecommerce brands achieve measurable growth.'
                        },
                        {
                            name: 'backgroundColor',
                            title: 'Background Style',
                            type: 'string',
                            options: {
                                list: [
                                    {title: 'Gradient (Purple to Cyan)', value: 'gradient'},
                                    {title: 'White', value: 'white'},
                                    {title: 'Gray', value: 'gray'},
                                ]
                            },
                            initialValue: 'gradient'
                        }
                    ]
                },
                // SERVICES LANDING PAGE
                {
                    name: 'servicesLanding',
                    title: 'Services Landing Page',
                    type: 'object',
                    options: { collapsible: true, collapsed: false },
                    fields: [
                        {
                            name: 'badge',
                            title: 'Badge Text',
                            type: 'string',
                            initialValue: 'Our Services'
                        },
                        {
                            name: 'heading',
                            title: 'Heading',
                            type: 'string',
                            initialValue: 'Full-Stack Marketing for'
                        },
                        {
                            name: 'headingGradient',
                            title: 'Gradient Text',
                            type: 'string',
                            initialValue: 'Ecommerce Brands'
                        },
                        {
                            name: 'subheading',
                            title: 'Subheading',
                            type: 'text',
                            rows: 2,
                            initialValue: 'We\'re your growth partner, handling everything from customer acquisition to retention with data-driven strategies and creative excellence.'
                        },
                        {
                            name: 'ctaButton',
                            title: 'CTA Button',
                            type: 'object',
                            fields: [
                                {
                                    name: 'text',
                                    title: 'Button Text',
                                    type: 'string',
                                    initialValue: 'Schedule a Consultation'
                                },
                                {
                                    name: 'link',
                                    title: 'Button Link',
                                    type: 'string',
                                    initialValue: '/contact'
                                }
                            ]
                        },
                        {
                            name: 'backgroundColor',
                            title: 'Background Style',
                            type: 'string',
                            options: {
                                list: [
                                    {title: 'Gradient (Purple to Cyan)', value: 'gradient'},
                                    {title: 'White', value: 'white'},
                                    {title: 'Gray', value: 'gray'},
                                ]
                            },
                            initialValue: 'gradient'
                        },
                        // Bottom CTA Section
                        {
                            name: 'bottomCTA',
                            title: 'Bottom CTA Section',
                            type: 'object',
                            options: { collapsible: true, collapsed: true },
                            fields: [
                                {
                                    name: 'heading',
                                    title: 'Heading',
                                    type: 'string',
                                    initialValue: 'Ready to Grow Your Ecommerce Brand?'
                                },
                                {
                                    name: 'subheading',
                                    title: 'Subheading',
                                    type: 'text',
                                    rows: 2,
                                    initialValue: 'Let\'s discuss how our services can help you achieve your growth goals.'
                                },
                                {
                                    name: 'primaryButton',
                                    title: 'Primary Button',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'string',
                                            initialValue: 'Get Started'
                                        },
                                        {
                                            name: 'link',
                                            type: 'string',
                                            initialValue: '/contact'
                                        }
                                    ]
                                },
                                {
                                    name: 'secondaryButton',
                                    title: 'Secondary Button',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'text',
                                            type: 'string',
                                            initialValue: 'View Our Work'
                                        },
                                        {
                                            name: 'link',
                                            type: 'string',
                                            initialValue: '/case-studies'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Page Settings',
                subtitle: 'Global site configuration'
            }
        }
    }
})
