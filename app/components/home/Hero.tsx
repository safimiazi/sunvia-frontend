import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import MaxWidth from "../common/MaxWidth";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-30 md:pt-24 ">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.png"
          alt="Luxury Apartment Building"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#050A4D]/80 via-[#050A4D]/60 to-[#050A4D]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <MaxWidth className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full 
              bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm mb-5 sm:mb-6">
              Premium Real Estate Developer
            </div>

            {/* Heading */}
            <h1 className="text-white font-black leading-[1.05] text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
              Own Your
              <br />
              Dream Home.
            </h1>

            <h2 className="text-[#F25C24] font-extrabold text-xl sm:text-3xl md:text-5xl mt-3 sm:mt-4">
              Built on Trust.
            </h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-white/80 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
              Premium land-share apartments and township plots in Dhaka with
              modern design, trusted development, and long-term value.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
              
              <a
                href="#projects"
                className="group bg-[#F25C24] hover:bg-[#e24f1e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300"
              >
                Explore Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>

              <a
                href="https://wa.me/8801978707033"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/30 bg-white/5 hover:bg-white text-white hover:text-[#050A4D] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-5 sm:mt-6 text-white/50 text-xs sm:text-sm">
              RAJUK Approved • Trusted Developer • Dhaka, Bangladesh
            </p>

          </div>
        </MaxWidth>
      </div>
    </section>
  );
}