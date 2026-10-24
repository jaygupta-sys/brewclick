'use client';

import { useState } from 'react';
import {
  Globe,
  Layers,
  ShoppingBag,
  CreditCard,
  Mail,
  Bot,
  DollarSign,
  Truck,
  Tag,
  BarChart3,
  Activity,
  Sliders,
  ShieldCheck,
  Palette,
  Search,
  Bell,
  Database,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Zap,
  Lock,
  Clock,
  TrendingUp,
  Eye,
  Cpu,
  Inbox,
  Filter,
  Check,
  ChevronRight,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DeliverableItem {
  id: string;
  code: string;
  title: string;
  category: 'platform' | 'maintenance';
  categoryLabel: string;
  architectureTag: string;
  impactMetric: string;
  description: string;
  businessBenefit: string;
  deliverables: string[];
  techPills: string[];
  icon: any;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  featured?: boolean;
}

export const DELIVERABLES_DATA: DeliverableItem[] = [
  // ==========================================
  // CORE PLATFORM ENGINEERING (9 DELIVERABLES)
  // ==========================================
  {
    id: 'bespoke-website',
    code: 'SYS-01',
    title: 'Bespoke High-Performance Website',
    category: 'platform',
    categoryLabel: 'Platform Engineering',
    architectureTag: 'Next.js 15 App Router · React 19 · Sub-Second Edge SSR',
    impactMetric: '<0.4s Global Edge TTFB',
    description:
      'Pure hand-crafted code with zero WordPress, Shopify theme, or page-builder bloat. Engineered for instant page rendering, fluid micro-interactions, and 100% responsive perfection across every device screen.',
    businessBenefit:
      'Eliminates visitor bounce rates caused by slow loading. Every 1-second delay reduces conversions by 7%. Our sub-second edge speeds keep 99% of prospective buyers engaged through to checkout.',
    deliverables: [
      'Sub-second edge server-rendered page loads (<0.4s worldwide)',
      '99+ Google Core Web Vitals speed & SEO audit score',
      '100% Client-owned Git repository & intellectual property rights',
      'Zero monthly rented theme or third-party builder lock-in fees'
    ],
    techPills: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Vercel Edge', 'Framer Motion'],
    icon: Globe,
    accentColor: 'from-amber-500/10 to-orange-500/10 text-amber-600',
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/25',
    badgeText: 'text-amber-800',
    featured: true
  },
  {
    id: 'sanity-cms',
    code: 'SYS-02',
    title: 'Sanity Headless CMS Studio',
    category: 'platform',
    categoryLabel: 'Platform Engineering',
    architectureTag: 'Sanity.io v3 · Real-Time Visual Live Content Editing',
    impactMetric: 'Zero Developer Dependency',
    description:
      'A dedicated, tailor-made Sanity Studio CMS where your non-technical team can instantly create, edit, reorder, or publish products, catalog collections, banners, marketing copy, and blogs in real-time.',
    businessBenefit:
      'Total marketing autonomy. You never pay agency hourly rates or wait days just to update text, replace banners, or launch a new product. Content updates go live across the globe in seconds.',
    deliverables: [
      'Intuitive drag-and-drop visual content editor tailored to your brand',
      'Instant global edge cache revalidation with zero build delays',
      'Role-based team permission controls & instant draft previews',
      'Zero database management or server security maintenance headaches'
    ],
    techPills: ['Sanity v3', 'GROQ API', 'Live Preview', 'Edge ISR Revalidation'],
    icon: Layers,
    accentColor: 'from-violet-500/10 to-indigo-500/10 text-violet-600',
    badgeBg: 'bg-violet-500/10',
    badgeBorder: 'border-violet-500/25',
    badgeText: 'text-violet-800'
  },
  {
    id: 'order-management-system',
    code: 'SYS-03',
    title: 'Order Management System (OMS)',
    category: 'platform',
    categoryLabel: 'Platform Engineering',
    architectureTag: 'Real-Time Order Lifecycle & SKU Inventory Engine',
    impactMetric: '100% Real-Time Order Accuracy',
    description:
      'A centralized, unified operational dashboard managing orders across all states: Pending, Payment Captured, In Processing, Dispatched, In-Transit, and Delivered. Features automated stock deduction and SKU tracking.',
    businessBenefit:
      'Prevents costly fulfillment blunders, double-shipping, and inventory stock-outs. Automates operational overhead so you can fulfill 10x the order volume with a lean, efficient team.',
    deliverables: [
      'Real-time order state transition webhooks and live status engine',
      'Automatic SKU inventory deductions with low-stock warning alerts',
      'Printable automated packing slips, GST/tax invoices & dispatch sheets',
      'Instant search and full customer historical purchase lookup'
    ],
    techPills: ['Serverless State Engine', 'Real-Time Webhooks', 'Automated Invoices', 'SKU Ledger'],
    icon: ShoppingBag,
    accentColor: 'from-emerald-500/10 to-teal-500/10 text-emerald-600',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/25',
    badgeText: 'text-emerald-800'
  },
  {
    id: 'payment-gateway',
    code: 'SYS-04',
    title: 'Multi-Gateway Payment Integration',
    category: 'platform',
    categoryLabel: 'Platform Engineering',
    architectureTag: 'Stripe, Razorpay, Cashfree, PayPal & Instant 1-Click Pay',
    impactMetric: '0% Surcharge Fees',
    description:
      '100% bespoke payment architecture tailored to your business needs: Stripe for global cards and international multi-currency (USD, EUR, GBP, AUD), plus Razorpay or Cashfree for domestic UPI, NetBanking, and Wallets. Native Apple Pay & Google Pay ready.',
    businessBenefit:
      'Eliminates checkout friction and drop-offs with seamless 1-click workflows. Direct money settlement into your bank accounts with zero platform lock-in fees or third-party percentage cuts.',
    deliverables: [
      'Direct payment gateway APIs (Stripe, Razorpay, Cashfree, PayPal)',
      '1-Click Apple Pay, Google Pay, UPI & International Card checkout',
      'Automated secure webhook transaction listeners for instant capture',
      'Instant refund handling, failed payment recovery & fraud prevention'
    ],
    techPills: ['Stripe API', 'Razorpay Webhooks', 'UPI / Apple Pay', 'PCI-DSS Compliant'],
    icon: CreditCard,
    accentColor: 'from-blue-500/10 to-cyan-500/10 text-blue-600',
    badgeBg: 'bg-blue-500/10',
    badgeBorder: 'border-blue-500/25',
    badgeText: 'text-blue-800'
  },
  {
    id: 'email-newsletter',
    code: 'SYS-05',
    title: 'Email Newsletter & Lifecycle Marketing',
    category: 'platform',
    categoryLabel: 'Platform Engineering',
    architectureTag: 'Automated Lead Capture & Cart Recovery Sequences',
    impactMetric: '15%–25% Cart Recovery',
    description:
      'Integrated high-converting newsletter capture forms, exit-intent slide-ins, automated welcome series, and triggered abandoned cart recovery email workflows that run on 100% autopilot.',
    businessBenefit:
      'Unlocks high-margin repeat revenue. Recovering 15% to 25% of abandoned carts turns lost shoppers into paying customers without spending an extra dollar on paid advertisements.',
    deliverables: [
      'Multi-step automated cart abandonment email recovery sequence',
      'Frictionless slide-in and footer email subscription forms',
      'Direct bidirectional sync with Klaviyo, Mailchimp, or custom SMTP',
      'VIP customer tagging, purchase history tracking & segmented campaigns'
    ],
    techPills: ['Klaviyo / Mailchimp API', 'Custom SMTP', 'Drip Sequences', 'Lead Capture'],
    icon: Mail,
    accentColor: 'from-rose-500/10 to-pink-500/10 text-rose-600',
    badgeBg: 'bg-rose-500/10',
    badgeBorder: 'border-rose-500/25',
    badgeText: 'text-rose-800'
  },
  {
    id: 'ai-chatbot',
    code: 'SYS-06',
    title: 'Customer Support AI Chatbot',
    category: 'platform',
    categoryLabel: 'Platform Engineering',
    architectureTag: '24/7 Context-Aware Conversational AI & Live Tracking Lookup',
    impactMetric: '70% Ticket Deflection',
    description:
      'Intelligent, multi-turn AI chatbot trained on your product catalog, sizing guides, return policies, and FAQs. Enables customers to look up order status in real time and offers instant WhatsApp human handoff.',
    businessBenefit:
      'Operates 24/7/365 to answer buyer questions instantly at 2 AM. Slashes customer support ticket volume by up to 70% and closes on-the-fence shoppers right before they drop off.',
    deliverables: [
      '24/7 instant automated replies to customer product and sizing questions',
      'Integrated live order status lookup for shoppers using order ID',
      'Contextual product recommendations tailored to buyer requirements',
      'One-click seamless escalation to human team on WhatsApp or live chat'
    ],
    techPills: ['OpenAI / Claude API', 'Vector Embeddings', 'Catalog Knowledge Base', 'WhatsApp Handoff'],
    icon: Bot,
    accentColor: 'from-purple-500/10 to-violet-500/10 text-purple-600',
    badgeBg: 'bg-purple-500/10',
    badgeBorder: 'border-purple-500/25',
    badgeText: 'text-purple-800'
  },
  {
    id: 'price-management',
    code: 'SYS-07',
    title: 'Price Management & Dynamic Multi-Currency',
    category: 'platform',
    categoryLabel: 'Platform Engineering',
    architectureTag: 'Geolocation-Based Currency & Tiered B2B Wholesale Pricing',
    impactMetric: 'Frictionless Global Commerce',
    description:
      'Granular pricing architecture supporting dynamic IP-based currency conversion (USD, GBP, EUR, INR), wholesale/B2B tier pricing, and 1-click bulk catalog price adjustment tools.',
    businessBenefit:
      'Expand frictionlessly into international markets by charging buyers in their local currency. Protects margins against exchange rate swings and lets you update catalog prices in one click.',
    deliverables: [
      'Automatic IP-based currency detection & localized pricing display',
      'Multi-tier volume discounts for B2B, wholesale & bulk buyers',
      'Category-wide 1-click bulk price adjustments without editing each SKU',
      'Currency rounding and country-specific tax/VAT compliance display'
    ],
    techPills: ['GeoIP Currency Engine', 'Dynamic Forex Sync', 'B2B Tier Ledger', 'Bulk Price Tools'],
    icon: DollarSign,
    accentColor: 'from-teal-500/10 to-emerald-500/10 text-teal-600',
    badgeBg: 'bg-teal-500/10',
    badgeBorder: 'border-teal-500/25',
    badgeText: 'text-teal-800'
  },
  {
    id: 'logistics-integration',
    code: 'SYS-08',
    title: 'Logistics & Courier API Integration',
    category: 'platform',
    categoryLabel: 'Platform Engineering',
    architectureTag: 'Shiprocket, Delhivery, Bluedart, FedEx, DHL & Aramex APIs',
    impactMetric: 'Automated 1-Click Dispatch',
    description:
      'Direct programmatic integration with leading shipping aggregators and courier networks. Automatically generates Air Waybill (AWB) numbers, syncs live tracking statuses, and calculates pinpoint shipping rates at checkout.',
    businessBenefit:
      'Slashes fulfillment dispatch time from hours to seconds. Eliminates "Where is my order?" (WISMO) support complaints by automatically sending customers real-time tracking links.',
    deliverables: [
      'Automated AWB generation & courier dispatch booking on order capture',
      'Real-time pinpoint shipping rate calculation at checkout based on weight & pin code',
      'Live parcel tracking links sent automatically to buyers via SMS & Email',
      'Reverse pickup and automated returns management workflow'
    ],
    techPills: ['Shiprocket API', 'Delhivery API', 'FedEx / DHL Sync', 'Automated AWB Engine'],
    icon: Truck,
    accentColor: 'from-sky-500/10 to-blue-500/10 text-sky-600',
    badgeBg: 'bg-sky-500/10',
    badgeBorder: 'border-sky-500/25',
    badgeText: 'text-sky-800'
  },
  {
    id: 'offer-discount-system',
    code: 'SYS-09',
    title: 'Offer, Coupon & Discount Rule Engine',
    category: 'platform',
    categoryLabel: 'Platform Engineering',
    architectureTag: 'Custom Promotional Rules, BOGO & Flash Sale Automation',
    impactMetric: '+28% Average Order Value',
    description:
      'Bespoke promotional discount engine supporting percentage discounts, flat cash off, BOGO (Buy One Get One), minimum cart threshold rules, first-order welcome codes, and scheduled flash sale timers.',
    businessBenefit:
      'Supercharges conversion during festive launches and promotional seasons. Incentivizes higher Average Order Value (AOV) by rewarding buyers who cross basket spending milestones.',
    deliverables: [
      'Flexible coupon codes with max usage caps, user limits & expiry timers',
      'Automatic cart-level milestone discounts (e.g., "Spend $100, Save $20")',
      'BOGO and free-gift-with-purchase automated promotional engines',
      'Instant discount validation with zero checkout page lag or reload'
    ],
    techPills: ['Custom Rule Engine', 'BOGO Logic', 'Flash Sale Schedulers', 'AOV Multipliers'],
    icon: Tag,
    accentColor: 'from-amber-500/10 to-yellow-500/10 text-amber-600',
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/25',
    badgeText: 'text-amber-800'
  },

  // ==============================================================
  // CONTINUOUS MAINTENANCE & GROWTH RETAINER SLA (8 DELIVERABLES)
  // ==============================================================
  {
    id: 'monthly-analytics-reports',
    code: 'SLA-01',
    title: 'Monthly Executive Traffic, Click & Regional Reports',
    category: 'maintenance',
    categoryLabel: 'Dedicated Retainer SLA',
    architectureTag: 'Google Analytics 4 & Custom Server-Side Telemetry',
    impactMetric: '100% Marketing Transparency',
    description:
      'Comprehensive monthly executive reports delivered directly to your leadership team detailing total unique visitors, click-through rates, top acquisition channels, bounce rates, and geographic breakdown by country, state, and city.',
    businessBenefit:
      'Eliminates guesswork. You clearly see which marketing channels and geographic regions actually produce high-ticket sales, allowing you to invest your ad budget only where it produces real ROI.',
    deliverables: [
      'Granular regional & city-level visitor purchase and session analysis',
      'Acquisition channel attribution (Google Organic, Meta Ads, Direct, Referral)',
      'Device and browser breakdown to optimize mobile checkout flow',
      'Actionable strategic growth recommendations curated directly by founders'
    ],
    techPills: ['Google Analytics 4', 'Server-Side Telemetry', 'Regional Heatmaps', 'Executive PDF Decks'],
    icon: BarChart3,
    accentColor: 'from-indigo-500/10 to-blue-500/10 text-indigo-600',
    badgeBg: 'bg-indigo-500/10',
    badgeBorder: 'border-indigo-500/25',
    badgeText: 'text-indigo-800'
  },
  {
    id: 'heatmap-analysis',
    code: 'SLA-02',
    title: 'Heatmap Reports & Click Page Flow Analysis',
    category: 'maintenance',
    categoryLabel: 'Dedicated Retainer SLA',
    architectureTag: 'Microsoft Clarity & Hotjar Visual User Behavior Tracking',
    impactMetric: 'Pinpoint UX Leak Detection',
    description:
      'Visual heatmaps and anonymized session replay analytics analyzing where users click, how deep they scroll, where hesitation occurs, and where "rage clicks" or checkout drop-offs happen.',
    businessBenefit:
      'Exposes hidden conversion bottlenecks and confusing layout elements. Turning friction points into smooth paths systematically increases your site’s conversion rate every single month.',
    deliverables: [
      'Visual tap density and click heatmaps across mobile and desktop devices',
      'Scroll-depth maps revealing the exact drop-off points in product descriptions',
      'Anonymized checkout abandonment video recordings to audit friction',
      'Prioritized monthly UX and UI refinement action plan based on user behavior'
    ],
    techPills: ['Microsoft Clarity', 'Hotjar Audits', 'Scroll Depth Maps', 'Rage-Click Filters'],
    icon: Eye,
    accentColor: 'from-rose-500/10 to-orange-500/10 text-rose-600',
    badgeBg: 'bg-rose-500/10',
    badgeBorder: 'border-rose-500/25',
    badgeText: 'text-rose-800'
  },
  {
    id: 'ab-testing-cro',
    code: 'SLA-03',
    title: 'Continuous A/B Testing & Conversion Rate Optimization (CRO)',
    category: 'maintenance',
    categoryLabel: 'Dedicated Retainer SLA',
    architectureTag: 'Empirical Split-Testing & High-Velocity Variant Experimentation',
    impactMetric: 'Compounding Sales Multiplier',
    description:
      'Scientific split-testing of hero headlines, CTA button wording, colors, hero imagery, product layout arrangements, and trust badge placements to systematically maximize conversion rate.',
    businessBenefit:
      'Generates more sales and revenue from your existing traffic without needing to spend an extra dollar on ads. Compounding gains build long-term profitability.',
    deliverables: [
      'Continuous monthly test hypotheses formulated and deployed to production',
      'Statistical significance tracking for revenue per visitor and checkout completion',
      'Winning variants immediately promoted to production with zero code rollback',
      'Checkout funnel micro-friction elimination experiments'
    ],
    techPills: ['Vercel Edge Config', 'Split-Testing Engine', 'Statistical Power Analysis', 'CRO Optimization'],
    icon: Sliders,
    accentColor: 'from-violet-500/10 to-pink-500/10 text-violet-600',
    badgeBg: 'bg-violet-500/10',
    badgeBorder: 'border-violet-500/25',
    badgeText: 'text-violet-800'
  },
  {
    id: 'routine-maintenance-bugs',
    code: 'SLA-04',
    title: 'Routine Maintenance, Bug Audits & Rapid Fix SLA',
    category: 'maintenance',
    categoryLabel: 'Dedicated Retainer SLA',
    architectureTag: '24/7 Edge Health Monitoring & Sub-2-Hour Emergency SLA',
    impactMetric: 'Guaranteed Sub-2hr Response',
    description:
      'Proactive dependency patching, package vulnerability audits, edge DNS checks, database index optimization, and guaranteed priority bug turnaround times directly handled by founding engineers.',
    businessBenefit:
      'Total peace of mind. Your platform never crashes during high-budget ad campaigns or festive sales, and any critical issue is investigated and solved within hours by the creators.',
    deliverables: [
      '24/7 automated edge uptime, database ping and latency monitoring',
      'Regular security patch deployments & framework version updates',
      'Guaranteed sub-2-hour emergency bug resolution SLA',
      'Direct private Slack and WhatsApp communication channel with Jay Gupta & Mayank Gupta'
    ],
    techPills: ['24/7 Uptime Pingers', 'Zero-Downtime Deploys', 'Direct Founder SLA', 'Automated Rollbacks'],
    icon: ShieldCheck,
    accentColor: 'from-emerald-500/10 to-green-500/10 text-emerald-600',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/25',
    badgeText: 'text-emerald-800',
    featured: true
  },
  {
    id: 'ongoing-design-updates',
    code: 'SLA-05',
    title: 'Ongoing Design Updates & Modern UI Polish',
    category: 'maintenance',
    categoryLabel: 'Dedicated Retainer SLA',
    architectureTag: 'Continuous Brand Evolution & Modern Design Polish',
    impactMetric: 'Always Modern Brand Prestige',
    description:
      'Dedicated monthly engineering hours for seasonal promotional banners, festive marketing art, new product landing page layouts, micro-animations, and mobile user experience refinements.',
    businessBenefit:
      'Keeps your digital brand looking ultra-modern, fresh, and ahead of competitors at all times, preserving brand prestige without ever needing an expensive total redesign rebuild.',
    deliverables: [
      'Dedicated monthly hours for promotional banners, sale graphics & copy adjustments',
      'Micro-animations, hover effects and interactive component visual polish',
      'Mobile navigation and responsive touch experience tuning',
      'New feature page and promotional landing page design additions'
    ],
    techPills: ['Figma to Code', 'Component Refactoring', 'Seasonal Themes', 'Micro-Interactions'],
    icon: Palette,
    accentColor: 'from-pink-500/10 to-rose-500/10 text-pink-600',
    badgeBg: 'bg-pink-500/10',
    badgeBorder: 'border-pink-500/25',
    badgeText: 'text-pink-800'
  },
  {
    id: 'advanced-seo',
    code: 'SLA-06',
    title: 'Advanced Technical & On-Page SEO Optimization',
    category: 'maintenance',
    categoryLabel: 'Dedicated Retainer SLA',
    architectureTag: 'Structured JSON-LD Schemas, Dynamic XML Sitemaps & Core Web Vitals',
    impactMetric: 'Top Google Search Rankings',
    description:
      'Full-stack technical search engine optimization: programmatic structured JSON-LD data for products and rich snippets, dynamic XML sitemaps, OpenGraph meta tags, image alt tags, canonical headers, and Core Web Vitals maintenance.',
    businessBenefit:
      'Dominates Google search results, driving a continuous stream of free, high-intent organic buyer traffic without ongoing pay-per-click advertising costs.',
    deliverables: [
      'Rich Google product snippets (Prices, Availability, Star Ratings & Breadcrumbs)',
      'Dynamic auto-updating XML sitemaps submitted to Google Search Console',
      'Social card OpenGraph & Twitter metadata optimization for viral sharing',
      'Continuous Core Web Vitals maintenance (>95 mobile score on Lighthouse)'
    ],
    techPills: ['JSON-LD Schema', 'Next.js Dynamic Sitemap', 'Core Web Vitals', 'Search Console Audits'],
    icon: Search,
    accentColor: 'from-amber-500/10 to-orange-500/10 text-amber-600',
    badgeBg: 'bg-amber-500/10',
    badgeBorder: 'border-amber-500/25',
    badgeText: 'text-amber-800'
  },
  {
    id: 'automated-notifications-stage-and-steel',
    code: 'SLA-07',
    title: 'Automated Notification System (Gmail / Transactional Email Engine)',
    category: 'maintenance',
    categoryLabel: 'Dedicated Retainer SLA',
    architectureTag: 'Proven Stage & Steel Production Architecture · Nodemailer & Automated Gmail SMTP',
    impactMetric: 'Battle-Tested Stage & Steel Engine',
    description:
      'The exact high-reliability automated transactional email engine we successfully engineered for Stage & Steel. Dispatches instantaneous branded HTML order receipts to customers and automated alert pings directly to the founders\' mobile inbox whenever high-value sales occur.',
    businessBenefit:
      'Instant customer reassurance with 100% inbox deliverability that never hits spam. Keeps founders and operations managers instantly informed of incoming revenue in real time on mobile.',
    deliverables: [
      'Battle-tested Stage & Steel production architecture with 100% reliability',
      'Guaranteed inbox delivery rate with SPF, DKIM & verified transactional SMTP',
      'Beautiful responsive custom HTML receipts with complete order breakdown',
      'Instant automated founder / warehouse ping on every new order placement'
    ],
    techPills: ['Automated Gmail SMTP', 'Nodemailer Webhooks', 'Stage & Steel Proven', 'SPF/DKIM Signed'],
    icon: Bell,
    accentColor: 'from-emerald-500/10 to-cyan-500/10 text-emerald-600',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/25',
    badgeText: 'text-emerald-800',
    featured: true
  },
  {
    id: 'crm-integration',
    code: 'SLA-08',
    title: 'CRM Integration & Customer Lifecycle Pipeline',
    category: 'maintenance',
    categoryLabel: 'Dedicated Retainer SLA',
    architectureTag: 'Automated Sync with HubSpot, Zoho, Notion, Google Sheets & Custom SQL',
    impactMetric: 'Zero Customer Lead Leakage',
    description:
      'Automated bidirectional synchronization of orders, leads, customer inquiries, and lifetime value data into your CRM of choice (HubSpot, Zoho, Salesforce, Notion, or custom Google Sheets/SQL database).',
    businessBenefit:
      'Completely eliminates manual data entry and spreadsheet headaches. Equips your team with 360-degree customer purchase history to execute targeted upsells and VIP retention.',
    deliverables: [
      'Real-time customer data & order value synchronization across platforms',
      'Automated customer tier segmentation (VIP, High-Value, At-Risk)',
      'Integration with HubSpot, Zoho, Notion, Google Sheets, or custom SQL',
      'Zero manual copy-pasting or lost customer inquiries'
    ],
    techPills: ['HubSpot / Zoho API', 'Webhook Pipelines', 'Notion Database Sync', 'Lead Pipelines'],
    icon: Database,
    accentColor: 'from-blue-500/10 to-indigo-500/10 text-blue-600',
    badgeBg: 'bg-blue-500/10',
    badgeBorder: 'border-blue-500/25',
    badgeText: 'text-blue-800'
  }
];

function DeliverableCard({
  item,
  onOpenSpecs,
  onInquire,
}: {
  item: DeliverableItem;
  onOpenSpecs: (item: DeliverableItem) => void;
  onInquire: (title: string) => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = item.icon;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-[2.3rem] bg-white border p-3 shadow-sm hover:shadow-[0_24px_65px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        item.featured
          ? 'border-emerald-500/40 ring-1 ring-emerald-500/25'
          : 'border-[#141416]/10 hover:border-[#141416]/30'
      }`}
    >
      {/* Interactive Cursor Spotlight Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[2.3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.09), transparent 70%)`
            : undefined,
        }}
      />

      {/* Shimmer Ambient Border Sheen on Top of Card */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      {/* ========================================================================= */}
      {/* 1. REALISTIC MIRROR LIGHT SHINE SWEEP (LIGHT FALLING ON POLISHED MIRROR)   */}
      {/* ========================================================================= */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2.3rem] overflow-hidden z-30"
        aria-hidden="true"
      >
        {/* Primary sharp specular mirror flare beam */}
        <div className="mirror-shine-sweep" />
        {/* Secondary softer halo flare beam */}
        <div className="mirror-shine-glow" />
      </div>

      {/* ========================================================================= */}
      {/* 2. DYNAMIC MIRROR SPECULAR GLARE (FOLLOWS CURSOR REFLECTION)             */}
      {/* ========================================================================= */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2.3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
        style={{
          background: isHovered
            ? `radial-gradient(340px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.22) 32%, transparent 70%)`
            : undefined,
        }}
        aria-hidden="true"
      />

      {/* ========================================================================= */}
      {/* 3. POLISHED MIRROR BEVELED GLASS RIM (CATCHES AMBIENT LIGHT)             */}
      {/* ========================================================================= */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[2.3rem] ring-1 ring-inset ring-white/70 group-hover:ring-white z-30 transition-all duration-300 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.06)]"
        aria-hidden="true"
      />

      {/* Card Content Container */}
      <div className="relative z-20 p-6 sm:p-7 rounded-[1.9rem] bg-[#FAF8F5] group-hover:bg-[#FCFBF8] flex-1 flex flex-col justify-between space-y-6 transition-colors duration-300">
        
        {/* Top Header: Icon + Metric Badge */}
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${item.accentColor} border border-[#141416]/10 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-md shrink-0`}
            >
              <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full ${item.badgeBg} ${item.badgeBorder} ${item.badgeText} border shadow-2xs text-right whitespace-nowrap`}
            >
              {item.impactMetric}
            </span>
          </div>

          {/* Title & Architecture Tag with Generous Space */}
          <div className="space-y-2 pt-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#7A7873] uppercase tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{item.categoryLabel}</span>
            </div>
            <h3 className="text-2xl sm:text-[25px] font-display font-bold text-[#141416] tracking-tight group-hover:text-black transition-colors leading-snug">
              {item.title}
            </h3>
            <div className="text-[12px] sm:text-[13px] font-mono text-[#5A5854] line-clamp-1 font-medium pt-0.5">
              {item.architectureTag}
            </div>
          </div>

          {/* Deliverable Functionality Description - Highly Readable Font Size */}
          <p className="text-[14.5px] sm:text-[15px] font-sans text-[#33312E] leading-relaxed font-normal">
            {item.description}
          </p>

          {/* KEY BUSINESS & REVENUE BENEFIT (PROMINENT CALLOUT WITH HOVER SHIMMER) */}
          <div className="p-4 rounded-2xl bg-[#F5F3EF] border border-[#141416]/10 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/[0.05] transition-all duration-300 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-emerald-600 transition-transform duration-300 group-hover:scale-115 group-hover:-translate-y-0.5" />
              <span>Business &amp; Revenue Benefit:</span>
            </div>
            <p className="text-[14px] sm:text-[14.5px] font-sans font-medium text-[#141416] leading-relaxed">
              {item.businessBenefit}
            </p>
          </div>

          {/* Deliverables Checklist - Clean, Readable Typography */}
          <div className="space-y-2.5 pt-2 border-t border-[#141416]/8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#141416] font-bold">
              Included Deliverables:
            </div>
            <ul className="space-y-2">
              {item.deliverables.slice(0, 3).map((d, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] font-sans text-[#423F3A] leading-snug font-normal transition-transform duration-300 group-hover:translate-x-1"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Bottom Actions */}
        <div className="pt-4 border-t border-[#141416]/8 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenSpecs(item)}
            className="text-xs sm:text-sm font-mono text-[#141416] hover:underline font-bold flex items-center gap-1.5 transition-colors group/link"
          >
            <span>Full Specs</span>
            <ChevronRight className="w-4 h-4 text-[#7A7873] group-hover/link:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onInquire(item.title)}
            className="group/btn px-4 py-2 rounded-full bg-[#141416] text-[#F5F3EF] text-xs font-mono font-bold hover:bg-black transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md active:scale-95"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}

export default function DeliverablesSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'platform' | 'maintenance'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<DeliverableItem | null>(null);

  const filteredItems = DELIVERABLES_DATA.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.businessBenefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.architectureTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const platformCount = DELIVERABLES_DATA.filter((i) => i.category === 'platform').length;
  const maintenanceCount = DELIVERABLES_DATA.filter((i) => i.category === 'maintenance').length;

  const handleInquire = (itemTitle: string) => {
    const text = encodeURIComponent(
      `Hello Jay & Mayank! I am interested in discussing "${itemTitle}" for my digital storefront with Brewclick Design Studio.`
    );
    window.open(`https://wa.me/918872173717?text=${text}`, '_blank');
  };

  return (
    <section id="deliverables" className="py-28 relative bg-[#F5F3EF] border-t border-[#141416]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* HEADER                                                                    */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-800 uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              COMPLETE SYSTEM ARCHITECTURE &amp; SLA RETAINERS
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-black text-[#141416] tracking-tight">
              What We Deliver. <span className="font-serif italic font-normal text-[#5A5854]">How It Scales Revenue.</span>
            </h2>
            
            <p className="text-[#5A5854] text-base sm:text-lg leading-relaxed font-sans">
              Every system below is engineered from scratch with hand-crafted code, then actively protected with dedicated monthly maintenance. Zero template shortcuts. Here is the full breakdown of deliverables with their exact business and revenue benefits.
            </p>
          </div>

          {/* Quick Metrics Capsule */}
          <div className="flex items-center gap-3 p-2 rounded-2xl bg-white border border-[#141416]/10 shadow-xs self-start lg:self-auto font-mono text-xs text-[#5A5854]">
            <div className="px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#141416]/8">
              <div className="text-base font-display font-bold text-[#141416]">9 Core</div>
              <div className="text-[10px] text-[#7A7873] uppercase">Build Systems</div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-[#FAF8F5] border border-[#141416]/8">
              <div className="text-base font-display font-bold text-[#141416]">8 Ongoing</div>
              <div className="text-[10px] text-[#7A7873] uppercase">Retainer Services</div>
            </div>
            <div className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800">
              <div className="text-base font-display font-bold text-emerald-700">&lt;2hr</div>
              <div className="text-[10px] uppercase font-semibold">Emergency SLA</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CONTROLS: TABS & SEARCH                                       */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 rounded-2xl bg-white border border-[#141416]/10 shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FAF8F5] border border-[#141416]/8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#141416] text-[#F5F3EF] font-bold shadow-xs'
                  : 'text-[#5A5854] hover:text-[#141416]'
              }`}
            >
              All Systems ({DELIVERABLES_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('platform')}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'platform'
                  ? 'bg-[#141416] text-[#F5F3EF] font-bold shadow-xs'
                  : 'text-[#5A5854] hover:text-[#141416]'
              }`}
            >
              Platform Build ({platformCount})
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'maintenance'
                  ? 'bg-[#141416] text-[#F5F3EF] font-bold shadow-xs'
                  : 'text-[#5A5854] hover:text-[#141416]'
              }`}
            >
              Maintenance &amp; Growth SLA ({maintenanceCount})
            </button>
          </div>

          {/* Live Search Filter */}
          <div className="relative sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A7873]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search deliverables, benefits, tech..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#FAF8F5] border border-[#141416]/10 text-xs font-mono text-[#141416] placeholder:text-[#9A9893] focus:outline-none focus:border-[#141416]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7A7873] hover:text-[#141416]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DELIVERABLES CARDS GRID WITH CURSOR SPOTLIGHT ANIMATIONS                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <DeliverableCard
              key={item.id}
              item={item}
              onOpenSpecs={setSelectedItem}
              onInquire={handleInquire}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="p-12 text-center rounded-[2rem] bg-white border border-[#141416]/10 space-y-3">
            <Search className="w-8 h-8 text-[#7A7873] mx-auto" />
            <div className="text-sm font-mono text-[#141416] font-bold">No deliverables matched your search query.</div>
            <p className="text-xs text-[#5A5854]">Try searching for &quot;Stripe&quot;, &quot;Heatmap&quot;, &quot;Sanity&quot;, or click &quot;All Systems&quot; above.</p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-[#141416] text-white text-xs font-mono font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* BOTTOM GUARANTEE BANNER                                                   */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] bg-[#EDEAE3] border border-[#141416]/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Comprehensive Hand-Off Guarantee</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#141416]">
              All 17 Features Are Fully Custom &amp; Client-Owned.
            </h3>
            <p className="text-sm text-[#5A5854] leading-relaxed">
              We never lock you into recurring proprietary SaaS app subscriptions or third-party license fees. You own all Git repositories, custom databases, CMS schemas, and payment pipelines from Day 1.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="w-full sm:w-auto py-3.5 px-7 rounded-full bg-[#141416] text-[#F5F3EF] font-bold text-xs font-mono hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#141416]/15"
            >
              <span>Schedule Architecture Discovery</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href="https://wa.me/918872173717"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-white border border-[#141416]/15 text-[#141416] font-bold text-xs font-mono hover:bg-[#FAF8F5] transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <span>WhatsApp Jay &amp; Mayank</span>
            </a>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* DETAILED SPECIFICATIONS MODAL                                             */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedItem && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedItem(null);
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-white border border-[#141416]/15 p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#141416]/10 flex items-center justify-center text-[#5A5854] hover:text-[#141416] hover:bg-[#F5F3EF] transition-all"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-3 pr-10">
                <div className="flex items-center gap-2.5">
                  <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${selectedItem.badgeBg} ${selectedItem.badgeBorder} ${selectedItem.badgeText} border`}>
                    {selectedItem.impactMetric}
                  </span>
                  <span className="text-[11px] font-mono text-[#7A7873] uppercase tracking-wider font-semibold">
                    {selectedItem.categoryLabel}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-[#141416]">
                  {selectedItem.title}
                </h3>

                <div className="text-xs font-mono text-emerald-800 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg inline-block">
                  {selectedItem.architectureTag}
                </div>
              </div>

              {/* Modal Body: Description */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#141416] font-bold">
                  Technical Architecture &amp; Execution:
                </div>
                <p className="text-[15px] sm:text-base font-sans text-[#33312E] leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>

              {/* Modal Body: Business Benefit */}
              <div className="p-5 rounded-2xl bg-[#F5F3EF] border border-[#141416]/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>The Exact Business &amp; Revenue Benefit:</span>
                </div>
                <p className="text-[15px] sm:text-base font-sans font-medium text-[#141416] leading-relaxed">
                  {selectedItem.businessBenefit}
                </p>
              </div>

              {/* Modal Body: All Deliverables */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#141416] font-bold">
                  Included Engineering &amp; Operational Deliverables:
                </div>
                <ul className="space-y-2.5">
                  {selectedItem.deliverables.map((d, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-[14.5px] text-[#3E3C38] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Tech Stack Pills */}
              <div className="space-y-2 pt-2 border-t border-[#141416]/8">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A7873]">
                  Technologies &amp; Integrations:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.techPills.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#141416]/10 text-[11px] font-mono text-[#5A5854]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#141416]/8 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#FAF8F5] border border-[#141416]/10 text-xs font-mono font-bold text-[#5A5854] hover:text-[#141416]"
                >
                  Close Specification
                </button>
                <button
                  onClick={() => {
                    handleInquire(selectedItem.title);
                    setSelectedItem(null);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#141416] text-[#F5F3EF] text-xs font-mono font-bold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md shadow-[#141416]/15"
                >
                  <span>Discuss {selectedItem.title} on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
