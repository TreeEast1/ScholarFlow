import { Badge } from "@/components/ui/badge";

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? <Badge className="bg-slate-50">{eyebrow}</Badge> : null}
      <div className="space-y-3">
        <h2 className="font-serif text-3xl leading-tight font-semibold tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-slate-600 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
