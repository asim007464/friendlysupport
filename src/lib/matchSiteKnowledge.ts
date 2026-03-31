import { SITE_KNOWLEDGE, type KnowledgeChunk } from "@/data/siteKnowledge";

const STOP = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "could",
  "should",
  "may",
  "might",
  "must",
  "shall",
  "can",
  "to",
  "of",
  "in",
  "for",
  "on",
  "with",
  "at",
  "by",
  "from",
  "as",
  "into",
  "through",
  "during",
  "before",
  "after",
  "above",
  "below",
  "between",
  "under",
  "again",
  "further",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "each",
  "both",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "so",
  "than",
  "too",
  "very",
  "just",
  "and",
  "but",
  "if",
  "or",
  "because",
  "until",
  "while",
  "about",
  "against",
  "between",
  "into",
  "through",
  "i",
  "me",
  "my",
  "we",
  "our",
  "you",
  "your",
  "it",
  "its",
  "they",
  "them",
  "their",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .map((t) => t.replace(/^-+|-+$/g, ""))
    .filter((t) => t.length > 1 && !STOP.has(t));
}

function scoreQuestionAgainstChunk(
  queryTokens: string[],
  chunk: KnowledgeChunk
): number {
  const haystack =
    `${chunk.keywords.join(" ")} ${chunk.answer}`.toLowerCase();
  let score = 0;
  const seen = new Set<string>();
  for (const tok of queryTokens) {
    if (seen.has(tok)) continue;
    seen.add(tok);
    if (haystack.includes(tok)) score += 1;
  }
  for (const kw of chunk.keywords) {
    const parts = kw.split(/[\s-]+/).filter((p) => p.length > 1);
    for (const p of parts) {
      if (queryTokens.includes(p)) score += 0.75;
    }
  }
  return score;
}

const GREETING_RE = /^(hi|hello|hey|good\s+(morning|afternoon|evening)|hiya)[\s!.?]*$/i;

export function matchSiteKnowledge(userMessage: string): string {
  const trimmed = userMessage.trim();
  if (!trimmed) {
    return "Ask a question about Friendly Support Limited — for example areas we cover, what we do, or how to book.";
  }

  if (GREETING_RE.test(trimmed)) {
    return "Hello. I can answer questions about Friendly Support Limited using the information on this website — try asking about our services, areas we cover, visits, or how to get in touch.";
  }

  const queryTokens = tokenize(trimmed);
  if (queryTokens.length === 0) {
    return "Could you ask that in a few words? For example: what areas do you cover, or what services do you offer?";
  }

  let best: { chunk: KnowledgeChunk; score: number } | null = null;
  let second: { chunk: KnowledgeChunk; score: number } | null = null;

  for (const chunk of SITE_KNOWLEDGE) {
    const score = scoreQuestionAgainstChunk(queryTokens, chunk);
    if (!best || score > best.score) {
      second = best;
      best = { chunk, score };
    } else if (!second || score > second.score) {
      second = { chunk, score };
    }
  }

  const threshold = 1.25;
  if (best && best.score >= threshold) {
    if (
      second &&
      second.score >= threshold * 0.85 &&
      second.chunk.id !== best.chunk.id
    ) {
      return `${best.chunk.answer}\n\n${second.chunk.answer}`;
    }
    return best.chunk.answer;
  }

  return (
    "I don’t have a specific answer for that on the site. Friendly Support Limited is happy to help in person — use Contact for a short message, or Book now for the full booking form, or browse Services and About for more detail."
  );
}
