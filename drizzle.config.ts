// import "dotenv/config";
// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./db/schema.ts",
//   out: "./drizzle",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// } satisfies Config;

// import { config } from "dotenv";
// import { defineConfig } from "drizzle-kit";

// config({ path: ".env.local" });

// export default defineConfig({
//   // dialect: "postgresql",
//   out: "./drizzle",
//   schema: "./db/schema.ts",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
//   verbose: true,
//   strict: true,
// });

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
});
