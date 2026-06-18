import MessagesHero from "@/app/components/about/MessagesHero";
import AboutLayout from "../../../app/components/about/AboutLayout";
import Messages from "../../../app/components/about/Messages";

export default function Page() {
  return (
    <>
      <MessagesHero />
      <AboutLayout>
        <div className="mt-6">
          <Messages />
        </div>
      </AboutLayout>
    </>
  );
}
