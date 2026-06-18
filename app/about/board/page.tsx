import BoardHero from "@/app/components/about/BoardHero";
import AboutLayout from "../../../app/components/about/AboutLayout";
import TeamCard from "../../../app/components/about/TeamCard";

const board = [
  {
    name: "Chairman Name",
    title: "Chairman",
    bio: "Founder and strategic lead.",
  },
  {
    name: "Director Name",
    title: "Director",
    bio: "Board member with 20+ years experience.",
  },
];

export default function Page() {
  return (
    <>
      <BoardHero />
      <AboutLayout>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Board of Directors
        </h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {board.map((b) => (
            <TeamCard key={b.name} name={b.name} title={b.title} bio={b.bio} />
          ))}
        </div>
      </AboutLayout>
    </>
  );
}
