import Image from "next/image";

const certs = [
  { title: "RAJUK Approval", issuer: "RAJUK", img: "/images/hero-image.png", date: "2025-08-01", file: "/certs/rajuk.pdf" },
  { title: "BLDA Member", issuer: "BLDA", img: "/images/hero-image.png", date: "2025-05-12", file: "/certs/blda.pdf" },
];

export default function CertificateGallery() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certs.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="h-40 w-full relative rounded-md overflow-hidden">
              <Image src={c.img} alt={c.title} fill className="object-cover" />
            </div>
            <div className="mt-3">
              <div className="font-semibold">{c.title}</div>
              <div className="text-xs text-gray-500">{c.issuer} • {c.date}</div>
              <a href={c.file} className="inline-block mt-3 text-sm text-[#E05020] font-semibold">Download PDF</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
