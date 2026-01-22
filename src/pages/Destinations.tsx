import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Sun, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import beachImage from "@/assets/destination-beach.jpg";
import mountainsImage from "@/assets/destination-mountains.jpg";
import heritageImage from "@/assets/destination-heritage.jpg";
import natureImage from "@/assets/destination-nature.jpg";

const destinations = [
  {
    id: 1,
    name: "Manali, Himachal Pradesh",
    type: "Mountains",
    description:
      "Snow-capped peaks, adventure sports, and cozy cafes in this Himalayan paradise.",
    image: mountainsImage,
    bestTime: "Mar - Jun, Sep - Nov",
    highlights: ["Rohtang Pass", "Old Manali", "Solang Valley"],
    slug: "manali",
  },
  {
    id: 2,
    name: "Goa",
    type: "Beaches",
    description:
      "Golden beaches, Portuguese heritage, and vibrant nightlife on India's western coast.",
    image: beachImage,
    bestTime: "Nov - Mar",
    highlights: ["Palolem Beach", "Old Goa", "Dudhsagar Falls"],
    slug: "goa",
  },
  {
    id: 3,
    name: "Hampi, Karnataka",
    type: "Heritage",
    description:
      "Ancient ruins, boulder-strewn landscapes, and the glory of the Vijayanagara Empire.",
    image: heritageImage,
    bestTime: "Oct - Feb",
    highlights: ["Virupaksha Temple", "Vittala Temple", "Matanga Hill"],
    slug: "hampi",
  },
  {
    id: 4,
    name: "Munnar, Kerala",
    type: "Nature",
    description:
      "Rolling tea plantations, misty mountains, and the charm of Kerala's hill country.",
    image: natureImage,
    bestTime: "Sep - May",
    highlights: ["Tea Gardens", "Eravikulam Park", "Top Station"],
    slug: "munnar",
  },
  {
    id: 5,
    name: "Andaman Islands",
    type: "Beaches",
    description:
      "Crystal-clear waters, pristine beaches, and incredible marine life in remote paradise.",
    image: beachImage,
    bestTime: "Oct - May",
    highlights: ["Havelock Island", "Radhanagar Beach", "Scuba Diving"],
    slug: "andaman",
  },
  {
    id: 6,
    name: "Jaisalmer, Rajasthan",
    type: "Heritage",
    description:
      "The Golden City rising from the Thar Desert with magnificent forts and palaces.",
    image: heritageImage,
    bestTime: "Oct - Mar",
    highlights: ["Jaisalmer Fort", "Sam Sand Dunes", "Havelis"],
    slug: "jaisalmer",
  },
];

const Destinations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-body text-sm tracking-widest uppercase text-primary">
              Where to Go
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4">
              Destinations
            </h1>
            <p className="font-body text-muted-foreground mt-4 text-lg">
              Curated guides to India's most beautiful places—with practical
              tips, itineraries, and insider recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {destinations.map((destination, index) => (
              <motion.article
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/destinations/${destination.slug}`}
                  className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`relative aspect-[16/10] rounded-lg overflow-hidden ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {destination.type}
                    </Badge>
                  </div>
                  <div
                    className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {destination.name}
                    </h2>
                    <p className="font-body text-muted-foreground text-lg">
                      {destination.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-body">
                          Best time: {destination.bestTime}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="secondary"
                          className="font-body"
                        >
                          <MapPin className="h-3 w-3 mr-1" />
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors pt-2">
                      <span className="font-body font-medium">
                        View full guide
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
