import MaxWidth from "../common/MaxWidth";

export default function OfferBanner() {
  return (
    <section className="bg-[#F25C24] text-white py-16  mt-12">
      <MaxWidth>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Summer Booking 2026</h3>
            <p className="text-base md:text-lg mt-3">Save up to 10% on early bird bookings for our new Ashulia expansion. Limited units available.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/offer" className="bg-white text-[#F25C24] px-5 py-3 rounded-full font-semibold">Claim Offer Now</a>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
