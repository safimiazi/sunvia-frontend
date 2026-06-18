import Image from "next/image";
import MaxWidth from "../common/MaxWidth";

export default function AdvisorsHero() {
  return (
    <section className="relative h-72 sm:h-96 lg:h-[500px] overflow-hidden pt-16 md:pt-20">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.png"
          alt="Advisors Sunvia Properties"
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050A4D]/85 via-[#050A4D]/60 to-[#050A4D]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <MaxWidth className="h-full flex items-center px-4 sm:px-6 lg:px-8">

          <div className="max-w-xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
              bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs mb-4">
              Expert Guidance
            </div>

            {/* Heading */}
            <h1 className="text-white font-bold leading-snug text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              Advisors
            </h1>

            {/* Sub heading */}
            <h2 className="text-[#F25C24] font-semibold text-sm sm:text-lg md:text-2xl mt-3">
              Strategic Insight & Expertise
            </h2>

            {/* Description */}
            <p className="mt-4 text-white/75 text-xs sm:text-sm md:text-base max-w-md leading-relaxed">
              Our advisory panel consists of experienced professionals who guide
              Sunvia Properties with strategic insight, industry expertise, and
              long-term vision.
            </p>

            {/* Trust line */}
            <p className="mt-4 text-white/40 text-[11px] sm:text-xs">
              Strategy • Expertise • Governance • Growth
            </p>

          </div>

        </MaxWidth>
      </div>
    </section>
  );
}