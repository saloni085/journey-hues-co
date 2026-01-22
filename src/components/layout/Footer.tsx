import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-xl font-semibold text-foreground">
                Wanderlust
              </span>
              <span className="font-display text-xl font-light italic text-primary ml-1">
                Chronicles
              </span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Exploring the world one journey at a time. Sharing authentic travel
              stories, tips, and inspiration for the wanderer in you.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@wanderlust.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Explore
            </h3>
            <nav className="flex flex-col gap-2">
              {["Home", "About", "Blog", "Destinations", "Gallery", "Contact"].map(
                (link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Categories
            </h3>
            <nav className="flex flex-col gap-2">
              {["Mountains", "Beaches", "Heritage", "Nature", "Weekend Trips"].map(
                (category) => (
                  <Link
                    key={category}
                    to={`/blog?category=${category.toLowerCase()}`}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Newsletter
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Subscribe for travel tips and stories delivered to your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="font-body">
              © {new Date().getFullYear()} Wanderlust Chronicles. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span className="font-body">Made with love from India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
