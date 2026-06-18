import MissionVisionHero from "@/app/components/about/MissionVisionHero";
import AboutLayout from "../../../app/components/about/AboutLayout";
import MissionVision from "../../../app/components/about/MissionVision";

export default function Page() {
  return (
    <>
      <MissionVisionHero />
      <AboutLayout>
        <div className="mt-6">
          <MissionVision />
        </div>
      </AboutLayout>
    </>
  );
}
