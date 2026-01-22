import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock } from "lucide-react";
import beachImage from "@/assets/destination-beach.jpg";
import mountainsImage from "@/assets/destination-mountains.jpg";
import heritageImage from "@/assets/destination-heritage.jpg";
import natureImage from "@/assets/destination-nature.jpg";

const categories = [
  "All",
  "Mountains",
  "Beaches",
  "Heritage",
  "Nature",
  "Weekend Trips",
];

const posts = [
  {
    id: 1,
    title: "A Week in the Himalayas: Finding Peace Above the Clouds",
    excerpt:
      "My journey through the misty valleys and snow-capped peaks of Himachal Pradesh taught me the true meaning of slow travel and self-discovery.",
    image: mountainsImage,
    category: "Mountains",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    slug: "week-in-himalayas",
    featured: true,
  },
  {
    id: 2,
    title: "Hidden Beaches of Goa: Beyond the Tourist Trail",
    excerpt:
      "Discover the secluded coves and pristine shores that most travelers miss in this popular beach destination.",
    image: beachImage,
    category: "Beaches",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    slug: "hidden-beaches-goa",
    featured: false,
  },
  {
    id: 3,
    title: "Munnar's Tea Gardens: A Green Paradise",
    excerpt:
      "Walking through the endless emerald carpets of tea plantations in Kerala's beloved hill station.",
    image: natureImage,
    category: "Nature",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    slug: "munnar-tea-gardens",
    featured: false,
  },
  {
    id: 4,
    title: "Hampi: Walking Through Ancient Ruins",
    excerpt:
      "Exploring the UNESCO World Heritage site and its magnificent boulder-strewn landscape.",
    image: heritageImage,
    category: "Heritage",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    slug: "hampi-ancient-ruins",
    featured: false,
  },
  {
    id: 5,
    title: "Weekend Escape to Coorg: Coffee and Mist",
    excerpt:
      "A perfect 3-day itinerary for the Scotland of India with homestays and nature trails.",
    image: natureImage,
    category: "Weekend Trips",
    date: "Dec 20, 2025",
    readTime: "4 min read",
    slug: "coorg-weekend-escape",
    featured: false,
  },
  {
    id: 6,
    title: "The Andaman Islands: Paradise Found",
    excerpt:
      "Crystal clear waters, pristine beaches, and underwater wonders await in these remote islands.",
    image: beachImage,
    category: "Beaches",
    date: "Dec 15, 2025",
    readTime: "9 min read",
    slug: "andaman-islands-paradise",
    featured: false,
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((post) => post.featured);

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
              Travel Stories
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4">
              The Blog
            </h1>
            <p className="font-body text-muted-foreground mt-4 text-lg">
              Tales from the road, tips for the journey, and inspiration for
              your next adventure.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto mt-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-4 left-4 bg-highlight text-highlight-foreground">
                    Featured
                  </Badge>
                </div>
                <div className="space-y-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body text-muted-foreground text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-1 font-body text-sm">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="inline-flex items-center gap-1 font-body text-sm">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured || searchQuery || activeCategory !== "All")
              .map((post, index) => (
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
                        <Badge
                          variant="secondary"
                          className="bg-background/90 backdrop-blur-sm"
                        >
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

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-muted-foreground text-lg">
                No posts found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
