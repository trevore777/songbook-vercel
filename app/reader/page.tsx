import Link from 'next/link';
import { clampPage, getSectionForPage, TOTAL_PAGES } from '@/lib/songbook';

export default async function ReaderPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = clampPage(Number(params.page ?? '1'));
  const section = getSectionForPage(page);
  const previousPage = clampPage(page - 1);
  const nextPage = clampPage(page + 1);

  return (
    <main className="container">
      <div className="readerHeader">
        <div>
          <h1>Songbook Reader</h1>
          <div className="readerMeta">
            PDF page {page} of {TOTAL_PAGES} · Section: {section.title}
          </div>
        </div>
        <div className="readerActions">
          <Link href="/" className="ghostButton">Home</Link>
          <Link href={`/reader?page=${previousPage}`} className="ghostButton">Previous</Link>
          <Link href={`/reader?page=${nextPage}`} className="button">Next</Link>
        </div>
      </div>

      <div className="panel" style={{ marginTop: 0 }}>
        <div className="buttonRow" style={{ marginTop: 0 }}>
          <Link href="/reader?page=1" className="ghostButton">Alphabetical index</Link>
          <Link href="/reader?page=10" className="ghostButton">Songs</Link>
          <Link href="/reader?page=74" className="ghostButton">Scripture index</Link>
          <a href={`/songbook.pdf#page=${page}`} className="ghostButton" target="_blank" rel="noreferrer">
            Open PDF directly
          </a>
        </div>
      </div>

      <div className="iframeWrap">
        <iframe
          key={page}
          title={`Songbook page ${page}`}
          className="readerFrame"
          src={`/songbook.pdf#page=${page}&zoom=page-width`}
        />
      </div>
    </main>
  );
}
