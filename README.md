This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


 ## Running drizzle scripts

add these lines in your `package.json` file
 ```

 "db:generate": "pnpm drizzle-kit generate:pg --schema db/schema.ts --out ./drizzle",
 "db:migrate": "bun ./script/migrate.ts",
 "db:studio": "pnpm drizzle-kit studio"

 ```

 Alternative for this one ` "db:migrate": "bun ./script/migrate.ts",` can be using `tsx` to run it simply by typing ` "db:migrate": "tsx ./script/migrate.ts",` the reason is node doesn't support the content that I have included in my `migrate.ts` file, technically is like we're doing a work around. For more information you can checkout drizzle documentation for advanced guide.


 ## Running them in the terminal
 ### 1. Generating migration
Make sure to run the scripts independetly
 ```

pnpm dev

pnpm db:generate

 ```

### 2. Pushing the scripts to Neon using Drizzle ORM
```
pnpm db:migrate

```
if you get the error of `pg` not installed you can simply do `npm add pg -D`


**DISCLAIMER!** If this doesn't work, kindly check my `package.json` to adjust the version of drizzle you're using.