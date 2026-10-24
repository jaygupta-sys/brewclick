import dynamic from 'next/dynamic';
import style from './home.module.css';

type Props = {
    components: any[]
}

function index({ components }: Props) {
    // dynamic(() => import('@/src/components/sections/'));
    const Hero = dynamic(() => import('@/src/components/sections/Hero'));
    const Features = dynamic(() => import('@/src/components/sections/Features'));
    const CallToAction = dynamic(() => import('@/src/components/sections/CallToAction'));
    const Process = dynamic(() => import('@/src/components/sections/Process'));
    const Services = dynamic(() => import('@/src/components/sections/Services'));
    const CaseStudies = dynamic(() => import('@/src/components/sections/CaseStudies'));
    const Testimonials = dynamic(() => import('@/src/components/sections/Testimonials'));
    const ContactForm = dynamic(() => import('@/src/components/sections/ContactForm'));
    const FAQ = dynamic(() => import('@/src/components/sections/FAQ'));
    const Stats = dynamic(() => import('@/src/components/sections/Stats'));
    const Values = dynamic(() => import('@/src/components/sections/Values'));
    const Team = dynamic(() => import('@/src/components/sections/Team'));
    const Story = dynamic(() => import('@/src/components/sections/Story'));

    return <>
        {components?.map((content: any) => {
            switch (content._type) {
                case 'hero':
                    return <Hero style={style.typing} key={content._key} content={content} />;
                case 'features':
                    return <Features key={content._key} content={content} />;
                case 'callToAction':
                    return <CallToAction key={content._key} content={content} />;
                case 'process':
                    return <Process key={content._key} content={content} />;
                case 'servicesSection':
                    return <Services key={content._key} content={content} />;
                case 'caseStudies':
                    return <CaseStudies key={content._key} content={content} />;
                case 'testimonialsSection':
                    return <Testimonials key={content._key} {...content} />;
                case 'contactForm':
                    return <ContactForm key={content._key} content={content} />;
                case 'faq':
                    return <FAQ key={content._key} content={content} />;
                case 'stats':
                    return <Stats key={content._key} {...content} />;
                case 'values':
                    return <Values key={content._key} {...content} />;
                case 'team':
                    return <Team key={content._key} {...content} />;
                case 'story':
                    return <Story key={content._key} {...content} />;
                default:
                    console.log('Error on section:', content._type, content)
                    return <></>;
            }
        })}
    </>
}

export default index