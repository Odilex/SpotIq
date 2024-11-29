import Image from 'next/image'
import { Users, Gauge, Car } from 'lucide-react'

interface CarCardProps {
  car: {
    name: string;
    category: string;
    price: number;
    image: string;
    seats: number;
    transmission: string;
    features: string[];
  }
}

export const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-dark">{car.name}</h3>
            <p className="text-dark/70">{car.category}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-dark">${car.price}</p>
            <p className="text-sm text-dark/70">per day</p>
          </div>
        </div>

        <div className="flex justify-between mb-4 text-dark/80">
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center">
            <Gauge className="w-5 h-5 mr-2" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {car.features.map((feature, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-dark/5 text-dark/70 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <button className="w-full bg-dark text-light py-2 rounded-md hover:bg-dark/90 
          transition-colors duration-200">
          Book Now
        </button>
      </div>
    </div>
  )
} 