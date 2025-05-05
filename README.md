This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Watch : https://youtu.be/843nec-IvW0

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Context and knowledge

### nextjs vs react
Think of Next.js as the whole car built using the React engine—with a frame, wheels, and dashboard included.
✅ When to Use React (Alone)
You’re building a frontend-only SPA.

You want full control over your tooling (routing, bundling, etc.).

You’re embedding UI in an existing system (like a CMS or dashboard).

✅ When to Use Next.js
You want built-in routing and SSR/SSG.

You need SEO (SSR helps search engines see content).

You’re building a full-stack React app with both frontend and backend logic.

You want modern features like edge functions, middleware, or internationalization.

### Server-side rendering(Next.js) vs Client-side rendering(React by default)
## ⚖️ SSR vs CSR Comparison Table

| **Feature**              | **SSR (Server-Side Rendering)**                         | **CSR (Client-Side Rendering)**                          |
|--------------------------|----------------------------------------------------------|----------------------------------------------------------|
| **Initial Load Speed**   | Faster (HTML arrives ready)                             | Slower (JS must run first)                              |
| **SEO Friendly**         | ✅ Yes                                                   | ❌ No (content loads after JS)                          |
| **Interactivity**        | Slight delay after render                                | Immediate after JS loads                                |
| **Server Load**          | Higher (renders on every request)                        | Lower (client does most work)                           |
| **Caching Possibility**  | Harder (dynamic content)                                 | Easier (static assets)                                  |
| **Best for**             | Public content, SEO, blogs, e-commerce                   | Apps behind login, dashboards                           |

## 🧠 When to Use Each
🟢 Use SSR if:
You care about SEO.

You want fast time-to-content.

You’re building a public-facing site (marketing, e-commerce).

🟡 Use CSR if:
You’re building a single-page app (SPA).

SEO doesn’t matter (e.g., admin panels, dashboards).

You want to minimize server workload.