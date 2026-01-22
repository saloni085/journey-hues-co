import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import authorImage from "@/assets/author-portrait.jpg";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden card-shadow">
              <img
                src={authorImage}
                alt="Travel blogger portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="font-body text-sm tracking-widest uppercase text-primary">
              Hello, I'm Maya
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              A dreamer with a backpack and{" "}
              <span className="italic font-normal">endless wanderlust</span>
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Travel has always been my greatest teacher. From the misty
                mountains of the Himalayas to the sun-kissed beaches of the
                Andamans, every journey has shaped who I am today.
              </p>
              <p>
                I believe in slow travel—taking the time to truly experience a
                place, connecting with locals, savoring authentic cuisine, and
                finding beauty in the unexpected moments. Through this blog, I
                share not just destinations, but the stories, emotions, and
                lessons that come with exploring our beautiful world.
              </p>
            </div>
            <Button asChild variant="default" size="lg">
              <Link to="/about" className="inline-flex items-center gap-2">
                Read my story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
