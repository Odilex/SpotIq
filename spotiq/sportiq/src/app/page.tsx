'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Image } from '@/components/ui/image'
import { Button } from '@/components/ui/button'
import { useAnimations } from '@/hooks/useAnimations'
import { MapPin, Star, Quote, Mail, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Map from '@/components/map'
import { LoadingCard, LoadingDots } from '@/components/ui/loading-states'

// Sample data (you can move this to a separate file later)
const destinations = [
  {
    id: 1,
    name: 'Volcanoes National Park',
    description: 'Home to mountain gorillas and golden monkeys',
    image: '/images/volcanoes.jpg',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Lake Kivu',
    description: 'Beautiful freshwater lake with stunning views',
    image: '/images/lake-kivu.jpg',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Nyungwe Forest',
    description: 'Pristine rainforest with diverse wildlife',
    image: '/images/nyungwe.jpg',
    rating: 4.8,
  },
]

const activities = [
  {
    id: 1,
    name: 'Gorilla Trekking',
    description: 'Trek through the forest to meet mountain gorillas',
    image: '/images/gorilla-trekking.jpg',
    duration: '1 day',
  },
  {
    id: 2,
    name: 'Kayaking',
    description: 'Explore Lake Kivu by kayak',
    image: '/images/kayaking.jpg',
    duration: '3 hours',
  },
  {
    id: 3,
    name: 'Cultural Tours',
    description: 'Experience traditional Rwandan culture',
    image: '/images/cultural-tour.jpg',
    duration: '4 hours',
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    image: '/images/testimonials/sarah.jpg',
    quote: 'The gorilla trekking experience was absolutely incredible. SportIQ made everything so easy!',
    rating: 5,
  },
  // ... add more testimonials
]

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/1.jpg',
    title: 'Mountain Gorillas',
    category: 'Wildlife',
  },
  // ... add more gallery images
]

export default function Home() {
  const { fadeInUp, staggerContainer } = useAnimations()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setEmail('')
    // Add success notification here
  }

  if (isLoading) {
    return (
      <div className="min-h-screen p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Rwanda landscape"
            width={1920}
            height={1080}
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-light max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Discover Rwanda's Beauty
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-light/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience the heart of Africa through unique adventures and cultural experiences
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg">
              Explore Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Destinations */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-dark"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Featured Destinations
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Discover Rwanda's most breathtaking locations and immerse yourself in natural beauty
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-slate/10 rounded-lg overflow-hidden group"
            >
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-light">{destination.name}</h3>
                  <span className="text-yellow-400">★ {destination.rating}</span>
                </div>
                <p className="text-light/70 mb-4">{destination.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  isLoading={isLoading}
                  loadingText="Loading details..."
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Popular Activities */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark to-slate/20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Popular Activities
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Experience the best adventures Rwanda has to offer
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-light/5 backdrop-blur-lg rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm text-light">{activity.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-light mb-2">{activity.name}</h3>
                <p className="text-light/70 mb-4">{activity.description}</p>
                <Button size="sm" className="w-full">
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate/10 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-light/70 mb-8">
            Join us for an unforgettable experience in the heart of Africa
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Plan Your Trip
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-dark"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Real experiences from real adventurers
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-slate/10 rounded-lg p-8"
              >
                <Quote className="text-light/20 w-12 h-12 mb-4" />
                <p className="text-light text-xl mb-6">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-light font-bold">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-light/70">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[activeTestimonial].rating
                            ? 'text-yellow-400'
                            : 'text-light/20'
                        }`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-light' : 'bg-light/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark to-slate/20"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Capture the Moment
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Beautiful moments from our travelers' journeys
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, zIndex: 1 }}
              className="relative group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={400}
                height={400}
                className="rounded-lg object-cover aspect-square"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-dark/60 rounded-lg flex items-center justify-center"
              >
                <div className="text-center">
                  <h3 className="text-light font-bold">{image.title}</h3>
                  <p className="text-light/70">{image.category}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-12 h-12 text-light/20 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Stay Updated
          </h2>
          <p className="text-light/70 mb-8">
            Subscribe to our newsletter for travel tips and exclusive offers
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2 rounded-full bg-dark/50 text-light border border-light/20 
                focus:outline-none focus:border-light disabled:opacity-50"
            />
            <Button 
              type="submit" 
              isLoading={isSubmitting}
              loadingText="Subscribing..."
            >
              Subscribe
            </Button>
          </form>
        </div>
      </motion.section>

      {/* Interactive Map Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-dark"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Explore Rwanda
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Discover our featured destinations across the country
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <Map destinations={destinations} />
        </div>
      </motion.section>
    </div>
  )
}