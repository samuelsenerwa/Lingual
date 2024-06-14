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
