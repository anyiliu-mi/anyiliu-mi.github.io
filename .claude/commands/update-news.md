# Update Recent News

Run this command whenever you say "update my news", "update news of my website", or similar.

## What this does

1. Reads all `.txt` files in the `/news` folder
2. Runs `node scripts/update-news.mjs` which:
   - Parses dates from filenames (format: `YYYY-MM-DD-description.txt`)
   - Regenerates `src/data/news.json` sorted newest-first
   - Commits the change and pushes to GitHub
3. GitHub Actions automatically rebuilds and deploys the site (~1 min)

## Steps

```bash
cd "C:\Users\anyiliu\Documents\Claude\Projects\Anyi-Website-current"
node scripts/update-news.mjs
```

Report back:
- How many news items were found
- Whether the push succeeded
- Remind the user the site will be live at https://anyiliu-mi.github.io in ~1 minute
