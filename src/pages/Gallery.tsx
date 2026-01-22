import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { X } from "lucide-react";
import beachImage from "@/assets/destination-beach.jpg";
import mountainsImage from "@/assets/destination-mountains.jpg";
import heritageImage from "@/assets/destination-heritage.jpg";
import natureImage from "@/assets/destination-nature.jpg";
import heroImage from "@/assets/hero-mountains.jpg";
import authorImage from "@/assets/author-portrait.jpg";

const images = [
  {
    id: 1,
    src: heroImage,
    alt: "Misty mountain sunrise",
    category: "Mountains",
  },
  {
    id: 2,
    src: beachImage,
    alt: "Tropical beach paradise",
    category: "Beaches",
  },
  {
    id: 3,
    src: mountainsImage,
    alt: "Snow-capped Himalayan peaks",
    category: "Mountains",
  },
  {
    id: 4,
    src: heritageImage,
    alt: "Ancient temple architecture",
    category: "Heritage",
  },
  {
    id: 5,
    src: natureImage,
    alt: "Lush green tea plantations",
    category: "Nature",
  },
  {
    id: 6,
    src: authorImage,
    alt: "Solo traveler portrait",
    category: "Portraits",
  },
  {
    id: 7,
    src: beachImage,
    alt: "Sunset at the beach",
    category: "Beaches",
  },
  {
    id: 8,
    src: mountainsImage,
    alt: "Mountain trails",
    category: "Mountains",
  },
  {
    id: 9,
    src: natureImage,
    alt: "Misty hills",
    category: "Nature",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

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
              Visual Stories
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4">
              Gallery
            </h1>
            <p className="font-body text-muted-foreground mt-4 text-lg">
              A collection of moments captured during my journeys—each image
              tells a story of wonder, adventure, and discovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group cursor-pointer ${
                  index % 5 === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-body text-sm text-primary-foreground">
                      {image.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-center font-body text-primary-foreground/80 mt-4">
                {selectedImage.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
