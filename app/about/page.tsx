import Link from "next/link";
import MaxWidth from "../components/common/MaxWidth";
import { ArrowRight } from "lucide-react";
import AboutHero from "../components/about/AboutHero";

export default function AboutIndex() {
  const pages = [
    { title: "Our Story", href: "/about/our-story" },
    { title: "Mission, Vision & Values", href: "/about/mission-vision" },
    { title: "Messages", href: "/about/messages" },
    { title: "Board of Directors", href: "/about/board" },
    { title: "Executive Members", href: "/about/executives" },
    { title: "Share Partners", href: "/about/partners" },
    { title: "Advisors", href: "/about/advisors" },
    { title: "Membership & Certificates", href: "/about/certificates" },
  ];

  return (
    <>
      <AboutHero />
      <div id="about-grid" className="py-16 md:py-24 bg-[#F8F5F0]">
        <MaxWidth className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#E05020] font-semibold">
              About Us
            </h3>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
              About Sunvia Properties
            </h1>

            <p className="text-gray-600 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
              Explore our story, leadership, partners and corporate credentials
              that define our trust and excellence.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((p, index) => (
              <Link
                key={p.href}
                href={p.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#E05020]/40 hover:bg-[#fffaf7]"
              >
                {/* top accent line */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#E05020] group-hover:w-full transition-all duration-300" />

                {/* header row */}
                <div className="flex items-start justify-between">
                  {/* number badge */}
                  <div className="text-xs font-semibold tracking-widest text-gray-400 group-hover:text-[#E05020] transition">
                    0{index + 1}
                  </div>

                  {/* arrow mini indicator */}
                  <ArrowRight
                    size={16}
                    className="text-gray-300 group-hover:text-[#E05020] group-hover:translate-x-1 transition"
                  />
                </div>

                {/* title */}
                <div className="mt-5 font-semibold text-lg text-gray-900 group-hover:text-[#E05020] transition leading-snug">
                  {p.title}
                </div>

                {/* subtle description */}
                <div className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Explore details about {p.title.toLowerCase()} and company
                  insights
                </div>

                {/* bottom CTA */}
                <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-700 transition">
                  <span>View details</span>
                  <span className="w-6 h-[1px] bg-gray-300 group-hover:bg-[#E05020] transition" />
                </div>

                {/* soft gradient glow (no shadow) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#E05020]/5 via-transparent to-transparent transition" />
              </Link>
            ))}
          </div>
        </MaxWidth>
      </div>
    </>
  );
}
