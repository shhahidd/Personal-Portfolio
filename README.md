# Shahid Patel - Full-Stack Developer Portfolio

A premium, high-fidelity developer portfolio website showcasing custom web projects. This application utilizes a full-stack architecture designed for seamless local development and production deployment on serverless platforms like **Netlify** or **Vercel**.

## 🌟 Key Features
- **Frontend**: Clean semantic HTML5, glassmorphic dark-mode CSS (deep space HSL scheme, glow effects, keyframe slide-ins), and Vanilla JS for async loading and card filtering.
- **Backend API**: Node.js and Express.js REST API providing dynamic project lists and secure message logging.
- **Database**: Relational SQL structure (SQLite3 locally for zero-config; Pool-based PostgreSQL compatibility built-in for production).
- **Deployment**: Dual-configured with `netlify.toml` redirects and `vercel.json` rewrites for simple deployment.

---

## 📂 Project Structure
```text
Portfolio/
├── public/                 # Client-side static assets
│   ├── index.html          # Webpage layout & layout sections
│   ├── style.css           # Custom glassmorphic dark stylesheet
│   └── app.js              # Fetch requests, animations & form handling
├── db/                     # Relational database logic
│   ├── connection.js       # Dynamic DB Connector (SQLite/PostgreSQL)
│   └── seed.js             # Initial schema creation and project seed
├── api/                    # Backend server entry
│   └── index.js            # Express API endpoints
├── netlify/
│   └── functions/
│       └── api.js          # serverless-http wrapper for Netlify
├── netlify.toml            # Netlify hosting configuration
├── vercel.json             # Vercel hosting configuration
├── package.json            # Node.js dependencies
└── README.md               # Documentation
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Seed the SQL Database
Creates the database schema and feeds your projects into the local SQLite database file (`portfolio.db`):
```bash
npm run seed
```

### 3. Run the Local Server
```bash
npm start
```
Open **`http://localhost:3000`** in your browser.

---

## 🚀 Serverless Deployment Setup (PostgreSQL Cloud)

Serverless hosting platforms (Netlify/Vercel) run stateless, ephemeral instances, meaning a local database file like `portfolio.db` cannot write or save changes permanently. To go live:

### 1. Provision a Postgres Database
Create a free PostgreSQL instance on [Neon.tech](https://neon.tech/) or [Supabase](https://supabase.com/) and copy the connection URI (e.g., `postgres://user:password@host/db`).

### 2. Set Env Variable
On Netlify or Vercel, set a configuration environment variable:
- Key: `DATABASE_URL`
- Value: *Your cloud PostgreSQL connection string*

Our [db/connection.js](db/connection.js) file will automatically detect the production environment variable and swap database engines from SQLite to PostgreSQL without modifying a single line of backend query code!
