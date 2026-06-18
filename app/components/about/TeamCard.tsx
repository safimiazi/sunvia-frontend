import Image from "next/image";

type Props = {
  name: string;
  title: string;
  bio?: string;
  linkedin?: string;
  photo?: string;
};

export default function TeamCard({ name, title, bio, linkedin, photo }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
      <div className="mx-auto w-28 h-28 rounded-full overflow-hidden bg-gray-100">
        {photo ? (
          <Image src={photo} alt={name} width={112} height={112} className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xl text-gray-500">{name.split(" ").map(s=>s[0]).slice(0,2).join("")}</div>
        )}
      </div>
      <h4 className="mt-4 font-semibold text-gray-900">{name}</h4>
      <div className="text-sm text-gray-600">{title}</div>
      {bio && <p className="mt-3 text-sm text-gray-700">{bio}</p>}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-[#E05020] font-semibold">
          View on LinkedIn
        </a>
      )}
    </div>
  );
}
