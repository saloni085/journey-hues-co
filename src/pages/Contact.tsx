import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, MapPin, Send } from "lucide-react";

const Contact = () => {
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
              Let's Connect
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4">
              Get in Touch
            </h1>
            <p className="font-body text-muted-foreground mt-4 text-lg">
              Have a question, collaboration idea, or just want to say hello?
              I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-body text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me what's on your mind..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Other Ways to Connect
                </h2>
                <p className="font-body text-muted-foreground">
                  Whether you're looking for travel advice, want to collaborate,
                  or just want to share your own travel stories, I'm always happy
                  to connect with fellow wanderers.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@wanderlustchronicles.com"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@wanderlustchronicles.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Instagram
                    </h3>
                    <a
                      href="https://instagram.com/wanderlustchronicles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      @wanderlustchronicles
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Based In
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Mumbai, India (currently wandering somewhere)
                    </p>
                  </div>
                </div>
              </div>

              {/* Collaboration Note */}
              <div className="bg-secondary/50 rounded-lg p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Looking to Collaborate?
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  I'm open to brand partnerships, destination collaborations, and
                  content creation opportunities. Let's create something beautiful
                  together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
