"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from 'lucide-react'
import { PlaceholderImage } from "@/components/ui/placeholder-image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Reviews() {
  return (
    <div className="pt-20">
      <section className="container py-20">
        <motion.h1 
          className="font-serif text-6xl mb-4"
          {...fadeIn}
        >
          Reviews
        </motion.h1>
        <motion.div 
          className="flex items-center mb-12"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <div className="text-4xl font-bold mr-4">4.9</div>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" />
            ))}
          </div>
        </motion.div>
        <div className="grid gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.name} 
              className="bg-[#1A1A1A] p-6 rounded-lg"
              {...fadeIn}
              transition={{ delay: 0.1 * index }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4">
                  <PlaceholderImage
                    width={100}
                    height={100}
                    text={review.name[0]}
                    fontSize={24}
                    bgColor="#4B5563"
                    textColor="#E5E7EB"
                    imageProps={{
                      fill: true,
                      className: "rounded-full object-cover"
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl">{review.name}</h3>
                  <p className="text-slate-400">{review.company}</p>
                </div>
              </div>
              <p className="text-slate-200 mb-4">{review.content}</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

const reviews = [
  {
    name: "Alice Mutesi",
    company: "RwandAir",
    avatar: "/placeholder.svg",
    content: "Lumion transformed our digital presence, resulting in a significant increase in online bookings. Their team's expertise and dedication to our project were outstanding.",
  },
  {
    name: "Jean-Paul Habimana",
    company: "Kigali Heights",
    avatar: "/placeholder.svg",
    content: "The brand identity and digital strategy Lumion created for us perfectly captured the essence of our luxury development. We've seen a remarkable increase in high-quality leads.",
  },
  {
    name: "Marie Uwase",
    company: "Rwanda Tourism Board",
    avatar: "/placeholder.svg",
    content: "Lumion's innovative campaign showcasing Rwanda's beauty has significantly boosted our international tourism. Their creativity and local insights were invaluable.",
  },
  {
    name: "Emmanuel Ngabo",
    company: "Tech Startup Kigali",
    avatar: "/placeholder.svg",
    content: "As a startup, we needed a strong digital presence to attract investors. Lumion delivered beyond our expectations, helping us secure funding and gain market traction.",
  },
]

