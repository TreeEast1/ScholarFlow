"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { SectionTitle } from "@/components/section-title";
import { TopicCard } from "@/components/topic-card";
import { EmptyState } from "@/components/empty-state";
import { Input } from "@/components/ui/input";
import {
  disciplineOptions,
  maturityOptions,
  topics,
} from "@/data/mock-data";

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [discipline, setDiscipline] = useState("All disciplines");
  const [maturity, setMaturity] = useState("All maturity levels");

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      const matchesQuery =
        topic.name.toLowerCase().includes(query.toLowerCase()) ||
        topic.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        topic.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query.toLowerCase()),
        );

      const matchesDiscipline =
        discipline === "All disciplines" || topic.discipline === discipline;
      const matchesMaturity =
        maturity === "All maturity levels" || topic.maturity === maturity;

      return matchesQuery && matchesDiscipline && matchesMaturity;
    });
  }, [discipline, maturity, query]);

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Explore fields"
        title="Browse research directions with beginner-friendly context"
        description="Filter by discipline or maturity, then inspect topic cards that explain what the field is, how difficult it feels to enter, and whether its momentum looks foundational, active, or emerging."
      />
      <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div className="relative">
          <Search className="pointer-events-none absolute top-3.5 left-4 h-4 w-4 text-slate-400" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics, methods, keywords"
            className="pl-10"
          />
        </div>
        <select
          value={discipline}
          onChange={(event) => setDiscipline(event.target.value)}
          className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
        >
          {disciplineOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <select
          value={maturity}
          onChange={(event) => setMaturity(event.target.value)}
          className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
        >
          {maturityOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      {filteredTopics.length ? (
        <div className="grid gap-6 xl:grid-cols-2">
          {filteredTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No matching topics yet"
          description="Try a broader keyword or reset the discipline and maturity filters to see more directions."
        />
      )}
    </div>
  );
}
