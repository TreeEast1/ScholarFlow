import { ReportSection, Topic } from "@/data/types";

export function buildReportSections(topic: Topic): ReportSection[] {
  const foundational = topic.papers
    .filter((paper) => paper.type === "Foundational" || paper.type === "Survey")
    .map((paper) => `- ${paper.title} (${paper.year})`)
    .join("\n");

  const recent = topic.papers
    .filter((paper) => paper.type === "Recent")
    .map((paper) => `- ${paper.title} (${paper.year})`)
    .join("\n");

  return [
    {
      id: "overview",
      title: "Topic Overview",
      content: topic.overview,
    },
    {
      id: "problems",
      title: "Key Problems",
      content: topic.coreQuestions.map((question) => `- ${question}`).join("\n"),
    },
    {
      id: "papers",
      title: "Representative Papers",
      content: `Foundational and survey reading:\n${foundational}\n\nRecent reading:\n${recent}`,
    },
    {
      id: "trends",
      title: "Trend Summary",
      content: `${topic.name} is currently ${topic.momentum.toLowerCase()} with a ${topic.maturity.toLowerCase()} maturity profile. Notable keywords include ${topic.keywords.join(", ")}.`,
    },
    {
      id: "open-questions",
      title: "Open Questions",
      content: topic.coreQuestions.map((question) => `- ${question}`).join("\n"),
    },
    {
      id: "beginner-recommendations",
      title: "Beginner Recommendations",
      content: topic.beginnerSteps.map((step) => `- ${step}`).join("\n"),
    },
  ];
}

export function sectionsToMarkdown(topic: Topic, sections: ReportSection[]) {
  return [
    `# ${topic.name} Research Brief`,
    "",
    `Discipline: ${topic.discipline}`,
    `Maturity: ${topic.maturity}`,
    `Difficulty: ${topic.difficulty}`,
    "",
    ...sections.flatMap((section) => [`## ${section.title}`, "", section.content, ""]),
  ].join("\n");
}
