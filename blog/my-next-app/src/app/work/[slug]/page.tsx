"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const projects = [
  {
    title: "RwandAir Digital Transformation",
    description: "A complete overhaul of RwandAir's digital presence, enhancing user experience and boosting online bookings.",
    image: "/images/rwandair-project.jpg",
    slug: "rwandair-digital-transformation",
    achievements: [
      "200% increase in online bookings",
      "Improved customer satisfaction scores",
      "Streamlined check-in process with AI-powered chatbot",
    ],
    fullDescription: "Our team worked closely with RwandAir to revolutionize their digital ecosystem. We implemented an AI-powered booking system that personalizes the user experience, making it easier and more intuitive for customers to book flights. We also integrated IoT technology for real-time baggage tracking, significantly reducing lost luggage incidents and improving customer satisfaction.",
    technologies: ["AI", "Machine Learning", "IoT", "React", "Node.js", "MongoDB"],
    testimonial: {
      quote: "Lumion's digital transformation has revolutionized our operations and significantly improved our customer experience. Their innovative solutions have set a new standard in the airline industry.",
      author: "John Doe",
      position: "CEO, RwandAir"
    }
  },
  {
    title: "Kigali Smart City Initiative",
    description: "Developing an interconnected digital platform to enhance urban living experiences in Kigali.",
    image: "/images/kigali-smart-city.jpg",
    slug: "kigali-smart-city",
    achievements: [
      "50% increase in citizen engagement",
      "Real-time traffic management reducing congestion by 30%",
      "IoT-powered waste management system improving efficiency by 40%",
    ],
    fullDescription: "The Kigali Smart City Initiative is a groundbreaking project that leverages cutting-edge technology to improve urban living. We developed a centralized platform that integrates various city services, including traffic management, waste collection, and public transportation. The platform uses real-time data and AI to optimize city operations, resulting in significant improvements in efficiency and quality of life for Kigali's residents.",
    technologies: ["IoT", "AI", "Big Data Analytics", "React Native", "Python", "AWS"],
    testimonial: {
      quote: "Lumion's smart city solutions have transformed Kigali into a model for urban innovation in Africa. Their expertise in IoT and AI has helped us create a more efficient, sustainable, and livable city.",
      author: "Jane Smith",
      position: "Director of Urban Planning, City of Kigali"
    }
  },
  {
    title: "Rwanda Tourism Board VR Experience",
    description: "Creating an immersive virtual reality tour of Rwanda's top attractions to boost international tourism.",
    image: "/images/rwanda-tourism-vr.jpg",
    slug: "rwanda-tourism-vr",
    achievements: [
      "30% increase in tourism bookings",
      "Viral social media content with over 5 million views",
      "Featured in international travel magazines and won 'Best Digital Tourism Campaign' award",
    ],
    fullDescription: "We partnered with the Rwanda Tourism Board to create a groundbreaking virtual reality experience that showcases the country's breathtaking landscapes and unique cultural experiences. Using state-of-the-art VR technology, we developed an immersive tour that allows potential visitors to explore Rwanda's national parks, encounter mountain gorillas, and experience local culture from anywhere in the world. This innovative approach to destination marketing has significantly boosted interest in Rwanda as a tourist destination.",
    technologies: ["Virtual Reality", "360° Video", "WebGL", "Three.js", "React", "WebVR"],
    testimonial: {
      quote: "Lumion's VR experience has revolutionized how we promote Rwanda to the world. It's not just a marketing tool; it's a gateway that invites people to fall in love with our country before they even set foot here.",
      author: "Alice Uwase",
      position: "Marketing Director, Rwanda Tourism Board"
    }
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    return notFound()
  }

  const currentIndex = projects.findIndex(p => p.slug === params.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="pt-20">
      <section className="container py-20">
        <motion.h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          {...fadeIn}
        >
          {project.title}
        </motion.h1>
        <motion.div 
          className="aspect-video relative rounded-lg overflow-hidden mb-12"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          {...fadeIn}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h2 className="font-serif text-2xl mb-4 text-purple-400">Project Overview</h2>
            <p className="text-slate-300 mb-6">{project.fullDescription}</p>
            <h3 className="font-serif text-xl mb-2 text-purple-400">Key Achievements</h3>
            <ul className="list-disc list-inside text-slate-400 space-y-2 mb-6">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-4 text-purple-400">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-purple-900 text-purple-100 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="font-serif text-xl mb-2 text-purple-400">Client Testimonial</h3>
            <blockquote className="border-l-4 border-purple-400 pl-4 italic text-slate-300">
              "{project.testimonial.quote}"
              <footer className="mt-2 text-slate-400">
                - {project.testimonial.author}, {project.testimonial.position}
              </footer>
            </blockquote>
          </div>
        </motion.div>
        <motion.div 
          className="mt-12 flex justify-between"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <div className="flex-1">
            {prevProject ? (
              <Link href={`/work/${prevProject.slug}`} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Project
              </Link>
            ) : (
              <Link href="/work" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Link>
            )}
          </div>
          
          <div className="flex-1 text-center">
            <Link href="/work" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
              All Projects
            </Link>
          </div>
          
          <div className="flex-1 text-right">
            {nextProject ? (
              <Link href={`/work/${nextProject.slug}`} className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
                Next Project
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            ) : (
              <Link href="/contact" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300">
                Start Your Project
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

