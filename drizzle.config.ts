// // import dotenv from "dotenv";
// import "dotenv/config";
// import type { Config } from "drizzle-kit";

// // dotenv.config({ path: ".env.local" });

// export default {
//   dialect: "postgresql",
//   schema: "./db/schema.ts",
//   out: "./drizzle",
//   // driver: "pg",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!,
//   },
//   // @ts-ignore
// } satisfies Config;

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
