import CertificatesHero from "@/app/components/about/CertificatesHero";
import AboutLayout from "../../../app/components/about/AboutLayout";
import CertificateGallery from "../../../app/components/about/CertificateGallery";

export default function Page() {
  return (
    <>
      <CertificatesHero />
      <AboutLayout>

        <div className="mt-6">
          <CertificateGallery />
        </div>
      </AboutLayout>
    </>
  );
}
