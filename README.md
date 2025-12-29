# CV Maker

A small, client-side CV/resume builder with live preview and export-to-PDF. Supports English, French and Italian.

Features
- Multi-language UI (EN / FR / IT).
- Add multiple education, experience, projects and skill sections.
- Live preview and export to PDF (uses html2pdf via CDN).

Quick start
- Open [index.html](index.html) in your browser.
- Or serve the folder and open http://localhost:8000:

	- `python3 -m http.server 8000`
	- or `npx serve`

Files
- [index.html](index.html): main UI and structure.
- [style.css](style.css): styling and print-friendly rules.
- [script.js](script.js): form handling, preview rendering, language toggling and PDF export.

Notes
- No build step required — everything runs in the browser.
