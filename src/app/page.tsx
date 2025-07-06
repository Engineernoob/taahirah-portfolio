"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Calendar,
  MapPin,
  Terminal,
  Code2,
  Cpu,
  Brain,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Systems", href: "#systems" },
    { name: "Arsenal", href: "#arsenal" },
    { name: "Experience", href: "#experience" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-green-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-mono text-green-400 font-bold text-lg cursor-pointer tracking-tight"
          >
            {"<TD />"}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="font-mono text-sm text-gray-300 hover:text-green-400 transition-colors font-medium tracking-wide"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-green-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-green-500/20"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-2 font-mono text-sm text-gray-300 hover:text-green-400 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-mono font-bold tracking-tight mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              TAAHIRAH
            </h1>
            <h1 className="text-6xl md:text-8xl font-mono font-bold tracking-tight mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 bg-clip-text text-transparent">
              DENMARK
            </h1>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Terminal className="h-6 w-6 text-green-400" />
              <p className="text-xl md:text-2xl text-gray-300 font-mono font-medium">
                AI Infrastructure Engineer & Autonomy Architect
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-mono font-light"
          >
            Engineering the infrastructure behind autonomous systems
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="group bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Résumé
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-mono font-bold px-8 py-4 text-lg bg-transparent transition-all duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-green-400" />
      </motion.div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-12 text-center text-green-400 tracking-tight">
            {"// About Me"}
          </h2>

          <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8 font-mono hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center gap-2 mb-6 text-green-400">
              <Code2 className="h-5 w-5" />
              <span className="text-sm font-medium">~/about/mission.md</span>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
              I'm on a mission to build cutting-edge AI assistants, local-first tooling, and autonomous agent systems
              that push the boundaries of what's possible. My work focuses on creating infrastructure that enables
              intelligent systems to run efficiently at the edge, bringing AI capabilities directly to users without
              compromising privacy or performance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              From distributed training pipelines to real-time inference engines, I architect solutions that scale from
              prototype to production. I believe in open infrastructure, transparent AI, and building systems that
              empower developers to create the next generation of autonomous applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SystemsSection() {
  const systems = [
    {
      title: "Autonomous Fleet Orchestrator",
      description:
        "Real-time coordination system for autonomous vehicle fleets with predictive routing and maintenance scheduling.",
      technologies: ["Rust", "gRPC", "Redis", "PostgreSQL"],
      github: "#",
      demo: "#",
      status: "Production",
    },
    {
      title: "Local LLM Inference Engine",
      description:
        "High-performance local inference engine optimized for running large language models on consumer hardware.",
      technologies: ["Ollama", "CUDA", "FastAPI", "Docker"],
      github: "#",
      demo: "#",
      status: "Open Source",
    },
    {
      title: "SwiftUI Agent Framework",
      description: "Native macOS framework for building AI-powered desktop applications with local-first architecture.",
      technologies: ["SwiftUI", "Core ML", "Combine", "SQLite"],
      github: "#",
      demo: "#",
      status: "Beta",
    },
    {
      title: "CrewAI Workflow Engine",
      description: "Distributed workflow orchestration system for multi-agent AI systems with real-time collaboration.",
      technologies: ["CrewAI", "Python", "Celery", "RabbitMQ"],
      github: "#",
      demo: "#",
      status: "Active Development",
    },
    {
      title: "Electron AI Toolkit",
      description:
        "Cross-platform desktop toolkit for building AI-powered applications with native system integration.",
      technologies: ["Electron", "Node.js", "TensorFlow.js", "SQLite"],
      github: "#",
      demo: "#",
      status: "Stable",
    },
    {
      title: "Edge Computing Platform",
      description:
        "Kubernetes-native platform for deploying AI workloads at the edge with automatic scaling and optimization.",
      technologies: ["Kubernetes", "Go", "Prometheus", "NATS"],
      github: "#",
      demo: "#",
      status: "Enterprise",
    },
  ]

  return (
    <section id="systems" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-12 text-center text-green-400 tracking-tight">
            {"// Systems Built"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-gray-900/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-mono text-green-400 group-hover:text-green-300 transition-colors font-semibold">
                        {system.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="text-xs font-mono border-green-500/50 text-green-400 font-medium"
                      >
                        {system.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400 font-mono text-sm leading-relaxed font-light">
                      {system.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {system.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs font-mono bg-gray-800 text-gray-300 font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 font-mono text-xs border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black bg-transparent transition-all duration-300 hover:scale-105 font-medium"
                        >
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 font-mono text-xs border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black bg-transparent transition-all duration-300 hover:scale-105 font-medium"
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TechnicalArsenalSection() {
  const techCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 className="h-5 w-5" />,
      technologies: ["Python", "Rust", "Swift", "JavaScript", "TypeScript", "Go", "React", "SwiftUI", "Electron"],
    },
    {
      title: "AI & ML Infrastructure",
      icon: <Brain className="h-5 w-5" />,
      technologies: ["Ollama", "CrewAI", "PyTorch", "TensorFlow", "CUDA", "Core ML", "TensorFlow.js", "Hugging Face"],
    },
    {
      title: "Systems & DevOps",
      icon: <Cpu className="h-5 w-5" />,
      technologies: ["Docker", "Kubernetes", "Redis", "PostgreSQL", "gRPC", "NATS", "Prometheus", "Grafana"],
    },
    {
      title: "Development Tools",
      icon: <Terminal className="h-5 w-5" />,
      technologies: ["Node.js", "FastAPI", "Celery", "RabbitMQ", "SQLite", "Git", "Linux", "macOS"],
    },
  ]

  return (
    <section id="arsenal" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-12 text-center text-green-400 tracking-tight">
            {"// Technical Arsenal"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-900/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-green-400 font-mono font-semibold">
                      {category.icon}
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {category.technologies.map((tech) => (
                        <motion.div
                          key={tech}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                          className="bg-gray-800/50 rounded-md px-3 py-2 text-sm font-mono text-center text-gray-300 hover:text-green-400 transition-all duration-300 cursor-default border border-gray-700/50 hover:border-green-500/50 font-medium"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const experiences = [
    {
      title: "Senior AI Infrastructure Engineer",
      company: "Autonomous Systems Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      achievements: [
        "Architected distributed training infrastructure serving 100+ AI models",
        "Built real-time inference engine handling 1M+ requests/day with <50ms latency",
        "Led migration to edge computing reducing operational costs by 40%",
        "Open-sourced internal tooling adopted by 500+ developers",
      ],
    },
    {
      title: "Technical Co-Founder",
      company: "Neural Edge Labs",
      period: "2020 - 2022",
      location: "Remote",
      type: "Startup",
      achievements: [
        "Built local-first AI platform from 0 to $2M ARR",
        "Raised $5M seed round from tier-1 VCs",
        "Developed SwiftUI framework for AI-powered macOS apps",
        "Scaled engineering team from 2 to 15 engineers",
      ],
    },
    {
      title: "ML Infrastructure Intern",
      company: "OpenAI",
      period: "Summer 2020",
      location: "San Francisco, CA",
      type: "Internship",
      achievements: [
        "Optimized model serving infrastructure reducing inference costs by 30%",
        "Contributed to internal tooling for distributed training",
        "Built monitoring dashboards for production ML systems",
        "Collaborated with research team on model optimization",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Apple",
      period: "Summer 2019",
      location: "Cupertino, CA",
      type: "Internship",
      achievements: [
        "Developed Core ML optimizations for on-device inference",
        "Built internal tools using SwiftUI and Combine",
        "Contributed to privacy-preserving ML research",
        "Presented work to senior leadership team",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-12 text-center text-green-400 tracking-tight">
            {"// Experience"}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-green-500/30 hidden md:block" />
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-12 md:ml-16"
                >
                  <div className="absolute -left-20 top-6 w-4 h-4 bg-green-500 rounded-full border-4 border-black hidden md:block" />
                  <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl font-mono text-green-400 font-semibold">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-mono text-gray-300 font-medium">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-sm text-gray-400 font-mono">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                          <Badge variant="outline" className="text-xs border-green-500/50 text-green-400 font-medium">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 mt-0.5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 font-mono text-sm font-light">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-12 text-center text-green-400 tracking-tight">
            {"// Philosophy"}
          </h2>

          <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center gap-2 mb-6 text-green-400">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-mono font-medium">~/philosophy/manifesto.md</span>
            </div>

            <div className="space-y-6 font-mono text-gray-300 leading-relaxed">
              <p className="text-lg font-light">
                I believe in <span className="text-green-400 font-bold">open infrastructure</span> and transparent AI.
                The future belongs to systems that run locally, respect privacy, and empower users with direct control
                over their data and computational resources.
              </p>

              <p className="text-lg font-light">
                <span className="text-green-400 font-bold">Edge AI</span> isn't just about performance—it's about
                democratizing access to intelligent systems. When AI runs on your device, you own your intelligence. No
                cloud dependencies, no data harvesting, no vendor lock-in.
              </p>

              <p className="text-lg font-light">
                I'm building the infrastructure that makes this vision possible:{" "}
                <span className="text-green-400 font-bold">
                  autonomous systems that think locally, act globally, and remain under user control
                </span>
                . From SwiftUI frameworks that bring AI to macOS, to Rust-powered inference engines that run on consumer
                hardware.
              </p>

              <p className="text-lg font-light">
                The next generation of AI won't live in distant data centers—it will live in our pockets, on our desks,
                and in our communities. <span className="text-green-400 font-bold">Local-first is the future</span>, and
                I'm here to build it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-12 text-center text-green-400 tracking-tight">
            {"// Contact"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-mono text-green-400 font-semibold">
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-gray-800/50 border-gray-600 text-gray-300 font-mono placeholder:text-gray-500 font-medium"
                />
                <Input
                  placeholder="Your Email"
                  className="bg-gray-800/50 border-gray-600 text-gray-300 font-mono placeholder:text-gray-500 font-medium"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="bg-gray-800/50 border-gray-600 text-gray-300 font-mono placeholder:text-gray-500 font-medium"
                />
                <Button className="w-full bg-green-500 hover:bg-green-400 text-black font-mono font-bold transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-mono text-green-400 font-semibold">Direct Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black font-mono bg-transparent transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    taahirah@proton.me
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black font-mono bg-transparent transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    github.com/taahirah
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-green-500/50 text-green-400 hover:bg-green-500 hover:text-black font-mono bg-transparent transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    linkedin.com/in/taahirah
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-green-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="font-mono text-green-400 text-sm">
            <pre className="text-xs leading-relaxed font-light">
              {`    ████████╗██████╗ 
    ╚══██╔══╝██╔══██╗
       ██║   ██║  ██║
       ██║   ██║  ██║
       ██║   ██████╔╝
       ╚═╝   ╚═════╝ 
    
  Building the future,
    one system at a time.`}
            </pre>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-green-400 hover:text-green-300 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-sm text-gray-500 font-mono font-light">
            © 2024 Taahirah Denmark. Built with Next.js, deployed on the edge.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SystemsSection />
      <TechnicalArsenalSection />
      <ExperienceSection />
      <PhilosophySection />
      <ContactSection />
      <Footer />
    </div>
  )
}
