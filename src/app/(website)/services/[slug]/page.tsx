import { getService, getServicePaths } from "../../../../sanity/sanity-utils";
import { notFound } from "next/navigation";
import MainComponent from "../../../../components/MainComponent";
import { Metadata } from "next";

export const dynamicParams = true;

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    try {
        const services = await getServicePaths();
        if (!Array.isArray(services)) return [];
        return services
            .filter((service: any) => service?.slug)
            .map((service: any) => ({
                slug: service.slug,
            }));
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const resolvedParams = await params;
        const service = await getService(resolvedParams.slug);

        if (!service) {
            return {
                title: "Services | Brewclick",
            };
        }

        return {
            title: service.seo?.title || `${service.title} | Brewclick`,
            description: service.seo?.description || service.shortDescription,
            openGraph: {
                title: service.seo?.title || service.title,
                description: service.seo?.description || service.shortDescription,
            },
        };
    } catch {
        return {
            title: "Services | Brewclick",
        };
    }
}

export default async function ServicePage({ params }: Props) {
    const resolvedParams = await params;
    const service = await getService(resolvedParams.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <MainComponent components={service.components || []} />
        </div>
    );
}
