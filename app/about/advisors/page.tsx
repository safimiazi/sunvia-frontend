import AdvisorsHero from "@/app/components/about/AdvisorsHero";
import AboutLayout from "../../../app/components/about/AboutLayout";
import Advisors from "../../../app/components/about/Advisors";

export default function Page() {
  return (
    <>
      <AdvisorsHero />
      <AboutLayout>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Advisors
        </h1>
        <div className="mt-6">
          <Advisors />
        </div>
      </AboutLayout>
    </>
  );
}
