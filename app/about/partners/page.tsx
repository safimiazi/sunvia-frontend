import PartnersHero from "@/app/components/about/PartnersHero";
import AboutLayout from "../../../app/components/about/AboutLayout";
import Partners from "../../../app/components/about/Partners";

export default function Page() {
  return (
    <>
      <PartnersHero />
      <AboutLayout>
   
        <div className="mt-6">
          <Partners />
        </div>
      </AboutLayout>
    </>
  );
}
