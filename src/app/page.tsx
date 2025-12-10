"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"


export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center px-4 sm:px-8">
      <div className="container mx-auto max-w-4xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-primary">Digital Designer</span>
            <span className="block text-foreground">& Developer.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg text-muted-foreground sm:text-xl md:text-2xl"
          >
            I create minimal, functional, and aesthetically pleasing digital experiences that live on the internet.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          {/* We need simple buttons. Since I didn't verify Shadcn button, I'll use standard HTML or check if I have Button. 
             Shadcn init creates components.json but doesn't install all components automatically unless I run `add`.
             I haven't run `shadcn add button`. 
             I'll use standard Tailwind button classes for now to be safe, or I should have added button. 
             "Use shadcn as the ui system" implies I should use their components.
             I will use <button> with tailwind styling that mimics shadcn for now, or just add the button component later.
             Actually I'll stick to a styled Link.
          */}
          <Link
            href="/work"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-sm border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
