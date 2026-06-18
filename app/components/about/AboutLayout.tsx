import React from "react";
import MaxWidth from "../common/MaxWidth";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-16 bg-[#F8F5F0]">
      <MaxWidth>
        <div className="prose prose-lg text-gray-800">{children}</div>
      </MaxWidth>
    </section>
  );
}
