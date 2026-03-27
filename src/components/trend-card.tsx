import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trend } from "@/data/types";

const momentumTone = {
  Watch: "bg-slate-100 text-slate-700 border-slate-200",
  Accelerating: "bg-amber-50 text-amber-700 border-amber-100",
  Hot: "bg-rose-50 text-rose-700 border-rose-100",
};

export function TrendCard({ trend }: { trend: Trend }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge>{trend.discipline}</Badge>
          <Badge className={momentumTone[trend.momentumLabel]}>
            {trend.momentumLabel}
          </Badge>
        </div>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-950">
            {trend.name}
          </h3>
          <p className="text-sm leading-7 text-slate-600">{trend.summary}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Weekly signal</span>
            <span className="font-medium text-slate-900">{trend.growthRate}%</span>
          </div>
          <Progress value={trend.growthRate} />
        </div>
        <p className="text-sm leading-7 text-slate-600">{trend.signal}</p>
        <div className="flex flex-wrap gap-2">
          {trend.keywords.map((keyword) => (
            <Badge key={keyword} className="bg-slate-50">
              {keyword}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
          Frontier watch
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
}
