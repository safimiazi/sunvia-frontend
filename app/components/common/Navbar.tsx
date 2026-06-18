"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Menu, X, Phone, Home, Info } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [animateBadge, setAnimateBadge] = useState(true);
  const lastY = useRef(0);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },

    { name: "About", href: "/about", icon: Info },
  ];

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setIsTop(y <= 10);
      if (y > lastY.current && y > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // retrigger badge animation when navbar becomes visible at top
  useEffect(() => {
    if (visible && isTop) {
      // restart animation asynchronously to avoid sync state updates
      const idHide = setTimeout(() => setAnimateBadge(false), 0);
      const idShow = setTimeout(() => setAnimateBadge(true), 80);
      return () => {
        clearTimeout(idHide);
        clearTimeout(idShow);
      };
    }
  }, [visible, isTop]);

  const navStyle: React.CSSProperties = isTop
    ? {
        backgroundColor: "transparent",
        backdropFilter: "none",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }
    : {
        backgroundColor: "rgba(26,32,96,0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 260ms ease, background-color 240ms ease",
      };

  return (
    <nav
      className={
        isTop ? "absolute top-0 left-0 z-50 w-full" : "sticky top-0 z-50 w-full"
      }
      style={navStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left: logo section - improved alignment */}
          <div className="flex flex-col justify-center">
            {/* Badge above logo - now properly aligned */}

            {/* Logo with proper sizing */}
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "white" }}
              >
                <Image
                  src="/sunvia-group.png"
                  alt="Sunvia Group"
                  width={36}
                  height={36}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <div>
                <h3 className="font-raleway font-extrabold text-white text-xl">
                  Sunvia Properties
                </h3>
                <p
                  style={{
                    transformOrigin: "top",
                    animationName: animateBadge ? "dropBounce" : "none",
                    animationDuration: animateBadge ? "900ms" : undefined,
                    animationTimingFunction: animateBadge ? "ease" : undefined,
                    animationFillMode: animateBadge ? "forwards" : undefined,
                    animationDelay: animateBadge ? "120ms" : undefined,
                  }}
                  className="text-white/50 text-xs"
                >
                  Sister concern of Sunvia Group
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
    group relative flex items-center gap-2 px-2 \
    text-white/80 hover:text-white
    transition-all duration-300
  `}
                >
                  {/* icon */}
                  <link.icon
                    className="
      w-4 h-4 text-[#F25C24]
      transition-all duration-300
      group-hover:scale-110
      group-hover:-translate-y-[1px]
    "
                  />

                  {/* text */}
                  <span className="relative font-medium transition-all duration-300 group-hover:tracking-wide">
                    {link.name}
                  </span>

                  {/* underline (premium animation) */}
                  <span
                    className="
    absolute left-0 -bottom-1 h-[1.5px] w-full
    bg-[#F25C24]
    scale-x-0 group-hover:scale-x-100
    origin-left transition-transform duration-300
  "
                  />
                </Link>
              );
            })}
            {/* CTA Button */}
            <a
              href="/query"
              className="ml-4 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover: flex items-center gap-2"
              style={{ backgroundColor: "#E05020" }}
            >
              <Phone className="w-4 h-4" />
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full backdrop-blur-md border-t border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0 overflow-hidden"
        }`}
        style={{ backgroundColor: "#1A2060" }}
      >
        <div className="flex flex-col px-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
              onClick={() => setIsOpen(false)}
            >
              <link.icon className="w-5 h-5" style={{ color: "#E05020" }} />
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
          <a
            href="/query"
            className="flex items-center justify-center gap-2 text-white px-4 py-3 rounded-lg font-semibold mt-2 transition"
            style={{ backgroundColor: "#E05020" }}
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-4 h-4" />
            Enquire Now
          </a>
        </div>
      </div>

      <style>{`
          @keyframes dropBounce {
            0% { transform: translateY(-120%); opacity: 0 }
            60% { transform: translateY(14%); opacity: 1 }
            80% { transform: translateY(-6%) }
            100% { transform: translateY(0) }
          }
        `}</style>
    </nav>
  );
}
