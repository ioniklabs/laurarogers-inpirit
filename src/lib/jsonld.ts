import { CHAPTERS, NOVEL_META } from "@/data/novelData";

export function generateBookJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": NOVEL_META.title,
    "author": {
      "@type": "Person",
      "name": NOVEL_META.author,
    },
    "description": NOVEL_META.synopsis,
    "genre": ["Sci-Fi", "Young Adult", "Dystopian", "Steampunk/Cyberpunk"],
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "Chrono-Class Publishing",
    },
    "hasPart": CHAPTERS.map((ch) => ({
      "@type": "PublicationIssue",
      "issueNumber": ch.number,
      "name": `${ch.title}: ${ch.subtitle}`,
      "description": ch.summary,
      "datePublished": ch.releaseDate,
      "url": `https://chrono-class-1964.com/chapters/${ch.slug}`,
    })),
  };
}

export function generateChapterJsonLd(slug: string) {
  const chapter = CHAPTERS.find((c) => c.slug === slug);
  if (!chapter) return null;

  return {
    "@context": "https://schema.org",
    "@type": "PublicationIssue",
    "issueNumber": chapter.number,
    "name": `${chapter.title}: ${chapter.subtitle}`,
    "headline": chapter.title,
    "description": chapter.summary,
    "datePublished": chapter.releaseDate,
    "isPartOf": {
      "@type": "Book",
      "name": NOVEL_META.title,
      "author": {
        "@type": "Person",
        "name": NOVEL_META.author,
      },
    },
    "wordCount": chapter.wordCount,
  };
}
