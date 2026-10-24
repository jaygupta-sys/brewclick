'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Zap,
  Code2,
  Server,
  Layers,
  ChevronRight,
  TrendingUp,
  Terminal,
  Lock,
  Globe,
  Award,
  Users,
  Activity,
  BarChart3,
  Rocket,
  Check,
  X,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SculptureHero from '@/components/ui/liquid-sculpture-hero';
import DeliverablesSection from '@/src/components/sections/Deliverables';

export default function HomePage() {
  const [selectedProjectType, setSelectedProjectType] = useState('Bespoke E-Commerce Platform');
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [caseStudyTab, setCaseStudyTab] = useState<'architecture' | 'benchmarks' | 'commercial'>('architecture');

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const waText = encodeURIComponent(
      `Hello Jay & Mayank! I am ${clientName || 'a client'} (${clientContact || 'no contact provided'}). I would like to discuss a ${selectedProjectType} with Brewclick Design Studio. Project scope: ${clientMessage || 'Let us schedule an architecture discovery call.'}`
    );
    window.open(`https://wa.me/918872173717?text=${waText}`, '_blank');
  };

  const flagshipEcommerce = {
    title: 'Stage & Steel',
    tagline: 'Custom Production E-Commerce Platform',
    domain: 'stageandsteel.in',
    url: 'https://stageandsteel.in',
    architectureScale: 'Enterprise Production Storefront · Dedicated Active SLA',
    description:
      'A bespoke luxury digital storefront engineered from the ground up for high transaction volume. Includes custom cart drawer state, payment gateway workflows, automated order receipts, responsive catalog filters, and active monthly retainer maintenance.',
    features: [
      'Bespoke Cart Drawer Architecture & State Engine',
      'End-to-End Secure Payment Gateway Workflow',
      'Instant Checkout Flow with Zero Third-Party Lag',
      'Ultra-Optimized Media Assets & Sub-Second Page Speeds',
      'Active Hosting, Domain, SSL & Maintenance SLA',
    ],
    tech: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Payment Webhooks', 'Vercel Edge'],
    image: '/projects/stage and steel.png',
  };

  const founders = [
    {
      name: 'Jay Gupta',
      role: 'Founder & Principal Architect',
      badge: 'Lead Engineering',
      bio: 'Heads core software architecture, Next.js 15 edge systems, custom checkout workflows, and high-concurrency database pipelines. Direct code reviewer and technical owner for all client deployments.',
      specialties: ['Next.js 15 App Router & React 19', 'Custom Payment Webhook Engines', 'High-Speed Cart State Architecture', 'Cloud Firestore & Edge Database Sync'],
      calLink: 'https://cal.com/brewclick/jay-gupta',
      buttonLabel: 'Schedule Architecture Call on Cal.com',
    },
    {
      name: 'Mayank Gupta',
      role: 'Partner & Technical Operations Principal',
      badge: 'Growth & Operations',
      bio: 'Directs infrastructure operations, SLA maintenance protocols, client commercial scaling, and global deployment performance. Ensures zero downtime and strict sub-2hr emergency resolution.',
      specialties: ['Production SLA & Retainer Management', 'Global Uptime & Cloudflare Edge Routing', 'Conversion Rate Optimization (CRO)', 'Client Commercial Architecture Strategy'],
      calLink: 'https://cal.com/brewclick/mayank-gupta',
      buttonLabel: 'Schedule Retainer Consultation on Cal.com',
    },
  ];

  const engagementModels = [
    {
      name: 'Bespoke Platform Delivery',
      tag: 'Custom Project Scope',
      scopeScale: 'Flexible Project Scope',
      badge: 'Tailored Milestone Architecture',
      period: 'Milestone-Based Delivery',
      description:
        '100% custom-built digital storefronts, web applications, or brand experiences built with pure hand-crafted code. Scope, milestones, and deliverables are custom-tailored to your exact business requirements and stage.',
      features: [
        '100% Hand-Crafted Next.js 15 Website (<0.4s Global Edge TTFB)',
        'Sanity v3 Headless Studio with Real-Time Visual Live Editing',
        'Custom Order Management System (OMS) & Live Stock Deduction',
        'Multi-Gateway Payment Integration (Stripe, Razorpay, Apple Pay, Webhooks)',
        'Email Newsletter Lifecycle Sequences & 15-25% Cart Recovery',
        '24/7 Context-Aware Customer Support AI Chatbot with Order Tracking',
        'Dynamic Multi-Currency Geolocation & Tiered Wholesale Pricing',
        'Courier API Integration (Shiprocket/Delhivery/DHL) & Automated AWBs',
        'Advanced Offer, Coupon, BOGO & Milestone Discount Engine',
        '100% Complete Git Repository & Database Sovereignty',
      ],
      popular: true,
      cta: 'Discuss Your Project Scope',
      ctaSubtitle: 'Free architecture discovery call with Jay & Mayank',
    },
    {
      name: 'Continuous Maintenance SLA',
      tag: 'Dedicated Retainer Partner',
      scopeScale: 'Tailored Monthly Retainer',
      badge: 'Dedicated SLA Maintenance',
      period: 'Ongoing Monthly Support',
      description:
        'Flexible monthly engineering retainers providing direct partner-level access to Jay Gupta & Mayank Gupta. We actively monitor uptime, deploy security patches, tune speed, and continuously optimize conversions.',
      features: [
        'Direct Partner Priority Slack & WhatsApp Access (Jay & Mayank)',
        'Monthly Traffic, Click & Regional Demographic Performance Reports',
        'Visual Clarity/Hotjar Heatmaps & User Scroll/Rage-Click Audits',
        'Continuous A/B Split Testing & Conversion Rate Optimization (CRO)',
        'Automated Transaction Notifications (Stage & Steel Gmail SMTP Engine)',
        'CRM Integration & Automated Lead/Customer Lifecycle Pipelines',
        'Advanced Technical SEO, Dynamic XML Sitemaps & Rich JSON-LD Schemas',
        'Ongoing Seasonal Design Updates, UI Polish & Component Additions',
        'Guaranteed < 2-Hour Emergency Response & Bug Resolution SLA',
      ],
      popular: false,
      cta: 'Request Retainer Proposal',
      ctaSubtitle: 'Flexible monthly agreements · Zero lock-ins',
    },
  ];

  const comparisonData = [
    {
      metric: 'Core Web Vitals & Speed Score',
      standardAgency: '42 - 65 / 100 (Heavy theme bloat & third-party scripts)',
      brewclick: '98 - 100 / 100 (Sub-second global edge performance)',
    },
    {
      metric: 'Page Load Latency (TTFB)',
      standardAgency: '3.2s - 5.5s (Plugin chain latency & database bottlenecks)',
      brewclick: '0.38s - 0.6s (Instant edge server-rendered responses)',
    },
    {
      metric: 'Code & Intellectual Property',
      standardAgency: 'Locked in proprietary SaaS or rented platform monthly themes',
      brewclick: '100% Client-Owned Git repositories, domains, & cloud accounts',
    },
    {
      metric: 'Developer Communication',
      standardAgency: 'Junior subcontractors, non-technical project managers',
      brewclick: 'Direct architecture access to Founding Partners (Jay & Mayank)',
    },
    {
      metric: 'Checkout & Transaction Workflow',
      standardAgency: 'Generic cookie-cutter checkout with high cart abandonment',
      brewclick: 'Bespoke high-converting cart drawer & custom payment webhooks',
    },
  ];

  return (
    <div className="relative bg-[#F5F3EF] text-[#141416] overflow-hidden selection:bg-[#141416]/15 selection:text-[#141416]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Radiant Glowing Ambient Auras */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-500/5 via-orange-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[600px] h-[500px] bg-gradient-to-b from-rose-500/5 via-violet-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-amber-500/5 via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />

      {/* ========================================================================= */}
      {/* HERO SECTION (INTEGRATED WITH 3D GROWTH SCULPTURE & FLUID PARTICLES)      */}
      {/* ========================================================================= */}
      <div className="relative bg-[#F5F3EF]">
        <div className="relative">
          <SculptureHero
            showNav={false}
            theme="light"
            background="#F5F3EF"
            textColor="#141416"
            accentColor="#141416"
            src="/growth-sculpture.png"
            darkSrc="/growth-sculpture.png"
            mobileSrc="/growth-sculpture.png"
            mobileDarkSrc="/growth-sculpture.png"
            imageBackground="#F5F3EF"
            sculptureScale={1.05}
            mobileSculptureScale={1.0}
            sculptureY={2}
            dotSize={2.1}
            particleDensity={1.25}
            liquid={1.25}
            strength={1.2}
            brand="Brewclick®"
            backdropText="BREWCLICK"
            eyebrow="BREWCLICK DESIGN STUDIO ✦ GLOBAL E-COMMERCE ARCHITECTS"
            headline={"Next-Gen Web\nDesign Studio."}
            headlineAccent="Design Studio."
            body="We build high-performance e-commerce platforms and digital storefronts engineered to scale client revenue. Bespoke checkout workflows, sub-second edge speeds, and zero templates."
            primaryCta={{ label: "Explore Stage & Steel Case Study", href: "#ecommerce" }}
            secondaryCta={{ label: "Direct Partner Access", href: "#leadership" }}
            hint="Move cursor to interact with business growth sculpture"
            hintTouch="Touch to interact with growth sculpture"
            height="90svh"
            showCredit={false}
          />

          {/* Floating Live Growth Badges */}
          <div className="pointer-events-none absolute top-28 right-6 lg:right-16 hidden sm:flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-white/80 border-[#141416]/10 text-[#141416] backdrop-blur-md border shadow-[0_12px_32px_rgba(0,0,0,0.06)] animate-pulse">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#141416] tracking-tight">+340% Revenue Surge</span>
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">Active</span>
              </div>
              <div className="text-[11px] text-[#6b6965]">Conversion-Engineered Architecture</div>
            </div>
          </div>

          <div className="pointer-events-none absolute top-48 left-6 lg:left-14 hidden md:flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-white/75 border-[#141416]/10 text-[#141416] backdrop-blur-md border shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#141416]">0.4s Sub-Second Speed</div>
              <div className="text-[10px] text-[#7A7873]">0% Lag · Zero Slowdown Dropoffs</div>
            </div>
          </div>
        </div>

        {/* Proof of Work Metrics Strip */}
        <div className="pb-12 pt-6 sm:pb-14 sm:pt-4 border-t border-[#141416]/10 bg-[#F5F3EF]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 sm:gap-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#141416] tracking-tight">&lt;0.4s</div>
                <div className="text-xs font-mono text-[#5A5854] uppercase tracking-wider font-semibold">Global TTFB Speed</div>
                <div className="text-[11px] text-[#7A7873]">Sub-Second Edge Rendering</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#141416] tracking-tight">0% Lag</div>
                <div className="text-xs font-mono text-[#5A5854] uppercase tracking-wider font-semibold">Zero Template Bloat</div>
                <div className="text-[11px] text-[#7A7873]">100% Hand-Crafted Code</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#141416] tracking-tight">100%</div>
                <div className="text-xs font-mono text-[#5A5854] uppercase tracking-wider font-semibold">Client Code IP</div>
                <div className="text-[11px] text-[#7A7873]">Full Ownership &amp; Git Rights</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#141416] tracking-tight">99.9%</div>
                <div className="text-xs font-mono text-[#5A5854] uppercase tracking-wider font-semibold">Production Uptime</div>
                <div className="text-[11px] text-[#7A7873]">Global Edge Latency &lt;50ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CONTINUOUS RUNNING TICKER TAPE                                           */}
      {/* ========================================================================= */}
      <div className="w-full py-4 border-y border-[#141416]/10 bg-[#EDEAE3] backdrop-blur-md overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee gap-8 text-xs font-mono tracking-widest uppercase text-[#5A5854]">
          <div className="flex items-center gap-8 shrink-0">
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-rose-600">✦</span> BESPOKE E-COMMERCE</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-violet-600">✦</span> CUSTOM CHECKOUT ENGINES</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-amber-600">✦</span> NEXT.JS 15 EDGE</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-emerald-600">✦</span> MULTI-CURRENCY GLOBAL COMMERCE</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-sky-600">✦</span> ENTERPRISE PRODUCTION ARCHITECTURE</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-pink-600">✦</span> DEDICATED CONTINUOUS SLA RETAINERS</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-indigo-600">✦</span> ZERO TEMPLATES</span>
          </div>
          <div className="flex items-center gap-8 shrink-0">
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-rose-600">✦</span> BESPOKE E-COMMERCE</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-violet-600">✦</span> CUSTOM CHECKOUT ENGINES</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-amber-600">✦</span> NEXT.JS 15 EDGE</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-emerald-600">✦</span> MULTI-CURRENCY GLOBAL COMMERCE</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-sky-600">✦</span> ENTERPRISE PRODUCTION ARCHITECTURE</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-pink-600">✦</span> DEDICATED CONTINUOUS SLA RETAINERS</span>
            <span className="flex items-center gap-2.5 text-[#141416] font-medium"><span className="text-indigo-600">✦</span> ZERO TEMPLATES</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FLAGSHIP E-COMMERCE CASE STUDY: STAGE & STEEL                             */}
      {/* ========================================================================= */}
      <section id="ecommerce" className="py-28 relative bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-xs font-mono text-violet-800 uppercase tracking-widest font-semibold">
                FLAGSHIP E-COMMERCE CASE STUDY
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-[#141416] tracking-tight">
                Stage &amp; Steel <span className="font-serif italic font-normal text-[#5A5854]">Storefront.</span>
              </h2>
              <p className="text-[#5A5854] text-base sm:text-lg leading-relaxed">
                A bespoke luxury sports nutrition digital storefront built with pure Next.js 15 and Tailwind CSS. Engineered with custom shopping cart drawers, webhook automation, and sub-second global checkout.
              </p>
            </div>

            {/* Interactive View Toggle */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white border border-[#141416]/10 shadow-sm self-start md:self-auto">
              {(['architecture', 'benchmarks', 'commercial'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCaseStudyTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                    caseStudyTab === tab
                      ? 'bg-[#141416] text-[#F5F3EF] font-bold shadow-xs'
                      : 'text-[#5A5854] hover:text-[#141416]'
                  }`}
                >
                  {tab === 'architecture' ? 'Architecture' : tab === 'benchmarks' ? 'Speed Benchmarks' : 'Commercial ROI'}
                </button>
              ))}
            </div>
          </div>

          {/* Double-Bezel Showcase Container */}
          <div className="p-2 sm:p-4 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-[0_24px_70px_rgba(0,0,0,0.04)]">
            <div className="rounded-[2rem] bg-[#FAF8F5] overflow-hidden border border-[#141416]/8 p-4 sm:p-6 lg:p-8 space-y-8">
              
              {/* Browser Mockup Window */}
              <div className="rounded-2xl overflow-hidden border border-[#141416]/10 bg-white shadow-xl">
                {/* Browser Top Bar */}
                <div className="px-4 py-3 bg-[#F0EDE8] border-b border-[#141416]/8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="px-5 py-1 rounded-full bg-white border border-[#141416]/10 text-xs font-mono text-[#5A5854] flex items-center gap-2 shadow-sm">
                    <Lock className="w-3 h-3 text-emerald-600" />
                    <span>https://stageandsteel.in</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#7A7873] hidden sm:flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Production Verified
                  </div>
                </div>

                {/* Hero Image Container with EXACT 1880/912 Aspect Ratio */}
                <div className="relative w-full aspect-[1880/912] bg-[#EAE6DF]">
                  <Image
                    src={flagshipEcommerce.image}
                    alt="Stage & Steel Luxury E-Commerce Platform Hero Section"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-contain"
                    priority
                  />

                  {/* Micro Pill Badges Floating on Image */}
                  <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#141416]/10 text-xs font-mono text-[#141416] shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Bespoke Cart Drawer Engine</span>
                  </div>

                  <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#141416]/10 text-xs font-mono text-[#141416] shadow-sm">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>0.38s Edge TTFB Worldwide</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Tabbed Content Area */}
              {caseStudyTab === 'architecture' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#141416]/8">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 font-semibold">
                        Live Production
                      </span>
                      <span className="text-xs font-mono text-[#5A5854] font-medium">
                        {flagshipEcommerce.architectureScale}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-[#141416]">
                      Bespoke Sports Nutrition Storefront
                    </h3>
                    <p className="text-sm text-[#5A5854] leading-relaxed">
                      {flagshipEcommerce.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {flagshipEcommerce.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white border border-[#141416]/10 text-[11px] font-mono text-[#5A5854] shadow-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#141416] font-bold">
                      Key Architectural Deliverables:
                    </div>
                    <ul className="space-y-2.5">
                      {flagshipEcommerce.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-[#5A5854]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 flex flex-col justify-center space-y-3">
                    <a
                      href={flagshipEcommerce.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full py-4 px-6 rounded-full bg-[#141416] text-[#F5F3EF] font-bold text-sm hover:bg-black transition-all flex items-center justify-between active:scale-[0.98] shadow-lg shadow-[#141416]/10"
                    >
                      <span>Visit Live Store</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </a>
                    <p className="text-center text-xs font-mono text-[#7A7873]">
                      Verified Domain: {flagshipEcommerce.domain}
                    </p>
                  </div>
                </div>
              )}

              {caseStudyTab === 'benchmarks' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#141416]/8">
                  <div className="p-6 rounded-2xl bg-white border border-[#141416]/10 shadow-xs space-y-2">
                    <div className="text-3xl font-display font-black text-emerald-700">99 / 100</div>
                    <div className="text-xs font-mono uppercase text-[#141416] font-bold">Google Core Web Vitals</div>
                    <div className="text-xs text-[#5A5854]">Lighthouse performance score with zero render-blocking third-party plugin lag.</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[#141416]/10 shadow-xs space-y-2">
                    <div className="text-3xl font-display font-black text-amber-700">0.38s</div>
                    <div className="text-xs font-mono uppercase text-[#141416] font-bold">Time To First Byte (TTFB)</div>
                    <div className="text-xs text-[#5A5854]">Vercel Edge Network SSR routing instantly delivers responsive media assets worldwide.</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[#141416]/10 shadow-xs space-y-2">
                    <div className="text-3xl font-display font-black text-violet-700">0 KB</div>
                    <div className="text-xs font-mono uppercase text-[#141416] font-bold">Shopify / Woo Bloat</div>
                    <div className="text-xs text-[#5A5854]">100% custom React state engine. No monthly app charges or bloated script tags.</div>
                  </div>
                </div>
              )}

              {caseStudyTab === 'commercial' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#141416]/8">
                  <div className="p-6 rounded-2xl bg-white border border-[#141416]/10 shadow-xs space-y-2">
                    <div className="text-3xl font-display font-black text-[#141416]">+340%</div>
                    <div className="text-xs font-mono uppercase text-[#5A5854] font-bold">Client Revenue Scaling</div>
                    <div className="text-xs text-[#5A5854]">Custom checkout architecture and friction-free payment flows that maximize completed transactions.</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[#141416]/10 shadow-xs space-y-2">
                    <div className="text-3xl font-display font-black text-[#141416]">24/7</div>
                    <div className="text-xs font-mono uppercase text-[#5A5854] font-bold">Dedicated SLA Retainer</div>
                    <div className="text-xs text-[#5A5854]">Complete technical operations, active uptime monitoring, and continuous speed optimization.</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[#141416]/10 shadow-xs space-y-2">
                    <div className="text-3xl font-display font-black text-[#141416]">100%</div>
                    <div className="text-xs font-mono uppercase text-[#5A5854] font-bold">Client IP &amp; Code Ownership</div>
                    <div className="text-xs text-[#5A5854]">Direct Git repository transfer, domain sovereignty, and full commercial licensing.</div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* THE BENCHMARK: GENERIC TEMPLATES VS BREWCLICK BESPOKE ARCHITECTURE        */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#EDEAE3] border-y border-[#141416]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141416]/5 border border-[#141416]/10 text-xs font-mono text-[#5A5854] uppercase tracking-widest font-semibold">
              ENGINEERING AUDIT
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#141416] tracking-tight">
              Why Global Brands Choose <span className="font-serif italic font-normal text-[#5A5854]">Bespoke Code.</span>
            </h2>
            <p className="text-[#5A5854] text-base sm:text-lg">
              Generic themes and drag-and-drop website builders cost you massive sales in slow loading times, third-party plugin vulnerabilities, and rented code. Here is how Brewclick transforms your platform:
            </p>
          </div>

          <div className="rounded-[2rem] bg-white border border-[#141416]/10 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#141416]/10 bg-[#FAF8F5]">
                    <th className="py-5 px-6 text-xs font-mono uppercase tracking-wider text-[#7A7873] font-bold">Architectural Standard</th>
                    <th className="py-5 px-6 text-xs font-mono uppercase tracking-wider text-[#7A7873] font-bold">Typical WordPress / Theme Agency</th>
                    <th className="py-5 px-6 text-xs font-mono uppercase tracking-wider text-[#141416] font-bold bg-[#141416]/5">Brewclick Hand-Crafted Code</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#141416]/8 text-xs font-mono">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF8F5]/60 transition-colors">
                      <td className="py-4 px-6 font-display font-bold text-sm text-[#141416]">{row.metric}</td>
                      <td className="py-4 px-6 text-[#7A7873]">
                        <div className="flex items-center gap-2">
                          <X className="w-4 h-4 text-rose-500 shrink-0" />
                          <span>{row.standardAgency}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-[#141416] font-medium bg-[#141416]/[0.02]">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{row.brewclick}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* COMPREHENSIVE DELIVERABLES & MAINTENANCE SLA (17 SYSTEMS & SERVICES)     */}
      {/* ========================================================================= */}
      <DeliverablesSection />

      {/* ========================================================================= */}
      {/* FOUNDING LEADERSHIP & PRINCIPALS (JAY GUPTA & MAYANK GUPTA)               */}
      {/* ========================================================================= */}
      <section id="leadership" className="py-28 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-800 uppercase tracking-widest font-semibold">
              FOUNDING LEADERSHIP &amp; ARCHITECTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#141416] tracking-tight">
              Led by Founders. <span className="font-serif italic font-normal text-[#5A5854]">Direct Partner Ownership.</span>
            </h2>
            <p className="text-[#5A5854] text-base sm:text-lg leading-relaxed">
              International clients never get passed off to junior subcontractors or account managers. Every line of code, technical roadmap, and retainer commitment is engineered directly by the founding partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="p-2.5 sm:p-3 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:border-[#141416]/25 transition-all group"
              >
                <div className="p-8 sm:p-10 rounded-[2rem] bg-[#FAF8F5] flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#141416]/5 border border-[#141416]/10 text-[#141416] font-bold">
                        {founder.badge}
                      </span>
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Available for Q2/Q3 Contracts
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-[#141416]">
                        {founder.name}
                      </h3>
                      <div className="text-xs font-mono text-[#7A7873] uppercase tracking-wider mt-1">
                        {founder.role}
                      </div>
                    </div>

                    <p className="text-sm text-[#5A5854] leading-relaxed">
                      {founder.bio}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#141416] font-bold">
                        Core Engineering Specializations:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {founder.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="px-3 py-1 rounded-lg bg-white border border-[#141416]/10 text-xs font-mono text-[#5A5854] shadow-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#141416]/8">
                    <a
                      href={founder.calLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cal-link={founder.name.toLowerCase().includes('jay') ? 'brewclick/jay-gupta' : 'brewclick/mayank-gupta'}
                      className="group/btn inline-flex items-center justify-between w-full py-3.5 px-6 rounded-full bg-[#141416] text-[#F5F3EF] font-bold text-xs font-mono hover:bg-black transition-all shadow-md shadow-[#141416]/10"
                    >
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{founder.buttonLabel}</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Direct Guarantee Card */}
          <div className="p-8 sm:p-10 rounded-[2.5rem] bg-[#EDEAE3] border border-[#141416]/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                The Direct Partner Commitment
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-[#141416]">
                Guaranteed Sub-2-Hour Response Time On All Enterprise SLAs
              </h4>
              <p className="text-sm text-[#5A5854]">
                Clients on our dedicated maintenance retainers receive direct private communication access with Jay Gupta &amp; Mayank Gupta. No tickets, no delays, pure engineering accountability.
              </p>
            </div>
            <a
              href="#contact"
              className="group whitespace-nowrap py-4 px-8 rounded-full bg-[#141416] text-[#F5F3EF] font-bold text-sm hover:bg-black transition-all flex items-center gap-3 shrink-0 shadow-lg shadow-[#141416]/15"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SELECTED CLIENT WORK: BAGECHA REWARDS & AISH MEHAN                        */}
      {/* ========================================================================= */}
      <section id="projects" className="py-28 border-t border-[#141416]/10 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-xs font-mono text-rose-800 uppercase tracking-widest font-semibold">
              PRODUCTION DEPLOYMENTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#141416] tracking-tight">
              Selected Client Work
            </h2>
            <p className="text-[#5A5854] text-base">
              Every project below is an active production system built for real businesses with live user workflows, fast loading speeds, and verified domains.
            </p>
          </div>

          {/* PROJECT 1: BAGECHA REWARDS (LOYALTY APP) */}
          <div className="p-2 sm:p-4 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            <div className="rounded-[2rem] bg-[#FAF8F5] overflow-hidden border border-[#141416]/8 p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Mobile Device Frame */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-full max-w-[320px] aspect-[552/906] rounded-[2.8rem] p-3 bg-gradient-to-b from-white to-[#EAE6DF] border border-[#141416]/15 shadow-2xl">
                    <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-black">
                      <Image
                        src="/projects/loyalty.png"
                        alt="Bagecha Rewards Loyalty Mobile Web App Interface"
                        fill
                        sizes="320px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Loyalty Project Specifications */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 font-semibold">
                      Mobile Web App · Live
                    </span>
                    <span className="text-xs font-mono text-[#5A5854]">
                      Full-Stack Firebase Application
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#141416] mb-2">
                      Bagecha Rewards
                    </h3>
                    <p className="text-sm sm:text-base text-[#5A5854] leading-relaxed">
                      A custom customer loyalty web app engineered from scratch. Featuring dynamic digital QR-code membership cards, live visit tracking, counter points ledger, and real-time Firebase authentication.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#141416] font-bold">
                      Key Architectural Highlights:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        'Dynamic QR Code Membership Pass',
                        'Real-time Firestore Visit & Reward Ledger',
                        'Interactive Perk Redemption Tiers',
                        'Mobile-First Custom UI Dashboard',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-[#5A5854] font-mono">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Firebase Auth', 'Cloud Firestore', 'React', 'Tailwind CSS'].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-md bg-white border border-[#141416]/10 text-xs font-mono text-[#5A5854] shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://loyalty.bagechabyadis.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 py-3.5 px-7 rounded-full bg-[#141416] text-[#F5F3EF] font-bold text-xs font-mono hover:bg-black transition-all shadow-lg shadow-[#141416]/10"
                    >
                      <span>Explore Live App (loyalty.bagechabyadis.in)</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* PROJECT 2: AISH MEHAN COACHING */}
          <div className="p-2 sm:p-4 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            <div className="rounded-[2rem] bg-[#FAF8F5] overflow-hidden border border-[#141416]/8 p-6 sm:p-8 lg:p-10 space-y-8">
              
              {/* Desktop Browser Mockup Window */}
              <div className="rounded-2xl overflow-hidden border border-[#141416]/10 bg-white shadow-xl">
                {/* Browser Top Bar */}
                <div className="px-4 py-3 bg-[#F0EDE8] border-b border-[#141416]/8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="px-5 py-1 rounded-full bg-white border border-[#141416]/10 text-xs font-mono text-[#5A5854] flex items-center gap-2 shadow-sm">
                    <Lock className="w-3 h-3 text-emerald-600" />
                    <span>https://aishmehan.com</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#7A7873] hidden sm:block">
                    High-Performance Coaching Platform
                  </div>
                </div>

                {/* Hero Image Container */}
                <div className="relative w-full aspect-[1897/906] bg-[#EAE6DF]">
                  <Image
                    src="/projects/coaching .png"
                    alt="Aish Mehan Transformation Coach Platform Hero Section"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Specs & Deliverables Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#141416]/8">
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-800 font-semibold">
                      High-Performance Platform
                    </span>
                    <span className="text-xs font-mono text-[#5A5854]">
                      Client Acquisition &amp; Lead Funnel
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#141416]">
                    Aish Mehan Transformation Coaching
                  </h3>
                  <p className="text-sm text-[#5A5854] leading-relaxed">
                    A bespoke fitness &amp; body transformation platform engineered for celebrity coach Aish Mehan. Features dedicated client consultation funnels, transformation results vault, and mobile-optimized conversion architecture.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel Edge'].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white border border-[#141416]/10 text-[11px] font-mono text-[#5A5854] shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#141416] font-bold">
                    Key Architectural Highlights:
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Direct Client Transformation Application Flow',
                      'Interactive Results & Credentials Vault',
                      'High-Impact Typography & Dark-Mode Visual Branding',
                      'Sub-Second Edge Page Speeds & Zero Third-Party Lag',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[#5A5854] font-mono">
                        <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3 flex flex-col justify-center space-y-3">
                  <a
                    href="#contact"
                    className="group w-full py-3.5 px-6 rounded-full bg-[#141416] text-[#F5F3EF] font-bold text-xs font-mono hover:bg-black transition-all flex items-center justify-between shadow-lg shadow-[#141416]/10"
                  >
                    <span>Request Platform Demo</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <p className="text-center text-xs font-mono text-[#7A7873]">
                    Client Portal SLA
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CAPABILITIES & STACK (ASYMMETRIC BENTO GRID)                              */}
      {/* ========================================================================= */}
      <section id="capabilities" className="py-28 relative bg-[#F5F3EF] border-t border-[#141416]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141416]/5 border border-[#141416]/10 text-xs font-mono text-[#5A5854] uppercase tracking-widest font-semibold">
              ENGINEERING RIGOR
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#141416] tracking-tight">
              Bespoke Architecture Without Compromise.
            </h2>
            <p className="text-[#5A5854] text-base sm:text-lg">
              We never install pre-made themes or drag-and-drop page builders. Every database schema, checkout endpoint, and user interface is engineered for speed, clean aesthetics, and conversion.
            </p>
          </div>

          {/* Asymmetric Bento Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento Card 1: E-Commerce & Checkout Engines (8 Cols) */}
            <div className="md:col-span-8 p-2 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 sm:p-10 rounded-[2rem] bg-[#FAF8F5] flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-700">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white text-[#5A5854] border border-[#141416]/10 font-bold">
                      Flagship Specialty
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#141416]">
                    Bespoke E-Commerce &amp; High-Conversion Checkout
                  </h3>
                  <p className="text-sm text-[#5A5854] leading-relaxed">
                    Custom shopping cart drawers, webhook transaction listeners, automated PDF receipts, and direct payment gateway APIs (Stripe, Razorpay, Apple Pay). No monthly app fees or lag.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#141416]/8 font-mono text-xs text-[#5A5854]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Instant Drawer State</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Webhook Payment Sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Multi-Currency Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Global Edge CDN (4 Cols) */}
            <div className="md:col-span-4 p-2 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 sm:p-10 rounded-[2rem] bg-[#FAF8F5] flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-700">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#141416]">
                    Global Edge Deployment
                  </h3>
                  <p className="text-xs text-[#5A5854] leading-relaxed">
                    Vercel Edge &amp; Cloudflare routing ensure your platform responds in &lt;50ms across US, Europe, Middle East, and Asia.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#141416]/10 font-mono text-xs text-[#141416] space-y-1">
                  <div className="text-[10px] uppercase text-[#7A7873]">Edge Routing Status:</div>
                  <div className="flex items-center gap-2 text-emerald-700 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Global 300+ Edge Nodes Active
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Full-Stack Databases & Real-Time APIs (4 Cols) */}
            <div className="md:col-span-4 p-2 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 sm:p-10 rounded-[2rem] bg-[#FAF8F5] flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-700">
                    <Server className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#141416]">
                    Real-Time Data Pipelines
                  </h3>
                  <p className="text-xs text-[#5A5854] leading-relaxed">
                    Firebase Auth, Cloud Firestore, serverless Node.js endpoints, and live state synchronization for complex digital operations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#5A5854]">
                  {['Firestore', 'Firebase Auth', 'Serverless', 'Webhooks'].map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded bg-white border border-[#141416]/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bento Card 4: Enterprise Retainers & SLA (8 Cols) */}
            <div className="md:col-span-8 p-2 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 sm:p-10 rounded-[2rem] bg-[#FAF8F5] flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 font-bold">
                      Active Enterprise SLA
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#141416]">
                    Dedicated Post-Launch Retainers &amp; Continuous Maintenance
                  </h3>
                  <p className="text-sm text-[#5A5854] leading-relaxed">
                    We maintain lifelong engineering relationships with our clients. We monitor uptime 24/7, deploy security patches, perform conversion audits, and ensure your storefront never goes down.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#141416]/8 font-mono text-xs text-[#5A5854]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>24/7 Uptime Audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Sub-2hr Emergency SLA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Monthly Speed Tuning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ENGAGEMENT MODELS & TRACK RECORD SCALE (FLEXIBLE SCOPE)                  */}
      {/* ========================================================================= */}
      <section id="engagement" className="py-28 border-t border-[#141416]/10 bg-[#EDEAE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141416]/5 border border-[#141416]/10 text-xs font-mono text-[#5A5854] uppercase tracking-widest font-semibold">
                HOW WE WORK · PROVEN AT SCALE
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-[#141416] tracking-tight">
                Flexible Engagements. <span className="font-serif italic font-normal text-[#5A5854]">Proven Track Record.</span>
              </h2>
              <p className="text-[#5A5854] text-base sm:text-lg">
                We do not enforce rigid one-size-fits-all packages. Every project is custom-scoped to your exact business stage and goals — backed by our proven track record delivering bespoke high-conversion platforms and continuous active retainer SLAs.
              </p>
            </div>

            {/* Availability Indicator */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#141416]/10 shadow-xs self-start md:self-auto font-mono text-xs text-[#5A5854]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Bespoke Contracts &amp; Retainers</span>
            </div>
          </div>

          {/* Verified Delivery Milestones Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-[2rem] bg-white border border-[#141416]/10 shadow-xs">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider font-semibold">Architecture Scale</div>
              <div className="text-2xl sm:text-3xl font-display font-black text-[#141416]">
                Enterprise
              </div>
              <div className="text-[11px] text-emerald-700 font-mono">Flagship E-Commerce Builds</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider font-semibold">Dedicated Retainers</div>
              <div className="text-2xl sm:text-3xl font-display font-black text-[#141416]">
                24/7 SLA
              </div>
              <div className="text-[11px] text-emerald-700 font-mono">Continuous Active Support</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider font-semibold">Project Scoping</div>
              <div className="text-2xl sm:text-3xl font-display font-black text-[#141416]">
                100% Flexible
              </div>
              <div className="text-[11px] text-[#5A5854] font-mono">Milestone-Based Budgets</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-[#7A7873] uppercase tracking-wider font-semibold">Founding Leadership</div>
              <div className="text-2xl sm:text-3xl font-display font-black text-[#141416]">
                Direct Access
              </div>
              <div className="text-[11px] text-[#5A5854] font-mono">Jay Gupta &amp; Mayank Gupta</div>
            </div>
          </div>

          {/* Engagement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.name}
                className="p-2.5 sm:p-3 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:border-[#141416]/25 transition-all flex flex-col justify-between"
              >
                <div className="p-8 sm:p-10 rounded-[2rem] bg-[#FAF8F5] space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#141416]/5 border border-[#141416]/10 text-[#141416] font-bold">
                        {model.tag}
                      </span>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 font-bold">
                        {model.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-display font-bold text-[#141416]">{model.name}</h3>
                      <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-3xl sm:text-4xl font-display font-black text-[#141416]">
                          {model.scopeScale}
                        </span>
                        <span className="text-xs font-mono text-[#7A7873] uppercase tracking-wider">
                          / {model.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#5A5854] leading-relaxed">
                      {model.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-[#141416]/8">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#141416] font-bold">
                        Core Deliverables &amp; Commitments:
                      </div>
                      <ul className="space-y-2">
                        {model.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-xs text-[#5A5854]">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 space-y-2">
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-between w-full py-4 px-6 rounded-full bg-[#141416] text-[#F5F3EF] font-bold text-sm hover:bg-black transition-all shadow-md shadow-[#141416]/10"
                    >
                      <span>{model.cta}</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </a>
                    <span className="text-[11px] font-mono text-[#7A7873] text-center block">
                      {model.ctaSubtitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DIRECT CONTACT & DISCOVERY (JAY GUPTA & MAYANK GUPTA)                     */}
      {/* ========================================================================= */}
      <section id="contact" className="py-28 relative bg-[#F5F3EF] border-t border-[#141416]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141416]/5 border border-[#141416]/10 text-xs font-mono text-[#5A5854] uppercase tracking-widest font-semibold">
                DIRECT FOUNDER ACCESS
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-[#141416] tracking-tight">
                Let’s engineer your next digital platform.
              </h2>
              <p className="text-[#5A5854] text-sm sm:text-base leading-relaxed">
                Whether you need a bespoke custom digital storefront or reliable ongoing retainer support, talk directly to Jay Gupta &amp; Mayank Gupta.
              </p>

              <div className="space-y-3 pt-4">
                <a
                  href="https://cal.com/brewclick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-[#141416]/10 hover:border-[#141416]/30 flex items-center justify-between gap-4 transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#141416] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold">SCHEDULE VIA CAL.COM</div>
                      <div className="text-sm font-bold text-[#141416] group-hover:text-black transition-colors">
                        Book Architecture Discovery Call
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#141416]/5 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4 text-[#141416]" />
                  </div>
                </a>

                <a
                  href="https://wa.me/918872173717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white border border-[#141416]/10 hover:border-[#141416]/30 flex items-center gap-4 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#141416] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A7873]">DIRECT WHATSAPP &amp; CALL</div>
                    <div className="text-sm font-bold text-[#141416] group-hover:text-black transition-colors">
                      +91 8872173717 (Jay Gupta &amp; Mayank Gupta)
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:jaynirala82@gmail.com"
                  className="p-5 rounded-2xl bg-white border border-[#141416]/10 hover:border-[#141416]/30 flex items-center gap-4 transition-all group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#141416] text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A7873]">DIRECT STUDIO EMAIL</div>
                    <div className="text-sm font-bold text-[#141416] group-hover:text-black transition-colors">
                      jaynirala82@gmail.com
                    </div>
                  </div>
                </a>

                <div className="p-5 rounded-2xl bg-white border border-[#141416]/10 flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#141416]/10 text-[#141416] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A7873]">HEADQUARTERS &amp; AVAILABILITY</div>
                    <div className="text-sm font-medium text-[#5A5854]">
                      Jalandhar, Punjab, India (US, UK &amp; Worldwide Remote)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Project Inquiry Card */}
            <div className="lg:col-span-7">
              <div className="p-2 rounded-[2.5rem] bg-white border border-[#141416]/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                <div className="p-8 sm:p-10 rounded-[2rem] bg-[#FAF8F5] space-y-6">
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#141416]">Project Inquiry &amp; Discovery</h3>
                    <p className="text-xs text-[#5A5854] mt-1">
                      Choose your project requirement and send directly to Jay Gupta &amp; Mayank Gupta on WhatsApp.
                    </p>
                  </div>

                  <form onSubmit={handleConsultationSubmit} className="space-y-5">
                    {/* Project Type Picker */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#5A5854] mb-2 font-semibold">
                        Requirement Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          'Bespoke E-Commerce Platform',
                          'Full-Stack Web App',
                          'Monthly Retainer SLA',
                          'Custom Deliverables',
                        ].map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setSelectedProjectType(type)}
                            className={`py-3 px-3 rounded-xl text-xs font-medium text-left border transition-all ${
                              selectedProjectType === type
                                ? 'bg-[#141416] text-white border-[#141416] font-bold shadow-sm'
                                : 'bg-white border-[#141416]/10 text-[#5A5854] hover:border-[#141416]/25'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#5A5854] mb-2 font-semibold">
                        Your Name / Business Name
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Stage & Steel"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#141416]/15 text-[#141416] placeholder:text-[#9A9893] text-sm focus:outline-none focus:border-[#141416]"
                      />
                    </div>

                    {/* Contact */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#5A5854] mb-2 font-semibold">
                        Phone Number or Email
                      </label>
                      <input
                        type="text"
                        required
                        value={clientContact}
                        onChange={(e) => setClientContact(e.target.value)}
                        placeholder="e.g. +91 9876543210 or yourname@business.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#141416]/15 text-[#141416] placeholder:text-[#9A9893] text-sm focus:outline-none focus:border-[#141416]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#5A5854] mb-2 font-semibold">
                        Project Scope &amp; Target Launch Date
                      </label>
                      <textarea
                        rows={3}
                        value={clientMessage}
                        onChange={(e) => setClientMessage(e.target.value)}
                        placeholder="Describe your desired platform, checkout flow, or website updates..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#141416]/15 text-[#141416] placeholder:text-[#9A9893] text-sm focus:outline-none focus:border-[#141416] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group w-full py-4 rounded-full bg-[#141416] text-[#F5F3EF] font-bold text-sm hover:bg-black transition-all flex items-center justify-between px-7 active:scale-[0.98] shadow-lg shadow-[#141416]/15"
                    >
                      <span>Send Project Scope (Fast WhatsApp Direct)</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </form>

                  {formSubmitted && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-mono flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Opening WhatsApp with pre-formatted project scope to Jay &amp; Mayank!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
