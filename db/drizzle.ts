// import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";

// import * as schema from "../schema";

// // export const sql = neon(process.env.DATABASE_URL!);
// const sql = neon(process.env.DATABASE_URL!);
// const db = drizzle(sql, { schema });

// export default db;

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const connector = neon(process.env.DATABASE_URL!);
const db = drizzle(connector, { schema });

export default db;
