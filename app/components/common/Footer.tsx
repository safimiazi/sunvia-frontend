import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Land Share Flats", href: "/projects/land-share" },
    { name: "Sunvia Western City", href: "/projects/western-city" },
    { name: "About Us", href: "/about" },
    { name: "Offers", href: "/offer" },
    { name: "Reviews", href: "/reviews" },
    { name: "Downloads", href: "/downloads" },
    { name: "Query Form", href: "/query" },
  ];

  const projects = [
    { name: "Dream Valley - Ashulia", status: "Active" },
    { name: "Sunvia Western City", status: "Upcoming" },
    { name: "Mirpur Heights", status: "Pre-launch" },
  ];

  return (
    <footer style={{ backgroundColor: "#1A2060", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden" style={{ backgroundColor: "white" }}>
                <Image src="/sunvia-group.png" alt="Sunvia Group" width={36} height={36} priority style={{ objectFit: "contain" }} />
              </div>
              <div>
                <h3 className="font-raleway font-extrabold text-white text-xl">Sunvia Properties Ltd.</h3>
                <p className="text-white/50 text-xs">Sister concern of Sunvia Group</p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Building dreams, creating value. We deliver premium residential and commercial real estate with transparency and trust.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 pt-2">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#E05020] text-white/80 hover:text-white p-2 rounded-lg transition-all duration-200"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 12.07C22 6.49 17.52 2 11.94 2S2 6.49 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.03V12.07h2.41V9.79c0-2.39 1.42-3.71 3.59-3.71 1.04 0 2.13.18 2.13.18v2.34h-1.2c-1.18 0-1.55.74-1.55 1.5v1.79h2.64l-.42 2.9h-2.22v7.03C18.34 21.2 22 17.06 22 12.07z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-orange text-white/80 hover:text-white p-2 rounded-lg transition-all"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm4.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-orange text-white/80 hover:text-white p-2 rounded-lg transition-all"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.5 6.2c-.3-1.3-1.3-2.3-2.6-2.6C18.5 3 12 3 12 3s-6.5 0-8.9.6C1.8 4 0.8 5 0.5 6.2 0 8 0 12 0 12s0 4 0.5 5.8c.3 1.3 1.3 2.3 2.6 2.6C5.5 21 12 21 12 21s6.5 0 8.9-.6c1.3-.3 2.3-1.3 2.6-2.6.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-orange text-white/80 hover:text-white p-2 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M4 3a2 2 0 110 4 2 2 0 010-4zM2 9h4v13H2zM16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4V8h4v2a6 6 0 014-2z" />
                </svg>
              </a>
            </div>
            <div className="pt-3 text-white/60 text-sm">
              <div>Hotline: <a href="tel:+8801978707033" className="text-white">+88 019 78 70 70 33</a></div>
              <div>Email: <a href="mailto:sunviabd@gmail.com" className="text-white">sunviabd@gmail.com</a></div>
              <div>Website: <a href="https://www.sunviabd.com" className="text-white">www.sunviabd.com</a></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full" style={{ backgroundColor: "#E05020" }} />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-orange text-sm transition flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Active Projects */}
          <div>
            <h4 className="font-bold text-white text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full" style={{ backgroundColor: "#C89B1E" }} />
              Our Projects
            </h4>
            <ul className="space-y-3">
              {projects.map((project) => (
                <li key={project.name} className="flex justify-between items-center pb-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="text-white/80 text-sm font-medium">{project.name}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: project.status === "Active" ? "rgba(34,197,94,0.12)" : project.status === "Upcoming" ? "rgba(200,155,30,0.12)" : "rgba(255,255,255,0.06)",
                        color: project.status === "Active" ? "#22c55e" : project.status === "Upcoming" ? "#C89B1E" : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {project.status}
                    </span>
                  </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white text-lg mb-5 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full" style={{ backgroundColor: "var(--brand-accent)" }} />
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-[#E05020] shrink-0 mt-0.5" />
                <span>
                  Suite #1217 (Lift-11), Shah Ali Plaza, Mirpur-10, Dhaka-1216, Bangladesh
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#E05020]" />
                <a href="tel:+8801978707033" className="text-white/80 hover:text-white transition">
                  +88 01978 70 70 33
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#E05020]" />
                <a href="mailto:sunviabd@gmail.com" className="text-white/80 hover:text-white transition">
                  sunviabd@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-[#E05020] mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>Sat–Thu: 9:00 AM – 8:00 PM</p>
                  <p>Friday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/40 text-xs">
            &copy; {currentYear} Sunvia Properties Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/terms" className="text-white/40 hover:text-white/70 text-xs transition">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition">
              Privacy Policy
            </a>
            <div className="flex items-center gap-1 text-white/30 text-xs">
              <ShieldCheck className="w-3 h-3" />
              <span>RAJUK Approved</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp float button */}
      <a
        href="https://wa.me/8801978707033"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-200 z-40 group"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12.031 2c-5.5 0-10 4.5-10 10 0 1.8.5 3.5 1.3 5l-1.3 4.7 4.8-1.3c1.5.8 3.2 1.3 5.2 1.3 5.5 0 10-4.5 10-10s-4.5-10-10-10zm0 18c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-2.8.7.8-2.7-.2-.3c-.7-1.2-1.1-2.6-1.1-4.1 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" />
          <path d="M16.3 14.2c-.2-.2-.9-.5-1.3-.6-.4-.1-.7-.1-1 .1-.3.2-.9.7-1.1.9-.2.2-.4.2-.7 0-.3-.2-1.2-.5-2.2-1.4-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.5.1-.6.1-.1.2-.3.3-.5.1-.2.1-.4.2-.6 0-.2 0-.4-.1-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.1 0-.3 0-.5 0-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.4 0 1.4 1 2.8 1.2 3 .2.2 2 3.1 4.8 4.4.7.3 1.2.5 1.6.6.7.2 1.4.2 1.9.1.6-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
      </a>
    </footer>
  );
}