import Link from "next/link";
import { ArrowUpRight, BarChart3, Compass, Layers3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Topic } from "@/data/types";

const difficultyTone = {
  Beginner: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-100",
  Advanced: "bg-rose-50 text-rose-700 border-rose-100",
};

const maturityTone = {
  Foundational: "bg-slate-100 text-slate-700 border-slate-200",
  Active: "bg-sky-50 text-sky-700 border-sky-100",
  Emerging: "bg-violet-50 text-violet-700 border-violet-100",
};

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{topic.discipline}</Badge>
          <Badge className={maturityTone[topic.maturity]}>{topic.maturity}</Badge>
          <Badge className={difficultyTone[topic.difficulty]}>
            {topic.difficulty}
          </Badge>
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-950">
            {topic.name}
          </h3>
          <p className="text-sm leading-7 text-slate-600">
            {topic.shortDescription}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <div className="mb-2 flex items-center gap-2 text-slate-500">
              <BarChart3 className="h-4 w-4" />
              Momentum
            </div>
            <div className="font-medium text-slate-900">{topic.momentum}</div>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <div className="mb-2 flex items-center gap-2 text-slate-500">
              <Compass className="h-4 w-4" />
              Ramp-up
            </div>
            <div className="font-medium text-slate-900">{topic.timeToRamp}</div>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <div className="mb-2 flex items-center gap-2 text-slate-500">
              <Layers3 className="h-4 w-4" />
              Keywords
            </div>
            <div className="font-medium text-slate-900">{topic.keywords.length}</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {topic.keywords.slice(0, 4).map((keyword) => (
            <Badge key={keyword} className="bg-slate-50">
              {keyword}
            </Badge>
          ))}
        </div>
        <Button asChild className="w-full justify-between rounded-2xl">
          <Link href={`/topic/${topic.slug}`} className="flex w-full items-center justify-between">
            View details
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
