import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { LatestPosts } from "@/components/home/LatestPosts";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Newsletter } from "@/components/home/Newsletter";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedDestinations />
      <LatestPosts />
      <AboutPreview />
      <Newsletter />
    </Layout>
  );
};

export default Index;
