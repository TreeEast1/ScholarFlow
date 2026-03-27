"use client";

import { useMemo, useState } from "react";

import { ReportPreview } from "@/components/report/report-preview";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { topics } from "@/data/mock-data";
import { buildReportSections, sectionsToMarkdown } from "@/lib/report";

export default function ReportBuilderPage() {
  const [selectedSlug, setSelectedSlug] = useState(topics[0]?.slug ?? "");
  const topic = topics.find((item) => item.slug === selectedSlug) ?? topics[0];

  const sections = useMemo(() => buildReportSections(topic), [topic]);
  const markdown = useMemo(() => sectionsToMarkdown(topic, sections), [sections, topic]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = `${topic.slug}-report.md`;
    link.click();
    URL.revokeObjectURL(href);
  };

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Report builder"
        title="Generate a structured draft from a selected topic"
        description="This MVP turns topic context into a markdown-ready report outline covering the overview, key problems, representative papers, trend summary, open questions, and beginner recommendations."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader className="space-y-3">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
              Configure report
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <select
              value={selectedSlug}
              onChange={(event) => setSelectedSlug(event.target.value)}
              className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-300"
            >
              {topics.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="rounded-3xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              Use this when you need a first-pass literature review memo,
              onboarding brief, or discussion document before deeper synthesis.
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full" onClick={handleCopy}>
                Copy markdown
              </Button>
              <Button variant="outline" className="rounded-full" onClick={handleDownload}>
                Export .md
              </Button>
            </div>
            <div className="rounded-3xl border border-slate-200 p-4">
              <div className="text-sm font-medium text-slate-950">Markdown preview</div>
              <pre className="mt-3 max-h-80 overflow-auto whitespace-pre-wrap text-xs leading-6 text-slate-600">
                {markdown}
              </pre>
            </div>
          </CardContent>
        </Card>
        <ReportPreview sections={sections} />
      </div>
    </div>
  );
}
