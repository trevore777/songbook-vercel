export const TOTAL_PAGES = 90;

export type Section = {
  slug: string;
  title: string;
  page: number;
  description: string;
};

export const sections: Section[] = [
  {
    slug: 'welcome',
    title: 'Welcome / notes',
    page: 2,
    description: 'Introductory page explaining formatting, chords, repeats, and notation.'
  },
  {
    slug: 'alphabetical-index',
    title: 'Alphabetical index',
    page: 1,
    description: 'Index pages at the front of the book for song lookup by title.'
  },
  {
    slug: 'songs',
    title: 'Song pages',
    page: 10,
    description: 'Main songbook pages with the original chord layout preserved.'
  },
  {
    slug: 'scripture-index',
    title: 'Scripture index',
    page: 74,
    description: 'Scripture reference index near the back of the PDF.'
  },
  {
    slug: 'appendix',
    title: 'Appendix / extras',
    page: 78,
    description: 'Additional typed sheets and later inserted pages from the scan.'
  }
];

export function clampPage(value: number): number {
  if (Number.isNaN(value) || !Number.isFinite(value)) return 1;
  return Math.min(TOTAL_PAGES, Math.max(1, Math.trunc(value)));
}

export function getSectionForPage(page: number): Section {
  let current = sections[0];
  for (const section of sections) {
    if (page >= section.page) current = section;
  }
  return current;
}
