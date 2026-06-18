import Image from "next/image";
import MaxWidth from "../common/MaxWidth";

export default function Projects() {
  return (
    <section className="py-20">
      <MaxWidth>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-sm uppercase tracking-wide text-gray-600">Curated Collections</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Development Categories</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - Land Share Flats */}
          <div className="bg-white rounded-xl  overflow-hidden">
            <div className="relative h-64">
              <Image src="/images/hero-image.png" alt="Land Share Flats" fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-[#E05020] text-white text-sm px-4 py-2 rounded-full">New Project</div>
            </div>
            <div className="p-8">
              <h4 className="font-semibold text-xl text-gray-900">Land Share Flats</h4>
              <p className="text-base text-gray-700 mt-3">Modern sustainable living in the heart of Ashulia. Experience luxury combined with cost-efficiency through our land-share model.</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Project</span>
                <a href="/projects" className="text-[#E05020] font-semibold">View All Projects →</a>
              </div>
            </div>
          </div>

          {/* Card 2 - Sunvia Western City */}
          <div className="bg-white rounded-xl  overflow-hidden">
            <div className="relative h-64">
              <Image src="/images/hero-image.png" alt="Sunvia Western City" fill className="object-cover" />
            </div>
            <div className="p-8">
              <h4 className="font-semibold text-xl text-gray-900">Sunvia Western City</h4>
              <p className="text-base text-gray-700 mt-3">Land & Plot Township Project — masterplanned community with modern amenities and connectivity.</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-600">Planned Township</span>
                <a href="/projects/western-city" className="text-[#E05020] font-semibold">Explore Western City →</a>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
