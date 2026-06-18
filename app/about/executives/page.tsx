import ExecutiveHero from "@/app/components/about/ExecutiveHero";
import AboutLayout from "../../../app/components/about/AboutLayout";
import TeamCard from "../../../app/components/about/TeamCard";

const execs = [
  {
    name: "Head of Sales",
    title: "Head of Sales",
    bio: "Leads sales and customer relations.",
  },
  {
    name: "Head of Construction",
    title: "Head of Construction",
    bio: "Oversees site delivery and quality.",
  },
  {
    name: "Head of Legal",
    title: "Head of Legal",
    bio: "Legal and compliance lead.",
  },
  {
    name: "CFO",
    title: "Chief Financial Officer",
    bio: "Finance and reporting.",
  },
];

export default function Page() {
  return (
    <>
      <ExecutiveHero />
      <AboutLayout>
  
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {execs.map((e) => (
            <TeamCard key={e.name} name={e.name} title={e.title} bio={e.bio} />
          ))}
        </div>
      </AboutLayout>
    </>
  );
}
