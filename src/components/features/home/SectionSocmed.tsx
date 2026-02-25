import { getInstagramPosts } from "@/lib/instagram";
import InstagramCarousel from "@/components/ui/instagram-carousel";

const SectionSocmed = async () => {
  const posts = await getInstagramPosts(10);

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-8 md:px-6">
        <h2 className="text-lg md:text-4xl text-center mb-6 md:mb-12 text-gray-900">
          Latest Stories from Us
        </h2>
        <p className="text-sm md:text-base text-center px-9 md:px-0 text-gray-600 mb-6 md:mb-12 max-w-3xl mx-auto">
          The latest moments, projects, and activities we share on Instagram.
        </p>
      </div>

      <InstagramCarousel posts={posts} />
    </section>
  );
};

export default SectionSocmed;
