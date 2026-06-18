import Image from "next/image";

const partners = [
  { name: "Partner A", logo: "/sunvia-group.png", desc: "Equity partner" },
  { name: "Partner B", logo: "/sunvia-group.png", desc: "Strategic partner" },
];

export default function Partners() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((p) => (
          <div key={p.name} className="bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-sm">
            <div className="w-24 h-24 mb-3">
              <Image src={p.logo} alt={p.name} width={96} height={96} className="object-contain" />
            </div>
            <div className="font-semibold text-sm">{p.name}</div>
            <div className="text-xs text-gray-500">{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
