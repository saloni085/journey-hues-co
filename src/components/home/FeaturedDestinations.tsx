import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import beachImage from "@/assets/destination-beach.jpg";
import mountainsImage from "@/assets/destination-mountains.jpg";
import heritageImage from "@/assets/destination-heritage.jpg";
import natureImage from "@/assets/destination-nature.jpg";

const destinations = [
  {
    id: 1,
    name: "Beaches",
    description: "Crystal waters & golden sands",
    image: beachImage,
    slug: "beaches",
  },
  {
    id: 2,
    name: "Mountains",
    description: "Majestic peaks & serene valleys",
    image: mountainsImage,
    slug: "mountains",
  },
  {
    id: 3,
    name: "Heritage",
    description: "Ancient temples & royal palaces",
    image: heritageImage,
    slug: "heritage",
  },
  {
    id: 4,
    name: "Nature",
    description: "Lush forests & rolling hills",
    image: natureImage,
    slug: "nature",
  },
];

export function FeaturedDestinations() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-body text-sm tracking-widest uppercase text-primary">
            Explore by Type
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2">
            Featured Destinations
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            From snow-capped mountains to pristine beaches, discover your next
            adventure through our curated destination guides.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/destinations?type=${destination.slug}`}
                className="group block relative h-80 md:h-96 rounded-lg overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-semibold text-primary-foreground">
                    {destination.name}
                  </h3>
                  <p className="font-body text-sm text-primary-foreground/80 mt-1">
                    {destination.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-primary-foreground/70 group-hover:text-primary-foreground transition-colors">
                    <span className="font-body text-sm">Explore</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
