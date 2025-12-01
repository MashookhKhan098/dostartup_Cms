// app/components/OurStory.tsx

export default function OurStory() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/our-story.jpg"
              alt="DoStartup Our Story"
              className="w-full h-auto rounded-lg shadow-sm object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              Our Story!
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              At <span className="font-semibold text-gray-900">DoStartup</span>,
              we are on a mission to make entrepreneurship easier and more
              affordable for millions of aspiring business owners. Our platform
              is built to simplify the process of starting a business and
              managing compliance, empowering entrepreneurs to focus on growth
              while we handle the complexities.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
              Founded with the vision of supporting startups at every stage,
              DoStartup is committed to providing accessible, transparent, and
              reliable solutions that help turn ideas into thriving businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
