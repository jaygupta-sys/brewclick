'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  size: number;
  baseAlpha: number;
  color: string;
  seed: number;
  speed: number;
}

const SECTION_TITLES: Record<string, string> = {
  '#ecommerce': 'STAGE & STEEL ✦ FLAGSHIP E-COMMERCE',
  '#deliverables': 'ALL 17 SYSTEMS ✦ ARCHITECTURE & SLA DELIVERABLES',
  '#leadership': 'JAY GUPTA & MAYANK GUPTA ✦ FOUNDING PARTNERS',
  '#projects': 'PRODUCTION DEPLOYMENTS ✦ CLIENT WORK',
  '#capabilities': 'FULL-STACK CAPABILITIES ✦ ARCHITECTURE',
  '#engagement': 'HOW WE WORK ✦ FLEXIBLE ENGAGEMENTS',
  '#sla': 'HOW WE WORK ✦ RETAINER SLA GUARANTEE',
  '#contact': 'DIRECT FOUNDER ACCESS ✦ ARCHITECTURE INQUIRY',
};

export default function ParticleTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionLabel, setTransitionLabel] = useState('BREWCLICK DESIGN STUDIO');
  const [veilOpacity, setVeilOpacity] = useState(0);

  const isTransitioningRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const phaseRef = useRef<'idle' | 'swirl' | 'disperse'>('idle');
  const startTimeRef = useRef<number>(0);

  // Resize canvas helper
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
  }, []);

  // Initialize Particle System
  const initParticles = useCallback((w: number, h: number) => {
    const count = Math.min(1800, Math.floor((w * h) / 750));
    const particles: Particle[] = [];
    const centerX = w / 2;
    const centerY = h / 2;

    const colors = [
      '#141416', // Obsidian Charcoal
      '#141416', // Obsidian Charcoal
      '#27272A', // Dark Slate
      '#10B981', // Studio Emerald
      '#059669', // Deep Emerald
      '#F59E0B', // Radiant Gold
      '#D97706', // Warm Amber
      '#78350F', // Deep Bronze
    ];

    for (let i = 0; i < count; i++) {
      // Spawn distributed across edges and corners
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * Math.max(w, h) * 0.75 + 120;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      // Target cluster in an elegant fluid spiral around center
      const targetAngle = angle + (Math.random() - 0.5) * 1.6;
      const targetDist = Math.pow(Math.random(), 0.55) * Math.min(w, h) * 0.44;
      const targetX = centerX + Math.cos(targetAngle) * targetDist;
      const targetY = centerY + Math.sin(targetAngle) * targetDist;

      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        originX: x,
        originY: y,
        targetX,
        targetY,
        size: Math.random() < 0.25 ? Math.random() * 2.4 + 1.8 : Math.random() * 1.6 + 1.0,
        baseAlpha: Math.random() * 0.6 + 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        seed: Math.random() * 1000,
        speed: Math.random() * 0.055 + 0.045,
      });
    }

    particlesRef.current = particles;
  }, []);

  // Trigger the full particle transition sequence
  const startTransition = useCallback((targetText: string, onMidpoint?: () => void) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    setTransitionLabel(targetText);
    setIsTransitioning(true);
    setVeilOpacity(1);
    phaseRef.current = 'swirl';
    startTimeRef.current = performance.now();

    const w = window.innerWidth;
    const h = window.innerHeight;
    resizeCanvas();
    initParticles(w, h);

    // Phase 1 (0ms - 360ms): Swirl inwards into fluid vortex
    // Midpoint (380ms): Perform actual page navigation or anchor scroll
    setTimeout(() => {
      if (onMidpoint) {
        onMidpoint();
      }
      phaseRef.current = 'disperse';
    }, 380);

    // Phase 2 (380ms - 750ms): Disperse outward gracefully
    setTimeout(() => {
      setVeilOpacity(0);
    }, 620);

    // Cleanup & Finish (850ms)
    setTimeout(() => {
      setIsTransitioning(false);
      isTransitioningRef.current = false;
      phaseRef.current = 'idle';
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }, 850);
  }, [initParticles, resizeCanvas]);

  // Keep canvas sized to window
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // Particle Physics Animation Loop
  useEffect(() => {
    if (!isTransitioning) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    const centerX = w / 2;
    const centerY = h / 2;

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const elapsed = time - startTimeRef.current;
      const phase = phaseRef.current;
      const particles = particlesRef.current;

      const tSec = elapsed * 0.003;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (phase === 'swirl') {
          // Inward fluid vortex mechanics
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;

          // Tangential swirl force
          const angleToCenter = Math.atan2(p.y - centerY, p.x - centerX);
          const tangentAngle = angleToCenter + Math.PI / 2;
          const swirlSpeed = 6.5;

          // Curl noise perturbation
          const curl = Math.sin(p.seed + tSec * 5) * 3.5;

          p.vx += dx * p.speed + Math.cos(tangentAngle) * swirlSpeed + Math.cos(curl) * 1.6;
          p.vy += dy * p.speed + Math.sin(tangentAngle) * swirlSpeed + Math.sin(curl) * 1.6;

          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.88;
          p.vy *= 0.88;
        } else if (phase === 'disperse') {
          // Outward dispersion shockwave
          const angleFromCenter = Math.atan2(p.y - centerY, p.x - centerX);
          const explodeSpeed = 9.5;
          const curl = Math.sin(p.seed + tSec * 6) * 4;

          p.vx += Math.cos(angleFromCenter + curl * 0.25) * explodeSpeed;
          p.vy += Math.sin(angleFromCenter + curl * 0.25) * explodeSpeed;

          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.94;
          p.vy *= 0.94;
        }

        // Alpha calculation based on progress
        let alpha = p.baseAlpha;
        if (phase === 'swirl') {
          alpha = Math.min(p.baseAlpha, elapsed / 180);
        } else if (phase === 'disperse') {
          const disperseElapsed = Math.max(0, elapsed - 380);
          alpha = Math.max(0, p.baseAlpha * (1 - disperseElapsed / 420));
        }

        if (alpha > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.fill();
        }
      }

      ctx.restore();

      if (isTransitioningRef.current) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isTransitioning]);

  // Intercept Global Anchor Clicks & Internal Routes
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Handle in-page section jump (#ecommerce, #deliverables, #leadership, etc.)
      if (href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();

          const title = SECTION_TITLES[href] || `BREWCLICK ✦ DIRECTING TO ${href.replace('#', '').toUpperCase()}`;

          startTransition(title, () => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, '', href);
          });
          return;
        }
      }

      // Handle internal relative page route (/case-studies, /services, /blog, /)
      if (
        href.startsWith('/') &&
        !href.startsWith('//') &&
        !anchor.target &&
        !anchor.hasAttribute('download') &&
        href !== pathname
      ) {
        e.preventDefault();
        const routeLabel = `NAVIGATING ✦ ${href.toUpperCase().replace('/', '') || 'HOME'}`;

        startTransition(routeLabel, () => {
          router.push(href);
        });
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [pathname, router, startTransition]);

  // Listen for direct custom event triggers (e.g. from Header nav links)
  useEffect(() => {
    const handleCustomTransition = (e: Event) => {
      const customEvent = e as CustomEvent<{ title?: string; onMidpoint?: () => void }>;
      const { title, onMidpoint } = customEvent.detail || {};
      startTransition(title || 'BREWCLICK DESIGN STUDIO', onMidpoint);
    };

    window.addEventListener('brewclick:particle-transition', handleCustomTransition);
    return () => {
      window.removeEventListener('brewclick:particle-transition', handleCustomTransition);
    };
  }, [startTransition]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isTransitioning ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden={!isTransitioning}
    >
      {/* Atmospheric Luxury Backdrop Veil */}
      <div
        className="absolute inset-0 bg-[#F5F3EF]/80 backdrop-blur-[8px] transition-opacity duration-300"
        style={{ opacity: veilOpacity }}
      />

      {/* Liquid Particle Canvas - Always mounted and ready */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Center Luxury Monogram & Dynamic Section Indicator */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none z-20"
          >
            <div className="p-1 rounded-full bg-white/90 border border-[#141416]/12 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <div className="px-6 py-2.5 rounded-full bg-[#FAF8F5] border border-[#141416]/8 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono tracking-widest uppercase font-bold text-[#141416]">
                  {transitionLabel}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
