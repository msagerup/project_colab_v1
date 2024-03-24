import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import * as schema from '../../../migrations/schema';

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('Cannot find database url, db.ts');
}

const client = postgres(process.env.DATABASE_URL!, { max: 1 });
const db = drizzle(client, { schema });
const migrateDb = async () => {
  try {
    console.log('🟡 Trying to migrate...');
    await migrate(db, { migrationsFolder: 'migrations' });
    console.log('🟢 Successfully migrated');
  } catch (error) {
    console.log('🔴 Could not migrate.');
  }
};
migrateDb();
export default db;
