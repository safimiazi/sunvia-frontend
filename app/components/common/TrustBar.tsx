import { Building2, Heart, ShieldCheck, Users } from "lucide-react";
import MaxWidth from "./MaxWidth";

export default function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "RAJUK Approved" },
    { icon: Building2, label: "Member: DD-REG, BLDA" },
    { icon: Users, label: "Sister Concern of Sunvia Group" },
    { icon: Heart, label: "Active Projects Across Dhaka" },
  ];

  return (
    <div className="relative -mt-32 md:-mt-18 z-20">
      <MaxWidth>
        <div className="bg-white  rounded-xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.label}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="p-4 rounded-xl bg-[#F8F5F0] text-[#E05020]">
                <it.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>

              <div className="text-sm md:text-[13px] font-medium text-gray-700 leading-snug">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </div>
  );
}