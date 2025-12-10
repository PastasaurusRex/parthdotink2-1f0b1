"use client"

import { motion } from "motion/react"

export default function About() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About Me</h1>
                    <div className="prose prose-lg text-muted-foreground prose-headings:text-foreground prose-strong:text-foreground">
                        <p>
                            Hi, I&apos;m Parth. I&apos;m a digital designer and developer based in the internet&apos;s ether.
                            I have a passion for creating clean, functional, and minimal interfaces that prioritize content and usability.
                        </p>
                        <p>
                            My journey began with a curiosity for how things work on the web. Over the years, I&apos;ve honed my skills
                            in both design and engineering, allowing me to bridge the gap between aesthetics and functionality.
                        </p>
                        <p>
                            I believe in the power of simplicity. Good design shouldn&apos;t be noticed; it should just work.
                            Whether I&apos;m writing code or moving pixels, my goal is always the same: to create something that feels right.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Skills & Tools</h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Figma", "Git"].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                                className="flex items-center justify-center rounded-md border border-border bg-card p-4 text-center font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
