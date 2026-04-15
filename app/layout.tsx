import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pentecostal Song Book',
  description: 'A Vercel-ready songbook that preserves the original scanned page layout and chords.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
