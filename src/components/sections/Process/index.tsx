import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import React from 'react'

const index = ({content}: any) => {
    const myPortableTextComponents: Partial<PortableTextReactComponents> = {
        block: {
            h3: ({children}) => <h3 className="font-font1 text-purple-600 text-6 font-semibold capitalize opacity-90">{children}</h3>,
            h2: ({children}) => <h2 className="font-font1 text-gray-900 text-4 tablet:text-3 font-bold capitalize mb-12">{children}</h2>
        }
    };
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-desktop mx-auto px-desktop text-center">
                <PortableText
                    value={content.content}
                    components={myPortableTextComponents}
                />
                <div className="grid grid-cols-1 tablet:grid-cols-3 gap-x-5 gap-y-10">
                {
                    content?.grid.map((step: {name: string; description: string;}, index: number) => {

                        return (<article className="flex gap-x-3" key={step.name}>
                            <p className="border-purple-600 border-[2px] rounded-full w-8 h-8 flex items-center justify-center text-purple-600 font-semibold">{index + 1}</p>
                            <div className="flex-1 text-left pt-[2px]">
                                <h4 className="mb-2 font-font1 text-5 font-semibold capitalize text-gray-900">{step.name}</h4>
                                <p className="font-font1 text-gray-700 text-6 font-normal">{step.description}</p>
                            </div>
                        </article>)
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default index