"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from 'lucide-react'
import { Lightbulb, BarChart2, Users, Brain, Link, Glasses, Wifi } from 'lucide-react'
import { PlaceholderImage } from "@/components/ui/placeholder-image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function About() {
  return (
    <div className="pt-20">
      <section className="container py-20">
        <motion.h1 
          className="font-serif text-6xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          {...fadeIn}
        >
          Pioneering the Future of Digital Marketing
        </motion.h1>
        <motion.p 
          className="text-xl text-slate-400 mb-12 max-w-3xl"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          At Lumion, we're not just adapting to the digital future – we're actively shaping it. Our team of visionaries and tech enthusiasts are committed to pushing the boundaries of what's possible in digital marketing.
        </motion.p>
        <motion.div 
          className="aspect-video relative mb-12 rounded-lg overflow-hidden"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <div className="relative w-full h-full">
            <PlaceholderImage
              width={1920}
              height={1080}
              text="Innovating for Rwanda's Digital Future"
              imageProps={{
                fill: true,
                className: "object-cover"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-serif text-white text-center">Innovating for Rwanda's Digital Future</h2>
            </div>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
            <h2 className="font-serif text-3xl mb-4 text-purple-400">Our Mission</h2>
            <p className="text-slate-300">
              To empower businesses in Rwanda and beyond with cutting-edge digital marketing strategies that drive growth, foster innovation, and create lasting impact in the digital realm.
            </p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.8 }}>
            <h2 className="font-serif text-3xl mb-4 text-pink-400">Our Vision</h2>
            <p className="text-slate-300">
              To be the catalyst for digital transformation in East Africa, known for our forward-thinking approach, technological prowess, and unwavering commitment to client success in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-20">
        <div className="container">
          <motion.h2 
            className="font-serif text-4xl mb-12 text-center"
            {...fadeIn}
          >
            Meet Our Visionaries
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={member.name} 
                className="text-center"
                {...fadeIn}
                transition={{ delay: 0.1 * index }}
              >
                <div className="aspect-square relative mb-4 rounded-full overflow-hidden border-4 border-purple-500">
                  <PlaceholderImage
                    width={400}
                    height={400}
                    text={member.name[0]}
                    fontSize={48}
                    imageProps={{
                      fill: true,
                      className: "object-cover"
                    }}
                  />
                </div>
                <h3 className="font-serif text-2xl text-purple-400">{member.name}</h3>
                <p className="text-pink-400 mb-2">{member.role}</p>
                <p className="text-slate-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <motion.h2 
          className="font-serif text-4xl mb-12 text-center"
          {...fadeIn}
        >
          Our Guiding Principles
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={value.title} 
              className="bg-gradient-to-br from-purple-900 to-pink-900 p-6 rounded-lg"
              {...fadeIn}
              transition={{ delay: 0.1 * index }}
            >
              <value.icon className="h-12 w-12 mb-4 text-purple-400" />
              <h3 className="font-serif text-2xl mb-4 text-white">{value.title}</h3>
              <p className="text-slate-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-20">
        <div className="container">
          <motion.h2 
            className="font-serif text-4xl mb-12 text-center"
            {...fadeIn}
          >
            Our Technological Edge
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.name} 
                className="flex items-center space-x-4"
                {...fadeIn}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-purple-400">{tech.name}</h3>
                  <p className="text-slate-400">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const team = [
  {
    name: "Murenzi Dan",
    role: "Founder & CEO",
    image: "/team/murenzi-dan.jpg",
    bio: "A visionary leader with 15+ years in tech, driving Rwanda's digital revolution.",
  },
  {
    name: "Ishimwe Kevin",
    role: "Chief Innovation Officer",
    image: "/team/ishimwe-kevin.jpg",
    bio: "AI and blockchain expert, shaping the future of marketing technology.",
  },
  {
    name: "Didier Junior",
    role: "Head of Creative Strategy",
    image: "/team/didier-junior.jpg",
    bio: "Award-winning creative director with a passion for immersive digital experiences.",
  },
]

const values = [
  {
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible in digital marketing.",
    icon: Lightbulb,
  },
  {
    title: "Data-Driven Excellence",
    description: "Our strategies are built on robust data analysis and predictive modeling.",
    icon: BarChart2,
  },
  {
    title: "Client-Centric Approach",
    description: "We tailor cutting-edge solutions to meet each client's unique needs and goals.",
    icon: Users,
  },
]

const technologies = [
  {
    name: "Artificial Intelligence",
    description: "Leveraging machine learning for predictive analytics and personalized marketing.",
    icon: Brain,
  },
  {
    name: "Blockchain",
    description: "Implementing decentralized solutions for enhanced security and transparency.",
    icon: Link,
  },
  {
    name: "Virtual & Augmented Reality",
    description: "Creating immersive brand experiences that captivate and engage audiences.",
    icon: Glasses,
  },
  {
    name: "Internet of Things (IoT)",
    description: "Connecting the physical and digital worlds for seamless marketing integration.",
    icon: Wifi,
  },
]

