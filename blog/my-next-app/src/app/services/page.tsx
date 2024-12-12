"use client"

import { useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Monitor, Smartphone, BarChart, Shield, Mic, Wifi } from 'lucide-react'
import { MapPin, Zap, Award, Settings, PieChart, Lightbulb } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Services() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  return (
    <div className="pt-20">
      <section className="container py-20">
        <motion.h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          {...fadeIn}
        >
          Our Futuristic Services
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Discover how Lumion can transform your digital presence with our cutting-edge services tailored for the Rwandan market and beyond.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
              className="group relative overflow-hidden rounded-lg bg-[#1A1A1A] p-8 hover:bg-gradient-to-br from-purple-900 to-pink-900 transition-all duration-300"
              {...fadeIn}
              transition={{ delay: 0.1 * index }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <service.icon className="h-12 w-12 mb-4 text-purple-400" />
              <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
              <p className="text-slate-400 group-hover:text-white transition-colors duration-300 mb-4">{service.description}</p>
              <ul className="text-sm text-slate-400 group-hover:text-white space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="mr-2 h-4 w-4 text-purple-400 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Dialog open={openDialog === service.title} onOpenChange={(isOpen) => setOpenDialog(isOpen ? service.title : null)}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-[#1A1A1A] text-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-purple-400">{service.title}</DialogTitle>
                    <DialogDescription className="text-slate-300">
                      {service.longDescription}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <h4 className="font-semibold text-purple-400 mb-2">Key Benefits:</h4>
                    <ul className="list-disc list-inside text-slate-300">
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-purple-400 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="bg-purple-900 text-purple-100 px-2 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-20">
        <div className="container">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl mb-12 text-center"
            {...fadeIn}
          >
            Why Choose Lumion?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div 
                key={reason.title} 
                className="bg-[#121212] p-6 rounded-lg"
                {...fadeIn}
                transition={{ delay: 0.1 * index }}
              >
                <reason.icon className="h-10 w-10 mb-4 text-purple-400" />
                <h3 className="font-serif text-xl mb-2">{reason.title}</h3>
                <p className="text-slate-400">{reason.description}</p>
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
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create innovative digital solutions that will set your business apart in the rapidly evolving Rwandan market.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6">
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
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
    features: [
      "Adaptive UI/UX based on user interactions",
      "AI-driven content personalization",
      "Automated A/B testing for optimal conversions",
    ],
    longDescription: "Our AI-Powered Web Design service leverages cutting-edge artificial intelligence to create websites that not only look stunning but also adapt and evolve based on user behavior. By analyzing user interactions in real-time, we create dynamic, personalized experiences that significantly improve engagement and conversion rates.",
    benefits: [
      "Increased user engagement through personalized experiences",
      "Higher conversion rates with AI-optimized user journeys",
      "Reduced development time and costs",
      "Continuous improvement through machine learning",
    ],
    technologies: ["TensorFlow.js", "React", "Next.js", "Python", "Google Cloud AI"]
  },
  {
    title: "Immersive Digital Marketing",
    description: "Leveraging AR and VR to create unforgettable brand experiences that captivate your audience.",
    icon: Smartphone,
    features: [
      "Virtual product demonstrations",
      "AR-enhanced print materials",
      "360° virtual brand environments",
    ],
    longDescription: "Our Immersive Digital Marketing service harnesses the power of Augmented Reality (AR) and Virtual Reality (VR) to create captivating brand experiences. We bring your products and services to life in ways that were previously impossible, allowing customers to interact with your brand in a deeply engaging and memorable manner.",
    benefits: [
      "Increased brand recall and customer engagement",
      "Enhanced product visualization and understanding",
      "Unique and shareable brand experiences",
      "Competitive edge in the digital marketplace",
    ],
    technologies: ["Unity", "ARKit", "ARCore", "WebXR", "Three.js"]
  },
  {
    title: "Data-Driven Strategy",
    description: "Utilizing big data and predictive analytics to craft hyper-targeted marketing campaigns.",
    icon: BarChart,
    features: [
      "Real-time market trend analysis",
      "Customer behavior prediction models",
      "ROI-focused campaign optimization",
    ],
    longDescription: "Our Data-Driven Strategy service employs advanced analytics and machine learning to turn vast amounts of data into actionable insights. We help you understand your market and customers at a granular level, enabling you to make informed decisions and create highly targeted, effective marketing campaigns.",
    benefits: [
      "Improved marketing ROI through targeted campaigns",
      "Better understanding of customer behavior and preferences",
      "Predictive insights for proactive decision-making",
      "Optimized resource allocation based on data-driven insights",
    ],
    technologies: ["Python", "R", "Tableau", "Apache Spark", "TensorFlow"]
  },
  {
    title: "Blockchain Brand Protection",
    description: "Implementing blockchain solutions to ensure brand authenticity and build consumer trust.",
    icon: Shield,
    features: [
      "Decentralized brand verification",
      "Transparent supply chain tracking",
      "Secure customer loyalty programs",
    ],
    longDescription: "Our Blockchain Brand Protection service utilizes distributed ledger technology to create an immutable record of your brand's products and transactions. This not only protects your brand from counterfeiting but also provides unprecedented transparency to your customers, building trust and loyalty.",
    benefits: [
      "Enhanced brand protection against counterfeiting",
      "Increased consumer trust through transparency",
      "Improved supply chain efficiency and traceability",
      "Innovative loyalty programs with cryptocurrency rewards",
    ],
    technologies: ["Ethereum", "Hyperledger", "Solidity", "Web3.js", "IPFS"]
  },
  {
    title: "Voice Search Optimization",
    description: "Optimizing your digital presence for the rising trend of voice-activated searches and commands.",
    icon: Mic,
    features: [
      "Natural language processing integration",
      "Voice-activated content strategy",
      "Smart speaker app development",
    ],
    longDescription: "Our Voice Search Optimization service prepares your digital presence for the voice-first future. We optimize your content and develop custom voice applications to ensure your brand is discoverable and accessible through voice-activated devices, capturing the growing market of voice search users.",
    benefits: [
      "Increased visibility in voice search results",
      "Enhanced user experience through voice interactions",
      "Expanded reach to smart speaker and voice assistant users",
      "Future-proofing your digital strategy",
    ],
    technologies: ["Natural Language Processing", "Google Actions", "Alexa Skills Kit", "DialogFlow", "TensorFlow"]
  },
  {
    title: "IoT Marketing Integration",
    description: "Connecting your brand with the Internet of Things for seamless, context-aware marketing.",
    icon: Wifi,
    features: [
      "Smart device campaign delivery",
      "IoT data collection and analysis",
      "Automated, context-based customer interactions",
    ],
    longDescription: "Our IoT Marketing Integration service connects your brand to the vast network of smart devices, enabling context-aware, real-time marketing. By leveraging data from IoT devices, we create highly personalized and timely marketing experiences that reach customers at the right moment with the right message.",
    benefits: [
      "Hyper-personalized marketing based on real-time data",
      "Improved customer experience through context-aware interactions",
      "New channels for customer engagement and data collection",
      "Innovative product development opportunities",
    ],
    technologies: ["MQTT", "CoAP", "Node-RED", "AWS IoT", "Azure IoT Hub"]
  },
]

const reasons = [
  {
    title: "Local Expertise",
    description: "Deep understanding of the Rwandan market and culture.",
    icon: MapPin,
  },
  {
    title: "Cutting-Edge Technology",
    description: "Access to the latest digital marketing tools and platforms.",
    icon: Zap,
  },
  {
    title: "Proven Track Record",
    description: "Successful projects with leading Rwandan brands.",
    icon: Award,
  },
  {
    title: "Tailored Solutions",
    description: "Customized strategies to meet your specific business goals.",
    icon: Settings,
  },
  {
    title: "Data-Driven Approach",
    description: "Decisions backed by robust analytics and insights.",
    icon: PieChart,
  },
  {
    title: "Continuous Innovation",
    description: "Always at the forefront of digital marketing trends.",
    icon: Lightbulb,
  },
]

