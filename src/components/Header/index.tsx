'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'E-Commerce', href: '#ecommerce' },
    { label: 'Deliverables', href: '#deliverables' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Work', href: '#projects' },
    { label: 'Architecture', href: '#capabilities' },
    { label: 'Engagements', href: '#engagement' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      const targetElement = document.querySelector(href);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('brewclick:particle-transition', {
            detail: {
              title: `BREWCLICK ✦ ${label.toUpperCase()}`,
              onMidpoint: () => {
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                  history.pushState(null, '', href);
                }
              },
            },
          })
        );
      }
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center">
      {/* Sleek Luxury Black Glassmorphism Floating Capsule */}
      <nav
        style={{
          backgroundColor: 'rgba(12, 12, 16, 0.94)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderColor: 'rgba(255, 255, 255, 0.18)',
        }}
        className="black-glass-capsule pointer-events-auto w-full max-w-6xl px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] flex items-center justify-between gap-3 transition-all duration-300"
      >
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center p-0.5 shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs">
            <Image
              src="/Brewclick-design-studio.png"
              alt="Brewclick Design Studio"
              width={30}
              height={30}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm tracking-tight text-white drop-shadow-xs">
              Brewclick
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[10px] font-mono tracking-wider text-white/60 uppercase hidden sm:inline">
              Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.label)}
              className="text-xs font-mono uppercase tracking-wider text-[#D5D4DC] hover:text-white hover:bg-white/15 px-3.5 py-1.5 rounded-full transition-all whitespace-nowrap font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:inline-flex items-center shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
              className="group pl-4 pr-1.5 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-[#F2EFE9] transition-all active:scale-[0.98] inline-flex items-center gap-2 whitespace-nowrap shrink-0 shadow-lg shadow-black/40 hover:scale-[1.02]"
            >
              <span className="whitespace-nowrap">Discuss Project</span>
              <span className="w-6 h-6 rounded-full bg-black/10 text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors shrink-0"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: 'rgba(12, 12, 16, 0.97)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              borderColor: 'rgba(255, 255, 255, 0.18)',
            }}
            className="black-glass-dropdown pointer-events-auto absolute top-16 left-3 right-3 p-5 rounded-3xl border shadow-[0_25px_60px_rgba(0,0,0,0.7)] space-y-4 max-w-md mx-auto text-white"
          >
            <div className="flex flex-col gap-1 font-mono text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.label)}
                  className="text-[#D5D4DC] hover:text-white py-2.5 px-3.5 rounded-xl hover:bg-white/10 font-medium flex items-center justify-between transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2.5 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact', 'Contact')}
                className="w-full py-3 rounded-full bg-white text-black font-bold text-center text-xs shadow-md"
              >
                Discuss Project
              </a>
              <a
                href="https://wa.me/918872173717"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-white/10 border border-white/15 text-white font-mono text-center text-[11px]"
              >
                Direct WhatsApp: +91 8872173717
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}