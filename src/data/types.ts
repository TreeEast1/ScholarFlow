export type Discipline =
  | "Computer Science"
  | "Engineering"
  | "Physics"
  | "Biology"
  | "Medicine"
  | "Materials"
  | "Energy"
  | "Education"
  | "Interdisciplinary";

export type TopicMaturity = "Foundational" | "Active" | "Emerging";
export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";
export type Momentum = "Steady" | "Rising" | "Breakout";

export interface Paper {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  summary: string;
  type: "Foundational" | "Recent" | "Survey";
  takeaways: string[];
  url: string;
}

export interface Subtopic {
  id: string;
  name: string;
  description: string;
  signal: string;
}

export interface Topic {
  slug: string;
  name: string;
  discipline: Discipline;
  shortDescription: string;
  overview: string;
  whyItMatters: string;
  maturity: TopicMaturity;
  difficulty: DifficultyLevel;
  momentum: Momentum;
  timeToRamp: string;
  keywords: string[];
  coreQuestions: string[];
  beginnerSteps: string[];
  relatedDirections: string[];
  subtopics: Subtopic[];
  papers: Paper[];
}

export interface LearningPath {
  id: string;
  name: string;
  duration: string;
  objective: string;
  targetUser: string;
  outcomes: string[];
  readingMilestones: string[];
  steps: string[];
}

export interface Trend {
  id: string;
  name: string;
  discipline: Discipline;
  summary: string;
  signal: string;
  growthRate: number;
  momentumLabel: "Watch" | "Accelerating" | "Hot";
  keywords: string[];
}

export interface WorkspaceItem {
  id: string;
  type: "topic" | "paper";
  title: string;
  subtitle: string;
  status: "saved" | "reading" | "done";
}

export interface Note {
  id: string;
  title: string;
  content: string;
  topicSlug?: string;
  updatedAt: string;
}

export interface ResearchQuestion {
  id: string;
  question: string;
  topicSlug: string;
  status: "open" | "refining" | "testable";
}

export interface ReportSection {
  id: string;
  title: string;
  content: string;
}

export interface WorkspaceTask {
  id: string;
  label: string;
  done: boolean;
}

export interface WorkspaceState {
  savedTopics: string[];
  savedPapers: string[];
  notes: Note[];
  researchQuestions: ResearchQuestion[];
  tasks: WorkspaceTask[];
  readingProgress: number;
}
