import { ShieldCheck, Zap, Globe, Lock } from "lucide-react";
import MaxWidth from "../common/MaxWidth";

const features = [
  { icon: ShieldCheck, title: "Transparent Process", desc: "Clear documentation and open pricing." },
  { icon: Zap, title: "Earthquake-Resistant Build", desc: "Engineered to modern seismic standards." },
  { icon: Globe, title: "24/7 Security", desc: "Round-the-clock protection across projects." },
  { icon: Lock, title: "RAJUK Registered", desc: "Registered & approved developer." },
];

export default function Features() {
  return (
    <section className="py-16 bg-transparent">
      <MaxWidth>
        <div className="text-center mb-10">
          <h3 className="text-sm uppercase tracking-wide text-gray-600">Why Sunvia</h3>
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Sunvia Properties?</h2>
          <p className="text-base text-gray-700 mt-3">We combine design, safety and transparency to deliver long-term value.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-8  text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-lg bg-[#F8F5F0] text-[#E05020] mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-lg text-gray-900">{f.title}</h4>
              <p className="text-base text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}
