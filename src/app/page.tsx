import Link from "next/link";
import { ArrowRight, BookOpenText, Compass, LibraryBig, Sparkles } from "lucide-react";

import { PathCard } from "@/components/path-card";
import { SectionTitle } from "@/components/section-title";
import { TopicCard } from "@/components/topic-card";
import { TrendCard } from "@/components/trend-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  featuredTopicSlugs,
  learningPaths,
  onboardingChecklist,
  topics,
  trends,
} from "@/data/mock-data";

const featuredTopics = topics.filter((topic) =>
  featuredTopicSlugs.includes(topic.slug),
);

const crossDisciplinaryTopics = topics.filter(
  (topic) => topic.discipline === "Interdisciplinary",
);

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.4),_transparent_32%),linear-gradient(180deg,#f8fafc_0%,#ffffff_80%)] px-6 py-12 shadow-[0_16px_60px_rgba(15,23,42,0.08)] lg:px-10 lg:py-16">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,_rgba(226,232,240,0.65),_transparent_70%)] lg:block" />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <Badge className="bg-white/80">Beginner-friendly research workflow</Badge>
            <div className="space-y-6">
              <h1 className="max-w-3xl font-serif text-5xl leading-tight font-semibold tracking-tight text-slate-950 md:text-6xl">
                Understand a field, find real frontier directions, and start research with structure.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                ScholarFlow helps students move from “I do not know where to
                begin” to a clear reading path, a live trend view, and a
                personal workspace for notes, papers, and research questions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex min-h-14 flex-1 items-center rounded-[1.75rem] border border-slate-200 bg-white px-5 shadow-sm">
                <input
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="Search a field, topic, method, or research question"
                  readOnly
                />
              </div>
              <Button asChild size="lg" className="rounded-[1.75rem] px-6">
                <Link href="/explore" className="flex items-center gap-2">
                  Start exploring
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Choose a direction",
                  copy: "Compare maturity, difficulty, and momentum before you commit.",
                  icon: Compass,
                },
                {
                  label: "Read in the right order",
                  copy: "See foundational papers first, then move into frontier work.",
                  icon: LibraryBig,
                },
                {
                  label: "Turn reading into output",
                  copy: "Capture notes, questions, and draft reports in one workspace.",
                  icon: BookOpenText,
                },
              ].map((item) => (
                <Card key={item.label} className="bg-white/90">
                  <CardContent className="space-y-3 p-5">
                    <item.icon className="h-5 w-5 text-slate-500" />
                    <div className="font-medium text-slate-950">{item.label}</div>
                    <p className="text-sm leading-7 text-slate-600">{item.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="bg-slate-950 text-white">
            <CardHeader>
              <Badge className="w-fit border-slate-700 bg-slate-900 text-slate-200">
                New to research?
              </Badge>
              <h2 className="font-serif text-3xl font-semibold tracking-tight">
                A calmer way to get started
              </h2>
              <p className="text-sm leading-7 text-slate-300">
                Instead of throwing hundreds of papers at you, ScholarFlow helps
                you answer five basics first.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "What is this field?",
                "Why does it matter?",
                "What should I read first?",
                "What are the current frontiers?",
                "What should I do next?",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div className="text-sm leading-7 text-slate-200">{item}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Featured directions"
          title="Promising fields with clear beginner entry points"
          description="These topics span computing, medicine, materials, and energy. Each one includes an overview, why it matters, core questions, and a suggested path into the literature."
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {featuredTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="bg-slate-50">
          <CardHeader className="space-y-4">
            <Badge className="w-fit bg-white">Onboarding checklist</Badge>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
              New to research? Start here.
            </h2>
            <p className="text-sm leading-7 text-slate-600">
              Your first week should create orientation, not anxiety.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {onboardingChecklist.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-slate-600"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Cross-disciplinary suggestions"
            title="Useful if you want frontier themes that connect multiple fields"
            description="Some topics are especially helpful for students who want to bridge methods and applications rather than stay in one narrow silo."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {crossDisciplinaryTopics.map((topic) => (
              <TopicCard key={topic.slug} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Trending now"
          title="A weekly view of what looks meaningfully active"
          description="Mock trend signals show where momentum is building, but the platform keeps the context grounded with maturity labels and reading order."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          {trends.slice(0, 3).map((trend) => (
            <TrendCard key={trend.id} trend={trend} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Recommended paths"
          title="Structured plans for turning curiosity into momentum"
          description="Choose a path based on your available time and the output you need, from a quick-start topic scan to a report-ready onboarding workflow."
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {learningPaths.slice(0, 2).map((path) => (
            <PathCard key={path.id} path={path} />
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-10 text-white lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge className="border-slate-700 bg-white/5 text-slate-200">
              Build your own flow
            </Badge>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">
              Go from topic discovery to report draft in one workspace
            </h2>
            <p className="text-sm leading-7 text-slate-300">
              Save topics, collect papers, write notes, frame research
              questions, and generate a structured markdown report when you are
              ready to synthesize.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="secondary" size="lg" className="rounded-full">
              <Link href="/workspace">Open workspace</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-slate-100">
              <Link href="/report-builder" className="flex items-center gap-2">
                Build a report
                <Sparkles className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
