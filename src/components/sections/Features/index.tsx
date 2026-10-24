import { urlFor } from '@/src/sanity/sanity-utils';
import Image from 'next/image';

function index({content}: any) {
    const features = content.grid;

    return (
        <section className="relative bg-white">
            <div className="max-w-desktop px-desktop mx-auto z-10 pt-16 pb-16">
                <ul
                    className=" w-full rounded-radius grid grid-cols-1 tablet:grid-cols-3"
                    style={{
                        boxShadow: '0 0 45px 0 rgba(147, 51, 234, 0.15)'
                    }}
                >
                    {
                        features?.map((feature: any, index: number, arr: any[]) => (
                            <li
                                key={feature._key}
                                className={`p-7 tablet:px-12 tablet:py-14 bg-white hover:bg-purple-50 transition-colors ${index + 1 == arr.length ? '' : 'border-b-[0.5px] tablet:border-b-0 tablet:border-e-[0.5px] border-purple-200'}`}
                            >
                                <article className='text-center'>
                                    <Image
                                        src={urlFor(feature.icon)}
                                        alt={feature.name}
                                        width={60}
                                        height={60}
                                        className="mb-7 mx-auto text-purple-600"
                                    />
                                    <h4 className="mb-4 font-font1 text-purple-600 text-4 font-semibold capitalize">
                                        {feature.name}
                                    </h4>
                                    <p className="font-font1 text-gray-700 text-6 font-normal capitalize">
                                        {feature.description}
                                    </p>
                                </article>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default index