import { blog } from "./document/blogs"
import { page } from "./document/pages"
import { work } from "./document/work"
import { service } from "./document/service"
import { testimonials as testimonialDocument } from "./document/testimonials"
import pageSettings from "./document/page-settings"

import CallToAction from "./objects/CallToAction"
import CaseStudies from "./objects/CaseStudies"
import ContactForm from "./objects/ContactForm"
import FAQ from "./objects/FAQ"
import Features from "./objects/Features"
import Hero from "./objects/Hero"
import Process from "./objects/Process"
import Stats from "./objects/Stats"
import Values from "./objects/Values"
import Team from "./objects/Team"
import Story from "./objects/Story"
import Testimonials from "./objects/Testimonials"
import { Services } from "./objects/Services"
import navigationItem from "./objects/navigationItem"
import button from "./utils/button"
import contentEditor from "./utils/contentEditor"
import links from "./utils/links"
import seo from "./utils/seo"

const schemas: any = [
    page,
    blog,
    work,
    service,
    testimonialDocument,
    pageSettings,
    navigationItem,
    Hero,
    Features,
    CallToAction,
    Process,
    CaseStudies,
    ContactForm,
    FAQ,
    Stats,
    Values,
    Team,
    Story,
    Testimonials,
    Services,
    button,
    links,
    seo,
    contentEditor
]
export default schemas