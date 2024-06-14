import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

export default {
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  // driver: "pg",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  // @ts-ignore
} satisfies Config;

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

// import { defineConfig } from "drizzle-kit";
// import dotenv from "dotenv";

// dotenv.config({ path: ".env.local" });

// // @ts-ignore
// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./db/schema.ts",
//   out: "./drizzle",
//   driver: "pg",
//   dbCredentials: {
//     url: process.env.DATABASE_URL as string,
//   },
// });
