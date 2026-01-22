import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-mountains.jpg";

export function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Misty mountains at golden hour sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <span className="inline-block font-body text-sm md:text-base tracking-widest uppercase text-primary-foreground/80">
            Welcome to Wanderlust Chronicles
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight">
            Exploring the world,
            <br />
            <span className="italic font-normal">one journey at a time</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto">
            Discover authentic travel stories, hidden gems, and breathtaking
            destinations from across India and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" variant="hero">
              <Link to="/blog">Read the Blog</Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-primary-foreground/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
