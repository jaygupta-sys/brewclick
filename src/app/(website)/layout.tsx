import type { Metadata } from 'next';
import { plusJakarta, spaceGrotesk } from '@/src/util/fonts';
import '../globals.css';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import ParticleTransition from '@/src/components/ui/particle-transition';

export const metadata: Metadata = {
  title: 'Brewclick Design Studio — Bespoke Web Architecture & E-Commerce Engineering',
  description: 'Hand-crafted digital storefronts, custom checkout architecture, and bespoke full-stack web applications by Brewclick Design Studio. 100% custom code. Zero templates.',
  keywords: [
    'Brewclick',
    'Brewclick Design Studio',
    'Custom E-Commerce Developer',
    'Full-Stack Web Architect',
    'Stage & Steel',
    'Bagecha Rewards',
    'Aish Mehan Coaching',
    'Bespoke Web Development',
    'Next.js Engineer',
  ],
  authors: [{ name: 'Brewclick Design Studio' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.remove('dark');
                localStorage.removeItem('brewclick_theme');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} font-sans bg-[#F5F3EF] text-[#141416] min-h-screen selection:bg-[#141416]/15 selection:text-[#141416] antialiased overflow-x-hidden`}>
        <ParticleTransition />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
