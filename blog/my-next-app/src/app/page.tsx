"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight, Monitor, Smartphone, BarChart, Shield, Mic, Wifi } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  return (
    <div>
      <section className="container py-12 md:py-20">
        <motion.h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          {...fadeIn}
        >
          Shaping the Future of Digital Marketing in Rwanda
        </motion.h1>
        <motion.p 
          className="mt-6 md:mt-8 text-lg md:text-xl text-slate-400 max-w-2xl"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Lumion is at the forefront of digital innovation, delivering cutting-edge marketing solutions that propel Rwandan businesses into the global spotlight.
        </motion.p>
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <Link href="/services">
            <Button className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-base md:text-lg px-6 md:px-8 py-3 md:py-6">
              Explore our services
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <section className="container py-12 md:py-20">
        <motion.h2 
          className="font-serif text-3xl md:text-4xl mb-8 md:mb-12 text-center"
          {...fadeIn}
        >
          Our Futuristic Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              className="group relative overflow-hidden rounded-lg bg-[#1A1A1A] p-6 md:p-8 hover:bg-gradient-to-br from-purple-900 to-pink-900 transition-all duration-300"
              {...fadeIn}
              transition={{ delay: 0.1 * index }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <service.icon className="h-12 w-12 mb-4 text-purple-400" />
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-slate-400 group-hover:text-white transition-colors duration-300">{service.description}</p>
              <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <ChevronRight className="absolute bottom-4 right-4 h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div 
            className="flex-1"
            {...fadeIn}
          >
            <h2 className="font-serif text-4xl mb-6">Pioneering Digital Excellence in Rwanda</h2>
            <p className="text-slate-400 mb-6">
              Founded with a vision to revolutionize the digital landscape in Rwanda, Lumion combines global expertise with deep local insights to deliver unparalleled results for our clients.
            </p>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-purple-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index) }}
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="flex-1"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-full aspect-[3/2]">
              <Image
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='100%25' height='100%25' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23666'%3ETeam Working Image%3C/text%3E%3C/svg%3E"
                alt="Lumion team at work"
                fill
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-20">
        <div className="container">
          <motion.h2 
            className="font-serif text-4xl mb-12 text-center"
            {...fadeIn}
          >
            Featured Projects
          </motion.h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title} 
                className="group relative overflow-hidden rounded-lg"
                {...fadeIn}
                transition={{ delay: 0.1 * index }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='100%25' height='100%25' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='48' fill='%23666'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl mb-2 text-white">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <Link href={`/work/${project.slug}`} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    View Project <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <motion.div 
          className="text-center"
          {...fadeIn}
        >
          <h2 className="font-serif text-4xl mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-slate-400 mb-8">
            Let's create something extraordinary together and propel your business into the future.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6">
              Start Your Digital Journey
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "AI-Powered Web Design",
    description: "Creating stunning, responsive websites that adapt to user behavior using cutting-edge AI technologies.",
    icon: Monitor,
  },
  {
    title: "Immersive Digital Marketing",
    description: "Leveraging AR and VR to create unforgettable brand experiences that captivate your audience.",
    icon: Smartphone,
  },
  {
    title: "Data-Driven Strategy",
    description: "Utilizing big data and predictive analytics to craft hyper-targeted marketing campaigns.",
    icon: BarChart,
  },
  {
    title: "Blockchain Brand Protection",
    description: "Implementing blockchain solutions to ensure brand authenticity and build consumer trust.",
    icon: Shield,
  },
  {
    title: "Voice Search Optimization",
    description: "Optimizing your digital presence for the rising trend of voice-activated searches and commands.",
    icon: Mic,
  },
  {
    title: "IoT Marketing Integration",
    description: "Connecting your brand with the Internet of Things for seamless, context-aware marketing.",
    icon: Wifi,
  },
]

const achievements = [
  "Pioneered AI-driven marketing strategies in East Africa",
  "Increased client ROI by an average of 300% through data-driven campaigns",
  "Launched Rwanda's first VR-based product showcase platform",
  "Recognized as 'Most Innovative Digital Agency' by Africa Tech Awards 2023",
]

const projects = [
  {
    title: "RwandAir Digital Transformation",
    description: "A complete overhaul of RwandAir's digital ecosystem, featuring AI-powered booking and IoT baggage tracking.",
    image: "/images/rwandair-project.jpg",
    slug: "rwandair-digital-transformation",
  },
  {
    title: "Kigali Smart City Initiative",
    description: "Developing an interconnected digital platform to enhance urban living experiences in Kigali.",
    image: "/images/kigali-smart-city.jpg",
    slug: "kigali-smart-city",
  },
  {
    title: "Rwanda Tourism Board VR Experience",
    description: "Creating an immersive virtual reality tour of Rwanda's top attractions to boost international tourism.",
    image: "/images/rwanda-tourism-vr.jpg",
    slug: "rwanda-tourism-vr",
  },
]

