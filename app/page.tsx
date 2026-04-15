import Link from 'next/link';
import { SectionLinks } from '@/components/SectionLinks';

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Pentecostal Family Church Song Book</h1>
        <p>
          This app keeps the original scan intact so the song layout, chord placement, and printed indexes are preserved exactly.
          It is designed for deployment on Vercel with no database and no server-side OCR dependency.
        </p>
        <div className="buttonRow">
          <Link href="/reader?page=10" className="button">Open song pages</Link>
          <Link href="/reader?page=1" className="ghostButton">Open alphabetical index</Link>
          <Link href="/reader?page=74" className="ghostButton">Open scripture index</Link>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Why this version preserves layout</h2>
          <p>
            The reader displays the original PDF directly in the browser. That means every chord, line break, handwritten mark,
            and page number stays where it appears in the source scan.
          </p>
        </article>
        <article className="card">
          <h2>Vercel-friendly</h2>
          <p>
            The build is simple: one static PDF in <code>public/</code>, a lightweight Next.js interface, and deep links to key sections.
          </p>
        </article>
        <article className="card">
          <h2>Expandable later</h2>
          <p>
            Once you are happy with this baseline, you can layer on song metadata, search, favorites, service lists, or projector pages.
          </p>
        </article>
      </section>

      <section className="panel">
        <h2>Sections</h2>
        <SectionLinks />
      </section>

      <section className="panel">
        <h2>What is already mapped from the uploaded PDF</h2>
        <ul className="list">
          <li>Front matter and title index at PDF pages 1 to 9.</li>
          <li>Main songbook pages begin at PDF page 10.</li>
          <li>Scripture index appears near PDF pages 74 to 77.</li>
          <li>Additional appendix-style typed pages appear after that.</li>
        </ul>
      </section>
    </main>
  );
}
