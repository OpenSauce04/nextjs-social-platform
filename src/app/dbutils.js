import pg from 'pg';

export async function dbQuery(queryString, params = null) {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES,
  });

  return db.query(queryString, params);
}
