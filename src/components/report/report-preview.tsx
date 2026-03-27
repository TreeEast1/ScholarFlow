import { ReportSection } from "@/data/types";

export function ReportPreview({
  sections,
}: {
  sections: ReportSection[];
}) {
  return (
    <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
      {sections.map((section) => (
        <section key={section.id} className="space-y-3">
          <h3 className="font-serif text-xl font-semibold text-slate-950">
            {section.title}
          </h3>
          <div className="whitespace-pre-line text-sm leading-7 text-slate-600">
            {section.content}
          </div>
        </section>
      ))}
    </div>
  );
}
