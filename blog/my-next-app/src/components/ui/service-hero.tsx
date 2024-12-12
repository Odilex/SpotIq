interface ServiceHeroProps {
  title: string;
  description: string;
  imagePath: string;
}

export const ServiceHero = ({ title, description, imagePath }: ServiceHeroProps) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
