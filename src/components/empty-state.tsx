import { Card, CardContent } from "@/components/ui/card";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="border-dashed bg-slate-50/80">
      <CardContent className="space-y-2 p-8 text-center">
        <h3 className="font-serif text-xl font-semibold text-slate-900">{title}</h3>
        <p className="mx-auto max-w-md text-sm leading-7 text-slate-600">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
