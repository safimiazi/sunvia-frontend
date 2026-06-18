import Image from "next/image";

export default function Messages() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-1/3">
          <Image src="/sunvia-group.png" alt="Chairman" width={280} height={280} className="rounded-lg object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Message from the Chairman</h3>
          <p className="text-sm text-gray-700 mt-3">Dear stakeholders — we are committed to building homes with honesty and quality. (Placeholder message.)</p>
          <div className="mt-4 font-handwriting text-sm">— Chairman</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-1/3">
          <Image src="/sunvia-group.png" alt="MD" width={280} height={280} className="rounded-lg object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Message from the Managing Director</h3>
          <p className="text-sm text-gray-700 mt-3">Our operations focus on transparent customer journeys, timely delivery and quality workmanship. (Placeholder message.)</p>
          <div className="mt-4 font-handwriting text-sm">— Managing Director</div>
        </div>
      </div>
    </div>
  );
}
