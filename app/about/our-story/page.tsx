import OurStoryHero from "@/app/components/about/OurStoryHero";
import AboutLayout from "../../../app/components/about/AboutLayout";
import OurStory from "../../../app/components/about/OurStory";

export default function Page() {
  return (
<>
      <OurStoryHero />

      <AboutLayout>
        <div className="mt-10">
          <OurStory />
        </div>
      </AboutLayout>
    </>
  );
}
