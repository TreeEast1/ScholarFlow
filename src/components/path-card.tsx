import { CheckCircle2, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LearningPath } from "@/data/types";

export function PathCard({ path }: { path: LearningPath }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>{path.duration}</Badge>
          <Badge className="bg-slate-50">{path.targetUser}</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-950">
            {path.name}
          </h3>
          <p className="text-sm leading-7 text-slate-600">{path.objective}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-3xl bg-slate-50 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-900">
            <Target className="h-4 w-4" />
            Recommended outputs
          </div>
          <div className="space-y-2 text-sm text-slate-600">
            {path.outcomes.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-slate-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-medium text-slate-900">Step-by-step plan</div>
          <div className="space-y-2 text-sm leading-7 text-slate-600">
            {path.steps.slice(0, 4).map((step, index) => (
              <div key={step} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
