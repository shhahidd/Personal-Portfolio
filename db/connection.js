const sqlite3 = require('sqlite3').verbose();
const { Pool } = require('pg');
const path = require('path');

let db;

// Helper to convert SQLite '?' placeholders to PostgreSQL '$1, $2, ...' placeholders
function convertPlaceholders(sql) {
  let index = 1;
  return sql.replace(/\?/g, () => `$${index++}`);
}

if (process.env.DATABASE_URL) {
  // Production Environment: Connect to Cloud PostgreSQL (Neon/Supabase)
  console.log('Production Environment Detected: Connecting to Cloud PostgreSQL...');
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false // Required for serverless hosting environments connecting to SSL-secured cloud DBs
    }
  });

  // Emulate sqlite3 database methods so backend API and seed scripts don't need modifications
  db = {
    all: (sql, params, callback) => {
      const pgSql = convertPlaceholders(sql);
      pool.query(pgSql, params, (err, res) => {
        callback(err, res ? res.rows : null);
      });
    },
    run: function(sql, params, callback) {
      const pgSql = convertPlaceholders(sql);
      pool.query(pgSql, params, (err, res) => {
        const context = {
          lastID: res && res.rows[0] ? res.rows[0].id : null
        };
        if (callback) {
          callback.call(context, err);
        }
      });
    },
    prepare: (sql) => {
      const pgSql = convertPlaceholders(sql);
      const runs = [];
      return {
        run: (...args) => {
          const callback = typeof args[args.length - 1] === 'function' ? args.pop() : null;
          const params = args;
          runs.push(
            pool.query(pgSql, params)
              .then(() => callback && callback(null))
              .catch((err) => callback && callback(err))
          );
        },
        finalize: (callback) => {
          Promise.all(runs)
            .then(() => callback && callback())
            .catch((err) => callback && callback(err));
        }
      };
    },
    serialize: (fn) => fn(), // PostgreSQL doesn't need serialization locks
    close: (callback) => {
      pool.end(callback);
    }
  };
} else {
  // Development Environment: Connect to local SQLite file
  const dbPath = path.resolve(__dirname, '../portfolio.db');
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Error connecting to the SQLite database:', err.message);
    } else {
      console.log('Connected to the SQLite database.');
    }
  });
}

module.exports = db;
