# Pentecostal Song Book (Next.js + Vercel)

This project wraps the uploaded scanned PDF in a clean songbook interface while preserving the original page layout and chord placement.

## What it does

- Keeps the original scan intact
- Opens directly to the alphabetical index, song pages, or scripture index
- Runs as a lightweight Next.js app on Vercel
- Needs no database

## Local setup

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to Vercel

1. Push the folder to GitHub
2. Import the repo into Vercel
3. Framework preset: **Next.js**
4. Build command: `next build`
5. Output setting: default

## Notes

- The scanned source PDF is stored at `public/songbook.pdf`
- The page map is in `lib/songbook.ts`
- If you later want clickable per-song links, add a metadata file with song titles and page numbers.
