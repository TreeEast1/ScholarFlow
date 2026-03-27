"use client";

import Link from "next/link";
import { BookmarkPlus, BellPlus, ExternalLink } from "lucide-react";

import { useWorkspace } from "@/components/providers/workspace-provider";
import { SectionTitle } from "@/components/section-title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Topic, Topic as TopicType } from "@/data/types";
import { topics } from "@/data/mock-data";

export function TopicDetailClient({ topic }: { topic: Topic }) {
  const { savedTopics, savedPapers, toggleSavedPaper, toggleSavedTopic } =
    useWorkspace();

  const foundational = topic.papers.filter(
    (paper) => paper.type === "Foundational" || paper.type === "Survey",
  );
  const recent = topic.papers.filter((paper) => paper.type === "Recent");
  const isSaved = savedTopics.includes(topic.slug);

  return (
    <div className="space-y-10">
      <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge>{topic.discipline}</Badge>
            <Badge className="bg-slate-50">{topic.maturity}</Badge>
            <Badge className="bg-slate-50">{topic.difficulty}</Badge>
            <Badge className="bg-slate-50">{topic.momentum}</Badge>
          </div>
          <div className="space-y-4">
            <h1 className="font-serif text-5xl leading-tight font-semibold tracking-tight text-slate-950">
              {topic.name}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              {topic.overview}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => toggleSavedTopic(topic.slug)}
              className="rounded-full"
            >
              <BookmarkPlus className="mr-2 h-4 w-4" />
              {isSaved ? "Saved to workspace" : "Save to workspace"}
            </Button>
            <Button variant="outline" className="rounded-full">
              <BellPlus className="mr-2 h-4 w-4" />
              Track this topic
            </Button>
          </div>
        </div>
        <Card className="bg-slate-50">
          <CardHeader className="space-y-3">
            <Badge className="w-fit bg-white">Why this topic matters</Badge>
            <p className="text-sm leading-7 text-slate-600">{topic.whyItMatters}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl bg-white p-4">
              <div className="text-sm text-slate-500">Good first ramp-up window</div>
              <div className="mt-2 font-medium text-slate-900">{topic.timeToRamp}</div>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <div className="text-sm text-slate-500">Recommended keywords</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {topic.keywords.map((keyword) => (
                  <Badge key={keyword}>{keyword}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardHeader>
            <SectionTitle
              title="Core research questions"
              description="These are the big questions that help you understand what the field is trying to solve."
            />
          </CardHeader>
          <CardContent className="space-y-3">
            {topic.coreQuestions.map((question, index) => (
              <div
                key={question}
                className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <span>{question}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <SectionTitle
              title="Subtopics"
              description="Use these clusters to narrow your reading once you understand the overview."
            />
          </CardHeader>
          <CardContent className="space-y-4">
            {topic.subtopics.map((subtopic) => (
              <div key={subtopic.id} className="rounded-3xl border border-slate-200 p-4">
                <div className="font-medium text-slate-950">{subtopic.name}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {subtopic.description}
                </p>
                <p className="mt-2 text-sm text-slate-500">{subtopic.signal}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <SectionTitle
              title="Foundational papers"
              description="Start here to understand the field's main concepts, assumptions, and benchmarks."
            />
          </CardHeader>
          <CardContent className="space-y-4">
            {foundational.map((paper) => (
              <article key={paper.id} className="rounded-3xl bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-slate-950">{paper.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {paper.authors} · {paper.venue} · {paper.year}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSavedPaper(paper.id)}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                  >
                    {savedPapers.includes(paper.id) ? "Saved" : "Save"}
                  </button>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {paper.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {paper.takeaways.map((takeaway) => (
                    <Badge key={takeaway} className="bg-white">
                      {takeaway}
                    </Badge>
                  ))}
                </div>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900"
                >
                  Open paper
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <SectionTitle
              title="Recent papers"
              description="Once you know the basics, use these to see what the current frontier is trying to improve."
            />
          </CardHeader>
          <CardContent className="space-y-4">
            {recent.map((paper) => (
              <article key={paper.id} className="rounded-3xl bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-slate-950">{paper.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {paper.authors} · {paper.venue} · {paper.year}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleSavedPaper(paper.id)}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
                  >
                    {savedPapers.includes(paper.id) ? "Saved" : "Save"}
                  </button>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {paper.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {paper.takeaways.map((takeaway) => (
                    <Badge key={takeaway} className="bg-white">
                      {takeaway}
                    </Badge>
                  ))}
                </div>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900"
                >
                  Open paper
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card>
          <CardHeader>
            <SectionTitle
              title="Beginner learning path"
              description="A simple sequence for moving from overview to active reading."
            />
          </CardHeader>
          <CardContent className="space-y-3">
            {topic.beginnerSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 p-4">
                <div className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  Step {index + 1}
                </div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{step}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <SectionTitle
              title="Related interdisciplinary directions"
              description="Useful if you want adjacent areas for future project ideas."
            />
          </CardHeader>
          <CardContent className="space-y-3">
            {topic.relatedDirections.map((direction) => {
              const relatedTopic = topics.find(
                (item: TopicType) => item.name === direction,
              );

              return (
                <Link
                  key={direction}
                  href={relatedTopic ? `/topic/${relatedTopic.slug}` : "/explore"}
                  className="block rounded-3xl border border-slate-200 p-5 transition hover:bg-slate-50"
                >
                  <div className="font-medium text-slate-950">{direction}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {relatedTopic?.shortDescription ??
                      "Explore related cross-disciplinary signals."}
                  </p>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
