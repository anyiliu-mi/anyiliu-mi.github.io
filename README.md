# Anyi Liu - Portfolio

This is a personal portfolio website built with [Astro](https://astro.build). It uses a minimal, editorial design system focused on typography and readability.

## Features

- **Astro**: Static site generation for speed.
- **Content Collections**: Projects and Writing managed via Markdown.
- **No Frameworks**: Vanilla CSS and minimal vanilla JS for lightweight footprint.
- **Responsive**: Sidebar navigation on desktop, mobile menu on small screens.
- **GitHub Pages**: Ready for deployment via GitHub Actions.

## Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321`.

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Configuration

**Important**: Before deploying, update `astro.config.mjs` with your repository name.

```javascript
export default defineConfig({
  site: 'https://<USERNAME>.github.io',
  base: '/<REPO_NAME>/', // Change this to your repo name, e.g. '/anyi-portfolio/'
  // ...
});
```
If you are deploying to `anyiliu.github.io` (a User Page), set `base: '/'`.

## Adding Content

### Projects
Add a new markdown file to `src/content/projects/`.
Frontmatter schema:
```yaml
title: "Project Name"
year: 2024
category: "Security"
summary: "Short description."
featured: true
tags: ["Tag1", "Tag2"]
links:
  demo: "https://..."
```

### Writing
Add a new markdown file to `src/content/writing/`.
Frontmatter schema:
```yaml
title: "Post Title"
date: 2024-01-01
summary: "Short summary."
tags: ["Tag1"]
```

## Deployment

This repo includes a GitHub Action at `.github/workflows/deploy.yml`.
1. Push to GitHub.
2. Go to Repo Settings > Pages.
3. Source: "GitHub Actions".
4. The action will build and deploy automatically on push to `main`.
