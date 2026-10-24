import HalftoneWordmarkFooter from '@/src/components/ui/halftone-wordmark-footer';

export default function Footer() {
  return (
    <HalftoneWordmarkFooter
      wordmark="brewclick"
      label="Brewclick Design Studio"
      meta="©2026 · Founders: Jay Gupta & Mayank Gupta · Global Remote"
      preset="night"
      columns={[
        {
          title: "Live Production",
          links: [
            { label: "Stage & Steel", href: "https://stageandsteel.in" },
            { label: "Bagecha Rewards", href: "https://loyalty.bagechabyadis.in" },
            { label: "Aish Mehan Coaching", href: "#projects" },
          ],
        },
        {
          title: "Architecture & Systems",
          links: [
            { label: "Bespoke E-Commerce", href: "#ecommerce" },
            { label: "All 17 Deliverables", href: "#deliverables" },
            { label: "Continuous Retainer SLA", href: "#engagement" },
            { label: "Capabilities Bento", href: "#capabilities" },
          ],
        },
        {
          title: "Direct Founder Access",
          links: [
            { label: "Jay Gupta (Cal.com)", href: "https://cal.com/brewclick/jay-gupta" },
            { label: "Mayank Gupta (Cal.com)", href: "https://cal.com/brewclick/mayank-gupta" },
            { label: "WhatsApp: +91 8872173717", href: "https://wa.me/918872173717" },
            { label: "Direct Call: +91 8872173717", href: "tel:+918872173717" },
          ],
        },
      ]}
      height="580px"
      dotGap={6}
      radius={90}
      crop={0.16}
      grain={0.4}
      interactive={true}
    />
  );
}