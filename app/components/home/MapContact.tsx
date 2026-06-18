import MaxWidth from "../common/MaxWidth";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function MapContact() {
  return (
    <section className="py-16">
      <MaxWidth>
<div className="flex items-center justify-center text-center">
            <div className="mb-8">
          <h3 className="text-sm uppercase tracking-wide text-gray-600">Contact</h3>
          <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Office</h2>
        </div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 md:p-8  border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <Image src="/sunvia-group.png" alt="Sunvia" width={36} height={36} style={{ objectFit: 'contain' }} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Sunvia Properties</h4>
                <p className="text-sm text-gray-500">Sister concern of Sunvia Group</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F8F5F0] text-[#E05020]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-700">Suite #1217 (Lift-11), Shah Ali Plaza, Mirpur-10, Dhaka-1216, Bangladesh</div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Suite+%231217+Shah+Ali+Plaza+Mirpur+10+Dhaka+1216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#E05020] font-semibold inline-block mt-1"
                  >
                    Get directions →
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F8F5F0] text-[#E05020]">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+8801978707033" className="text-sm text-gray-700 font-medium">+88 01978 70 70 33</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F8F5F0] text-[#E05020]">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:sunviabd@gmail.com" className="text-sm text-gray-700">sunviabd@gmail.com</a>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#F8F5F0] text-[#E05020]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-700">Sat–Thu: 9:00 AM – 8:00 PM</div>
                  <div className="text-xs text-gray-400">Friday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden ">
            <iframe
              title="Sunvia Office Map"
              src="https://www.google.com/maps?q=Suite%20%231217%20%28Lift-11%29%2C%20Shah%20Ali%20Plaza%2C%20Mirpur-10%2C%20Dhaka-1216%2C%20Bangladesh&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
