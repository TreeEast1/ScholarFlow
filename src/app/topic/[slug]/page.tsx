import { notFound } from "next/navigation";

import { TopicDetailClient } from "@/components/topic/topic-detail-client";
import { getTopicBySlug, topics } from "@/data/mock-data";

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return <TopicDetailClient topic={topic} />;
}
