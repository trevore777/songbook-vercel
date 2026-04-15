import Link from 'next/link';
import { sections } from '@/lib/songbook';

export function SectionLinks() {
  return (
    <div className="sectionGrid">
      {sections.map((section) => (
        <Link
          key={section.slug}
          href={`/reader?page=${section.page}`}
          className="sectionLink"
        >
          <strong>{section.title}</strong>
          <span>Open at PDF page {section.page}. {section.description}</span>
        </Link>
      ))}
    </div>
  );
}
