import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Heart, Camera, Compass } from "lucide-react";
import authorImage from "@/assets/author-portrait.jpg";
import heroMountains from "@/assets/hero-mountains.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={heroMountains}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="font-body text-sm tracking-widest uppercase text-primary">
              About Me
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 leading-tight">
              The Story Behind the{" "}
              <span className="italic font-normal">Journey</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden card-shadow">
                <img
                  src={authorImage}
                  alt="Maya - Travel Blogger"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Hello, I'm Maya
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    I still remember my first solo trip—a nervous train journey to
                    the mountains of Himachal Pradesh at 22. That trip changed
                    everything. The misty valleys, the warmth of strangers, the
                    silence broken only by birdsong... I knew then that travel
                    would become my greatest teacher.
                  </p>
                  <p>
                    Born and raised in a small town, I grew up reading travel
                    magazines and dreaming of faraway places. Today, after
                    exploring over 50 destinations across India and 12 countries,
                    I've learned that the most profound journeys often happen
                    within ourselves.
                  </p>
                  <p>
                    I believe in slow travel—taking the time to truly experience a
                    place. Whether it's sipping chai with a local family in
                    Rajasthan, watching the sunrise over the Himalayas, or simply
                    getting lost in the bylanes of an ancient city, I seek moments
                    that transform.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Authentic Experiences",
                    description: "Real stories from real journeys",
                  },
                  {
                    icon: Compass,
                    title: "Slow Travel",
                    description: "Quality over quantity, always",
                  },
                  {
                    icon: Camera,
                    title: "Visual Stories",
                    description: "Capturing moments that matter",
                  },
                  {
                    icon: MapPin,
                    title: "Hidden Gems",
                    description: "Beyond the tourist trails",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary/50 rounded-lg space-y-2"
                  >
                    <value.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Philosophy */}
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="font-display text-xl italic text-foreground">
                  "Travel is not about the miles covered, but the moments
                  collected. Every journey holds a story waiting to be told."
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/blog">Read My Stories</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
