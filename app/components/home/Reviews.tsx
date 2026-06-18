import MaxWidth from "../common/MaxWidth";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ahmed Zubair",
    title: "Homeowner",
    text: "Great service and transparent process. The team supported us at every step and delivered a quality home.",
    rating: 5,
  },
  {
    name: "Sarah Monzur",
    title: "Investor",
    text: "Professional team and timely delivery. Communication was excellent throughout the project.",
    rating: 5,
  },
  {
    name: "Kazi Ibrahim",
    title: "Buyer",
    text: "Quality construction and supportive staff. Very satisfied with the purchase experience.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-transparent">
      <MaxWidth>
        <div className="text-center mb-10">
          <h3 className="text-sm uppercase tracking-wide text-gray-600">Testimonials</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-3xl p-8  border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F8F5F0] to-white flex items-center justify-center text-[#E05020] font-bold">{r.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                <div>
                  <div className="font-semibold text-lg text-gray-900">{r.name}</div>
                  <div className="text-sm text-gray-500">{r.title}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-base text-gray-700 italic leading-relaxed">“{r.text}”</blockquote>

              <div className="mt-6 text-sm text-gray-400">Verified purchase</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/reviews" className="inline-block bg-[#E05020] text-white px-5 py-3 rounded-full font-semibold">Read All Reviews</a>
        </div>
      </MaxWidth>
    </section>
  );
}
