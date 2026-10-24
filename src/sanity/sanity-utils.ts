import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_V || "2024-01-01",
    useCdn: process.env.NEXT_PUBLIC_ENV === "production",
    token: process.env.SANITY_VIEWER_TOKEN,
    stega: {
        enabled: Boolean(process.env.NEXT_PUBLIC_SANITY_STUDIO_URL),
        studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio",
    },
});

// FETCHING WEBPAGE COMPONENTS
export async function getPages(path?: string) {
    try {
        let response = await client.fetch(
            groq`*[_type == "page" && seo.slug.current == $path]{
                _id,
                _createdAt,
                "slug": seo.slug.current,
                components[] {
                    ...
                }
            }`,
            { path: path }
        );

        return response;
    } catch (error) {
        // Log the error for debugging purposes (you can customize this)
        console.error('Error in getPage ', path, error);

        // Rethrow the error or handle it as needed
        throw error;
    }
}

// FETCHING ALL WEBSITE PATHS
export async function getPaths(docType: string) {
    try {
        switch (docType) {
            case 'page':
                return await client.fetch(
                    groq`*[_type == "page"] {
                        "slug": seo.slug.current 
                    }`
                )
            case 'blog':
                return await client.fetch(
                    groq`*[_type == "blog"] {
                        title,
                        "slug": seo.slug.current 
                    }`
                )
        }
    } catch (error) {
        // Log the error for debugging purposes (you can customize this)
        console.error('Error while fetching Paths of all webpages:', error);

        // Rethrow the error or handle it as needed
        throw error;
    }
}


// FETCHING WEBPAGE METADATA
export async function getMetadata(path: string) {
    try {
        const response = await client.fetch(
            groq`*[_type == "page" && seo.slug.current == $path] {
                seo {
                    title,
                    description
                }
            }`,
            { path: path }
        )

        return response
    } catch (error) {
        // Log the error for debugging purposes (you can customize this)
        console.error('Error while fetching metadata:', error);

        // Rethrow the error or handle it as needed
        throw error;
    }
}

// GET IMAGE URL FROM IMAGE ASSET SANITY
const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
    return builder.image(source).url();
}

// FETCHING ALL SERVICES
export async function getServices() {
    try {
        return await client.fetch(
            groq`*[_type == "service" && featured == true] | order(order asc) {
                _id,
                "title": seo.title,
                "slug": seo.slug.current,
                shortDescription,
                icon,
                gradientColor,
                features,
                order,
                seo
            }`
        );
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
}

// FETCHING SINGLE SERVICE WITH PAGE COMPONENTS
export async function getService(slug: string) {
    try {
        const response = await client.fetch(
            groq`*[_type == "service" && seo.slug.current == $slug][0]{
                _id,
                _createdAt,
                "title": seo.title,
                "slug": seo.slug.current,
                shortDescription,
                icon,
                gradientColor,
                features,
                seo,
                components
            }`,
            { slug }
        );
        return response;
    } catch (error) {
        console.error('Error fetching service:', error);
        throw error;
    }
}

// FETCHING ALL SERVICE PATHS
export async function getServicePaths() {
    try {
        return await client.fetch(
            groq`*[_type == "service"] {
                "slug": seo.slug.current
            }`
        );
    } catch (error) {
        console.error('Error fetching service paths:', error);
        throw error;
    }
}

// FETCHING PAGE SETTINGS (for landing pages, header, footer)
export async function getPageSettings() {
    try {
        const response = await client.fetch(
            groq`*[_type == "pageSettings"][0]{
                header,
                footer,
                brand,
                landingPages
            }`
        );
        return response;
    } catch (error) {
        console.error('Error fetching page settings:', error);
        throw error;
    }
}