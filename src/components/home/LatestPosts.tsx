import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import beachImage from "@/assets/destination-beach.jpg";
import mountainsImage from "@/assets/destination-mountains.jpg";
import natureImage from "@/assets/destination-nature.jpg";

const posts = [
  {
    id: 1,
    title: "A Week in the Himalayas: Finding Peace Above the Clouds",
    excerpt:
      "My journey through the misty valleys and snow-capped peaks of Himachal Pradesh taught me the true meaning of slow travel...",
    image: mountainsImage,
    category: "Mountains",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    slug: "week-in-himalayas",
  },
  {
    id: 2,
    title: "Hidden Beaches of Goa: Beyond the Tourist Trail",
    excerpt:
      "Discover the secluded coves and pristine shores that most travelers miss in this popular beach destination...",
    image: beachImage,
    category: "Beaches",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    slug: "hidden-beaches-goa",
  },
  {
    id: 3,
    title: "Munnar's Tea Gardens: A Green Paradise",
    excerpt:
      "Walking through the endless emerald carpets of tea plantations in Kerala's beloved hill station...",
    image: natureImage,
    category: "Nature",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    slug: "munnar-tea-gardens",
  },
];

export function LatestPosts() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="font-body text-sm tracking-widest uppercase text-primary">
              From the Blog
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mt-2">
              Latest Stories
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-primary hover:text-primary/80 transition-colors"
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-1 font-body text-sm">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 font-body text-sm">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
