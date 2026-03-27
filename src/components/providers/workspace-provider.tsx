"use client";

import {
  createContext,
  useContext,
  useMemo,
} from "react";

import { defaultWorkspaceState } from "@/data/mock-data";
import { Note, ResearchQuestion, WorkspaceState, WorkspaceTask } from "@/data/types";
import { useLocalStorage } from "@/hooks/use-local-storage";

interface WorkspaceContextValue extends WorkspaceState {
  ready: boolean;
  toggleSavedTopic: (slug: string) => void;
  toggleSavedPaper: (paperId: string) => void;
  addNote: (note: Omit<Note, "id" | "updatedAt">) => void;
  addQuestion: (question: Omit<ResearchQuestion, "id">) => void;
  toggleTask: (taskId: string) => void;
}

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

export function WorkspaceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { value, setValue, ready } = useLocalStorage<WorkspaceState>(
    "scholarflow-workspace",
    defaultWorkspaceState,
  );

  const api = useMemo<WorkspaceContextValue>(
    () => ({
      ...value,
      ready,
      toggleSavedTopic: (slug) =>
        setValue((current) => ({
          ...current,
          savedTopics: current.savedTopics.includes(slug)
            ? current.savedTopics.filter((item) => item !== slug)
            : [...current.savedTopics, slug],
        })),
      toggleSavedPaper: (paperId) =>
        setValue((current) => ({
          ...current,
          savedPapers: current.savedPapers.includes(paperId)
            ? current.savedPapers.filter((item) => item !== paperId)
            : [...current.savedPapers, paperId],
        })),
      addNote: (note) =>
        setValue((current) => ({
          ...current,
          notes: [
            {
              ...note,
              id: crypto.randomUUID(),
              updatedAt: new Date().toISOString().slice(0, 10),
            },
            ...current.notes,
          ],
        })),
      addQuestion: (question) =>
        setValue((current) => ({
          ...current,
          researchQuestions: [
            { ...question, id: crypto.randomUUID() },
            ...current.researchQuestions,
          ],
        })),
      toggleTask: (taskId) =>
        setValue((current) => ({
          ...current,
          tasks: current.tasks.map((task: WorkspaceTask) =>
            task.id === taskId ? { ...task, done: !task.done } : task,
          ),
        })),
    }),
    [ready, setValue, value],
  );

  return (
    <WorkspaceContext.Provider value={api}>{children}</WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error("useWorkspace must be used within WorkspaceProvider");
  }
  return context;
}
