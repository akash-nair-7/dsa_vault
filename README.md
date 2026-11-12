# DSA Vault

A lightweight personal tracker for LeetCode and DSA solutions. It uses Next.js App Router, MongoDB Atlas, Tailwind CSS, and CodeMirror. There is deliberately no authentication layer: it is intended as a private personal tool.

## Features

- Cloud-backed MongoDB CRUD with LeetCode URL duplicate prevention
- Problem notes, solution code, language-aware code editor, complexities, and custom topics
- Dashboard with live totals, difficulty counts, recent problems, revision list, and topic grouping
- Search, difficulty/topic/language filters, and oldest/recent sorting
- Revision marking, assessment, revised date, and random practice selection
- JSON export and import (duplicates are safely skipped)

## Local setup

1. Install Node.js 18.17 or newer.
2. Copy `.env.example` to `.env.local` and set the variables:

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/dsa-vault?retryWrites=true&w=majority
   MONGODB_DB=dsa-vault
   ```

3. Install and run:

   ```bash
   npm install
   npm run dev
   ```

   Open `http://localhost:3000`.

## MongoDB Atlas setup

1. Create a free Atlas cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. In **Database Access**, create a database user with a strong password and read/write access.
3. In **Network Access**, add your current IP. For Vercel deployment, allow `0.0.0.0/0` (Atlas still requires the database credentials) or use Atlas network controls appropriate to your plan.
4. Click **Connect → Drivers**, copy the Node.js connection string, replace its password placeholder, and use it as `MONGODB_URI`.
5. The `dsa-vault` database and `problems` collection are created automatically on first save.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import that repository in [Vercel](https://vercel.com/new); it will detect Next.js automatically.
3. In **Environment Variables**, add `MONGODB_URI` and optionally `MONGODB_DB` for Production, Preview, and Development.
4. Deploy. No build-command override is required.

Use `npm run build` locally before deployment to validate a production build.

## Data and privacy

MongoDB Atlas is the primary store; the browser does not use LocalStorage for application data. Export JSON periodically from Settings so you retain a portable backup.
