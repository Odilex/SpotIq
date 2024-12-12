import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Work() {
  return (
    <div className="pt-20">
      <section className="container py-20">
        <motion.h1 
          className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          {...fadeIn}
        >
          Our Work
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Explore our portfolio of successful projects and digital transformations across various industries in Rwanda.
        </motion.p>
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title} 
              className="grid md:grid-cols-2 gap-8 items-center"
              {...fadeIn}
              transition={{ delay: 0.1 * index }}
            >
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4 text-purple-400">{project.title}</h2>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <ul className="list-disc list-inside text-slate-400 space-y-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/work/${project.slug}`} className="inline-flex items-center mt-6 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  View Project Details <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
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
  },
]

