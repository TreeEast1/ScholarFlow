import { SectionTitle } from "@/components/section-title";
import { TrendCard } from "@/components/trend-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { trends } from "@/data/mock-data";

export default function TrendsPage() {
  const hotTopics = trends.filter((trend) => trend.momentumLabel === "Hot");
  const emergingThemes = trends.filter((trend) => trend.growthRate >= 65);

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Frontier tracker"
        title="See where research attention is accelerating"
        description="This weekly trends view is powered by mock signals for now, but the product structure is designed for future API integration with papers, keywords, and topic-level growth indicators."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="bg-slate-950 text-white">
          <CardHeader className="space-y-4">
            <Badge className="w-fit border-slate-700 bg-white/5 text-slate-200">
              Trend summary
            </Badge>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">
              What looks meaningfully active this week
            </h2>
            <p className="text-sm leading-7 text-slate-300">
              Scientific GraphRAG, LLM-based agent workflows, and clinical
              multimodal models are showing the strongest momentum in this seed
              dataset.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {hotTopics.map((trend) => (
              <div
                key={trend.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-sm text-slate-400">{trend.discipline}</div>
                <div className="mt-2 font-medium text-white">{trend.name}</div>
                <div className="mt-4 text-3xl font-semibold">{trend.growthRate}%</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="space-y-4">
            <Badge className="w-fit bg-slate-50">Fast-growing keywords</Badge>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
              Emerging themes
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {emergingThemes.map((trend) => (
              <div key={trend.id} className="space-y-2 rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-slate-900">{trend.name}</div>
                  <Badge>{trend.growthRate}%</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trend.keywords.map((keyword) => (
                    <Badge key={keyword} className="bg-white">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {trends.map((trend) => (
          <TrendCard key={trend.id} trend={trend} />
        ))}
      </div>
    </div>
  );
}
