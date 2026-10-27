import { BlogPost } from '../data/blog';

export interface RelatedArticleResult {
  post: BlogPost;
  relevanceScore: number;
  matchReason: string;
}

const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'was',
  'were',
  'will',
  'with',
  'what',
  'when',
  'how',
  'do',
  'you',
  'need',
  'your',
  'doha',
  'qatar',
  'best',
  'guide',
]);

function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

/**
 * Recommends related articles based on category proximity, shared topic keywords,
 * and content relevance, strictly excluding the current active article.
 */
export function getRelatedArticles(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  maxCount: number = 3
): RelatedArticleResult[] {
  const currentKeywords = new Set([
    ...extractKeywords(currentPost.title),
    ...extractKeywords(currentPost.summary),
  ]);

  const candidates = allPosts.filter((p) => p.slug !== currentPost.slug);

  const scored = candidates.map((candidate) => {
    let score = 0;
    let reason = `More in ${candidate.category}`;

    // 1. Direct Category Match (highest affinity)
    if (candidate.category === currentPost.category) {
      score += 12;
      reason = `Same Category: ${candidate.category}`;
    }

    // 2. Complementary Topics (Storage <-> Furniture Care, Relocation <-> Checklists)
    if (
      (currentPost.category === 'Storage Services' && candidate.slug.includes('storage')) ||
      (currentPost.slug.includes('storage') && candidate.category === 'Storage Services')
    ) {
      score += 8;
      reason = 'Related Storage Topic';
    }

    if (
      (currentPost.category === 'Furniture Care' && candidate.slug.includes('furniture')) ||
      (currentPost.slug.includes('furniture') && candidate.category === 'Furniture Care')
    ) {
      score += 8;
      reason = 'Related Furniture & Care Topic';
    }

    if (
      (currentPost.category === 'Checklists' && candidate.category === 'Relocation Guide') ||
      (currentPost.category === 'Relocation Guide' && candidate.category === 'Checklists')
    ) {
      score += 6;
      reason = 'Related Moving & Planning';
    }

    // 3. Keyword Overlap
    const candidateKeywords = extractKeywords(`${candidate.title} ${candidate.summary}`);
    let keywordMatches = 0;
    for (const kw of candidateKeywords) {
      if (currentKeywords.has(kw)) {
        keywordMatches++;
        score += 3;
      }
    }

    if (keywordMatches >= 2 && candidate.category !== currentPost.category) {
      reason = 'Similar Moving Topic';
    }

    return {
      post: candidate,
      relevanceScore: score,
      matchReason: reason,
    };
  });

  // Sort descending by score
  scored.sort((a, b) => b.relevanceScore - a.relevanceScore);

  return scored.slice(0, maxCount);
}
