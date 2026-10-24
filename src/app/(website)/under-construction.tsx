'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hammer, Linkedin, Sparkles, Wrench } from 'lucide-react';
import Button from '@/src/components/ui/Button';

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Brewclick Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex flex-col items-center">
            <span className="font-font1 font-normal capitalize text-4xl leading-8">Brewclick</span>
            <span className="font-font1 font-semibold text-lg capitalize text-purple-600">Design studio</span>
          </Link>
        </motion.div>
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <motion.div
            className="inline-block text-purple-600"
            animate={{
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Hammer className="w-32 h-32 mx-auto" />
          </motion.div>
          
          {/* Floating sparkles */}
          <motion.div
            className="absolute top-0 left-1/4 text-purple-500"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          
          <motion.div
            className="absolute top-0 right-1/4 text-pink-500"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <Wrench className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h1
            className="text-[120px] sm:text-[180px] font-bold leading-none mb-4"
            style={{
              background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            WIP
          </motion.h1>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            We&apos;re Building Something Amazing
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our website is currently under construction. We&apos;re working hard to bring you an incredible experience. Check back soon!
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://www.linkedin.com/in/frontend-developer-mayank-gupta/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Status Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700">
            <motion.div
              className="w-2 h-2 bg-purple-600 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-sm font-medium">Currently in development</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
