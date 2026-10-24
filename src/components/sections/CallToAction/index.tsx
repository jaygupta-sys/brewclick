import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CTA from '../CTA';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { urlFor } from '@/src/sanity/sanity-utils';
import { ArrowRight } from 'lucide-react';
import Button from '@/src/components/ui/Button';

const index = ({content}: any) => {
    const myPortableTextComponents: Partial<PortableTextReactComponents> = {
        block: {
            h3: ({children}) => <h3 className="font-font1 text-purple-600 text-6 font-semibold capitalize opacity-90 text-center tablet:text-start ">{children}</h3>,
            h2: ({children}) => <h2 className="font-font1 text-gray-900 text-4 tablet:text-3 font-bold capitalize mb-5 text-center tablet:text-start">{children}</h2>,
            normal: ({children}) => <p className="font-font1 text-gray-700 text-6 font-normal mb-5">{children}</p>
        }
    };

    return (
        <>
            {content?.layout == 'vertical' ? 
                <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
                    <div className="max-w-desktop mx-auto px-desktop gap-x-5 gap-y-10 grid grid-cols-1 tablet:grid-cols-2">
                        <article>
                            <PortableText
                                value={content.content}
                                components={myPortableTextComponents}
                            />
                            <Button
                                href={content?.button.link}
                                variant="ghost"
                                icon={ArrowRight}
                                iconPosition="right"
                                className="underline hover:no-underline"
                            >
                                {content?.button.text}
                            </Button>
                        </article>
                        <figure className="relative w-full h-[300px] bg-gradient-to-br from-purple-500 to-cyan-500 rounded-small-radius">
                            <Image src={urlFor(content?.image.asset)} alt={content?.button.text} fill={true} className="!left-3 !bottom-3 border-4 border-purple-600 rounded-small-radius" />
                        </figure>
                    </div> 
                </section> :
                <CTA content={content} />
            }
        </>
    )
}

export default index