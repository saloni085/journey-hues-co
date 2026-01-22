import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground">
            Join the Journey
          </h2>
          <p className="font-body text-primary-foreground/80 mt-4 mb-8">
            Subscribe to receive travel stories, destination guides, and
            exclusive tips delivered straight to your inbox. No spam, just
            wanderlust.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground"
            />
            <Button type="submit" variant="newsletter" size="lg">
              <Send className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </form>
          <p className="font-body text-sm text-primary-foreground/60 mt-4">
            Join 5,000+ fellow travelers. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
