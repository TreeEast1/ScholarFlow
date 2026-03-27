import { PathCard } from "@/components/path-card";
import { SectionTitle } from "@/components/section-title";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { learningPaths } from "@/data/mock-data";

export default function PathsPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Learning paths"
        title="Predefined routes for different onboarding needs"
        description="These paths translate vague ambition into concrete weekly actions. They are designed to help beginners understand what to read, what to write, and what output to aim for."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        {learningPaths.map((path) => (
          <PathCard key={path.id} path={path} />
        ))}
      </div>
      <Card className="bg-slate-50">
        <CardHeader>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
            Reading milestones that reduce overwhelm
          </h2>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {learningPaths.map((path) => (
            <div key={path.id} className="rounded-3xl border border-slate-200 bg-white p-5">
              <div className="font-medium text-slate-950">{path.name}</div>
              <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                {path.readingMilestones.map((milestone) => (
                  <div key={milestone}>{milestone}</div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
