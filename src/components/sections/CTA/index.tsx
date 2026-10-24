import { urlFor } from '@/src/sanity/sanity-utils'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SanityButton from '@/src/components/ui/SanityButton'

const index = ({content}: any) => {
    const myPortableTextComponents: Partial<PortableTextReactComponents> = {
        block: {
            h2: ({children}) => <h2 className="font-font1 text-white text-3 tablet:text-2 font-bold capitalize mb-2">{children}</h2>,
            normal: ({children}) => <p className="font-font1 text-white text-6 font-normal mb-10">{children}</p>,
            h3: ({children}) => <h3 className="font-font1 text-cyan-100 text-6 font-semibold capitalize opacity-90">{children}</h3>
        }
    }
    return (
        <section className="pt-16 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600">
            <div className="max-w-desktop mx-auto px-5 tablet:px-desktop text-center">
                <PortableText
                    value={content.content}
                    components={myPortableTextComponents}
                />
                <div className="mb-10 tablet:mb-20">
                    <SanityButton
                        data={{
                            text: content?.button.text,
                            link: content?.button.link,
                            variant: 'secondary',
                            size: 'lg',
                        }}
                    />
                </div>
                <figure className="relative h-[30vh] tablet:h-[60vh] rounded-t-radius overflow-hidden">
                    <Image src={urlFor(content?.image.asset)} alt={content?.button.text} fill={true} className=' object-cover' />
                </figure>
            </div>
        </section>
    )
}

export default index