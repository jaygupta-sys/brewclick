import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_V || "2024-01-01";

export const isSanityConfigured = Boolean(
    projectId && projectId !== "placeholder" && projectId.trim() !== ""
);

export const client = createClient({
    projectId: projectId || "placeholder",
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: process.env.NEXT_PUBLIC_ENV === "production",
    token: process.env.SANITY_VIEWER_TOKEN,
    stega: {
        enabled: Boolean(process.env.NEXT_PUBLIC_SANITY_STUDIO_URL),
        studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || "/studio",
    },
});

// Generic safe fetch that returns fallback instead of throwing during build
async function safeFetch<T>(query: string, params: Record<string, any> = {}, fallback: T): Promise<T> {
    if (!isSanityConfigured) {
        return fallback;
    }
    try {
        const response = await client.fetch(query, params);
        return response !== undefined && response !== null ? response : fallback;
    } catch (error) {
        console.warn("Sanity fetch warning:", error);
        return fallback;
    }
}

// FETCHING WEBPAGE COMPONENTS
export async function getPages(path?: string) {
    return safeFetch(
        groq`*[_type == "page" && seo.slug.current == $path]{
            _id,
            _createdAt,
            "slug": seo.slug.current,
            components[] {
                ...
            }
        }`,
        { path: path },
        null
    );
}

// FETCHING ALL WEBSITE PATHS
export async function getPaths(docType: string) {
    if (!isSanityConfigured) return [];
    if (docType === 'page') {
        return safeFetch(
            groq`*[_type == "page"] {
                "slug": seo.slug.current 
            }`,
            {},
            []
        );
    }
    if (docType === 'blog') {
        return safeFetch(
            groq`*[_type == "blog"] {
                title,
                "slug": seo.slug.current 
            }`,
            {},
            []
        );
    }
    return [];
}

// FETCHING WEBPAGE METADATA
export async function getMetadata(path: string) {
    return safeFetch(
        groq`*[_type == "page" && seo.slug.current == $path] {
            seo {
                title,
                description
            }
        }`,
        { path: path },
        null
    );
}

// GET IMAGE URL FROM IMAGE ASSET SANITY
const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
    if (!source) {
        return {
            url: () => "",
            width: () => ({ url: () => "" }),
            height: () => ({ url: () => "" }),
            quality: () => ({ url: () => "" }),
        } as any;
    }
    try {
        return builder.image(source);
    } catch {
        return {
            url: () => "",
            width: () => ({ url: () => "" }),
            height: () => ({ url: () => "" }),
            quality: () => ({ url: () => "" }),
        } as any;
    }
}

// FETCHING ALL SERVICES
export async function getServices() {
    return safeFetch(
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
        }`,
        {},
        []
    );
}

// FETCHING SINGLE SERVICE WITH PAGE COMPONENTS
export async function getService(slug: string) {
    return safeFetch(
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
        { slug },
        null
    );
}

// FETCHING ALL SERVICE PATHS
export async function getServicePaths() {
    return safeFetch(
        groq`*[_type == "service"] {
            "slug": seo.slug.current
        }`,
        {},
        []
    );
}

// FETCHING PAGE SETTINGS (for landing pages, header, footer)
export async function getPageSettings() {
    return safeFetch(
        groq`*[_type == "pageSettings"][0]{
            header,
            footer,
            brand,
            landingPages
        }`,
        {},
        null
    );
}