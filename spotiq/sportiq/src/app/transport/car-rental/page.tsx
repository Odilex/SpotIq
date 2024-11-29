import { ServiceHero } from '@/components/ui/service-hero'
import { CarCard } from './components/car-card'

interface Car {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  seats: number;
  transmission: 'Auto' | 'Manual';
  features: string[];
}

const cars: Car[] = [
  {
    id: '1',
    name: 'Toyota Camry',
    category: 'Sedan',
    price: 50,
    image: '/images/cars/camry.jpg',
    seats: 5,
    transmission: 'Auto',
    features: ['Bluetooth', 'Backup Camera', 'Cruise Control']
  },
  // Add more cars...
]

export default function CarRentalPage() {
  return (
    <main>
      <ServiceHero 
        title="Car Rental Services"
        description="Choose from our wide selection of vehicles for your perfect journey"
        imagePath="/images/hero/car-rental.jpg"
      />
      
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-dark">Available Vehicles</h2>
            <p className="mt-2 text-lg text-dark/70">
              Browse our selection of quality vehicles for any occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-light">
            <div>
              <h3 className="text-xl font-semibold mb-4">Rental Process</h3>
              <ul className="space-y-2">
                <li>1. Choose your vehicle</li>
                <li>2. Select rental period</li>
                <li>3. Complete booking</li>
                <li>4. Pick up your car</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="space-y-2">
                <li>Valid driver's license</li>
                <li>Credit card</li>
                <li>Insurance coverage</li>
                <li>Age 21 or older</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
              <ul className="space-y-2">
                <li>GPS Navigation</li>
                <li>Child seats</li>
                <li>Additional driver</li>
                <li>24/7 roadside assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
