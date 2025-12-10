"use client"

import { motion } from "motion/react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
    {
        title: "Project Alpha",
        description: "A comprehensive dashboard for financial analytics with real-time data visualization.",
        tags: ["Next.js", "Tailwind", "D3.js"],
        link: "#",
        github: "#"
    },
    {
        title: "Neon Commerce",
        description: "Modern e-commerce platform with a focus on speed and conversion features.",
        tags: ["React", "Stripe", "Framer Motion"],
        link: "#",
        github: "#"
    },
    {
        title: "TaskFlow",
        description: "Productivity application helping teams manage workflows efficiently.",
        tags: ["Vue", "Firebase", "Pinia"],
        link: "#",
        github: "#"
    },
    {
        title: "Portfolio v1",
        description: "Previous iteration of my personal portfolio showcasing early work.",
        tags: ["HTML/CSS", "JavaScript"],
        link: "#",
        github: "#"
    }
]

export default function Work() {
    return (
        <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 space-y-4"
            >
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Selected Work</h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    A collection of projects exploring design, development, and user experience.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                    >
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4">
                                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                            <p className="text-muted-foreground">{project.description}</p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
