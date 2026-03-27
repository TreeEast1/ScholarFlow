"use client";

import { useState } from "react";

import { EmptyState } from "@/components/empty-state";
import { SectionTitle } from "@/components/section-title";
import { useWorkspace } from "@/components/providers/workspace-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { getPaperById, getTopicBySlug, topics } from "@/data/mock-data";

export default function WorkspacePage() {
  const {
    addNote,
    addQuestion,
    notes,
    readingProgress,
    researchQuestions,
    savedPapers,
    savedTopics,
    tasks,
    toggleTask,
  } = useWorkspace();
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [questionInput, setQuestionInput] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(topics[0]?.slug ?? "");

  const savedTopicItems = savedTopics
    .map((slug) => getTopicBySlug(slug))
    .filter(Boolean);

  const savedPaperItems = savedPapers
    .map((id) => getPaperById(id))
    .filter(Boolean);

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Workspace"
        title="A lightweight personal dashboard for your research onboarding"
        description="Use the workspace to keep all your early-stage research artifacts together: saved topics, papers, notes, reading progress, research questions, and next actions."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader className="space-y-3">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
              Reading progress
            </h2>
            <p className="text-sm text-slate-500">
              A simple progress indicator for your current onboarding cycle.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Current cycle</span>
              <span className="font-medium text-slate-950">{readingProgress}%</span>
            </div>
            <Progress value={readingProgress} />
          </CardContent>
        </Card>
        <Card className="bg-slate-50">
          <CardHeader className="space-y-3">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
              Task checklist
            </h2>
          </CardHeader>
          <CardContent className="space-y-3">
            {tasks.map((task) => (
              <label
                key={task.id}
                className="flex cursor-pointer items-center gap-3 rounded-2xl bg-white px-4 py-4 text-sm text-slate-600"
              >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                  className="h-4 w-4 rounded border-slate-300"
                />
                <span>{task.label}</span>
              </label>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
              Saved topics
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {savedTopicItems.length ? (
              savedTopicItems.map((topic) => (
                <div key={topic!.slug} className="rounded-3xl bg-slate-50 p-5">
                  <div className="flex flex-wrap gap-2">
                    <Badge>{topic!.discipline}</Badge>
                    <Badge className="bg-white">{topic!.maturity}</Badge>
                  </div>
                  <div className="mt-3 font-medium text-slate-950">{topic!.name}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {topic!.shortDescription}
                  </p>
                </div>
              ))
            ) : (
              <EmptyState
                title="No saved topics yet"
                description="Save a topic from the explore or detail pages to start building your research queue."
              />
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
              Saved papers
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {savedPaperItems.length ? (
              savedPaperItems.map((item) => (
                <div key={item!.paper.id} className="rounded-3xl bg-slate-50 p-5">
                  <div className="font-medium text-slate-950">{item!.paper.title}</div>
                  <p className="mt-2 text-sm text-slate-500">
                    {item!.topic.name} · {item!.paper.year}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item!.paper.summary}
                  </p>
                </div>
              ))
            ) : (
              <EmptyState
                title="No saved papers yet"
                description="Save representative papers to keep your reading sequence organized."
              />
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader className="space-y-3">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
              Notes
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 rounded-3xl border border-slate-200 p-4">
              <input
                value={noteTitle}
                onChange={(event) => setNoteTitle(event.target.value)}
                placeholder="Note title"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-300"
              />
              <Textarea
                value={noteContent}
                onChange={(event) => setNoteContent(event.target.value)}
                placeholder="Capture what you learned, what confused you, and what to read next."
              />
              <Button
                className="rounded-full"
                onClick={() => {
                  if (!noteTitle || !noteContent) return;
                  addNote({ title: noteTitle, content: noteContent, topicSlug: selectedTopic });
                  setNoteTitle("");
                  setNoteContent("");
                }}
              >
                Add note
              </Button>
            </div>
            {notes.length ? (
              notes.map((note) => (
                <div key={note.id} className="rounded-3xl bg-slate-50 p-5">
                  <div className="font-medium text-slate-950">{note.title}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{note.content}</p>
                  <p className="mt-3 text-xs text-slate-400">Updated {note.updatedAt}</p>
                </div>
              ))
            ) : (
              <EmptyState
                title="No notes yet"
                description="Use notes to turn passive reading into active synthesis."
              />
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="space-y-3">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950">
              Research questions
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 rounded-3xl border border-slate-200 p-4">
              <select
                value={selectedTopic}
                onChange={(event) => setSelectedTopic(event.target.value)}
                className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-slate-300"
              >
                {topics.map((topic) => (
                  <option key={topic.slug} value={topic.slug}>
                    {topic.name}
                  </option>
                ))}
              </select>
              <Textarea
                value={questionInput}
                onChange={(event) => setQuestionInput(event.target.value)}
                placeholder="Write a question you want to refine into a possible research angle."
              />
              <Button
                className="rounded-full"
                onClick={() => {
                  if (!questionInput) return;
                  addQuestion({
                    question: questionInput,
                    topicSlug: selectedTopic,
                    status: "open",
                  });
                  setQuestionInput("");
                }}
              >
                Add question
              </Button>
            </div>
            {researchQuestions.length ? (
              researchQuestions.map((question) => (
                <div key={question.id} className="rounded-3xl bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-950">{question.question}</div>
                    <Badge className="bg-white">{question.status}</Badge>
                  </div>
                  <p className="mt-3 text-sm text-slate-500">
                    {getTopicBySlug(question.topicSlug)?.name}
                  </p>
                </div>
              ))
            ) : (
              <EmptyState
                title="No research questions yet"
                description="Questions are where reading starts turning into research direction."
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
