import { getService, getServicePaths } from "../../../../sanity/sanity-utils";
import { notFound } from "next/navigation";
import MainComponent from "../../../../components/MainComponent";
import { Metadata } from "next";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const services = await getServicePaths();
    return services.map((service: any) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const service = await getService(resolvedParams.slug);

    if (!service) {
        return {
            title: "Service Not Found",
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
