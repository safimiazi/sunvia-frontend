import TeamCard from "./TeamCard";

const advisors = [
  { name: "Legal Advisor", title: "Senior Counsel", bio: "Expert in construction law." },
  { name: "Financial Advisor", title: "CFA", bio: "Project finance and structuring." },
];

export default function Advisors() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {advisors.map((a) => (
          <TeamCard key={a.name} name={a.name} title={a.title} bio={a.bio} />
        ))}
      </div>
    </div>
  );
}
